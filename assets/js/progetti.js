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
                 una fila di numeri; testo è il paragrafo sotto il titolo.
                 Dal 2026-10-31 una sezione può avere anche:
                 confronto { colonne: ["Prima", "Dopo"], righe: [[tema,
                 prima, dopo], ...] } → una tabella prima/dopo;
                 tema: "notte" → il riquadro blu scuro (per i numeri);
                 link { testo, href } → un rimando in fondo alla sezione
   inBreve     → (opzionale) tre numeri in testa alla pagina di dettaglio,
                 [{ valore, testo }], prima delle tecnologie

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
    /* frGest ha una scheda sua, frgest.html: la card porta lì (campo "pagina") e
       progetto.html?id=frgest rimanda lì. Regole sui testi e fonte dei numeri: vedi il
       commento in testa a frgest.html. */
    id: "frgest",
    nome: "frGest",
    anno: 2026,
    categoria: "Gestionale ERP",
    colore: "#2563eb",
    dimensione: "md",
    evidenza: "Nuova versione web",
    breve: "Il gestionale nato sul campo nel 2002 rinasce sul web. Dal browser, in più persone insieme: documenti, fatture elettroniche in uscita e in entrata, magazzino, IVA, incassi e banche. Vent'anni di mestiere dentro, un motore nuovo sotto.",
    pagina: "frgest.html",
    immagini: []
  },
  {
    /* 2026-10-06: sopra Returns Management e sotto HeleoX, per importanza (decisione
       dell'utente); la quinta posizione della griglia è una card grande, e l'etichetta
       "Novità" la fa risaltare. Il colore è un blu tenue della tavolozza della nuova
       interfaccia del programma (#4d7ee0): il blu pieno stonava con la vetrina (utente). Il software si chiama Compono (scelto dall'utente il 2026-10-06); il
       progetto invece si chiama come l'azienda cliente, che qui non si nomina.
       2026-10-31, rifatta su richiesta dell'utente, nella grafica e nel testo: il
       motivo esploso al posto dell'albero, le cifre in testa, il confronto col
       vecchio programma, i numeri del collaudo nel riquadro «notte» della
       presentazione, e il rimando al metodo di sviluppo-software.html. Restano, in
       quest'ordine, l'analisi del flusso, la distinta rifatta, la qualità tecnica.
       Riservatezza (il contratto la promette): niente nome del cliente né parole che
       dicano che cosa produce (né il tipo di prodotto, né i suoi componenti, né i
       codici), nessun volume della sua attività (commesse, componenti dell'archivio),
       niente nomi del gestionale né del CAD. Ogni numero viene dalla relazione per la
       riunione del 2026-11-03 (stato al 2026-10-31): 517 distinte e 17.943 formule,
       controllate senza un errore di calcolo; 43.792 combinazioni del prodotto più
       complesso identiche al 99,94 %; 33.917 prodotti già realizzati ricalcolati
       identici al 99,45 %; 29 fogli su 29 uguali in una commessa vera; oltre 1.000
       test (426 del server, 247 dell'interfaccia, 361 d'integrazione); 24 versioni
       dal 2026-09-28, nessuna tornata indietro; «più di duecento» formule sono le 239
       del caso più complesso. Il legame diretto col gestionale non c'è (oggi Compono
       prepara i file del gestionale), ed è facoltativo: si scrive come possibilità,
       finché il cliente non lo decide.
       L'id resta quello di prima: è nell'indirizzo della pagina, nella cartella delle
       immagini e nei motivi. */
    id: "distinta-base-parametrica",
    nome: "Compono",
    anno: 2026,
    categoria: "Digitalizzazione dei processi · Distinta base",
    colore: "#4d7ee0",
    dimensione: "xl",
    evidenza: "Novità",
    breve: "Un programma di fine anni Novanta sapeva come si costruisce ogni prodotto di un'azienda, ma nessuno poteva più cambiarlo. Compono ne ha ritrovato le regole una per una, le ha trasformate in distinte che l'azienda modifica da sé, e le ha messe alla prova su decine di migliaia di prodotti già realizzati, finché i risultati non coincidevano.",
    inBreve: [
      { valore: "517", testo: "distinte ricostruite, regola per regola" },
      { valore: "24", testo: "versioni in cinque settimane, nessuna tornata indietro" },
      { valore: "1.000+", testo: "test automatici, ripetuti a ogni modifica" }
    ],
    titoloContesto: "Il punto di partenza",
    contesto: "Un'azienda che produce su misura: ogni ordine nasce da un disegno dell'ufficio tecnico e deve diventare un elenco preciso di pezzi da tagliare, montare, verniciare e prelevare dal magazzino. Quel calcolo lo faceva da più di vent'anni un programma scritto fra il 1998 e il 2001, che ormai funzionava soltanto su un sistema operativo di un'altra epoca. Le regole di ogni prodotto erano chiuse nel suo codice: cambiare un prodotto voleva dire cambiare il programma. Intorno, il gestionale serviva solo per bolle e fatture e il magazzino viveva su fogli Excel. Quello che il programma non sapeva fare, lo facevano le persone, a mano.",
    titoloForza: "Prima il flusso, poi il software",
    testoForza: "Compono nasce da un'analisi del modo di lavorare dell'azienda, non da un elenco di schermate. Il percorso di una commessa è stato seguito passo per passo, dall'ufficio tecnico al magazzino; il programma da sostituire è stato studiato regola per regola, e ogni dubbio è diventato una domanda a chi ci lavora ogni giorno, con un esempio preso dal suo archivio. Ne è uscito un flusso formalizzato: regole scritte, ruoli definiti, un solo percorso per ogni ordine.",
    flusso: ["Ufficio tecnico", "Compono", "Reparti produttivi", "Magazzino"],
    puntiForza: [
      { titolo: "Un solo percorso", testo: "Ogni ordine segue la stessa strada: entra dal disegno, viene controllato, si scompone nei suoi pezzi, arriva ai reparti con i loro fogli e si chiude con lo scarico di magazzino. Niente più dati ricopiati da un ufficio all'altro." },
      { titolo: "Ruoli chiari", testo: "Officina, ufficio tecnico e amministrazione vedono e fanno ciascuno ciò che gli compete, e il programma lo fa rispettare. Ogni operazione resta registrata: chi, cosa, quando." },
      { titolo: "Il magazzino esce da Excel", testo: "Lo scarico dei materiali si calcola da ogni commessa, con regole che l'azienda vede e modifica. Diventa definitivo solo con la conferma di un responsabile, e da lì si corregge solo con rettifiche tracciate." },
      { titolo: "Un'anagrafica in ordine", testo: "Articoli e materie prime riorganizzati in famiglie, con unità di misura e codici di magazzino coerenti: la base solida su cui poggia tutto il resto." }
    ],
    titoloSoluzione: "La distinta, ripensata da capo",
    soluzione: "Il cuore del progetto è la distinta: la ricetta che trasforma un ordine nell'elenco di tutto ciò che serve per produrlo. Nel programma di prima ogni prodotto era un pezzo di codice, e un articolo nuovo richiedeva un programmatore. In Compono le regole sono diventate dati: misure, varianti, componenti e materiali si descrivono una volta, e ogni ordine si scompone da sé, livello dopo livello. Un prodotto nuovo è una configurazione, non un nuovo sviluppo. Per arrivarci le vecchie regole non sono state riscritte a memoria: sono state ritrovate leggendo il codice del programma precedente, capite confrontandole con i fogli di produzione veri, e ricostruite una famiglia di prodotti alla volta, provando ciascuna sull'archivio prima di scriverla. Ne sono uscite 517 distinte e 17.943 formule, e il prodotto più complesso, da solo, ne conta più di duecento. Perché nessuno debba più leggere il codice per capirle, un quaderno le spiega a parole, prodotto per prodotto.",
    sezioni: [
      {
        titolo: "Il vecchio e il nuovo",
        testo: "Lo stesso lavoro, prima e dopo. Non è cambiato solo il programma: è cambiato chi decide le regole, e quanto ci si può fidare del risultato.",
        confronto: {
          colonne: ["Il programma di prima", "Compono"],
          righe: [
            ["Le regole dei prodotti", "Scritte nel codice: per cambiarle serviva un programmatore", "Nei dati: l'azienda le cambia da sé, senza toccare il programma"],
            ["Il file del disegno", "Letto per posizione delle colonne, e i decimali si perdevano", "Letto per nome delle colonne, decimali compresi"],
            ["Un ordine in ingresso", "Entrava così com'era", "Prima un'anteprima di ciò che non torna; un ordine sbagliato si annulla"],
            ["Il magazzino", "Su fogli Excel", "Scarico calcolato da ogni commessa, confermato da un responsabile e registrato"],
            ["Chi fa cosa", "Una password per entrare", "Tre ruoli, e ogni operazione registrata"],
            ["L'affidabilità", "Nessun test automatico", "Test automatici a ogni modifica"],
            ["Le regole, leggibili", "Solo nel codice", "Un quaderno che le spiega a parole"],
            ["Dove si usa", "Su un sistema di un'altra epoca", "Dal browser, da più postazioni insieme"]
          ]
        }
      },
      {
        titolo: "Messo alla prova contro il vecchio",
        tema: "notte",
        testo: "Un errore in una distinta non si vede sullo schermo: si vede in officina, su un pezzo tagliato male. Per questo il programma di prima è diventato il metro di paragone: il suo calcolo è stato ricostruito, e Compono confrontato con lui su decine di migliaia di casi, finché i risultati non coincidevano. Ogni differenza rimasta ha una causa scritta. E il confronto ha trovato anche errori del vecchio che arrivavano fino in officina, come decimali persi per strada: correggerli è una scelta lasciata all'azienda.",
        cifre: [
          { valore: "99,94%", testo: "delle 43.792 combinazioni del prodotto più complesso, calcolate identiche al vecchio programma." },
          { valore: "99,45%", testo: "di 33.917 prodotti già realizzati, ricalcolati identici. Ogni differenza ha la sua spiegazione." },
          { valore: "29 su 29", testo: "fogli per l'officina di un ordine vero, uguali a quelli del programma di prima." },
          { valore: "17.943", testo: "formule nelle distinte, controllate tutte: nessun errore di calcolo." }
        ]
      },
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
        titolo: "Costruito con metodo",
        testo: "Compono ha fatto la stessa strada che facciamo con ogni software: i criteri scritti prima, le prove sui dati veri, una revisione indipendente dopo ogni funzione, e pause in cui non si aggiunge nulla e si consolida.",
        punti: [
          { titolo: "Oltre 1.000 test automatici", testo: "Sul calcolo, sulle pagine e sul database, a ogni modifica: se uno solo fallisce, la versione non esce. E i test stessi vengono messi alla prova: si reintroducono apposta errori noti, e devono accorgersene." },
          { titolo: "24 versioni, nessuna tornata indietro", testo: "In cinque settimane. Ognuna nasce da un punto preciso e verificato del codice, viene controllata prima e dopo l'installazione, e ha già pronta la strada per tornare a quella di prima." },
          { titolo: "Due giri di stabilizzazione", testo: "Il primo prototipo è stato analizzato, messo in sicurezza e consolidato in due giri completi in cui non si è aggiunta nessuna funzione: solo verifiche, correzioni e fondamenta più solide." },
          { titolo: "Accanto al vecchio programma", testo: "Prima di sostituirlo, Compono lavora al suo fianco: ogni differenza emersa dall'uso quotidiano finisce in un registro, con la sua causa e la sua soluzione. Il passaggio definitivo arriva quando il registro non ha più differenze aperte." }
        ],
        link: { testo: "Il nostro metodo, raccontato", href: "sviluppo-software.html#metodo" }
      }
    ],
    titoloFunzionalita: "Cosa cambia, ogni giorno",
    funzionalita: [
      "Un prodotto nuovo o una variante si configurano, senza riscrivere il programma",
      "Ogni commessa controllata prima di entrare: un'anteprima dice come è stato letto il file e cosa non torna",
      "L'esploso di ogni pezzo con le sue misure di taglio, e i disegni quotati",
      "Fogli per i reparti, distinta di consegna, verniciatura ed etichette dei pezzi, uguali a quelli di prima",
      "Scarico di magazzino calcolato da ogni commessa, con conferma e rettifiche tracciate, e i file pronti per il gestionale",
      "Commesse correggibili senza reimportarle, con un'anteprima di ciò che cambia, magazzino compreso",
      "Per ogni articolo, la ricerca di dove è usato",
      "I documenti già consegnati all'officina restano com'erano, anche se poi cambia la configurazione",
      "Ruoli e registro delle attività: chi ha fatto cosa, e quando",
      "Oggi in esercizio su un server di prova, accanto al programma di prima. Poi il rilascio in produzione e, se l'azienda lo vorrà, il dialogo diretto con il gestionale"
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
