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
      "Una rete aziendale ben progettata è la base di tutto: collega postazioni, server e servizi cloud e, allo stesso tempo, deve proteggerli. Ci occupiamo della progettazione, della configurazione e della gestione di reti sicure, con firewall, segmentazione, backup e sistemi di protezione dei dati basati su soluzioni Panda Security e Acronis.",
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
    ]
  },
  {
    id: "fornitura-hardware",
    nome: "Fornitura Hardware",
    occhiello: "Servizio · Fornitura",
    titolo: "Fornitura <span class=\"gradiente\">hardware</span>",
    sottotitolo: "Consigliamo e forniamo PC, server, componenti e accessori dei migliori marchi, scelti in base alle tue reali esigenze.",
    colore: "#14b8a6",
    descrizione: [
      "Acquistare la tecnologia giusta significa non spendere più del necessario e avere strumenti adatti al proprio lavoro. Dopo un'analisi delle esigenze, forniamo componenti, PC, server e accessori per reti dei marchi più affidabili, come Dell.",
      "Ti aiutiamo a scegliere configurazioni equilibrate, pensate per durare e per crescere insieme all'azienda."
    ],
    perche: "Un acquisto sbagliato si paga due volte: prima nell'investimento, poi nei problemi e nelle sostituzioni anticipate.",
    statistiche: [
      { numero: "marchi affidabili", testo: "forniamo hardware dei produttori più solidi sul mercato, come Dell", fonte: "" },
      { numero: "su misura", testo: "configurazioni scelte in base alle reali esigenze, senza sprechi", fonte: "" }
    ],
    casiUso: [
      "Rinnovo del parco PC dell'ufficio",
      "Acquisto di un nuovo server o di un sistema di storage",
      "Fornitura di componenti e accessori per la rete",
      "Consulenza pre-acquisto per scegliere la configurazione giusta"
    ],
    aChiServe: [
      "Aziende che devono rinnovare o ampliare la dotazione informatica",
      "Chi vuole un consiglio indipendente prima di acquistare",
      "Attività che cercano un unico fornitore affidabile"
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
  // Esempio (da compilare con le certificazioni reali):
  // { nome: "ISO/IEC 27001", ente: "Ente certificatore", anno: "2025", immagine: "assets/img/cert-iso27001.png" }
];
