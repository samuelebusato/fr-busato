# Deploy su AWS — S3 + CloudFront (account dedicato)

Guida per pubblicare questo sito statico su un **account AWS separato** da quello
usato per HeleoX. Nessun server: bucket S3 privato come origin, CloudFront come
CDN/HTTPS davanti.

> ⚠️ Il dominio `fr-busato.it` gestisce anche la **posta elettronica**
> (fausto@fr-busato.it): qualunque intervento sul DNS deve preservare i record
> MX/SPF/DKIM esistenti. Vedi §6.

## 1. Nuovo account AWS e messa in sicurezza

1. [aws.amazon.com](https://aws.amazon.com) → *Create an AWS Account*, con
   un'**email diversa** dall'account HeleoX (es. `aws@fr-busato.it`).
   La carta di pagamento può essere la stessa.
2. **MFA sul root user** subito (IAM → Security credentials → Assign MFA device).
3. Utente amministratore per il lavoro quotidiano: IAM → Users → Create user
   (`admin-fausto`), policy `AdministratorAccess`, MFA attiva. Il root non si usa più.
4. Billing → **Budgets** → budget mensile (es. 5 €) con alert email.

## 2. Credenziali separate in CLI

Per non mischiare mai i due account sulla stessa macchina, profilo con nome:

```bash
aws configure --profile frbusato
```

Ogni comando per questo sito porta `--profile frbusato`; senza profilo si resta
sull'account di default (HeleoX).

## 3. Bucket S3 (privato)

1. S3 → *Create bucket* — nome es. `fr-busato-sito` (con CloudFront+OAC il nome
   non deve coincidere col dominio). Regione: `eu-central-1` o `eu-west-1`
   (Milano `eu-south-1` è opt-in: va prima abilitata nelle impostazioni account).
2. **Block all public access: ATTIVO** (bucket privato; leggerà solo CloudFront).
   Non attivare "Static website hosting".
3. Upload del **contenuto** della cartella del sito (index.html alla radice del
   bucket), `.git` escluso. Da CLI:

   ```bash
   aws s3 sync . s3://fr-busato-sito --delete --exclude ".git/*" --profile frbusato
   ```

## 4. Certificato ACM — in us-east-1

1. Certificate Manager **nella regione `us-east-1` (N. Virginia)** — CloudFront
   accetta solo certificati creati lì.
2. Request public certificate per `fr-busato.it` **e** `www.fr-busato.it`,
   validazione **DNS**.
3. Creare i due CNAME di validazione nel pannello DNS attuale del dominio →
   stato "Issued" in pochi minuti.

## 5. Distribuzione CloudFront

- **Origin domain**: il bucket (endpoint REST `…s3.eu-central-1.amazonaws.com`,
  **non** l'endpoint website).
- **Origin access**: *Origin access control settings (recommended)* → Create OAC.
  Dopo la creazione, banner → **Copy policy** → incollare in S3 → Permissions →
  Bucket policy (autorizza solo CloudFront a leggere il bucket).
- **Viewer protocol policy**: Redirect HTTP to HTTPS.
- **Compress objects automatically**: sì. Cache policy: CachingOptimized.
- **Alternate domain names**: `fr-busato.it`, `www.fr-busato.it` +
  **Custom SSL certificate** (quello del §4).
- **Default root object**: `index.html`.
- **Price class**: North America and Europe.
- Consigliato — **Response headers policy: SecurityHeadersPolicy** (managed):
  HSTS, X-Content-Type-Options, X-Frame-Options ecc.

Il sito usa link espliciti `.html` e query string: nessuna rewrite necessaria.

### Bucket policy completa (OAC + 404 veri)

Da incollare in S3 → bucket → Permissions → Bucket policy, **dopo** aver creato
la distribuzione. Sostituire: nome bucket, Account ID (12 cifre, menu in alto a
destra) e ID distribuzione (console CloudFront) — in **entrambe** le statement.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontReadObjects",
      "Effect": "Allow",
      "Principal": { "Service": "cloudfront.amazonaws.com" },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::fr-busato-sito/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::123456789012:distribution/E2ABCDEF123456"
        }
      }
    },
    {
      "Sid": "AllowCloudFrontListBucketFor404",
      "Effect": "Allow",
      "Principal": { "Service": "cloudfront.amazonaws.com" },
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::fr-busato-sito",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::123456789012:distribution/E2ABCDEF123456"
        }
      }
    }
  ]
}
```

Note di sicurezza:
- il Principal è il **servizio** CloudFront: è la Condition su `AWS:SourceArn`
  a limitare l'accesso alla sola distribuzione indicata;
- `s3:GetObject` va sugli **oggetti** (`…/*`), `s3:ListBucket` sul **bucket**
  (senza `/*`): resource invertite = policy non funzionante;
- la statement `ListBucket` trasforma i 403 sugli URL inesistenti in 404 veri,
  senza esporre alcun listing pubblico;
- "Block public access" resta attivo: nessun principal pubblico in questa policy.

Verifica con l'URL `dxxxxxxx.cloudfront.net` prima di toccare il DNS.

## 6. DNS

**Opzione A — Route 53 (consigliata):**
1. Hosted zone `fr-busato.it` (0,50 $/mese).
2. ⚠️ Ricopiare nella zona **tutti i record esistenti (MX, SPF/DKIM, ecc.)**
   prima di cambiare i nameserver, o la posta smette di funzionare.
3. Due record **A – Alias → CloudFront distribution**: apex e `www`.
4. Dal registrar: nameserver → i 4 di Route 53 (il dominio resta registrato lì).

**Opzione B — DNS attuale:**
1. CNAME `www` → `dxxxxxxx.cloudfront.net`.
2. L'apex non può essere CNAME: redirect del registrar apex → `https://www.…`
   oppure record ALIAS/ANAME se supportato. Email intatte.

## 7. Aggiornamenti e cache

CloudFront cachea gli asset: dopo ogni modifica servono sync + invalidation
(stessa classe di problema del CSS in cache visto su heleox.it):

```bash
aws s3 sync . s3://fr-busato-sito --delete --exclude ".git/*" --profile frbusato
aws cloudfront create-invalidation --distribution-id XXXXXXXX --paths "/*" --profile frbusato
```

`/*` conta come 1 percorso (1.000 gratuiti/mese). Evoluzione futura: GitHub
Actions che fa sync+invalidation a ogni push su `main`.

## 8. Deploy automatico da GitHub (OIDC, senza access key)

Il workflow [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml)
fa `s3 sync` + invalidation a ogni push su `main`. GitHub si autentica ad AWS
via **OIDC** assumendo un ruolo IAM: nessuna access key salvata su GitHub.

Setup una tantum lato AWS:

1. **Identity provider** — IAM → Identity providers → Add provider →
   *OpenID Connect* → Provider URL `https://token.actions.githubusercontent.com`,
   Audience `sts.amazonaws.com`.
2. **Ruolo** — IAM → Roles → Create role → *Web identity* → provider appena
   creato, audience `sts.amazonaws.com`, GitHub organization `samuelebusato`,
   repository `fr-busato`, branch `main`. Nome es. `github-deploy-fr-busato`.
   La trust policy deve contenere:

   ```json
   "Condition": {
     "StringEquals": {
       "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
       "token.actions.githubusercontent.com:sub": "repo:samuelebusato@163120697/fr-busato@1315929854:ref:refs/heads/main"
     }
   }
   ```

   > ⚠️ **Formato del `sub`**: questo account GitHub emette il sub con gli **ID
   > numerici immutabili** (`owner@ID/repo@ID`), non il formato classico
   > `repo:owner/repo:...` riportato da molte guide. Con il formato classico
   > STS risponde "Not authorized to perform sts:AssumeRoleWithWebIdentity"
   > anche se tutto il resto è corretto. In caso di dubbi, il valore reale si
   > ricava facendo stampare i claim del token con `core.getIDToken()` in un
   > passo `actions/github-script`. Il vincolo sugli ID è anche più robusto:
   > sopravvive alle rinomine e impedisce il riuso del nome da parte di terzi.

3. **Permessi del ruolo** (inline policy, minimo indispensabile — sostituire
   bucket, Account ID e Distribution ID):

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "ListaBucket",
         "Effect": "Allow",
         "Action": ["s3:ListBucket", "s3:GetBucketLocation"],
         "Resource": "arn:aws:s3:::fr-busato-sito"
       },
       {
         "Sid": "ScritturaOggetti",
         "Effect": "Allow",
         "Action": ["s3:PutObject", "s3:DeleteObject"],
         "Resource": "arn:aws:s3:::fr-busato-sito/*"
       },
       {
         "Sid": "InvalidazioneCloudFront",
         "Effect": "Allow",
         "Action": "cloudfront:CreateInvalidation",
         "Resource": "arn:aws:cloudfront::123456789012:distribution/E2ABCDEF123456"
       }
     ]
   }
   ```

4. **Secret su GitHub** — repo → Settings → Secrets and variables → Actions →
   *New repository secret*, tre voci:
   - `AWS_ROLE_ARN` → ARN del ruolo (IAM → Roles → il ruolo → in alto)
   - `S3_BUCKET` → `fr-busato-sito`
   - `CLOUDFRONT_DISTRIBUTION_ID` → ID della distribuzione

Da quel momento ogni push su `main` pubblica da solo (tab **Actions** per lo
stato). Finché i secret non esistono, il run fallisce al passo credenziali:
è atteso. Il workflow esclude `docs/`, `README.md`, `.git/` e `.github/`.

## Costi

ACM gratuito · CloudFront: 1 TB/mese sempre gratuito · S3: centesimi ·
Route 53: 0,50 $/mese (solo opzione A) · GitHub Actions: gratuito per repo
pubbliche. Totale realistico: **< 1 €/mese**.
