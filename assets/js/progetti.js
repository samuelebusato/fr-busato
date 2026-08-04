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

   IMMAGINI (2-3 per progetto):
   Ogni progetto ha una sua cartella in
       assets/img/progetti/image_<id>/
   Basta metterci le immagini nominate 1, 2, 3 (es. 1.jpg, 2.png):
   compaiono da sole, in un layout dinamico, nella pagina del
   progetto. Formati: jpg, jpeg, png, webp. Finché la cartella è
   vuota viene mostrato un segnaposto elegante — nessuna immagine
   rotta. Vedi il file LEGGIMI.txt dentro ogni cartella.

   NOTA: i primi 3 progetti dell'array compaiono anche tra i
   "progetti in evidenza" nella home page.
   ============================================================ */

const PROGETTI = [
  {
    id: "second-brain",
    nome: "Second Brain",
    anno: 2026,
    categoria: "Knowledge base · AI",
    colore: "#38bdf8",
    dimensione: "xl",
    breve: "Non un archivio, ma una mente. Un secondo cervello digitale che raccoglie, collega e fa crescere nel tempo tutta la conoscenza dell'azienda — decisioni, progetti, regole e clienti — e la rende viva e navigabile, per le persone e per le intelligenze artificiali.",
    contesto: "In ogni azienda la conoscenza più preziosa — il perché di una scelta, il filo di un progetto, la lezione imparata da un errore — vive nella testa delle persone e si disperde: appunti sparsi, cartelle dimenticate, dettagli che nessuno ricorda più. Quando serve, non si trova; quando una persona manca, se ne va con lei.",
    soluzione: "Abbiamo costruito un secondo cervello: un sistema di conoscenza vivo e ordinato, dove ogni informazione ha una casa precisa e ogni decisione porta con sé il suo perché. Le idee non restano isole — si intrecciano in una rete navigabile che cresce come un organismo, si mantiene coerente da sola e non dipende dalla memoria di nessuno. È pensato per essere letto e usato anche da un'intelligenza artificiale, che vi si orienta in autonomia e lavora seguendo le stesse regole del team. Oggi custodisce un prodotto; domani, man mano che la conoscenza si allargherà oltre questo progetto, diventerà la memoria operativa dell'intera azienda — capace di collegare prodotti, clienti e decisioni, offrire briefing istantanei e intuizioni che attraversano i progetti, e alimentare gli assistenti che lavoreranno al fianco delle persone. Un patrimonio che diventa più prezioso a ogni informazione aggiunta.",
    funzionalita: [
      "Ogni informazione ha una casa precisa: identità, progetti, regole, clienti, marketing",
      "Un diario che ricorda cosa è stato fatto e perché, giorno per giorno",
      "Una rete di note collegate, navigabile come una mappa della conoscenza",
      "Si controlla e si mantiene coerente da solo, segnalando ciò che va aggiornato",
      "Compreso e utilizzabile da un assistente AI che ne rispetta le regole",
      "Sempre allineato e sincronizzato su più dispositivi"
    ],
    tecnologie: ["Knowledge base", "Markdown & Obsidian", "Automazioni", "AI assistant", "Git"],
    immagini: []
  },
  {
    id: "frgest",
    nome: "frGest",
    anno: 2025,
    categoria: "Mini gestionale",
    colore: "#2563eb",
    dimensione: "md",
    breve: "Il mini gestionale che ha imparato il mestiere sul campo: anni di uso quotidiano nelle piccole aziende, e la flessibilità che i software da scaffale non conoscono. Bolle, fatture, magazzino — a modo tuo.",
    contesto: "In tanti anni sul campo la stessa richiesta è tornata di continuo: un gestionale che si adatti all'azienda, non il contrario. Tante piccole realtà — reggiane e non — nei prodotti commerciali non trovavano né le funzioni né l'immediatezza d'uso che cercavano.",
    soluzione: "frGest nasce proprio da lì: dall'ascolto dei modi di lavorare più diversi, distillati in un software semplice e flessibile. Niente fronzoli, molta sostanza — e alle spalle molti anni di rodaggio reale che si sentono a ogni clic.",
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
    id: "returns-management-aws",
    nome: "Returns Management System",
    anno: 2025,
    categoria: "Cloud · Serverless AWS",
    colore: "#ec7211",
    dimensione: "md",
    breve: "Una macchina invisibile che governa l'intero viaggio di un reso e-commerce — dalla richiesta al rimborso — mentre il cliente riceve, a ogni passo, l'email giusta al momento giusto. Interamente serverless su AWS.",
    contesto: "Un reso sembra un gesto semplice, ma dietro nasconde una catena: validare, ritirare, ispezionare, rimborsare o sostituire, dialogando con sistemi diversi. Fatto a mano è lento, costoso e fragile — e ogni intoppo il cliente lo sente.",
    soluzione: "Il cuore è una state machine orchestrata da AWS Step Functions, che modella il reso come un flusso con diramazioni condizionali e attese asincrone (waitForTaskToken). Dieci funzioni Lambda in Python si dividono i singoli passi, DynamoDB custodisce i dati, il dialogo col corriere viaggia su code SQS e ogni aggiornamento raggiunge il cliente via email con SES. Le API REST sono esposte con API Gateway, il frontend è una single page su S3. Nessun server da gestire: solo eventi che si rincorrono con precisione.",
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
    id: "scraper-aste-auto",
    nome: "ScraperAH",
    anno: 2025,
    categoria: "Web scraping",
    colore: "#e11d48",
    dimensione: "md",
    breve: "Da un semplice link di un lotto d'asta, in tempo reale, tutto ciò che conta: marca, modello, anno, chilometri, prezzo, numero di telaio e immagini. Anche là dove i siti cercano di tenere i bot alla porta.",
    contesto: "Chi vive di aste automobilistiche corre contro il tempo: dati da raccogliere al volo da portali diversi, ognuno con la sua struttura e le sue barriere anti-bot. Farlo a mano significa perdere occasioni.",
    soluzione: "Un backend in TypeScript con Fastify orchestra lo scraping con Playwright in modalità stealth, per superare i sistemi anti-bot, con Apify come rete di sicurezza quando lo scraping locale non basta. I risultati vivono in cache su Redis, gli input passano al setaccio di Zod, un pool di browser riutilizzabili tiene alto il ritmo e un pattern a strategie isola la logica di ogni portale. Gli aggiornamenti di avanzamento arrivano al cliente in diretta, via WebSocket.",
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
    id: "distinta-base-parametrica",
    nome: "Distinta Base Parametrica",
    anno: 2026,
    categoria: "Gestione BOM · Beta",
    colore: "#5fca8d",
    dimensione: "xl",
    breve: "Il nostro progetto più recente: uno strumento moderno e modulare che piega la complessità delle distinte base alla volontà di chi le governa. Configurabile fin nel dettaglio, già vivo in una prima beta.",
    contesto: "Nelle aziende manifatturiere una distinta base non è un elenco: è un organismo che cambia, si ramifica e deve restare coerente tra reparti e sistemi diversi. Gli strumenti tradizionali sono gabbie rigide, e ogni prodotto configurabile diventa un'eccezione da domare a mano.",
    soluzione: "Stiamo costruendo uno strumento parametrico e modulare che genera e gestisce le distinte base come materia viva, plasmandola sui processi reali dell'azienda invece di imporne di propri. Dietro le quinte, un'architettura dati progettata da zero — un database strutturato pensato per reggere complessità e crescita nel tempo. La prima beta è già nelle mani di chi la userà.",
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
    id: "gestionale-aste-dati",
    nome: "Gestionale Aste & Analisi Dati",
    anno: 2025,
    categoria: "Gestione dati",
    colore: "#0ea5e9",
    dimensione: "lg",
    breve: "Un gestionale containerizzato che mette ordine nei dati delle aste auto, e accanto una web app che li fa parlare: statistiche e report che trasformano numeri sparsi in decisioni.",
    contesto: "Il cliente aveva due bisogni in uno: centralizzare i dati relativi alle aste automobilistiche e, allo stesso tempo, riuscire a leggerli con chiarezza attraverso statistiche e report, senza perdersi tra i fogli.",
    soluzione: "Abbiamo progettato e realizzato un gestionale containerizzato con Docker per governare il database e, in parallelo, una web app dedicata all'analisi dei dati — statistiche e report grafici che danno finalmente forma ai numeri. Un percorso completo, seguito dall'analisi dei requisiti fino alla progettazione e all'implementazione.",
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
    breve: "Le ore risucchiate da report e documenti ripetitivi, restituite. Soluzioni su Microsoft Office e VBA che fanno sparire il lavoro manuale — e con esso gli errori.",
    contesto: "Tante attività d'ufficio seguono sempre lo stesso copione: report, documenti, controlli incrociati tra fogli di calcolo. Passaggi identici che, giorno dopo giorno, divorano ore preziose.",
    soluzione: "Con Visual Basic for Application abbiamo automatizzato questi flussi basati su Microsoft Office: i documenti si compilano da soli a partire dai dati, i report nascono con un clic e gli errori di trascrizione semplicemente non accadono più.",
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
    breve: "Dati che arrivano in mille formati e devono uscirne in uno solo, quello giusto: strumenti che importano, trasformano e traghettano l'informazione fino alle macchine CNC.",
    contesto: "Ogni azienda vive in un flusso di dati eterogenei: listini dei fornitori, esportazioni da altri gestionali, file per le macchine di produzione. Trattarli a mano è lento e apre la porta agli errori.",
    soluzione: "Abbiamo creato strumenti su misura che importano e lavorano automaticamente le diverse tipologie di dati, trasformandole nel formato di cui l'azienda ha davvero bisogno — fino al collegamento con i software CNC e alla tracciabilità di produzione.",
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
    breve: "Dal dato archiviato al reparto che produce: strumenti per seguire ogni commessa lungo tutto il suo viaggio, e sapere sempre cosa è stato fatto, quando e da chi.",
    contesto: "Seguire una commessa lungo il processo produttivo significa sapere, in ogni istante, cosa è stato lavorato, quando e da chi. Informazioni troppo spesso disperse tra fogli sparsi e appunti.",
    soluzione: "Abbiamo realizzato strumenti che collegano i dati archiviati al reparto produttivo, rendendo tracciabile ogni fase della lavorazione e consegnando all'azienda uno storico affidabile e sempre consultabile.",
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
