/* ============================================================
   ELENCO PROGETTI — Sviluppo Software
   ------------------------------------------------------------
   Per aggiungere un nuovo progetto è sufficiente aggiungere un
   oggetto a questo array. Campi disponibili:

   id          → identificativo univoco usato nell'URL (senza spazi)
   nome        → titolo del progetto
   anno        → anno di realizzazione (usato anche per i filtri)
   categoria   → tipologia (es. "Gestionale", "Automazione")
   colore      → colore della label/card, in esadecimale.
                 Nella pagina di dettaglio diventa il colore
                 secondario al posto del blu.
   dimensione  → dimensione della card nella griglia:
                 "xl" (grande, 2 colonne × 2 righe)
                 "lg" (larga, 2 colonne)
                 "md" (standard, 1 colonna)
   breve       → descrizione breve mostrata sulla card
   contesto    → paragrafo "Il contesto" nella pagina di dettaglio
   soluzione   → paragrafo "La soluzione" nella pagina di dettaglio
   funzionalita→ elenco puntato delle funzionalità principali
   tecnologie  → elenco delle tecnologie utilizzate
   immagini    → (opzionale) array di percorsi immagine, es.
                 ["assets/img/progetti/frgest-1.png"]
                 La prima immagine viene usata anche come
                 anteprima sulla card. Se assente, viene
                 mostrata una finestra stilizzata.
   ============================================================ */

const PROGETTI = [
  {
    id: "frgest",
    nome: "frGest",
    anno: 2025,
    categoria: "Mini gestionale",
    colore: "#2563eb",
    dimensione: "xl",
    breve: "Il mini gestionale sviluppato in VB.NET e rodato in anni di utilizzo quotidiano nelle piccole aziende: bolle, fatture, magazzino e molto altro, con la flessibilità che i prodotti commerciali non offrono.",
    contesto: "In tanti anni di esperienza si è presentata spesso la necessità di un mini gestionale con caratteristiche particolari: molte piccole aziende, reggiane e non, non trovavano nei prodotti commerciali ciò che cercavano per funzionalità o immediatezza d'uso.",
    soluzione: "frGest è nato per rispondere a questa esigenza. Raccogliendo i diversi modi di lavorare e le diverse esigenze delle aziende, ne è uscito un software flessibile e semplice, con alle spalle molti anni di rodaggio sul campo.",
    funzionalita: [
      "Gestione di bolle, fatture e documenti di trasporto",
      "Magazzino, ordini e scadenziari",
      "Anagrafiche clienti, fornitori e agenti",
      "Personalizzabile in base al flusso di lavoro dell'azienda"
    ],
    tecnologie: ["VB.NET", "Windows", "SQL"],
    immagini: []
  },
  {
    id: "automazione-autocad",
    nome: "Automazione AutoCAD",
    anno: 2024,
    categoria: "Automazione CAD",
    colore: "#f0a437",
    dimensione: "md",
    breve: "Personalizzazioni di AutoCAD in Autolisp per velocizzare il disegno tecnico e collegare i dati di progetto alla produzione.",
    contesto: "Il disegno tecnico ripetitivo sottrae tempo prezioso alla progettazione: molte operazioni in AutoCAD seguono schemi ricorrenti che possono essere automatizzati.",
    soluzione: "Grazie a una buona conoscenza del linguaggio Autolisp e della personalizzazione di AutoCAD, abbiamo realizzato comandi e routine su misura che riducono i tempi di disegno e gli errori manuali.",
    funzionalita: [
      "Comandi personalizzati per operazioni ricorrenti",
      "Generazione automatica di elementi di disegno",
      "Collegamento tra dati archiviati e disegno tecnico",
      "Riduzione dei tempi e degli errori manuali"
    ],
    tecnologie: ["AutoCAD", "Autolisp"],
    immagini: []
  },
  {
    id: "elaborazione-dati",
    nome: "Elaborazione Dati",
    anno: 2024,
    categoria: "Trattamento dati",
    colore: "#2fd0b5",
    dimensione: "md",
    breve: "Strumenti per importare, trasformare e trattare diverse tipologie di dati, dai file dei fornitori ai flussi verso i software CNC.",
    contesto: "Le aziende ricevono e producono dati in formati diversi: listini dei fornitori, esportazioni da altri gestionali, file per le macchine di produzione. Trattarli a mano è lento e soggetto a errori.",
    soluzione: "Abbiamo sviluppato strumenti su misura che importano e trattano automaticamente le diverse tipologie di dati, trasformandoli nel formato di cui l'azienda ha effettivamente bisogno, fino al collegamento con i software CNC e la tracciabilità di produzione.",
    funzionalita: [
      "Importazione da formati eterogenei (CSV, Excel, testo)",
      "Trasformazione e normalizzazione automatica dei dati",
      "Esportazione verso gestionali e software CNC",
      "Tracciabilità dei dati di produzione"
    ],
    tecnologie: ["VB.NET", "Excel", "CNC"],
    immagini: []
  },
  {
    id: "automazione-office",
    nome: "Automazione Office",
    anno: 2023,
    categoria: "Automazione",
    colore: "#a78bfa",
    dimensione: "lg",
    breve: "Soluzioni basate su Microsoft Office e VBA che eliminano le attività ripetitive: report automatici, documenti compilati da dati e flussi di lavoro più rapidi.",
    contesto: "Molte attività d'ufficio quotidiane — report, documenti, controlli incrociati tra fogli di calcolo — seguono sempre gli stessi passaggi e assorbono ore di lavoro manuale.",
    soluzione: "Con Visual Basic for Application abbiamo automatizzato i flussi di lavoro basati su Microsoft Office: i documenti si compilano da soli a partire dai dati, i report si generano con un clic e gli errori di trascrizione spariscono.",
    funzionalita: [
      "Report e documenti generati automaticamente",
      "Compilazione di modelli Word ed Excel da dati esterni",
      "Controlli e verifiche automatiche tra fogli di calcolo",
      "Integrazione con la posta elettronica"
    ],
    tecnologie: ["Microsoft Office", "VBA", "Excel", "Word"],
    immagini: []
  },
  {
    id: "tracciabilita-produzione",
    nome: "Tracciabilità di Produzione",
    anno: 2023,
    categoria: "Produzione",
    colore: "#f06d7c",
    dimensione: "md",
    breve: "Dai dati archiviati al reparto produttivo: strumenti per seguire commesse e lavorazioni lungo tutto il processo.",
    contesto: "Seguire una commessa lungo il processo produttivo richiede di sapere in ogni momento cosa è stato lavorato, quando e da chi — informazioni spesso disperse tra fogli e appunti.",
    soluzione: "Abbiamo realizzato strumenti che collegano i dati archiviati al reparto produttivo, rendendo tracciabile ogni fase della lavorazione e mettendo a disposizione dell'azienda uno storico consultabile e affidabile.",
    funzionalita: [
      "Registrazione delle fasi di lavorazione",
      "Collegamento tra commesse, ordini e produzione",
      "Storico consultabile delle lavorazioni",
      "Report di avanzamento"
    ],
    tecnologie: ["VB.NET", "SQL", "Windows"],
    immagini: []
  }
];
