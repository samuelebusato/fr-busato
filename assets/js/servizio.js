/* ============================================================
   Pagina servizio — rendering dinamico (servizio.html?id=...)
   Legge i dati da SERVIZI (servizi-dati.js) e costruisce la pagina.
   ============================================================ */
(function () {
  "use strict";

  if (typeof SERVIZI === "undefined") return;
  const cont = document.getElementById("servizio-contenuto");
  if (!cont) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const s = SERVIZI.find(function (x) { return x.id === id; });

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  /* Servizio non trovato */
  if (!s) {
    cont.innerHTML =
      "<section class=\"sezione container\">" +
      "<p class=\"eyebrow\">Servizio</p>" +
      "<h1>Servizio non trovato</h1>" +
      "<p class=\"sottotitolo\" style=\"margin-top:1rem\">Il servizio richiesto non esiste. Torna alla home per scoprire tutti i nostri servizi.</p>" +
      "<p style=\"margin-top:1.6rem\"><a class=\"btn btn-pieno\" href=\"index.html#servizi\">Tutti i servizi</a></p>" +
      "</section>";
    return;
  }

  document.title = s.nome + " — F.R. di Busato Fausto";
  /* Le pagine servizio usano l'accento della home (blu): nessun override. */
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", s.nome + " — " + s.sottotitolo);

  /* ---- Hero ---- */
  const hero = el("section", "sezione container servizio-hero");
  const torna = el("a", "torna", "<span aria-hidden=\"true\">←</span> Tutti i servizi");
  torna.href = "index.html#servizi";
  hero.appendChild(torna);
  hero.insertAdjacentHTML("beforeend",
    "<p class=\"eyebrow entra\">" + s.occhiello + "</p>" +
    "<h1 class=\"entra\" data-passo=\"1\">" + s.titolo + "</h1>" +
    "<p class=\"sottotitolo entra\" data-passo=\"2\" style=\"margin-top:1.1rem\">" + s.sottotitolo + "</p>" +
    "<div class=\"hero-azioni entra\" data-passo=\"3\" style=\"margin-top:1.7rem\">" +
      "<a class=\"btn btn-pieno\" href=\"index.html#contatti\">Richiedi informazioni</a>" +
      "<a class=\"btn btn-vuoto\" href=\"index.html#servizi\">Altri servizi →</a>" +
    "</div>");
  cont.appendChild(hero);

  /* ---- Cos'è ---- */
  if (s.descrizione && s.descrizione.length) {
    const sez = el("section", "sezione container servizio-sezione rivela");
    sez.appendChild(el("h2", null, "Cos'è"));
    const wrap = el("div", "servizio-testo");
    s.descrizione.forEach(function (p) { wrap.appendChild(el("p", null, p)); });
    sez.appendChild(wrap);
    cont.appendChild(sez);
  }

  /* ---- In dettaglio (approfondimenti / spiegazioni) ---- */
  if (s.approfondimenti && s.approfondimenti.length) {
    const sez = el("section", "sezione container servizio-sezione rivela");
    sez.appendChild(el("h2", null, "In dettaglio"));
    const wrap = el("div", "servizio-approfondimenti");
    s.approfondimenti.forEach(function (a) {
      const box = el("div", "approfondimento");
      box.appendChild(el("h3", null, a.titolo));
      const testi = Array.isArray(a.testo) ? a.testo : [a.testo];
      testi.forEach(function (t) { box.appendChild(el("p", null, t)); });
      wrap.appendChild(box);
    });
    sez.appendChild(wrap);
    cont.appendChild(sez);
  }

  /* ---- Perché è importante (dati) ---- */
  if (s.statistiche && s.statistiche.length) {
    const sez = el("section", "sezione container servizio-sezione rivela");
    sez.appendChild(el("h2", null, "Perché è importante"));
    if (s.perche) sez.appendChild(el("p", "sottotitolo", s.perche));
    const grid = el("div", "stat-griglia");
    s.statistiche.forEach(function (st) {
      const c = el("div", "stat");
      c.appendChild(el("span", "stat-num", st.numero));
      c.appendChild(el("span", "stat-testo", st.testo));
      if (st.fonte) c.appendChild(el("span", "stat-fonte", "Fonte: " + st.fonte));
      grid.appendChild(c);
    });
    sez.appendChild(grid);
    cont.appendChild(sez);
  }

  /* ---- Come lavoriamo (approccio) ---- */
  if (s.approccio && s.approccio.length) {
    const sez = el("section", "sezione container servizio-sezione rivela");
    sez.appendChild(el("h2", null, "Come lavoriamo"));
    const ol = el("ol", "servizio-approccio");
    s.approccio.forEach(function (p) {
      const li = document.createElement("li");
      const box = el("div", "passo-testo");
      box.appendChild(el("strong", null, p.titolo));
      box.appendChild(el("p", null, p.testo));
      li.appendChild(box);
      ol.appendChild(li);
    });
    sez.appendChild(ol);
    cont.appendChild(sez);
  }

  /* ---- Casi d'uso + A chi serve ---- */
  if ((s.casiUso && s.casiUso.length) || (s.aChiServe && s.aChiServe.length)) {
    const sez = el("section", "sezione container servizio-sezione rivela");
    const grid = el("div", "servizio-doppia");
    function blocco(titolo, voci) {
      const box = el("div", "servizio-blocco");
      box.appendChild(el("h2", null, titolo));
      const ul = el("ul", "lista-check");
      voci.forEach(function (x) { ul.appendChild(el("li", null, x)); });
      box.appendChild(ul);
      return box;
    }
    if (s.casiUso && s.casiUso.length) grid.appendChild(blocco("Casi d'uso", s.casiUso));
    if (s.aChiServe && s.aChiServe.length) grid.appendChild(blocco("A chi serve", s.aChiServe));
    sez.appendChild(grid);
    cont.appendChild(sez);
  }

  /* ---- Domande frequenti (FAQ del servizio) ---- */
  if (s.faq && s.faq.length) {
    const sez = el("section", "sezione container servizio-sezione rivela");
    sez.appendChild(el("h2", null, "Domande frequenti"));
    const wrap = el("div", "faq");
    s.faq.forEach(function (f) {
      const d = document.createElement("details");
      d.className = "faq-item";
      const sum = document.createElement("summary");
      sum.textContent = f.domanda;
      d.appendChild(sum);
      d.appendChild(el("p", null, f.risposta));
      wrap.appendChild(d);
    });
    sez.appendChild(wrap);
    cont.appendChild(sez);
  }

  /* ---- Certificazioni (riempite da certificazioni.js) ---- */
  if (s.certificazioni) {
    const sez = el("section", "sezione container servizio-sezione rivela");
    sez.setAttribute("data-cert-sezione", "");
    sez.hidden = true;
    sez.appendChild(el("h2", null, "Certificazioni"));
    sez.appendChild(el("p", "sottotitolo", "Le certificazioni che attestano la nostra competenza in materia di privacy, conformità, sicurezza e continuità operativa."));
    sez.appendChild(el("div", "certificazioni-griglia"));
    cont.appendChild(sez);
  }

  /* ---- Call to action finale ---- */
  const cta = el("section", "sezione container");
  cta.innerHTML =
    "<div class=\"callout rivela\">" +
      "<div><p class=\"eyebrow\">" + s.nome + "</p><h2>Parliamo del tuo progetto.</h2>" +
      "<p>Raccontaci le tue esigenze: individueremo insieme la soluzione più adatta alla tua azienda.</p></div>" +
      "<a class=\"btn btn-pieno\" href=\"index.html#contatti\">Contattaci</a>" +
    "</div>";
  cont.appendChild(cta);
})();
