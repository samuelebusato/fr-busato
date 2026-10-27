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
   testoForza  → (opzionale) un paragrafo sotto il titolo dei punti di forza
   titoloContesto, titoloSoluzione, titoloFunzionalita
               → (opzionali) i titoli delle tre sezioni, al posto di
                 "Il contesto", "La soluzione", "Funzionalità principali"
   sezioni     → (opzionale) altre sezioni a tutta larghezza dopo "La
                 soluzione", [{ titolo, testo, punti, cifre }]: punti come
                 puntiForza (una griglia di schede), cifre [{ valore, testo }]
                 una fila di numeri; testo è il paragrafo sotto il titolo

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
       "Novità" la fa risaltare. Il colore è un blu tenue della tavolozza della nuova
       interfaccia del programma (#4d7ee0): il blu pieno stonava con la vetrina (utente). Il software si chiama Compono (scelto dall'utente il 2026-10-06); il
       progetto invece si chiama come l'azienda cliente, che qui non si nomina.
       2026-10-27, riscritta su richiesta dell'utente: al centro, in quest'ordine,
       l'analisi e la formalizzazione del flusso di lavoro, il rifacimento della
       distinta, la qualità tecnica (sicurezza e costruzione), le funzioni e ciò che
       cambiano per il cliente. Niente nomi né dettagli che rendano riconoscibile il
       cliente (prodotti, codici, città). Ogni numero viene dai documenti del progetto:
       il 97,6 % è il confronto dello scarico con tutto l'archivio del vecchio, 23.727 su
       23.730 è una famiglia di prodotti, 51 → 7 s è l'importazione ottimizzata dentro
       Compono (non il confronto col vecchio), i test sono 317 del server, 132
       d'integrazione e 127 del client. Il legame diretto col gestionale non c'è ancora
       (oggi Compono prepara i file del vecchio programma): va scritto come prossimo
       passo finché non è in esercizio.
       L'id resta quello di prima: è nell'indirizzo della pagina, nella cartella delle
       immagini e nei motivi. */
    id: "distinta-base-parametrica",
    nome: "Compono",
    anno: 2026,
    categoria: "Digitalizzazione dei processi · Distinta base",
    colore: "#4d7ee0",
    dimensione: "xl",
    evidenza: "Novità",
    breve: "Prima di essere un software, un'analisi: il lavoro di un'azienda che produce su misura, seguito dall'ufficio tecnico al magazzino e trasformato in un unico flusso digitale. La distinta, ripensata da capo. E sotto, un programma costruito e collaudato con il rigore di chi non può permettersi errori.",
    titoloContesto: "Il punto di partenza",
    contesto: "Un'azienda manifatturiera che produce su misura: ogni ordine nasce da un disegno dell'ufficio tecnico e deve diventare un elenco preciso di pezzi da tagliare, montare, verniciare e prelevare dal magazzino. Il gestionale serviva solo per bolle e fatture, il magazzino si teneva su fogli Excel, e la distinta la calcolava un programma di vecchia generazione, con le regole di ogni prodotto chiuse nel suo codice. Cambiare un prodotto voleva dire cambiare il programma; e quello che il programma non sapeva fare, lo facevano le persone, a mano.",
    titoloForza: "Prima il flusso, poi il software",
    testoForza: "Compono nasce da un'analisi del modo di lavorare dell'azienda. Il percorso di una commessa è stato seguito passo per passo, dall'ufficio tecnico al magazzino; il programma da sostituire è stato studiato regola per regola, e i dubbi chiariti con chi ci lavora ogni giorno. Ne è uscito un flusso formalizzato: regole scritte, ruoli definiti, un solo percorso per ogni ordine.",
    flusso: ["Ufficio tecnico", "Compono", "Reparti produttivi", "Magazzino"],
    puntiForza: [
      { titolo: "Un solo percorso", testo: "Ogni ordine segue la stessa strada: entra dal disegno, viene controllato, si scompone nei suoi pezzi, arriva ai reparti con i loro fogli e si chiude con lo scarico di magazzino. Niente più dati ricopiati da un ufficio all'altro." },
      { titolo: "Ruoli chiari", testo: "Officina, ufficio tecnico e amministrazione vedono e fanno ciascuno ciò che gli compete, e il programma lo fa rispettare. Ogni operazione resta registrata: chi, cosa, quando." },
      { titolo: "Il magazzino esce da Excel", testo: "Lo scarico dei materiali si calcola da ogni commessa, con regole che l'azienda vede e modifica. Diventa definitivo solo con la conferma di un responsabile, e da lì si corregge solo con rettifiche tracciate." },
      { titolo: "Un'anagrafica in ordine", testo: "Articoli e materie prime riorganizzati in famiglie, con unità di misura e codici di magazzino coerenti: la base solida su cui poggia tutto il resto." }
    ],
    titoloSoluzione: "La distinta, ripensata da capo",
    soluzione: "Il cuore del progetto è la distinta: la ricetta che trasforma un ordine nell'elenco di tutto ciò che serve per produrlo. Nel programma precedente ogni prodotto era un pezzo di codice, e un articolo nuovo richiedeva un programmatore. In Compono le regole sono diventate dati: misure, varianti, componenti e materiali si descrivono una volta, e ogni ordine si scompone da sé, livello dopo livello. Un prodotto nuovo è una configurazione, non un nuovo sviluppo; parametri, materiali, fogli dei reparti e regole di magazzino si gestiscono dall'interfaccia. Le vecchie regole non sono state riscritte a memoria: sono state lette nel codice del programma precedente, tradotte una per una e confrontate con il suo archivio storico, decine di migliaia di prodotti già realizzati, finché i risultati non coincidevano. Ogni differenza rimasta ha una spiegazione, e correggere i difetti del vecchio è una scelta lasciata al cliente.",
    sezioni: [
      {
        titolo: "Sicuro per progetto",
        testo: "Un programma che decide cosa tagliare e cosa togliere dal magazzino custodisce il sapere di un'azienda, e va protetto come tale. Qui la sicurezza è un metodo, applicato a ogni funzione nuova prima ancora di scriverla.",
        punti: [
          { titolo: "I rischi, prima del codice", testo: "Per ogni funzione si analizza in anticipo cosa potrebbe andare storto, dall'accesso indebito al dato alterato in silenzio, e si decide come impedirlo. Poi lo si prova davvero, non solo sulla carta." },
          { titolo: "Permessi controllati", testo: "Ciò che un ruolo può fare lo verifica il server a ogni richiesta: non basta nasconderlo nell'interfaccia. Una prova automatica controlla, funzione per funzione, chi può usarla e chi no." },
          { titolo: "Il minimo indispensabile", testo: "Nell'installazione definitiva il programma lavora sui dati con i soli permessi che gli servono: non può cambiare la struttura del database né cancellare il registro delle attività. E uno scarico confermato non si modifica più: lo impedisce il database stesso." },
          { titolo: "Difese sempre aggiornate", testo: "Le pagine viaggiano con le protezioni del browser attive, e i componenti su cui il programma si appoggia vengono controllati da soli a ogni modifica e ogni settimana: una vulnerabilità appena scoperta viene segnalata e corretta, non dimenticata." }
        ]
      },
      {
        titolo: "Collaudato prima di arrivare in officina",
        testo: "Un errore in una distinta non si vede sullo schermo: si vede in officina, su un pezzo tagliato male. Per questo ogni modifica attraversa una rete di controlli prima di raggiungere l'azienda.",
        punti: [
          { titolo: "Oltre 570 test automatici", testo: "Sul calcolo, sulle pagine e sul database, a ogni modifica: se uno solo fallisce, la versione non esce. E i test stessi vengono messi alla prova: si reintroducono apposta errori noti, e devono accorgersene." },
          { titolo: "Versioni tracciabili", testo: "Ogni versione nasce da un punto preciso e verificato del codice, viene costruita in automatico e installata solo se identica a quella controllata. Si sa sempre cosa è in uso, e si può tornare indietro." },
          { titolo: "Dati che crescono con ordine", testo: "La struttura del database cambia solo con passaggi numerati, scritti e provati in anticipo. E l'installazione da zero è stata provata seguendo soltanto la guida, fino in fondo, senza interventi a mano." },
          { titolo: "Accanto al vecchio programma", testo: "Prima di sostituirlo, Compono lavora al suo fianco: ogni differenza emersa dall'uso quotidiano finisce in un registro, con la sua causa e la sua soluzione. Il passaggio definitivo arriva quando il registro non ha più differenze aperte." }
        ]
      },
      {
        titolo: "I risultati, misurati",
        testo: "Numeri presi dai collaudi, non stime.",
        cifre: [
          { valore: "97,6%", testo: "delle righe di scarico di magazzino identiche a quelle del vecchio programma, su tutto il suo archivio storico. Ogni differenza ha una causa nota." },
          { valore: "23.727", testo: "prodotti su 23.730 ricalcolati identici al vecchio programma, in una delle famiglie principali. I tre diversi avevano dati sbagliati all'origine." },
          { valore: "51 → 7 s", testo: "per importare un ordine di grandi dimensioni, dopo che il caricamento è stato ottimizzato." },
          { valore: "570+", testo: "test automatici a ogni modifica, sul calcolo, sulle pagine e sul database." }
        ]
      }
    ],
    titoloFunzionalita: "Cosa cambia, ogni giorno",
    funzionalita: [
      "Un prodotto nuovo o una variante si configurano, senza riscrivere il programma",
      "Ogni commessa controllata prima di entrare: un'anteprima dice come è stato letto il file e cosa non torna",
      "Fogli per i reparti, distinta di consegna, verniciatura ed etichette dei pezzi, in un'unica stampa",
      "Scarico di magazzino calcolato da ogni commessa, con conferma e rettifiche tracciate, al posto dei fogli Excel",
      "Commesse correggibili senza reimportarle, con un'anteprima di ciò che cambia, magazzino compreso",
      "I documenti già consegnati all'officina restano com'erano, anche se poi cambia la configurazione",
      "Ruoli e registro delle attività: chi ha fatto cosa, e quando",
      "Il prossimo passo: il dialogo diretto con il gestionale aziendale"
    ],
    tecnologie: ["Analisi dei processi", "React", "Node.js", "SQL Server", "Motore parametrico", "Test automatici e CI", "Threat model STRIDE"],
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
