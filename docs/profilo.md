# Il profilo di fr-busato

> Il profilo del progetto ([framework](../../../Rule/regole-sviluppo-sicuro.md) §0.2, PF1), **fonte unica dei due livelli**: i cinque assi, le cose che il progetto ha, gli ambienti che usa, il comando del rilascio, le regole tolte. Da qui, dal brain, `node Code/genera-regole-progetto.mjs Projects/fr-busato` genera [`regole-progetto.md`](regole-progetto.md), le regole del progetto. Il deploy esclude `docs/`, quindi questi file non vanno sul sito.
>
> **I cinque assi li ha scelti l'agente della sessione principale, su delega di Samuele, il 2026-11-14.** Le cose, gli ambienti e il comando del rilascio li ha letti dalle fonti la sessione del rulebook: ⬜ **da confermare da Samuele**.

```profilo
progetto: fr-busato
dati: basso
sicurezza: basso
dove: A
per: fr-busato
rigore: prodotto
cose: cloud, usato-da-altri, dati-personali
ambienti: produzione
rilascio: automatico a ogni push su `main`, col workflow «Deploy su S3 + CloudFront» e il ruolo OIDC (D9) — .github/workflows/deploy.yml, docs/deploy-aws.md
toglie: DC3 — deroga del 2026-08-04 (§1.0 del framework): il sito non ha il `History.md`
toglie: DC4 — deroga del 2026-08-04 (§1.0 del framework): il sito non ha l'`Architecture.md`
toglie: DC5 — deroga del 2026-08-04 (§1.0 del framework): il sito non ha il `threat-model.md`
toglie: DC7 — deroga del 2026-08-04 (§1.0 del framework): i tre documenti che si aggiornano a ogni sessione non ci sono
toglie: TM1 — deroga del 2026-08-04 (§1.0 del framework): il metodo del threat model vale per un `threat-model.md` che il sito non ha
toglie: CF2 — deroga del 2026-08-04 (§1.0 del framework): le righe del threat model del confine nuovo vanno in un `threat-model.md` che il sito non ha
```

## Perché questi valori

| Asse | Valore | Chi, quando e perché |
|---|---|---|
| Dati | basso | L'agente della sessione principale, su delega di Samuele, il 2026-11-14: un sito statico, che non tiene dati suoi |
| Sicurezza | basso | Lo stesso: nulla da rubare; il rischio è l'alterazione del sito, coperta dal ruolo OIDC del deploy. Le intestazioni di sicurezza (HSTS, `X-Content-Type-Options`, `X-Frame-Options`) **non ci sono**: verificato sulle risposte del sito il 2026-11-18, quindi la verifica di SI3 («la risposta ha TLS e le intestazioni») oggi non passa. La `SecurityHeadersPolicy` di CloudFront, in `docs/deploy-aws.md`, è solo consigliata e si attiva dalla console AWS |
| Dove gira | A | Un sito statico, su S3 e CloudFront |
| Per chi | fr-busato | È il sito di F.R. di Busato Fausto |
| Rigore | prodotto | È online e pubblico |

**La deroga** (§1.0 del framework, 2026-08-04): il sito non ha i tre documenti, `History.md`, `Architecture.md` e `threat-model.md`. Il profilo toglie le regole che li descrivono o li presuppongono (DC3, DC4, DC5, DC7, TM1, CF2); dove le regole del ciclo nominano i tre documenti, quella parte si salta. **Il piano di manutenzione invece vale** (Samuele, 2026-11-14: MN15, corto nel profilo A, MN16). ⬜ Gli altri documenti del pavimento (la classificazione, il disaster recovery, il `MANUAL_SETUP.md`) la deroga non li nomina: li decide Samuele.

**Le cose che ha**:
- `cloud`: S3 e CloudFront, con un ruolo OIDC per il deploy;
- `usato-da-altri`: è il sito pubblico dell'azienda;
- `dati-personali` (⬜ da confermare): pubblica le recensioni col nome di chi le scrive (`assets/data/recensioni.json`), che arrivano per mail.

**Gli ambienti**: solo la produzione, il sito online.
