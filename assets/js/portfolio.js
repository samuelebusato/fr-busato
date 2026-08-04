/* ============================================================
   Portfolio — card animate, filtri con transizioni e conteggi
   ============================================================ */
(function () {
  "use strict";

  if (typeof PROGETTI === "undefined") return;

  const riduciMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const puntatoreFine = window.matchMedia("(pointer: fine)").matches;

  /* Osservatore: fa "nascere" le card quando entrano nello schermo */
  const ossNascita = ("IntersectionObserver" in window && !riduciMovimento)
    ? new IntersectionObserver(function (voci) {
        voci.forEach(function (v) {
          if (!v.isIntersecting) return;
          ossNascita.unobserve(v.target);
          v.target.classList.add("card-nasce");
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -30px 0px" })
    : null;

  function preparaNascita(card, indice) {
    if (!ossNascita) return;
    card.classList.add("card-attesa");
    card.style.animationDelay = Math.min(indice * 90, 450) + "ms";
    card.addEventListener("animationend", function fine(e) {
      if (e.animationName !== "card-in") return;
      card.classList.remove("card-attesa", "card-nasce");
      card.style.animationDelay = "";
      card.removeEventListener("animationend", fine);
    });
    ossNascita.observe(card);
  }

  /* Piccola interfaccia "viva" usata come anteprima segnaposto */
  function costruisciAnteprima(p) {
    const ant = document.createElement("div");
    ant.className = "card-anteprima";

    /* Motivo animato a tema del progetto, se disponibile */
    if (window.MOTIVI && MOTIVI.ha(p.id)) {
      ant.classList.add("card-anteprima-motivo");
      ant.appendChild(MOTIVI.crea(p.id));
      return ant;
    }

    if (p.immagini && p.immagini.length) {
      const img = document.createElement("img");
      img.src = p.immagini[0];
      img.alt = "Anteprima di " + p.nome;
      img.loading = "lazy";
      ant.appendChild(img);
      return ant;
    }

    const altezze = [42, 78, 58, 92, 66, 84];
    let barre = "";
    for (let i = 0; i < 6; i++) {
      barre += '<i style="--h:' + altezze[i] + '%; --d:' + (i * 0.22) + 's"></i>';
    }

    ant.innerHTML =
      '<div class="mock-finestra" aria-hidden="true">' +
        '<div class="mock-punti"><i></i><i></i><i></i><span class="mock-url"></span></div>' +
        '<div class="mock-layout">' +
          '<div class="mock-sidebar"><i></i><i></i><i></i><i></i></div>' +
          '<div class="mock-main">' +
            '<div class="mock-riga corta" style="--d:.2s"></div>' +
            '<div class="mock-riga media" style="--d:.6s"></div>' +
            '<div class="mock-grafico">' + barre + '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    return ant;
  }

  /* Crea una singola card progetto.
     La dimensione dipende dalla POSIZIONE nella griglia (pattern
     "giocoso" che alterna grandi e piccole su entrambi i lati,
     CSS .bento nth-child), non più dal campo dimensione. */
  function costruisciCard(p, indice) {
    const passo = ((indice || 0) % 6);
    const grande = passo === 0 || passo === 4;
    const card = document.createElement("a");
    card.className = "card-progetto " + (grande ? "xl" : "md");
    card.href = "progetto.html?id=" + encodeURIComponent(p.id);
    card.style.setProperty("--c", p.colore);
    card.setAttribute("aria-label", p.nome + " — scopri il progetto");
    card.dataset.anno = p.anno;

    const tags = document.createElement("div");
    tags.className = "card-tags";
    const anno = document.createElement("span");
    anno.className = "card-anno";
    anno.textContent = p.anno;
    tags.appendChild(anno);
    if (p.categoria) {
      const cat = document.createElement("span");
      cat.className = "card-cat";
      cat.textContent = p.categoria;
      tags.appendChild(cat);
    }

    const titolo = document.createElement("h3");
    titolo.className = "card-titolo";
    titolo.textContent = p.nome;

    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = p.breve;

    card.append(tags, titolo, desc);

    if (grande) {
      card.appendChild(costruisciAnteprima(p));
    } else if (window.MOTIVI && MOTIVI.ha(p.id)) {
      /* Card piccole: il motivo a tema diventa uno sfondo sfumato */
      const bg = document.createElement("div");
      bg.className = "card-motivo-bg";
      bg.setAttribute("aria-hidden", "true");
      bg.appendChild(MOTIVI.crea(p.id));
      card.appendChild(bg);
    }

    const azione = document.createElement("span");
    azione.className = "card-azione";
    azione.innerHTML = "Scopri il progetto <span aria-hidden=\"true\">→</span>";
    card.appendChild(azione);

    /* Bagliore colorato che segue il cursore */
    if (puntatoreFine) {
      card.addEventListener("mousemove", function (e) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - r.left) + "px");
        card.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    }

    return card;
  }

  /* Home: progetti in evidenza (i primi 3) */
  const featured = document.getElementById("featured-grid");
  if (featured) {
    PROGETTI.slice(0, 3).forEach(function (p, i) {
      const card = costruisciCard(p, i);
      preparaNascita(card, i);
      featured.appendChild(card);
    });
  }

  /* Pagina Sviluppo Software: griglia completa + filtri */
  const griglia = document.getElementById("griglia-progetti");
  if (!griglia) return;

  function popola(anno) {
    griglia.innerHTML = "";
    const lista = PROGETTI.filter(function (p) {
      return anno === "tutti" || p.anno === anno;
    });

    if (!lista.length) {
      const vuoto = document.createElement("div");
      vuoto.className = "vuoto-progetti";
      vuoto.textContent = "Nessun progetto per l'anno selezionato.";
      griglia.appendChild(vuoto);
      return;
    }

    lista.forEach(function (p, i) {
      const card = costruisciCard(p, i);
      preparaNascita(card, i);
      griglia.appendChild(card);
    });
  }

  /* Transizione di uscita prima di ripopolare la griglia */
  function renderizza(anno) {
    const attuali = griglia.querySelectorAll(".card-progetto");
    if (!attuali.length || riduciMovimento) {
      popola(anno);
      return;
    }
    attuali.forEach(function (c, i) {
      c.style.animationDelay = (i * 30) + "ms";
      c.classList.add("card-esce");
    });
    setTimeout(function () { popola(anno); }, 330);
  }

  /* Filtri generati dai dati, con conteggio dei progetti */
  const contenitoreFiltri = document.querySelector(".filtri");
  if (contenitoreFiltri) {
    const anni = Array.from(new Set(PROGETTI.map(function (p) { return p.anno; })))
      .sort(function (a, b) { return b - a; });

    const opzioni = [{ valore: "tutti", testo: "Tutti gli anni", quanti: PROGETTI.length }].concat(
      anni.map(function (a) {
        return {
          valore: a,
          testo: String(a),
          quanti: PROGETTI.filter(function (p) { return p.anno === a; }).length
        };
      })
    );

    opzioni.forEach(function (o, i) {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip" + (i === 0 ? " attivo" : "");
      chip.innerHTML = o.testo + " <b>" + o.quanti + "</b>";
      chip.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      chip.addEventListener("click", function () {
        if (chip.classList.contains("attivo")) return;
        contenitoreFiltri.querySelectorAll(".chip").forEach(function (c) {
          c.classList.remove("attivo");
          c.setAttribute("aria-pressed", "false");
        });
        chip.classList.add("attivo");
        chip.setAttribute("aria-pressed", "true");
        renderizza(o.valore);
      });
      contenitoreFiltri.appendChild(chip);
    });
  }

  popola("tutti");
})();
