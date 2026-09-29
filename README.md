# F.R. di Busato Fausto — sito web

Sito statico (HTML + CSS + JavaScript, senza framework né passaggi di build) di
**F.R. di Busato Fausto** — l'informatica al tuo servizio. In esercizio su
**https://www.fr-busato.it**.

Tema chiaro con accento blu, sfondo animato a costellazione di nodi, terminale animato
nella hero, comparse allo scroll. Pagine di servizio e di progetto generate da file di dati.
Completamente responsive; le animazioni si disattivano per chi ha attivo
`prefers-reduced-motion`.

## Struttura

```
├── index.html               → home
├── sviluppo-software.html   → griglia dei progetti con filtri per anno
├── progetto.html            → dettaglio di un progetto (dinamica, ?id=...)
├── servizio.html            → pagina di un servizio (dinamica, ?id=...)
├── blog.html                → annunci e novità
├── privacy.html             → informativa privacy (GDPR)
├── cookie-policy.html       → cookie policy (Linee guida Garante)
├── robots.txt, sitemap.xml
├── assets/
│   ├── css/style.css        → tutti gli stili, compresi i @font-face
│   ├── fonts/               → Sora, Instrument Sans, JetBrains Mono (woff2 + OFL.txt)
│   ├── data/
│   │   ├── annunci.json     → ★ annunci del blog
│   │   └── recensioni.json  → ★ recensioni pubblicate
│   ├── js/
│   │   ├── progetti.js      → ★ dati dei progetti
│   │   ├── servizi-dati.js  → ★ dati dei servizi e delle certificazioni
│   │   ├── main.js          → sfondo, animazioni, menu, avviso cookie (tutte le pagine)
│   │   ├── portfolio.js     → griglia progetti, filtri, progetti in evidenza in home
│   │   ├── progetto.js      → pagina di dettaglio progetto
│   │   ├── motivi.js        → decorazioni animate, una per progetto
│   │   ├── servizio.js      → pagina servizio
│   │   ├── certificazioni.js→ sezione certificazioni
│   │   ├── blog.js          → annunci (home e blog)
│   │   └── recensioni.js    → recensioni e modulo "lascia una recensione"
│   └── img/
│       └── progetti/image_<id>/ → immagini delle pagine progetto
├── docs/deploy-aws.md       → come è configurato il rilascio su AWS
└── .github/workflows/deploy.yml
```

I file segnati con ★ sono quelli da modificare per cambiare i contenuti: il resto si
aggiorna da solo.

## Come si aggiornano i contenuti

| Cosa | Dove | Note |
|---|---|---|
| Progetti | `assets/js/progetti.js`, array `PROGETTI` | I campi sono descritti in testa al file. I **primi 3** dell'array compaiono anche in home. |
| Immagini di un progetto | `assets/img/progetti/image_<id>/` | File `1`, `2`, `3` (webp, jpg, jpeg o png): l'immagine N accompagna la riga N della pagina. Senza immagini si vede un segnaposto. |
| Servizi | `assets/js/servizi-dati.js`, array `SERVIZI` | Un servizio nuovo va aggiunto anche a `sitemap.xml`. Il campo opzionale `azioni` sostituisce i pulsanti in testa alla pagina. |
| Cyberse | voce `cyberse` di `SERVIZI` + riquadro `.richiamo` nella sezione Servizi di `index.html` | È un servizio, non più un progetto: `progetto.html?id=cyberse` rimanda a `servizio.html?id=cyberse`. Il bottone «Accedi a MSP» nel menu di ogni pagina, dopo «Contatti» e con lo stesso stile, porta a `https://msp.fr-busato.it/accesso`. |
| Certificazioni | `assets/js/servizi-dati.js`, array `CERTIFICAZIONI` | Con l'array vuoto la sezione resta nascosta. |
| Annunci del blog | `assets/data/annunci.json` | I campi sono descritti in testa a `blog.js`. |
| Recensioni | `assets/data/recensioni.json` | Si pubblicano solo quelle approvate. Il modulo sul sito non salva nulla: apre un'email precompilata verso fausto@fr-busato.it. |

Esempio di progetto:

```js
{
  id: "nome-progetto",            // nell'URL: progetto.html?id=nome-progetto
  nome: "Nome Progetto",
  anno: 2026,                     // compare da solo nel filtro per anno
  categoria: "Gestionale",
  colore: "#4d8dff",              // colore della card e accento della pagina di dettaglio
  dimensione: "md",               // "xl" | "lg" | "md" (dimensione nella griglia)
  breve: "Descrizione breve mostrata sulla card.",
  contesto: "Paragrafo 'Il contesto'.",
  soluzione: "Paragrafo 'La soluzione'.",
  funzionalita: ["Funzione 1", "Funzione 2"],
  tecnologie: ["VB.NET", "SQL"],
  immagini: []                    // anteprima sulla card, se il progetto non ha un motivo animato
}
```

L'anteprima sulla card è, in quest'ordine: il motivo animato del progetto (se `motivi.js`
ne ha uno per quell'`id`), altrimenti la prima voce di `immagini`, altrimenti un
segnaposto.

## Vedere il sito in locale

Annunci e recensioni si caricano con `fetch` dai file JSON, che il browser non permette
aprendo le pagine direttamente dal disco (`file://`). Serve un piccolo server locale
dalla cartella del progetto:

```bash
py -m http.server 8765
```

e poi http://localhost:8765.

## Pubblicazione

Ogni **push su `main`** pubblica da solo: il workflow
`.github/workflows/deploy.yml` copia i file sul bucket S3 e svuota la cache di
CloudFront. L'autenticazione verso AWS usa OIDC, quindi su GitHub non ci sono chiavi.
Configurazione completa in [`docs/deploy-aws.md`](docs/deploy-aws.md).

Che il workflow sia verde vuol dire che i file sono stati caricati: la modifica si
conferma aprendo **www.fr-busato.it** e controllando che ci sia.

Sulla repo è ancora attivo anche **GitHub Pages**, che pubblica una seconda copia su
`https://samuelebusato.github.io/fr-busato/`. Il sito ufficiale è quello su
www.fr-busato.it.

## Conformità

- **Nessuna risorsa di terze parti.** Caratteri, immagini e script sono serviti dal sito
  stesso. I caratteri stanno in `assets/fonts/`: sono gli stessi file variabili di Google
  Fonts, divisi in latin e latin-ext, con licenza SIL OFL 1.1 (`assets/fonts/OFL.txt`).
  Chi aggiunge una risorsa esterna (font, mappa, video, script di analisi) deve
  aggiornare privacy e cookie policy.
- **Cookie**: il sito non usa cookie di profilazione né strumenti di analisi. L'unico
  elemento tecnico è la voce di local storage `frb-avviso-cookie`, che ricorda la
  chiusura del banner e non richiede consenso (Linee guida del Garante del 10/06/2021).
- **Privacy policy** ai sensi degli artt. 13-14 GDPR e del D.Lgs. 196/2003 (come modificato
  dal D.Lgs. 101/2018). A ogni modifica di `privacy.html` o `cookie-policy.html` va
  aggiornata la riga "Ultimo aggiornamento".
- **Footer** con ragione sociale, sede e P.IVA su ogni pagina (art. 35 D.P.R. 633/72 e
  art. 2250 c.c.).
- **Accessibilità**: HTML semantico, skip-link, focus visibile, `aria-label`, contrasti
  adeguati, supporto a `prefers-reduced-motion`.
