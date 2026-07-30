/* ============================================================
   Certificazioni — render nelle sezioni con .certificazioni-griglia
   ------------------------------------------------------------
   I dati vivono in CERTIFICAZIONI (servizi-dati.js). Finché l'array
   è vuoto, le sezioni contrassegnate da [data-cert-sezione] restano
   nascoste: nessun contenuto incompleto viene mostrato.
   ============================================================ */
(function () {
  "use strict";

  if (typeof CERTIFICAZIONI === "undefined") return;
  const griglie = document.querySelectorAll(".certificazioni-griglia");
  if (!griglie.length) return;

  griglie.forEach(function (griglia) {
    const sezione = griglia.closest("[data-cert-sezione]");

    if (!CERTIFICAZIONI.length) {
      if (sezione) sezione.hidden = true;
      return;
    }

    if (sezione) sezione.hidden = false;

    CERTIFICAZIONI.forEach(function (c) {
      const card = document.createElement("div");
      card.className = "certificazione";

      if (c.immagine) {
        const img = document.createElement("img");
        img.src = c.immagine;
        img.alt = c.nome || "Certificazione";
        img.loading = "lazy";
        card.appendChild(img);
      } else {
        const badge = document.createElement("span");
        badge.className = "certificazione-badge";
        badge.setAttribute("aria-hidden", "true");
        badge.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z\"/><path d=\"M8.5 13.5 7 22l5-3 5 3-1.5-8.5\"/></svg>";
        card.appendChild(badge);
      }

      const testo = document.createElement("div");
      testo.className = "certificazione-testo";
      const nome = document.createElement("strong");
      nome.textContent = c.nome || "";
      testo.appendChild(nome);
      const dettaglio = [c.ente, c.anno].filter(Boolean).join(" · ");
      if (dettaglio) {
        const span = document.createElement("span");
        span.textContent = dettaglio;
        testo.appendChild(span);
      }
      card.appendChild(testo);

      griglia.appendChild(card);
    });
  });
})();
