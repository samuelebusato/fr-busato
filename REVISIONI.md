# Revisioni — sito www.fr-busato.it

La cronologia delle modifiche, voci più recenti in cima, compreso ciò che non è ancora in
esercizio. Ciò che gira adesso, e perché, sta nella nota di progetto del Second Brain
(`06 Sviluppo/sito-fr-busato.md`). Aperto il 2026-11-18: ciò che viene prima è in `git log` e
nella nota di progetto. Non si pubblica sul sito (`deploy.yml`, `--exclude`).

## 2026-11-18 — Posizionamento: indirizzo e telefono come sulla scheda Google, canonico sulle pagine dinamiche

- **Richiesta di Fausto**: «controlla il posizionamento del sito», e poi «Sì, punti 2 e 3» sulle
  correzioni proposte; per l'indirizzo «Senza civico», per il telefono «Sì, pubblicalo».
- **Che cosa cambia per chi visita**:
  - il piè di pagina di ogni pagina dice «Via Marzabotto, 42017 Novellara (RE)» e il telefono
    329 158 6865, che si può toccare per chiamare;
  - nei Contatti della home, «Dove siamo» ha la via e un collegamento «Apri in Google Maps», e la
    card «Scrivici» diventa «Scrivici o chiamaci», col telefono sotto l'email.
- **Che cosa cambia per i motori di ricerca**:
  - i dati strutturati della home hanno via, telefono e il collegamento alla scheda Google
    (`hasMap`): adesso dicono quello che dice la scheda, che Google mostra terza fra le attività
    sulla mappa per «assistenza informatica Novellara»;
  - le pagine dei servizi hanno il titolo «… a Reggio Emilia» e l'indirizzo canonico su
    www.fr-busato.it, che nasce in `servizio.js`. Quelle dei progetti hanno lo stesso canonico e,
    come descrizione, il testo breve del progetto, al posto del piè di pagina che Google mostrava.
    Un servizio o un progetto che non esiste ha `noindex`;
  - il canonico lo crea lo script, come ammette la documentazione di Google sul JavaScript, che
    chiede che sia l'unico della pagina. Per questo `servizio.html` e `progetto.html` non ne
    hanno uno loro, e il README lo dice.
- **Migrazioni**: nessuna, è un sito statico.
- **Prove**, in locale (`py -m http.server 8765`):
  - tre servizi, due progetti e i due id inesistenti: titolo, descrizione, un solo canonico e
    `noindex` dove serve;
  - i vecchi indirizzi `servizio.html?id=cyberse` e `progetto.html?id=frgest` portano ancora alle
    schede, col loro canonico;
  - il JSON-LD si legge; nessuno sfondamento orizzontale a 375 e a 1024 px.
- **In esercizio**: vedi la nota di progetto. Si verifica che www.fr-busato.it serva il piè di
  pagina con Via Marzabotto e `servizio.js` con `a Reggio Emilia`.
- **Resta fuori**:
  - la «Ultimo aggiornamento» di `privacy.html` non cambia: è cambiato solo il piè di pagina, non
    l'informativa;
  - la brochure dice ancora che il sito non pubblica il telefono;
  - gli orari non sono nei dati strutturati, perché andrebbero tenuti uguali a quelli della
    scheda a ogni cambio;
  - la scheda Google mostra «Sei il proprietario di quest'attività?», quindi forse non è
    rivendicata;
  - la scheda di Cyberse non è nell'indice di Google: si guarda da Search Console.

## 2026-11-18 — Il deploy toglie dal sito i file che esclude

- **Che cosa cambia**: tolto `--dryrun`. A ogni deploy, dopo il sync, il bucket perde ciò che
  corrisponde a `FUORI`; quando non c'è niente, non succede niente. Da chi visita: `README.md` e
  `docs/deploy-aws.md` passano da 200 a 404, il resto del sito è com'era. Il README dice dove si
  aggiunge un file da tenere fuori.
- **Prova a vuoto** (run 44290659839, commit `ab07212`): due sole righe `(dryrun) delete:`,
  `README.md` e `docs/deploy-aws.md`; 61 file caricati come prima.
- **Migrazioni**: nessuna.
- **In esercizio**: vedi la nota di progetto; si verifica dal log (due `delete:`) e dal sito (i
  due file 404, le pagine 200).

## 2026-11-18 — Il deploy toglie dal sito i file che esclude (prova a vuoto)

- **Richiesta di Fausto**: «Sì, procedi», sulla proposta di togliere dal sito il vecchio
  `README.md`, con un primo giro a vuoto.
- **Che cosa cambia**: in `deploy.yml` l'elenco di ciò che non va sul sito è uno solo (`FUORI`) e
  diventa sia le esclusioni del sync sia una cancellazione mirata dopo il sync. In questo commit la
  cancellazione è a vuoto (`--dryrun`): il log elenca che cosa toglierebbe, e non toglie niente.
  Per chi visita non cambia niente.
- **Perché**: le esclusioni non cancellano ciò che era già sul bucket. `README.md` (versione
  `a8c3bf4`) e `docs/deploy-aws.md`, caricati il 2026-07-30, rispondevano ancora 200.
- **Migrazioni**: nessuna.
- **Prove**: in locale, il passo con un `aws` finto che stampa gli argomenti. Senza `set -f` la
  shell espandeva `docs/*` sui file del checkout; con `set -f` gli argomenti sono quelli voluti.
- **Atteso nel log**: due sole righe `(dryrun) delete:`, `README.md` e `docs/deploy-aws.md`. Se è
  così, il commit dopo toglie `--dryrun`.

## 2026-11-18 — La brochure aziendale in PDF

- **Richiesta di Fausto**: «prepara una brochure aziendale in formato pdf», e poi «committa,
  fuori dal sito».
- **Che cosa cambia**: nella cartella `brochure/` c'è la brochure dell'azienda, 8 pagine A4
  (copertina, l'azienda, i servizi, lo sviluppo software e il metodo, Cyberse, frGest,
  certificazioni e partner, contatti), con il sorgente `brochure.html` e lo script `genera.py` che
  la rigenera con Chrome (`py -I brochure/genera.py`). I testi vengono dal sito, con le sue
  regole: marchi dei partner solo in testo, ICMQ col campo, il numero e la persona, i due corsi
  come corsi, Cyberse e frGest solo con ciò che è in esercizio.
- **Per chi visita il sito non cambia niente**: `brochure/` e questo file sono esclusi dal sync
  su S3. La brochure si distribuisce a mano.
- **Migrazioni**: nessuna, è un sito statico.
- **Prove**: il PDF rigenerato ha 8 pagine A4 (209,9 × 297 mm), i caratteri incorporati e il
  testo estraibile; ogni pagina controllata sull'anteprima, nessun contenuto oltre il piè.
- **In esercizio**: vedi la nota di progetto; si verifica che www.fr-busato.it **non** serva
  `brochure/` né `REVISIONI.md`, e che la home sia quella di prima.
- **Resta fuori**: i loghi e i badge dei partner (Adobe e Acronis approvano ogni pubblicazione;
  senza il logo Acronis non regge quello di Microsoft); il numero di telefono, che il sito non
  pubblica. Il repository è pubblico e GitHub Pages è ancora attivo: la brochure resta
  scaricabile da GitHub, come il resto del repository.
