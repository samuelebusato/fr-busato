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
   pagina      → (opzionale) pagina propria del progetto: la card porta
                 lì invece che a progetto.html?id=...
   evidenza    → (opzionale) etichetta in evidenza sulla card, es.
                 "Novità": la card prende un bordo e un bagliore pieni
   puntiForza  → (opzionale) i punti di forza, [{ titolo, testo }]: nella
                 pagina di dettaglio diventano una griglia di schede
                 dopo "Il contesto"
   titoloForza → (opzionale) il titolo di quella sezione
                 (di base "Punti di forza")
   flusso      → (opzionale) i passaggi che il progetto collega, es.
                 ["CAD", "Compono", "Gestionale"]: una striscia con le
                 frecce in testa alla sezione dei punti di forza

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
    /* Cyberse ha una scheda sua, cyberse.html: la card porta lì (campo
       "pagina") e progetto.html?id=cyberse rimanda lì. Stesse regole sui
       testi della scheda: vedi il commento in testa a cyberse.html. */
    id: "cyberse",
    nome: "Cyberse",
    anno: 2026,
    categoria: "Documentazione di rete · Disponibile per MSP",
    colore: "#6366f1",
    dimensione: "xl",
    breve: "La documentazione di rete che si aggiorna da sola: un archivio vivo delle reti dei clienti, con le password in una cassaforte e le segnalazioni di ciò che non va. Per chi fa l'informatica di mestiere, per conto di altri. Disponibile per MSP.",
    pagina: "cyberse.html",
    immagini: []
  },
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
    id: "heleox",
    nome: "HeleoX",
    anno: 2026,
    categoria: "Sicurezza e conformità web",
    colore: "#8b5cf6",
    dimensione: "md",
    breve: "Un sito web non è mai finito, e quasi nessuno se ne accorge in tempo. HeleoX lo tiene d'occhio a ogni giro: dice cosa lo espone, cosa non rispetta le regole e come si sistema — citando la norma esatta, non un voto da interpretare.",
    contesto: "Un sito cambia da solo: scade un certificato, si aggiorna un componente, si aggiunge uno strumento di statistiche e con lui un pezzo di normativa da rispettare. Chi lo gestisce se ne accorge quasi sempre tardi — quando qualcosa si rompe, o quando arriva una contestazione. I controlli esistono, ma sono fotografie scattate una volta sola, e per leggerle bisogna già sapere cosa si sta guardando.",
    soluzione: "HeleoX guarda il sito con continuità invece che una volta sola. A intervalli regolari lo interroga da fuori, come farebbe un visitatore qualunque, e ne osserva il comportamento reale: cosa lascia scoperto, come protegge le connessioni, quali tracciatori partono davvero prima che qualcuno abbia detto di sì. Da quell'osservazione nasce un rapporto leggibile anche da chi non è del mestiere: non un punteggio da decifrare, ma un elenco di cose da fare in ordine di urgenza, ognuna con la sua spiegazione e con il riferimento alla regola che la richiede. Sicurezza e rispetto delle norme vivono nello stesso controllo, perché a chi tiene in piedi un sito il problema si presenta una volta sola, non due.",
    funzionalita: [
      "Controllo periodico e automatico, non una verifica una tantum",
      "Rapporto leggibile recapitato via email a ogni giro",
      "Ogni problema con il suo rimedio e la fonte che lo richiede",
      "Sicurezza e conformità in un unico controllo, non in due",
      "Comportamento osservato dal vivo, non dedotto da un elenco",
      "Pensato per chi cura molti siti: agenzie, sviluppatori e piccole imprese"
    ],
    tecnologie: ["React", "AWS Lambda", "Fargate", "Terraform", "Infrastruttura serverless"],
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
    /* 2026-10-06: sopra Returns Management e sotto HeleoX, per importanza (decisione
       dell'utente); la quinta posizione della griglia è una card grande, e l'etichetta
       "Novità" la fa risaltare. Il colore è il blu d'azione della nuova interfaccia del
       programma. Il software si chiama Compono (scelto dall'utente il 2026-10-06); il
       progetto invece si chiama come l'azienda cliente, che qui non si nomina. I testi
       sono generici di proposito (utente): i punti forti, non il caso del cliente.
       L'integrazione con CAD e gestionale è quella della versione finale (utente): oggi
       il CAD arriva come file esportato, e al gestionale vanno i due file dello scarico.
       L'id resta quello di prima: è nell'indirizzo della pagina, nella cartella delle
       immagini e nei motivi. */
    id: "distinta-base-parametrica",
    nome: "Compono",
    anno: 2026,
    categoria: "Distinta base parametrica",
    colore: "#2059d1",
    dimensione: "xl",
    evidenza: "Novità",
    breve: "Il software che si piega al tuo prodotto, non il contrario: dal disegno ai pezzi, ai fogli per i reparti e allo scarico di magazzino, con regole e articoli che l'azienda modella a piacimento. E dialoga con il CAD e con il gestionale.",
    contesto: "Chi produce su misura conosce il paradosso: ogni ordine è diverso, ma il software che lo traduce in pezzi è rigido. Le regole di composizione restano chiuse nel codice, un prodotto nuovo diventa un progetto informatico, e tra il disegno, i reparti e il gestionale i dati vanno ricopiati a ogni passaggio.",
    titoloForza: "Perché Compono",
    flusso: ["Disegno CAD", "Compono", "Reparti produttivi", "Gestionale"],
    puntiForza: [
      { titolo: "Flessibile per natura", testo: "Misure, varianti e componenti sono regole, non codice. Un prodotto nuovo, o una modifica a uno esistente, è una configurazione: non un nuovo sviluppo." },
      { titolo: "Su misura della tua azienda", testo: "Fogli per ogni reparto, unità di misura, materiali e regole di magazzino si modellano sul vostro modo di lavorare, non su quello del software." },
      { titolo: "Articoli a piacimento", testo: "Si inseriscono, si modificano e si organizzano dall'interfaccia, con il materiale giusto per ogni misura. E un articolo ancora in uso non sparisce per errore." },
      { titolo: "Collegato a CAD e gestionale", testo: "Legge le distinte che nascono dal disegno e restituisce al gestionale scarichi e consegne: dal progetto al magazzino, senza ricopiare nulla." }
    ],
    soluzione: "Compono rovescia la prospettiva: le regole escono dal codice e diventano dati che l'azienda vede, configura e fa evolvere. Un prodotto si descrive una volta, con le sue misure, le sue varianti e i suoi componenti; poi ogni ordine si scompone da sé, livello dopo livello, in tutto ciò che serve per produrlo. Articoli, materiali, sostituzioni per misura, fogli di lavorazione e regole di magazzino si gestiscono dall'interfaccia. Il disegno arriva dal CAD e i risultati tornano al gestionale: un solo flusso, dal progetto al magazzino. Prima di importare un ordine Compono mostra che cosa calcolerà, e ogni operazione resta tracciata. Ed è stato messo alla prova sul campo, confrontato con il sistema che sostituisce su decine di migliaia di pezzi già prodotti.",
    funzionalita: [
      "Distinte base parametriche: un prodotto, tutte le sue varianti",
      "Ogni ordine scomposto da sé in pezzi, misure e materiali",
      "Articoli, materiali e regole gestiti dall'interfaccia",
      "Fogli di lavorazione configurabili per ogni reparto",
      "Scarico di magazzino con anteprima, conferma e rettifiche tracciate",
      "Integrazione con il CAD e con il gestionale aziendale",
      "Ruoli e registro delle attività: chi ha fatto cosa, e quando"
    ],
    tecnologie: ["React", "Node.js", "SQL Server", "Motore di calcolo parametrico", "Test automatici"],
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
  }
];
