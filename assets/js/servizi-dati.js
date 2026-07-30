/* ============================================================
   SERVIZI — dati per le pagine dedicate (servizio.html?id=...)
   ------------------------------------------------------------
   Ogni servizio ha una pagina generata da servizio.js a partire
   da questo array. Campi disponibili:

   id          → identificativo univoco usato nell'URL
   nome        → nome del servizio (usato nel titolo pagina)
   occhiello   → piccola etichetta sopra il titolo
   titolo      → titolo H1 (è consentito <span class="gradiente">…</span>)
   sottotitolo → frase introduttiva
   colore      → accento della pagina (esadecimale)
   descrizione → array di paragrafi ("Cos'è")
   perche      → paragrafo introduttivo della sezione dati
   statistiche → array di { numero, testo, fonte } (dati/motivi)
   casiUso     → array di stringhe (casi d'uso)
   aChiServe   → array di stringhe (destinatari)
   certificazioni → true per mostrare la sezione certificazioni

   Per aggiungere/modificare un servizio basta editare questo file
   e fare commit + push.
   ============================================================ */

const SERVIZI = [
  {
    id: "reti-sicure",
    nome: "Reti sicure",
    occhiello: "Servizio · Sicurezza",
    titolo: "Reti <span class=\"gradiente\">sicure</span>",
    sottotitolo: "Progettiamo e proteggiamo la rete della tua azienda: segmentazione, backup, difesa dai malware e continuità operativa.",
    colore: "#2563eb",
    descrizione: [
      "Una rete aziendale ben progettata è la base di tutto: collega postazioni, server e servizi cloud e, allo stesso tempo, deve proteggerli. Ci occupiamo della progettazione, della configurazione e della gestione di reti sicure, con firewall, segmentazione, backup e sistemi di protezione dei dati basati su soluzioni WatchGuard e Acronis.",
      "L'obiettivo è duplice: tenere l'infrastruttura efficiente e difenderla da attacchi, guasti e perdite di dati, con un piano di continuità che riduce al minimo i tempi di fermo."
    ],
    perche: "Gli attacchi informatici non colpiscono solo le grandi aziende: le piccole e medie imprese sono un bersaglio frequente, proprio perché spesso meno protette.",
    statistiche: [
      { numero: "43%", testo: "degli attacchi informatici prende di mira le piccole e medie imprese", fonte: "Ricerche di settore" },
      { numero: "≈ 4,4 mln €", testo: "il costo medio di una violazione dei dati per un'azienda", fonte: "IBM Cost of a Data Breach" },
      { numero: "10.500 mld $", testo: "il costo globale stimato del cybercrime entro il 2025", fonte: "Cybersecurity Ventures" },
      { numero: "in crescita", testo: "gli attacchi gravi in Italia aumentano di anno in anno", fonte: "Rapporto Clusit" }
    ],
    casiUso: [
      "Realizzazione o rifacimento della rete di un ufficio o di una sede produttiva",
      "Segmentazione della rete per separare uffici, produzione e ospiti",
      "Backup automatici e ripristino rapido in caso di guasto o ransomware",
      "Protezione da malware e filtro dei contenuti sulle postazioni di lavoro",
      "Collegamento sicuro tra più sedi o per chi lavora da remoto"
    ],
    aChiServe: [
      "Piccole e medie imprese che vogliono mettere in sicurezza i propri dati",
      "Aziende con più sedi o con personale che lavora da remoto",
      "Studi professionali che trattano dati sensibili",
      "Chi ha già subito un attacco o una perdita di dati e vuole evitare che riaccada"
    ],
    approfondimenti: [
      { titolo: "Che cos'è un firewall?", testo: "È il sistema — hardware o software — che controlla il traffico in entrata e in uscita dalla rete, lasciando passare solo ciò che è autorizzato e bloccando i tentativi di accesso indesiderati. È la prima barriera tra la rete aziendale e Internet." },
      { titolo: "Cosa significa segmentare la rete?", testo: "Vuol dire dividere la rete in zone separate — per esempio uffici, reparto produttivo e rete ospiti. Così, se un dispositivo viene compromesso o infettato, il problema resta confinato e non si propaga a tutta l'azienda." },
      { titolo: "Che cos'è un ransomware?", testo: "È un tipo di malware che blocca i dati dell'azienda cifrandoli e chiede un riscatto per sbloccarli. È una delle minacce più diffuse e costose: la difesa migliore è la prevenzione, unita a backup affidabili che permettono di ripartire senza pagare." },
      { titolo: "Perché il backup è così importante?", testo: "Un backup aggiornato è ciò che ti permette di recuperare i dati dopo un guasto, un errore umano o un attacco. Senza un backup testato, una singola disavventura può significare la perdita definitiva di anni di lavoro." }
    ],
    approccio: [
      { titolo: "Analisi", testo: "Analizziamo la rete esistente, i dispositivi collegati e le reali esigenze dell'azienda." },
      { titolo: "Progettazione", testo: "Definiamo l'architettura più adatta: segmentazione, firewall, backup e sistemi di protezione." },
      { titolo: "Realizzazione", testo: "Configuriamo e installiamo tutto, con test per verificare sicurezza e prestazioni." },
      { titolo: "Gestione nel tempo", testo: "Restiamo a disposizione per manutenzione, aggiornamenti e monitoraggio continuativo." }
    ],
    faq: [
      { domanda: "Quanto tempo serve per mettere in sicurezza la rete?", risposta: "Dipende dalla dimensione e dallo stato attuale. Dopo un sopralluogo ti diamo tempi e un preventivo chiari, senza sorprese." },
      { domanda: "Dovrò cambiare tutti gli apparati?", risposta: "Non necessariamente: partiamo da ciò che hai già e integriamo o sostituiamo solo dove serve davvero." },
      { domanda: "Cosa succede se subiamo un attacco?", risposta: "Con backup aggiornati e procedure di ripristino si riparte in tempi rapidi. Ti affianchiamo anche nella gestione dell'incidente." },
      { domanda: "Fate assistenza anche dopo l'installazione?", risposta: "Sì: manutenzione, aggiornamenti e monitoraggio della rete nel tempo fanno parte del servizio." }
    ]
  },
  {
    id: "privacy-conformita",
    nome: "Privacy, GDPR e Conformità",
    occhiello: "Servizio · Privacy & Conformità",
    titolo: "Privacy, GDPR e <span class=\"gradiente\">conformità</span>",
    sottotitolo: "Ti affianchiamo nell'adeguamento a GDPR e NIS2 e monitoriamo domini e siti web, segnalando problemi di sicurezza e conformità con indicazioni chiare su come intervenire.",
    colore: "#7c3aed",
    descrizione: [
      "Adeguarsi al GDPR e alla direttiva NIS2 non è solo un obbligo di legge: è un modo per proteggere i dati dei clienti e la reputazione dell'azienda. Ti aiutiamo con l'analisi dei rischi, le procedure, le informative e le misure di sicurezza necessarie.",
      "A questo affianchiamo il monitoraggio continuo di domini e siti web: controlliamo con regolarità la sicurezza e la conformità (headers di sicurezza, certificati, cookie e privacy) e ti segnaliamo cosa correggere, citando la norma di riferimento. Un controllo costante che trasforma la conformità in un'attività semplice e sotto controllo."
    ],
    perche: "Le sanzioni per chi non rispetta le norme sulla protezione dei dati sono tra le più elevate previste dalla legge europea — e con la direttiva NIS2, recepita in Italia con il D.Lgs. 138/2024, gli obblighi si estendono a molte medie imprese.",
    statistiche: [
      { numero: "fino a 20 mln €", testo: "o il 4% del fatturato annuo globale: la sanzione massima prevista dal GDPR", fonte: "Reg. UE 2016/679" },
      { numero: "fino a 10 mln €", testo: "o il 2% del fatturato: le sanzioni previste dalla direttiva NIS2", fonte: "Direttiva UE 2022/2555" },
      { numero: "oltre 5,8 mld €", testo: "il totale delle sanzioni GDPR comminate in Europa dal 2018", fonte: "Stime di settore" },
      { numero: "controllo continuo", testo: "monitoraggio periodico di domini e siti, con report su sicurezza e conformità", fonte: "" }
    ],
    casiUso: [
      "Adeguamento al GDPR: registro dei trattamenti, informative e consensi",
      "Analisi dei rischi e misure tecniche e organizzative richieste da GDPR e NIS2",
      "Verifica di un sito web: cookie banner, privacy policy, certificati e headers di sicurezza",
      "Monitoraggio periodico dei domini con report su sicurezza e conformità",
      "Supporto in caso di richieste degli interessati o di segnalazioni all'autorità"
    ],
    aChiServe: [
      "Aziende e professionisti che trattano dati personali di clienti o dipendenti",
      "Chi gestisce uno o più siti web e vuole essere sicuro di essere in regola",
      "Soggetti che rientrano negli obblighi della direttiva NIS2",
      "E-commerce e attività che raccolgono dati online"
    ],
    approfondimenti: [
      { titolo: "Che cos'è il GDPR?", testo: [
        "Il GDPR (General Data Protection Regulation, Regolamento UE 2016/679) è la normativa europea sulla protezione dei dati personali, in vigore dal maggio 2018. Si applica a qualunque impresa o professionista che tratti dati di persone che si trovano nell'Unione Europea, indipendentemente dalle dimensioni dell'attività.",
        "Stabilisce alcuni principi fondamentali — liceità, trasparenza, minimizzazione e limitazione delle finalità — e riconosce alle persone diritti precisi sui propri dati: accesso, rettifica, cancellazione e portabilità." ] },
      { titolo: "Perché è importante adeguarsi al GDPR?", testo: [
        "Adeguarsi non significa soltanto evitare le sanzioni, che possono arrivare a 20 milioni di euro o al 4% del fatturato: significa proteggere i dati dei tuoi clienti e la fiducia che ripongono in te.",
        "Un trattamento dei dati corretto e documentato riduce i rischi, previene i danni reputazionali di una violazione e diventa un segno di serietà e affidabilità agli occhi di clienti e partner." ] },
      { titolo: "Che cos'è la direttiva NIS2?", testo: "NIS2 (Direttiva UE 2022/2555) è la normativa europea sulla sicurezza informatica, recepita in Italia con il D.Lgs. 138/2024. Rispetto al passato amplia notevolmente i soggetti coinvolti — comprese molte medie imprese e le loro catene di fornitura — e impone misure di gestione del rischio, obblighi di segnalazione degli incidenti e responsabilità dirette in capo agli organi di gestione." },
      { titolo: "Cosa significa monitorare un sito o un dominio?", testo: "Significa controllare con regolarità che il sito rispetti gli standard di sicurezza e conformità: certificati e cifratura (HTTPS), header di sicurezza, gestione corretta di cookie e informative privacy, assenza di dati o credenziali esposti. Ogni controllo produce un report chiaro, con le priorità e le azioni da intraprendere." }
    ],
    approccio: [
      { titolo: "Analisi", testo: "Esaminiamo i trattamenti di dati, i siti e i sistemi per fotografare lo stato attuale." },
      { titolo: "Valutazione dei rischi", testo: "Individuiamo criticità e lacune rispetto agli obblighi di GDPR e NIS2." },
      { titolo: "Adeguamento", testo: "Predisponiamo procedure, informative, consensi e le misure tecniche e organizzative necessarie." },
      { titolo: "Monitoraggio", testo: "Controlliamo periodicamente domini e siti e ti segnaliamo cosa mantenere in regola." }
    ],
    faq: [
      { domanda: "Il GDPR vale anche per una piccola impresa?", risposta: "Sì. Si applica a chiunque tratti dati personali, indipendentemente dalle dimensioni dell'attività." },
      { domanda: "Ho già una privacy policy sul sito, basta?", risposta: "È un buon punto di partenza, ma non basta: la conformità riguarda anche consensi, sicurezza, registro dei trattamenti e gestione dei diritti degli interessati." },
      { domanda: "Cosa rischio se non sono in regola?", risposta: "Sanzioni molto elevate (fino a 20 milioni di euro o al 4% del fatturato), oltre a danni reputazionali e alla perdita di fiducia dei clienti." },
      { domanda: "Ogni quanto va controllato un sito?", risposta: "Un monitoraggio periodico — ad esempio settimanale o mensile — intercetta i problemi nuovi prima che diventino gravi." }
    ],
    certificazioni: true
  },
  {
    id: "assistenza-hardware",
    nome: "Assistenza Hardware",
    occhiello: "Servizio · Assistenza",
    titolo: "Assistenza <span class=\"gradiente\">hardware</span>",
    sottotitolo: "Individuiamo e risolviamo i guasti di PC, server e apparati di rete, con interventi rapidi in sede o da remoto.",
    colore: "#0ea5e9",
    descrizione: [
      "Un guasto informatico può bloccare il lavoro di un'intera azienda. Ci occupiamo della diagnosi e della riparazione degli apparati — PC, server, periferiche e dispositivi di rete — con l'obiettivo di rimettere tutto in funzione nel minor tempo possibile.",
      "Interveniamo in sede quando serve un intervento fisico e da remoto per i problemi che si possono risolvere subito, senza attese."
    ],
    perche: "Quando un sistema si ferma, ogni ora di inattività ha un costo: in produttività, in ordini persi e in stress per il personale.",
    statistiche: [
      { numero: "25+ anni", testo: "di esperienza su hardware, server e reti aziendali", fonte: "" },
      { numero: "in sede o da remoto", testo: "scegliamo l'intervento più veloce per rimetterti al lavoro", fonte: "" },
      { numero: "interventi celeri", testo: "diagnosi e soluzione dei guasti in tempi brevi", fonte: "" }
    ],
    casiUso: [
      "PC o server che non si avvia o è diventato lento",
      "Sostituzione di componenti guasti (dischi, alimentatori, memorie)",
      "Problemi di rete, stampanti o periferiche",
      "Manutenzione preventiva per evitare fermi improvvisi"
    ],
    aChiServe: [
      "Aziende che non hanno un tecnico informatico interno",
      "Uffici e studi che devono ridurre al minimo i tempi di fermo",
      "Chi cerca un riferimento affidabile e sempre raggiungibile"
    ],
    approfondimenti: [
      { titolo: "Assistenza in sede o da remoto?", testo: "Da remoto ci colleghiamo al tuo computer per risolvere subito i problemi software e di configurazione, senza attese. In sede interveniamo quando serve mettere le mani sull'hardware: sostituire un componente, riparare un guasto fisico o intervenire sugli apparati di rete." },
      { titolo: "Cos'è la manutenzione preventiva?", testo: "È l'insieme dei controlli periodici — stato dei dischi, aggiornamenti, temperature, verifica dei backup — che permettono di individuare un problema prima che diventi un fermo improvviso. Prevenire costa molto meno che riparare un guasto non previsto." }
    ],
    approccio: [
      { titolo: "Diagnosi", testo: "Individuiamo la causa del problema, da remoto o in sede." },
      { titolo: "Intervento", testo: "Ripariamo o sostituiamo ciò che serve, cercando sempre la soluzione più rapida." },
      { titolo: "Verifica", testo: "Controlliamo che tutto funzioni e ti diamo qualche consiglio per evitare che riaccada." }
    ],
    faq: [
      { domanda: "Intervenite anche in giornata?", risposta: "Per le urgenze cerchiamo di intervenire il prima possibile, spesso subito da remoto." },
      { domanda: "Riparate anche i server?", risposta: "Sì: PC, server, periferiche e apparati di rete." },
      { domanda: "Conviene riparare o sostituire?", risposta: "Ti diamo un consiglio onesto in base ai costi e all'età dell'apparato, così spendi il giusto." }
    ]
  },
  {
    id: "fornitura-hardware",
    nome: "Fornitura Hardware e Software",
    occhiello: "Servizio · Fornitura",
    titolo: "Fornitura <span class=\"gradiente\">hardware e software</span>",
    sottotitolo: "Consigliamo e forniamo PC, server, componenti, accessori e software dei migliori marchi, scelti in base alle tue reali esigenze.",
    colore: "#14b8a6",
    descrizione: [
      "Acquistare la tecnologia giusta significa non spendere più del necessario e avere strumenti adatti al proprio lavoro. Dopo un'analisi delle esigenze, forniamo componenti, PC, server e accessori per reti dei marchi più affidabili, come Dell e Lenovo.",
      "Alla parte hardware affianchiamo la fornitura dei software: sistemi operativi, applicativi da ufficio e soluzioni per la sicurezza e il backup, con licenze in regola e configurate a dovere.",
      "Ti aiutiamo a scegliere configurazioni equilibrate, pensate per durare e per crescere insieme all'azienda."
    ],
    perche: "Un acquisto sbagliato si paga due volte: prima nell'investimento, poi nei problemi e nelle sostituzioni anticipate.",
    statistiche: [
      { numero: "marchi affidabili", testo: "forniamo hardware dei produttori più solidi sul mercato, come Dell e Lenovo", fonte: "" },
      { numero: "hardware + software", testo: "un unico fornitore per macchine, licenze e configurazione", fonte: "" },
      { numero: "su misura", testo: "configurazioni scelte in base alle reali esigenze, senza sprechi", fonte: "" }
    ],
    casiUso: [
      "Rinnovo del parco PC dell'ufficio",
      "Acquisto di un nuovo server o di un sistema di storage",
      "Fornitura di componenti e accessori per la rete",
      "Fornitura di software e licenze: sistemi operativi, Office, sicurezza e backup",
      "Consulenza pre-acquisto per scegliere la configurazione giusta"
    ],
    aChiServe: [
      "Aziende che devono rinnovare o ampliare la dotazione informatica",
      "Chi vuole un consiglio indipendente prima di acquistare",
      "Attività che cercano un unico fornitore affidabile"
    ],
    approfondimenti: [
      { titolo: "Perché farsi consigliare prima di acquistare?", testo: "Perché la configurazione giusta dipende dall'uso reale: un acquisto sovradimensionato è denaro sprecato, uno sottodimensionato crea rallentamenti e sostituzioni anticipate. Un consiglio indipendente ti fa spendere il giusto, senza pagare per ciò che non ti serve." },
      { titolo: "Cosa vuol dire configurazione scalabile?", testo: "Significa scegliere hardware che possa crescere insieme all'azienda — per esempio un server con spazio per aggiungere memoria o dischi in seguito — evitando di dover ricominciare da capo al primo aumento delle esigenze." }
    ],
    approccio: [
      { titolo: "Analisi delle esigenze", testo: "Capiamo come lavori e cosa ti serve davvero, oggi e nei prossimi anni." },
      { titolo: "Proposta", testo: "Ti proponiamo configurazioni equilibrate, con alternative e prezzi chiari." },
      { titolo: "Fornitura e installazione", testo: "Consegniamo e, se vuoi, installiamo e configuriamo tutto, pronto all'uso." }
    ],
    faq: [
      { domanda: "Che marchi trattate?", risposta: "Produttori affidabili come Dell e Lenovo, oltre a componenti e accessori di qualità per PC e reti." },
      { domanda: "Fornite anche i software?", risposta: "Sì: sistemi operativi, applicativi da ufficio e soluzioni per sicurezza e backup, con licenze regolari e già configurate." },
      { domanda: "Posso farmi consigliare senza impegno?", risposta: "Certo: la consulenza prima dell'acquisto è parte del servizio." },
      { domanda: "Vi occupate anche dell'installazione?", risposta: "Sì, possiamo consegnare e configurare hardware e software pronti all'uso." }
    ]
  },
  {
    id: "consulenza-assistenza",
    nome: "Consulenza e Assistenza",
    occhiello: "Servizio · Consulenza",
    titolo: "Consulenza e <span class=\"gradiente\">assistenza</span>",
    sottotitolo: "Individuiamo insieme a te le soluzioni più adatte e ti seguiamo nella loro realizzazione, anche con assistenza remota.",
    colore: "#ec7211",
    descrizione: [
      "Il mondo informatico cambia in fretta e non è sempre facile capire quali strumenti servono davvero. Ti affianchiamo come consulente di fiducia: analizziamo le esigenze, proponiamo soluzioni concrete e ti seguiamo nella loro realizzazione.",
      "Grazie all'assistenza remota possiamo intervenire rapidamente sui problemi quotidiani, senza dover attendere un intervento in sede."
    ],
    perche: "Avere un interlocutore unico e competente evita scelte sbagliate, doppioni e tempo perso a coordinare fornitori diversi.",
    statistiche: [
      { numero: "assistenza remota", testo: "interventi rapidi sui problemi urgenti, con la partecipazione dell'operatore", fonte: "" },
      { numero: "dal 2000", testo: "al fianco delle aziende del territorio reggiano", fonte: "" }
    ],
    casiUso: [
      "Scelta di nuovi software o servizi per l'azienda",
      "Supporto nella digitalizzazione di processi manuali",
      "Assistenza rapida da remoto sui problemi di tutti i giorni",
      "Affiancamento nella gestione dei fornitori informatici"
    ],
    aChiServe: [
      "Aziende senza un reparto IT interno",
      "Chi cerca un punto di riferimento stabile per l'informatica",
      "Attività che vogliono migliorare o digitalizzare i propri processi"
    ],
    approfondimenti: [
      { titolo: "Che cos'è l'assistenza remota?", testo: "È la possibilità di collegarci in sicurezza al tuo computer, con il tuo consenso, per vedere il problema e risolverlo in diretta. Molti interventi si concludono in pochi minuti, senza bisogno di spostamenti né di attese." },
      { titolo: "Perché avere un interlocutore unico?", testo: "Perché evita di dover coordinare fornitori diversi che non si parlano tra loro. Un unico referente conosce la tua infrastruttura, mantiene coerenti le scelte nel tempo e ti fa risparmiare tempo ed errori." }
    ],
    approccio: [
      { titolo: "Ascolto", testo: "Partiamo dalle tue esigenze e dai problemi concreti da risolvere." },
      { titolo: "Proposta", testo: "Individuiamo le soluzioni più adatte e te le spieghiamo in modo semplice." },
      { titolo: "Realizzazione e supporto", testo: "Ti seguiamo nella realizzazione e restiamo raggiungibili nel tempo, anche da remoto." }
    ],
    faq: [
      { domanda: "Posso contattarvi anche per un singolo problema?", risposta: "Sì, anche per interventi occasionali: non serve un contratto continuativo." },
      { domanda: "Fate assistenza da remoto?", risposta: "Sì: per i problemi urgenti ci colleghiamo subito, con il tuo consenso." },
      { domanda: "Lavorate anche con software non vostri?", risposta: "Sì, ti aiutiamo a scegliere e gestire anche soluzioni di terze parti." }
    ]
  }
];

/* ============================================================
   CERTIFICAZIONI — privacy, GDPR e sicurezza
   ------------------------------------------------------------
   Compaiono nella home e nella pagina "Privacy, GDPR e
   Conformità". Finché l'array è vuoto le relative sezioni
   restano nascoste (nessun contenuto incompleto sul sito).

   Per pubblicarle aggiungi un oggetto per ogni certificazione:
     { nome: "Nome certificazione",
       ente: "Ente che la rilascia",   // opzionale
       anno: "2025",                    // opzionale
       immagine: "assets/img/cert-xxx.png" } // opzionale (logo)
   e fai commit + push.
   ============================================================ */

const CERTIFICAZIONI = [
  { nome: "Master per Privacy Officer e Consulente della Privacy", ente: "Federprivacy" },
  { nome: "Direttiva NIS2: indicazioni operative", ente: "Wolters Kluwer" },
  { nome: "Cloud Tech Associate — Advanced Disaster Recovery", ente: "Acronis" },
  { nome: "Acronis Sales Professional", ente: "Acronis" },
  { nome: "VMware Technical Solutions Professional (VTSP)", ente: "VMware" },
  { nome: "VMware Sales Professional (VSP)", ente: "VMware" }
];
