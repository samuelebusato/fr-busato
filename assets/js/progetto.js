/* ============================================================
   Pagina progetto — rendering dinamico, layout editoriale a
   righe alternate: blocco di testo e immagine fianco a fianco,
   con i lati che si invertono a ogni riga (zig-zag).
   Il colore del progetto diventa l'accento dell'intera pagina.

   Immagini per convenzione: assets/img/progetti/image_<id>/
   con file 1,2,3 (jpg/jpeg/png/webp). L'immagine N accompagna
   la riga N. Se manca, la riga occupa tutta la larghezza col
   solo testo; nella prima riga, in assenza di immagine, appare
   il motivo animato del progetto come pannello decorativo.
   ============================================================ */
(function () {
  "use strict";

  if (typeof PROGETTI === "undefined") return;

  var testa = document.getElementById("progetto-testa");
  var corpo = document.getElementById("progetto-corpo");
  if (!testa || !corpo) return;

  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");

  /* Progetti diventati servizi: il vecchio indirizzo porta alla pagina nuova,
     così i link già pubblicati (annunci, siti esterni) non si rompono. */
  var SPOSTATI = { cyberse: "cyberse.html" };
  if (Object.prototype.hasOwnProperty.call(SPOSTATI, id)) {
    window.location.replace(SPOSTATI[id]);
    return;
  }

  var progetto = PROGETTI.find(function (p) { return p.id === id; });

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Progetto non trovato */
  if (!progetto) {
    testa.innerHTML =
      "<h1>Progetto non trovato</h1>" +
      "<p class=\"sottotitolo\" style=\"margin-top:1rem\">Il progetto richiesto non esiste o non è più disponibile. " +
      "Torna all'elenco per scoprire tutti i nostri lavori.</p>" +
      "<p style=\"margin-top:1.6rem\"><a class=\"btn btn-pieno\" href=\"sviluppo-software.html\">Vai ai progetti</a></p>";
    return;
  }

  /* Il colore del progetto sostituisce il blu come accento della pagina */
  document.documentElement.style.setProperty("--accent", progetto.colore);
  document.title = progetto.nome + " — F.R. di Busato Fausto";

  /* -------- Intestazione -------- */
  var eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow entra";
  eyebrow.textContent = progetto.categoria + " · " + progetto.anno;

  var h1 = document.createElement("h1");
  h1.className = "entra";
  h1.dataset.passo = "1";
  h1.innerHTML = "<span class=\"gradiente\">" + escapeHtml(progetto.nome) + "</span>";

  var breve = document.createElement("p");
  breve.className = "sottotitolo entra";
  breve.dataset.passo = "2";
  breve.style.marginTop = "1.1rem";
  breve.textContent = progetto.breve;

  var meta = document.createElement("div");
  meta.className = "progetto-meta entra";
  meta.dataset.passo = "3";
  (progetto.tecnologie || []).forEach(function (t) {
    var tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = t;
    meta.appendChild(tag);
  });

  testa.append(eyebrow, h1, breve);

  /* Le cifre in testa (campo opzionale inBreve, dal 2026-10-31): tre numeri che
     dicono subito quanto lavoro c'è dietro, prima delle tecnologie */
  if (progetto.inBreve && progetto.inBreve.length) {
    var cifre = document.createElement("ul");
    cifre.className = "progetto-cifre entra";
    cifre.dataset.passo = "3";
    progetto.inBreve.forEach(function (c) {
      var li = document.createElement("li");
      var v = document.createElement("b");
      v.textContent = c.valore;
      var t = document.createElement("span");
      t.textContent = c.testo;
      li.append(v, t);
      cifre.appendChild(li);
    });
    testa.appendChild(cifre);
    meta.dataset.passo = "4";
  }

  testa.appendChild(meta);

  /* Motivo animato a tema come SFONDO dell'intestazione:
     dietro il contenuto, sfumato verso il colore del progetto
     e il trasparente (mask + velo, CSS .progetto-sfondo) */
  if (window.MOTIVI && MOTIVI.ha(progetto.id)) {
    var hero = testa.closest("section") || testa.parentElement;
    hero.classList.add("progetto-hero-motivo");
    var sfondo = document.createElement("div");
    sfondo.className = "progetto-sfondo";
    sfondo.setAttribute("aria-hidden", "true");
    sfondo.appendChild(MOTIVI.crea(progetto.id));
    hero.insertBefore(sfondo, hero.firstChild);
  }

  /* -------- Corpo: righe alternate testo ↔ immagine -------- */
  corpo.classList.add("progetto-flusso");

  function bloccoTesto(etichetta, titolo, contenuto, cls) {
    var sec = document.createElement("section");
    sec.className = "progetto-blocco " + (cls || "");
    var lab = document.createElement("span");
    lab.className = "blocco-eyebrow";
    lab.textContent = etichetta;
    var h = document.createElement("h2");
    h.textContent = titolo;
    sec.append(lab, h);
    if (typeof contenuto === "string") {
      var p = document.createElement("p");
      p.textContent = contenuto;
      sec.appendChild(p);
    } else if (contenuto) {
      sec.appendChild(contenuto);
    }
    return sec;
  }

  /* Una riga = testo + slot immagine, lati alternati */
  var righe = [];
  function rigaDuo(textEl, inversa) {
    var row = document.createElement("div");
    row.className = "duo rivela" + (inversa ? " duo-inversa" : "");
    var fig = document.createElement("figure");
    fig.className = "duo-img";
    row.append(textEl, fig);
    corpo.appendChild(row);
    righe.push({ row: row, fig: fig });
  }

  /* I numeri delle sezioni (01, 02…) seguono quelle che il progetto ha davvero */
  var numero = 0;
  function prossimoNumero() {
    numero++;
    return (numero < 10 ? "0" : "") + numero;
  }

  /* La griglia di schede di una sezione a tutta larghezza: punti di forza e sezioni */
  function grigliaSchede(punti) {
    var griglia = document.createElement("div");
    griglia.className = "forza-griglia";
    punti.forEach(function (punto, i) {
      var scheda = document.createElement("article");
      scheda.className = "forza-card";
      var n = document.createElement("span");
      n.className = "forza-num";
      n.textContent = (i < 9 ? "0" : "") + (i + 1);
      var h = document.createElement("h3");
      h.textContent = punto.titolo;
      var p = document.createElement("p");
      p.textContent = punto.testo;
      scheda.append(n, h, p);
      griglia.appendChild(scheda);
    });
    return griglia;
  }

  /* Una fila di numeri (campo cifre delle sezioni, dal 2026-10-27): stesso stile
     dei dati nelle pagine dei servizi */
  function grigliaCifre(cifre) {
    var griglia = document.createElement("div");
    griglia.className = "stat-griglia";
    cifre.forEach(function (c) {
      var box = document.createElement("div");
      box.className = "stat";
      var v = document.createElement("span");
      v.className = "stat-num";
      v.textContent = c.valore;
      var t = document.createElement("span");
      t.className = "stat-testo";
      t.textContent = c.testo;
      box.append(v, t);
      griglia.appendChild(box);
    });
    return griglia;
  }

  /* Punti di forza (campo opzionale puntiForza, dal 2026-10-06): una griglia di
     schede a tutta larghezza, con in testa, se ci sono, il paragrafo testoForza e
     la striscia del flusso. Non è una riga con immagine: le immagini 1, 2, 3
     restano di contesto, soluzione e funzionalità */
  function sezioneForza(num) {
    var sec = bloccoTesto(num, progetto.titoloForza || "Punti di forza", progetto.testoForza || null, "blocco-forza rivela");
    if (progetto.flusso && progetto.flusso.length) {
      var flusso = document.createElement("ol");
      flusso.className = "forza-flusso";
      progetto.flusso.forEach(function (passo) {
        var li = document.createElement("li");
        li.textContent = passo;
        if (passo === progetto.nome) li.className = "corrente";
        flusso.appendChild(li);
      });
      sec.appendChild(flusso);
    }
    sec.appendChild(grigliaSchede(progetto.puntiForza));
    return sec;
  }

  /* Il confronto prima/dopo (campo confronto delle sezioni, dal 2026-10-31): la
     stessa tabella del metodo in sviluppo-software.html, CSS .confronto */
  function tabellaConfronto(c) {
    var wrap = document.createElement("div");
    wrap.className = "confronto-wrap";
    var tab = document.createElement("table");
    tab.className = "confronto";
    var colonne = c.colonne || ["Prima", "Dopo"];
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var vuota = document.createElement("th");
    vuota.scope = "col";
    vuota.innerHTML = "<span class=\"sr-only\">Che cosa</span>";
    tr.appendChild(vuota);
    colonne.forEach(function (nome) {
      var th = document.createElement("th");
      th.scope = "col";
      th.textContent = nome;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    var tbody = document.createElement("tbody");
    c.righe.forEach(function (riga) {
      var r = document.createElement("tr");
      var th = document.createElement("th");
      th.scope = "row";
      th.textContent = riga[0];
      r.appendChild(th);
      [riga[1], riga[2]].forEach(function (testo, i) {
        var td = document.createElement("td");
        td.className = i === 0 ? "prima" : "dopo";
        td.dataset.etichetta = colonne[i];
        td.textContent = testo;
        r.appendChild(td);
      });
      tbody.appendChild(r);
    });
    tab.append(thead, tbody);
    wrap.appendChild(tab);
    return wrap;
  }

  /* Altre sezioni a tutta larghezza (campo opzionale sezioni, dal 2026-10-27),
     nello stile dei punti di forza: schede, numeri, confronto, o insieme.
     Dal 2026-10-31: tema "notte" per il riquadro scuro, link per un rimando in fondo */
  function sezioneLibera(num, s) {
    var cls = "blocco-forza rivela" + (s.tema === "notte" ? " blocco-notte" : "");
    var sec = bloccoTesto(num, s.titolo, s.testo || null, cls);
    if (s.confronto && s.confronto.righe) sec.appendChild(tabellaConfronto(s.confronto));
    if (s.punti && s.punti.length) sec.appendChild(grigliaSchede(s.punti));
    if (s.cifre && s.cifre.length) sec.appendChild(grigliaCifre(s.cifre));
    if (s.link && s.link.href) {
      var a = document.createElement("a");
      a.className = "blocco-link";
      a.href = s.link.href;
      a.innerHTML = escapeHtml(s.link.testo) + " <span aria-hidden=\"true\">→</span>";
      sec.appendChild(a);
    }
    return sec;
  }

  if (progetto.contesto) {
    rigaDuo(bloccoTesto(prossimoNumero(), progetto.titoloContesto || "Il contesto", progetto.contesto, "blocco-contesto"), false);
  }
  if (progetto.puntiForza && progetto.puntiForza.length) {
    corpo.appendChild(sezioneForza(prossimoNumero()));
  }
  if (progetto.soluzione) {
    rigaDuo(bloccoTesto(prossimoNumero(), progetto.titoloSoluzione || "La soluzione", progetto.soluzione, "blocco-soluzione"), true);
  }
  (progetto.sezioni || []).forEach(function (s) {
    corpo.appendChild(sezioneLibera(prossimoNumero(), s));
  });
  if (progetto.funzionalita && progetto.funzionalita.length) {
    var ul = document.createElement("ul");
    ul.className = "lista-funzioni";
    progetto.funzionalita.forEach(function (x) {
      var li = document.createElement("li");
      li.textContent = x;
      ul.appendChild(li);
    });
    rigaDuo(bloccoTesto(prossimoNumero(), progetto.titoloFunzionalita || "Funzionalità principali", ul, "blocco-funzioni"), false);
  }

  /* -------- Immagini: la N-esima accompagna la riga N -------- */
  var base = "assets/img/progetti/image_" + progetto.id + "/";
  var exts = ["webp", "jpg", "jpeg", "png"];

  righe.forEach(function (r, i) { provaImmagine(r, i + 1); });

  function provaImmagine(riga, idx) {
    var e = 0;
    (function next() {
      if (e >= exts.length) { senzaImmagine(riga, idx); return; }
      var img = new Image();
      img.onload = function () {
        img.alt = progetto.nome + " — immagine " + idx;
        img.loading = "lazy";
        riga.fig.appendChild(img);
        riga.row.classList.add("con-img");
      };
      img.onerror = function () { e++; next(); };
      img.src = base + idx + "." + exts[e];
    })();
  }

  function senzaImmagine(riga, idx) {
    /* Prima riga senza foto: il motivo del progetto fa da visual */
    if (idx === 1 && window.MOTIVI && MOTIVI.ha(progetto.id)) {
      var pannello = document.createElement("div");
      pannello.className = "duo-motivo";
      pannello.setAttribute("aria-hidden", "true");
      pannello.appendChild(MOTIVI.crea(progetto.id));
      riga.fig.appendChild(pannello);
      riga.row.classList.add("con-img");
      return;
    }
    /* Altrimenti la riga si distende su tutta la larghezza */
    riga.row.classList.add("solo");
  }
})();
