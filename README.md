# F.R. di Busato Fausto — Landing page

Sito statico (HTML + CSS + JavaScript, senza framework) per **F.R. di Busato Fausto** — l'informatica al tuo servizio.

Tema scuro sui toni del nero e del blu, sfondo animato a "costellazione", animazioni allo scroll, sezione **Sviluppo Software** con griglia di progetti colorati e pagine di dettaglio dinamiche. Completamente responsive (PC, tablet, mobile).

## Struttura

```
├── index.html               → landing page principale
├── sviluppo-software.html   → griglia dei progetti con filtri per anno
├── progetto.html            → pagina di dettaglio (dinamica, ?id=...)
├── privacy.html             → informativa privacy (GDPR)
├── cookie-policy.html       → cookie policy (Linee guida Garante)
└── assets/
    ├── css/style.css        → tutti gli stili
    ├── js/main.js           → sfondo animato, animazioni, menu, banner
    ├── js/progetti.js       → ★ DATI DEI PROGETTI (da modificare)
    ├── js/portfolio.js      → rendering griglia e filtri
    ├── js/progetto.js       → rendering pagina di dettaglio
    └── img/progetti/        → cartella per le schermate dei software
```

## Come aggiungere un progetto

Apri `assets/js/progetti.js` e aggiungi un oggetto all'array `PROGETTI`:

```js
{
  id: "nome-progetto",            // usato nell'URL: progetto.html?id=nome-progetto
  nome: "Nome Progetto",
  anno: 2026,                     // compare nel filtro per anno automaticamente
  categoria: "Gestionale",
  colore: "#4d8dff",              // colore della card E della pagina di dettaglio
  dimensione: "md",               // "xl" | "lg" | "md" (dimensione nella griglia)
  breve: "Descrizione breve mostrata sulla card.",
  contesto: "Paragrafo 'Il contesto'.",
  soluzione: "Paragrafo 'La soluzione'.",
  funzionalita: ["Funzione 1", "Funzione 2"],
  tecnologie: ["VB.NET", "SQL"],
  immagini: ["assets/img/progetti/nome-1.png"]  // opzionale
}
```

Non serve toccare altro: griglia, filtri per anno e pagina di dettaglio si aggiornano da soli. La prima immagine di `immagini` viene usata anche come anteprima sulla card; senza immagini viene mostrata una finestra stilizzata segnaposto.

I 5 progetti attualmente presenti sono **esempi realistici basati sui servizi descritti sul sito attuale** (frGest è reale): modificali o sostituiscili liberamente.

## Pubblicazione su GitHub

Dalla cartella del progetto:

```bash
git init
git add .
git commit -m "Landing page F.R. di Busato"
git branch -M main
git remote add origin https://github.com/samuelebusato/fr-busato.git
git push -u origin main
```

Per pubblicare con **GitHub Pages**: Settings → Pages → Source: `main` / root. Il sito sarà raggiungibile su `https://samuelebusato.github.io/fr-busato/`. Nessun passaggio di build necessario.

## Cose da verificare prima di andare online

1. **Email di contatto**: nelle pagine è indicata `info@fr-busato.it` come segnaposto — sostituirla con l'indirizzo reale (cercare `info@fr-busato.it` in `index.html`).
2. **Google Fonts e GDPR**: i font (Sora, Instrument Sans, JetBrains Mono) sono caricati dai server Google; la cosa è dichiarata in privacy e cookie policy. Per la massima conformità (sentenza LG München 2022) è consigliabile **ospitare i font in locale**: scaricarli (es. con [google-webfonts-helper](https://gwfh.mranftl.com/fonts)), metterli in `assets/fonts/`, sostituire il `<link>` a Google Fonts con regole `@font-face` in `style.css` e rimuovere i riferimenti a Google dalle policy.
3. **Recapito telefonico**: se si desidera pubblicarlo, aggiungerlo nella sezione Contatti.
4. **Date delle policy**: aggiornare "Ultimo aggiornamento" in `privacy.html` e `cookie-policy.html` a ogni modifica.

## Note di conformità

- Footer con ragione sociale, sede e **P.IVA** su ogni pagina (obbligo ex art. 35 D.P.R. 633/72 e art. 2250 c.c.).
- **Privacy policy** ai sensi degli artt. 13-14 GDPR e D.Lgs. 196/2003 (come mod. dal D.Lgs. 101/2018).
- **Cookie policy** secondo le Linee guida del Garante del 10/06/2021: il sito **non usa cookie di profilazione né analytics**; l'unico elemento tecnico è la voce di local storage che ricorda la chiusura del banner (non richiede consenso).
- Banner informativo non bloccante, coerente con l'assenza di tracciamento.
- Accessibilità: HTML semantico, skip-link, focus visibile, `aria-label`, contrasti adeguati e pieno supporto a `prefers-reduced-motion` (le animazioni si disattivano per chi lo richiede).
