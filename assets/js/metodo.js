/* ============================================================
   Il metodo (sviluppo-software.html#metodo) — la linea del
   percorso si accende mentre lo si legge: arriva fino a poco
   sotto la metà dello schermo, e ogni tappa raggiunta si accende.
   Ogni tappa disegna il tratto fino alla successiva (CSS
   .tappa::after) e riceve qui quanto ne è acceso, in --avanza.
   Senza script, o con il movimento ridotto, resta tutto acceso:
   lo stato spento lo aggiunge solo questo file (.percorso-vivo).
   ============================================================ */
(function () {
  "use strict";

  var percorso = document.querySelector(".percorso");
  if (!percorso) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var tappe = Array.prototype.slice.call(percorso.querySelectorAll(".tappa"));
  var segni = tappe.map(function (t) { return t.querySelector(".tappa-segno"); });
  percorso.classList.add("percorso-vivo");

  var inAttesa = false;
  function aggiorna() {
    inAttesa = false;
    var soglia = window.innerHeight * 0.58;
    var centri = segni.map(function (s) {
      var r = s.getBoundingClientRect();
      return r.top + r.height / 2;
    });
    tappe.forEach(function (t, i) {
      t.classList.toggle("accesa", centri[i] <= soglia);
      if (i === centri.length - 1) return;
      var tratto = centri[i + 1] - centri[i];
      var acceso = tratto > 0 ? (soglia - centri[i]) / tratto : 1;
      t.style.setProperty("--avanza", Math.max(0, Math.min(1, acceso)).toFixed(4));
    });
  }
  function chiedi() {
    if (inAttesa) return;
    inAttesa = true;
    requestAnimationFrame(aggiorna);
  }

  window.addEventListener("scroll", chiedi, { passive: true });
  window.addEventListener("resize", chiedi);
  aggiorna();
})();
