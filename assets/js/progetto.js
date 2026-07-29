/* ============================================================
   Pagina progetto — rendering dinamico
   Il colore della label del progetto diventa il colore
   secondario dell'intera pagina (al posto del blu).
   ============================================================ */
(function () {
  "use strict";

  if (typeof PROGETTI === "undefined") return;

  const testa = document.getElementById("progetto-testa");
  const corpo = document.getElementById("progetto-corpo");
  if (!testa || !corpo) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const progetto = PROGETTI.find(function (p) { return p.id === id; });

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

  /* Intestazione */
  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow entra";
  eyebrow.textContent = progetto.categoria + " · " + progetto.anno;

  const h1 = document.createElement("h1");
  h1.className = "entra";
  h1.dataset.passo = "1";
  h1.innerHTML = "<span class=\"gradiente\">" + progetto.nome + "</span>";

  const breve = document.createElement("p");
  breve.className = "sottotitolo entra";
  breve.dataset.passo = "2";
  breve.style.marginTop = "1.1rem";
  breve.textContent = progetto.breve;

  const meta = document.createElement("div");
  meta.className = "progetto-meta entra";
  meta.dataset.passo = "3";
  (progetto.tecnologie || []).forEach(function (t) {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = t;
    meta.appendChild(tag);
  });

  testa.append(eyebrow, h1, breve, meta);

  /* Corpo: testi a sinistra, galleria a destra */
  const colonnaTesti = document.createElement("div");
  colonnaTesti.className = "rivela";

  function blocco(titolo, testo) {
    const div = document.createElement("div");
    div.className = "progetto-blocco";
    const h = document.createElement("h2");
    h.textContent = titolo;
    const p = document.createElement("p");
    p.textContent = testo;
    div.append(h, p);
    return div;
  }

  if (progetto.contesto) colonnaTesti.appendChild(blocco("Il contesto", progetto.contesto));
  if (progetto.soluzione) colonnaTesti.appendChild(blocco("La soluzione", progetto.soluzione));

  if (progetto.funzionalita && progetto.funzionalita.length) {
    const div = document.createElement("div");
    div.className = "progetto-blocco";
    const h = document.createElement("h2");
    h.textContent = "Funzionalità principali";
    const ul = document.createElement("ul");
    ul.className = "lista-funzioni";
    progetto.funzionalita.forEach(function (f) {
      const li = document.createElement("li");
      li.textContent = f;
      ul.appendChild(li);
    });
    div.append(h, ul);
    colonnaTesti.appendChild(div);
  }

  /* Galleria immagini oppure segnaposto elegante */
  const colonnaGalleria = document.createElement("div");
  colonnaGalleria.className = "rivela";
  colonnaGalleria.dataset.ritardo = "1";
  if (progetto.immagini && progetto.immagini.length) {
    const galleria = document.createElement("div");
    galleria.className = "galleria";
    progetto.immagini.forEach(function (src, i) {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Schermata " + (i + 1) + " di " + progetto.nome;
      img.loading = "lazy";
      galleria.appendChild(img);
    });
    colonnaGalleria.appendChild(galleria);
  } else {
    const segnaposto = document.createElement("div");
    segnaposto.className = "galleria-segnaposto";
    segnaposto.innerHTML =
      "<div><strong>Immagini in arrivo</strong>" +
      "Le schermate di " + progetto.nome + " saranno caricate presto in questa sezione.</div>";
    colonnaGalleria.appendChild(segnaposto);
  }

  corpo.append(colonnaTesti, colonnaGalleria);
})();
