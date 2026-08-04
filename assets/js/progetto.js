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

  testa.append(eyebrow, h1, breve, meta);

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

  if (progetto.contesto) {
    rigaDuo(bloccoTesto("01", "Il contesto", progetto.contesto, "blocco-contesto"), false);
  }
  if (progetto.soluzione) {
    rigaDuo(bloccoTesto("02", "La soluzione", progetto.soluzione, "blocco-soluzione"), true);
  }
  if (progetto.funzionalita && progetto.funzionalita.length) {
    var ul = document.createElement("ul");
    ul.className = "lista-funzioni";
    progetto.funzionalita.forEach(function (x) {
      var li = document.createElement("li");
      li.textContent = x;
      ul.appendChild(li);
    });
    rigaDuo(bloccoTesto("03", "Funzionalità principali", ul, "blocco-funzioni"), false);
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
