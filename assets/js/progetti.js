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

   NOTA: i primi 3 progetti dell'array compaiono anche tra i
   "progetti in evidenza" nella home page.
   ============================================================ */

const PROGETTI = [
  {
    id: "distinta-base-parametrica",
    nome: "Distinta Base Parametrica",
    anno: 2026,
    categoria: "Gestione BOM · Beta",
    colore: "#5fca8d",
    dimensione: "xl",
    breve: "Il progetto più recente: uno strumento moderno, modulare e altamente personalizzabile per la generazione e la gestione di distinte base (BOM), pensato per integrarsi in processi aziendali complessi. Già disponibile in una prima versione beta.",
    contesto: "Le aziende manifatturiere gestiscono distinte base sempre più articolate, che devono restare coerenti tra i reparti e dialogare con gli altri sistemi gestionali. Gli strumenti tradizionali sono spesso rigidi e difficili da adattare a prodotti configurabili.",
    soluzione: "Stiamo sviluppando uno strumento parametrico e modulare per la generazione e la gestione delle distinte base, progettato per integrarsi nei processi aziendali e interoperare con altri software. L'attività ha richiesto anche la progettazione completa dell'architettura dati, con la modellazione di un database strutturato in grado di soddisfare i requisiti funzionali e di scalabilità richiesti dal cliente. È già stata rilasciata una prima versione beta.",
    funzionalita: [
      "Generazione parametrica di distinte base (BOM) configurabili",
      "Architettura modulare e altamente personalizzabile",
      "Integrazione e interoperabilità con altri sistemi aziendali",
      "Database strutturato progettato per scalabilità e affidabilità"
    ],
    tecnologie: ["Progettazione dati", "Database SQL", "Web app", "Architettura modulare"],
    immagini: []
  },
  {
    id: "returns-management-aws",
    nome: "Returns Management System",
    anno: 2025,
    categoria: "Cloud · Serverless AWS",
    colore: "#ec7211",
    dimensione: "md",
    breve: "Applicazione serverless su AWS che gestisce l'intero ciclo di vita dei resi in ambito e-commerce: dalla richiesta al rimborso o alla sostituzione del prodotto, con notifiche email automatiche al cliente a ogni step.",
    contesto: "Nell'e-commerce la gestione dei resi coinvolge molti passaggi — validazione dell'ordine, ritiro, ispezione, rimborso o sostituzione — e diversi sistemi esterni. Coordinare tutto manualmente è lento, costoso e poco affidabile.",
    soluzione: "Il sistema è interamente serverless e segue un pattern event-driven orchestrato da AWS Step Functions, che modella il flusso del reso come una state machine con diramazioni condizionali e attese asincrone (waitForTaskToken). Dieci funzioni Lambda in Python gestiscono i singoli step; i dati sono persistiti su DynamoDB, la comunicazione con il corriere avviene tramite SQS e le email transazionali al cliente vengono inviate via SES. Le API REST sono esposte con API Gateway e il frontend è una single page ospitata su S3.",
    funzionalita: [
      "Orchestrazione del flusso con AWS Step Functions (state machine)",
      "10 funzioni Lambda in Python, una per ogni step del processo",
      "Persistenza su DynamoDB con Global Secondary Index",
      "Comunicazione asincrona col corriere via SQS ed email via SES",
      "API REST con API Gateway e frontend single-page su S3"
    ],
    tecnologie: ["AWS Lambda", "Step Functions", "DynamoDB", "Python", "SQS", "SES", "API Gateway", "S3"],
    immagini: []
  },
  {
    id: "frgest",
    nome: "frGest",
    anno: 2025,
    categoria: "Mini gestionale",
    colore: "#2563eb",
    dimensione: "md",
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
    id: "scraper-aste-auto",
    nome: "ScraperAH",
    anno: 2025,
    categoria: "Web scraping",
    colore: "#e11d48",
    dimensione: "md",
    breve: "Applicazione per l'estrazione automatica dei dati dei veicoli dai siti di aste online: da un URL di lotto restituisce in tempo reale marca, modello, anno, chilometraggio, prezzo, numero di telaio e immagini.",
    contesto: "Chi opera nelle aste automobilistiche deve raccogliere rapidamente i dati dei lotti da portali diversi, spesso protetti da sistemi anti-bot e con strutture di pagina eterogenee.",
    soluzione: "Il backend, scritto in TypeScript con Fastify, effettua lo scraping tramite Playwright con plugin stealth per aggirare i sistemi anti-bot, con Apify come fallback quando lo scraping locale non riesce. I risultati vengono cachati su Redis e gli input validati con Zod. Un pool di browser riutilizzabili ottimizza le performance e un pattern a strategie isola la logica di ogni portale; gli aggiornamenti di avanzamento arrivano al client in tempo reale via WebSocket.",
    funzionalita: [
      "Estrazione dei dati del veicolo in tempo reale da URL del lotto",
      "Scraping con Playwright stealth e fallback su Apify",
      "Cache su Redis e validazione degli input con Zod",
      "Aggiornamenti di progresso in tempo reale via WebSocket",
      "Pattern a strategie: una logica dedicata per ogni portale d'asta"
    ],
    tecnologie: ["TypeScript", "Fastify", "Playwright", "Redis", "Zod", "WebSocket"],
    immagini: []
  },
  {
    id: "gestionale-aste-dati",
    nome: "Gestionale Aste & Analisi Dati",
    anno: 2025,
    categoria: "Gestione dati",
    colore: "#0ea5e9",
    dimensione: "lg",
    breve: "Un gestionale containerizzato con Docker per la gestione di un database dedicato alle aste automobilistiche, affiancato da una web app per l'analisi dei dati con statistiche e report grafici.",
    contesto: "Il cliente aveva bisogno di centralizzare i dati relativi alle aste automobilistiche e, allo stesso tempo, di leggerli in modo chiaro attraverso statistiche e report.",
    soluzione: "Abbiamo progettato e realizzato un gestionale containerizzato con Docker per la gestione del database e, in parallelo, una web app per l'analisi dei dati, finalizzata alla generazione di statistiche e report grafici. Per il progetto è stato seguito l'intero ciclo di sviluppo, dall'analisi dei requisiti alla progettazione e all'implementazione.",
    funzionalita: [
      "Gestionale containerizzato con Docker",
      "Database dedicato ai dati delle aste automobilistiche",
      "Web app per l'analisi dei dati",
      "Generazione di statistiche e report grafici"
    ],
    tecnologie: ["Docker", "Database SQL", "Web app", "Data analysis"],
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
