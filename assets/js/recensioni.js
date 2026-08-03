/* ============================================================
   RECENSIONI — F.R. di Busato Fausto
   ------------------------------------------------------------
   Le recensioni MOSTRATE vivono in assets/data/recensioni.json:
   pubblichi solo quelle che approvi (moderazione curata). Per
   aggiungerne una NON serve toccare questo file — aggiungi una
   voce all'array del JSON e fai commit + push su Git. Campi:

     nome     → nome/etichetta di chi scrive (testo semplice)
     stelle   → voto intero da 1 a 5
     commento → testo della recensione (testo semplice)
     data     → (opzionale) data leggibile, es. "agosto 2026"

   Il FORM "lascia una recensione" NON salva nulla e non traccia:
   compone un'email precompilata verso fausto@fr-busato.it (si apre
   il client di posta dell'utente). Coerente con il sito: nessun
   cookie di profilazione, nessuna richiesta a terzi. La recensione
   viene pubblicata solo dopo verifica, aggiungendola al JSON.
   ============================================================ */
(function () {
  "use strict";

  const EMAIL = "fausto@fr-busato.it";
  const MAX = 5;

  // Riflettore che segue il cursore sulle card: attivo solo con puntatore
  // fine (no touch) e movimento consentito. Degrada in sicurezza — senza,
  // il riflettore CSS resta centrato di default.
  const RIFLETTORE =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Testo semplice: neutralizza eventuale HTML ---------- */
  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = String(str);
    return div.innerHTML;
  }

  /* ---------- Riga di stelle (sola visualizzazione) ---------- */
  function starsMarkup(n) {
    const v = Math.max(0, Math.min(MAX, Math.round(n)));
    let out = "";
    for (let i = 1; i <= MAX; i++) {
      out += '<span class="stella ' + (i <= v ? "piena" : "") + '" aria-hidden="true">★</span>';
    }
    return out;
  }

  /* ---------- Render elenco + riepilogo media ---------- */
  function render(list) {
    const griglia = document.getElementById("recensioni-griglia");
    const vuoto = document.getElementById("recensioni-vuoto");
    const riepilogo = document.getElementById("recensioni-riepilogo");
    if (!griglia) return;

    const valide = Array.isArray(list)
      ? list.filter(function (r) { return r && r.nome && r.commento && Number(r.stelle) >= 1; })
      : [];

    if (valide.length === 0) {
      if (vuoto) vuoto.hidden = false;
      if (riepilogo) riepilogo.hidden = true;
      return;
    }
    if (vuoto) vuoto.hidden = true;

    if (riepilogo) {
      const media = valide.reduce(function (s, r) { return s + Math.min(MAX, Number(r.stelle)); }, 0) / valide.length;
      const numEl = document.getElementById("recensioni-media");
      const stelleEl = document.getElementById("recensioni-media-stelle");
      const contaEl = document.getElementById("recensioni-conteggio");
      if (numEl) numEl.textContent = media.toFixed(1).replace(".", ",");
      if (stelleEl) stelleEl.innerHTML = starsMarkup(media);
      if (contaEl) contaEl.textContent = valide.length === 1 ? "1 recensione" : valide.length + " recensioni";
      riepilogo.hidden = false;
    }

    valide.forEach(function (r) {
      const stelle = Math.min(MAX, Number(r.stelle));
      const card = document.createElement("figure");
      card.className = "recensione";
      const nomePulito = String(r.nome).trim();
      const iniziale = (nomePulito.charAt(0) || "?").toUpperCase();
      card.innerHTML =
        '<div class="recensione-stelle" role="img" aria-label="' + stelle + ' su ' + MAX + ' stelle">' + starsMarkup(stelle) + "</div>" +
        '<blockquote class="recensione-testo">' + escapeHtml(r.commento) + "</blockquote>" +
        '<figcaption class="recensione-autore">' +
          '<span class="recensione-mono" aria-hidden="true">' + escapeHtml(iniziale) + "</span>" +
          '<span class="recensione-autore-testo">' +
            '<span class="recensione-nome">' + escapeHtml(nomePulito) + "</span>" +
            (r.data ? '<span class="recensione-data">' + escapeHtml(r.data) + "</span>" : "") +
          "</span>" +
        "</figcaption>";
      griglia.appendChild(card);

      if (RIFLETTORE) {
        card.addEventListener("mousemove", function (e) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--mx", (e.clientX - rect.left) + "px");
          card.style.setProperty("--my", (e.clientY - rect.top) + "px");
        });
      }
    });
  }

  /* ---------- Selettore di stelle del form (radiogroup accessibile) ---------- */
  function costruisciStelle() {
    const box = document.getElementById("rec-stelle-input");
    if (!box) return function () { return 0; };
    let valore = 0;
    const btns = [];

    function dipingi(hover) {
      const attivo = hover || valore;
      btns.forEach(function (b, idx) {
        b.classList.toggle("piena", idx < attivo);
        b.setAttribute("aria-checked", String(idx + 1 === valore));
        b.tabIndex = idx + 1 === (valore || 1) ? 0 : -1;
      });
    }

    for (let i = 1; i <= MAX; i++) {
      (function (i) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "rec-stella";
        b.setAttribute("role", "radio");
        b.setAttribute("aria-label", i === 1 ? "1 stella" : i + " stelle");
        b.textContent = "★";
        b.addEventListener("click", function () { valore = i; dipingi(); });
        b.addEventListener("mouseenter", function () { dipingi(i); });
        b.addEventListener("focus", function () { dipingi(i); });
        b.addEventListener("keydown", function (e) {
          if (e.key === "ArrowRight" || e.key === "ArrowUp") { e.preventDefault(); valore = Math.min(MAX, (valore || 0) + 1); dipingi(); btns[valore - 1].focus(); }
          else if (e.key === "ArrowLeft" || e.key === "ArrowDown") { e.preventDefault(); valore = Math.max(1, (valore || 1) - 1); dipingi(); btns[valore - 1].focus(); }
          else if (e.key === " " || e.key === "Enter") { e.preventDefault(); valore = i; dipingi(); }
        });
        btns.push(b);
        box.appendChild(b);
      })(i);
    }
    box.addEventListener("mouseleave", function () { dipingi(); });
    dipingi();
    return function () { return valore; };
  }

  /* ---------- Form: compone l'email precompilata ---------- */
  function collegaForm(leggiStelle) {
    const form = document.getElementById("recensione-form");
    if (!form) return;
    const err = document.getElementById("rec-errore");
    const ok = document.getElementById("rec-ok");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nome = (document.getElementById("rec-nome").value || "").trim();
      const commento = (document.getElementById("rec-commento").value || "").trim();
      const stelle = leggiStelle();

      if (!nome || !commento || stelle < 1) {
        if (err) {
          err.textContent = stelle < 1
            ? "Seleziona un voto da 1 a 5 stelle."
            : "Compila nome e commento per continuare.";
          err.hidden = false;
        }
        return;
      }
      if (err) err.hidden = true;

      const oggetto = "Recensione F.R. di Busato Fausto — " + stelle + " " + (stelle === 1 ? "stella" : "stelle");
      const corpo =
        "Nome: " + nome + "\n" +
        "Valutazione: " + stelle + "/" + MAX + " stelle\n\n" +
        "Commento:\n" + commento + "\n\n" +
        "— Inviato dal form recensioni di fr-busato.it";
      window.location.href =
        "mailto:" + EMAIL + "?subject=" + encodeURIComponent(oggetto) + "&body=" + encodeURIComponent(corpo);

      if (ok) ok.hidden = false;
    });
  }

  /* ---------- Avvio ---------- */
  const leggiStelle = costruisciStelle();
  collegaForm(leggiStelle);

  fetch("assets/data/recensioni.json", { cache: "no-cache" })
    .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); })
    .then(function (list) { render(list); })
    .catch(function () { render([]); });
})();
