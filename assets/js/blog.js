/* ============================================================
   BLOG / ANNUNCI — F.R. di Busato Fausto
   ------------------------------------------------------------
   Gli annunci vivono in assets/data/annunci.json. Per pubblicarne
   uno nuovo NON serve toccare questo file: aggiungi una voce
   all'array del JSON e fai commit + push su Git. Campi:

     id         → identificativo univoco (senza spazi)
     data       → data in formato ISO "AAAA-MM-GG" (usata per l'ordine)
     dataLabel  → data leggibile, es. "30 luglio 2026"
     tag        → categoria breve, es. "Novità", "Beta", "Rilascio"
     titolo     → titolo dell'annuncio
     anteprima  → testo mostrato sulla card (testo semplice)
     corpo      → contenuto completo nel pop-up: array di paragrafi
                  (è consentito HTML semplice: <strong>, <em>, <a>)
     link       → (opzionale) { testo, url } per un collegamento

   La fetch è locale (stesso dominio): nessun servizio terzo.
   ============================================================ */
(function () {
  "use strict";

  const grigliaPiena = document.getElementById("blog-griglia");
  const anteprima = document.getElementById("blog-anteprima");
  const contenitore = grigliaPiena || anteprima;
  if (!contenitore) return;

  const vuoto = document.getElementById("blog-vuoto");
  const modal = document.getElementById("annuncio-modal");
  const limite = anteprima ? parseInt(anteprima.dataset.limite || "3", 10) : Infinity;

  /* ---------- Pop-up di dettaglio (dialog nativo) ---------- */
  function apri(annuncio) {
    if (!modal) return;
    modal.querySelector(".annuncio-modal-data").textContent = annuncio.dataLabel || "";
    modal.querySelector(".annuncio-modal-tag").textContent = annuncio.tag || "";
    modal.querySelector(".annuncio-modal-titolo").textContent = annuncio.titolo || "";

    const corpo = modal.querySelector(".annuncio-modal-corpo");
    const paragrafi = Array.isArray(annuncio.corpo) ? annuncio.corpo : [annuncio.anteprima || ""];
    corpo.innerHTML = paragrafi.map(function (p) { return "<p>" + p + "</p>"; }).join("");

    const pieCollega = modal.querySelector(".annuncio-modal-link");
    if (annuncio.link && annuncio.link.url) {
      pieCollega.textContent = (annuncio.link.testo || "Scopri di più") + " →";
      pieCollega.href = annuncio.link.url;
      const esterno = /^https?:/i.test(annuncio.link.url);
      if (esterno) { pieCollega.target = "_blank"; pieCollega.rel = "noopener noreferrer"; }
      else { pieCollega.removeAttribute("target"); pieCollega.removeAttribute("rel"); }
      pieCollega.hidden = false;
    } else {
      pieCollega.hidden = true;
    }

    if (typeof modal.showModal === "function") modal.showModal();
  }

  if (modal) {
    const chiudi = modal.querySelector(".annuncio-modal-chiudi");
    if (chiudi) chiudi.addEventListener("click", function () { modal.close(); });
    modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
  }

  /* ---------- Costruzione di una card ---------- */
  function costruisciCard(annuncio) {
    const card = document.createElement("article");
    card.className = "annuncio";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-label", annuncio.titolo + " — apri l'annuncio");

    const meta = document.createElement("div");
    meta.className = "annuncio-meta";
    const data = document.createElement("span");
    data.className = "annuncio-data";
    data.textContent = annuncio.dataLabel || "";
    meta.appendChild(data);
    if (annuncio.tag) {
      const tag = document.createElement("span");
      tag.className = "annuncio-tag";
      tag.textContent = annuncio.tag;
      meta.appendChild(tag);
    }

    const titolo = document.createElement("h3");
    titolo.className = "annuncio-titolo";
    titolo.textContent = annuncio.titolo || "";

    const testo = document.createElement("p");
    testo.className = "annuncio-testo";
    testo.textContent = annuncio.anteprima || "";

    const azione = document.createElement("span");
    azione.className = "annuncio-azione";
    azione.innerHTML = "Leggi l'annuncio <span aria-hidden=\"true\">→</span>";

    card.append(meta, titolo, testo, azione);

    card.addEventListener("click", function () { apri(annuncio); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); apri(annuncio); }
    });
    return card;
  }

  /* ---------- Caricamento dati e rendering ---------- */
  fetch("assets/data/annunci.json", { cache: "no-cache" })
    .then(function (res) {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then(function (annunci) {
      if (!Array.isArray(annunci) || annunci.length === 0) {
        if (vuoto) { vuoto.textContent = "Non ci sono ancora annunci. Torna a trovarci presto!"; vuoto.hidden = false; }
        return;
      }
      annunci
        .slice()
        .sort(function (a, b) { return String(b.data).localeCompare(String(a.data)); })
        .slice(0, limite)
        .forEach(function (annuncio) { contenitore.appendChild(costruisciCard(annuncio)); });
    })
    .catch(function () {
      if (vuoto) {
        vuoto.textContent = "Non è stato possibile caricare gli annunci in questo momento.";
        vuoto.hidden = false;
      }
    });
})();
