# Revisioni — sito www.fr-busato.it

La cronologia delle modifiche, voci più recenti in cima, compreso ciò che non è ancora in
esercizio. Ciò che gira adesso, e perché, sta nella nota di progetto del Second Brain
(`06 Sviluppo/sito-fr-busato.md`). Aperto il 2026-11-18: ciò che viene prima è in `git log` e
nella nota di progetto. Non si pubblica sul sito (`deploy.yml`, `--exclude`).

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
