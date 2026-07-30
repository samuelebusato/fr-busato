/* ============================================================
   Script principale — F.R. di Busato Fausto
   ============================================================ */
(function () {
  "use strict";

  const riduciMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------------------------------------------------------
     Anno corrente nel footer
     ---------------------------------------------------------- */
  document.querySelectorAll("#anno-corrente").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ----------------------------------------------------------
     Menu mobile
     ---------------------------------------------------------- */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const aperto = menu.classList.toggle("aperto");
      toggle.setAttribute("aria-expanded", aperto ? "true" : "false");
      toggle.setAttribute("aria-label", aperto ? "Chiudi il menu" : "Apri il menu");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("aperto");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----------------------------------------------------------
     Animazioni di comparsa allo scroll
     ---------------------------------------------------------- */
  const daRivelare = document.querySelectorAll(".rivela");
  if (riduciMovimento) {
    daRivelare.forEach(function (el) { el.classList.add("visibile"); });
  } else if ("IntersectionObserver" in window) {
    const oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        if (v.isIntersecting) {
          v.target.classList.add("visibile");
          oss.unobserve(v.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    daRivelare.forEach(function (el) { oss.observe(el); });
  } else {
    daRivelare.forEach(function (el) { el.classList.add("visibile"); });
  }

  /* ----------------------------------------------------------
     Sfondo animato — costellazione di nodi
     ---------------------------------------------------------- */
  const canvas = document.getElementById("bg-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let larghezza, altezza, nodi;

    function inizializza() {
      larghezza = canvas.width = window.innerWidth;
      altezza = canvas.height = window.innerHeight;
      const quanti = larghezza < 700 ? 32 : 70;
      nodi = Array.from({ length: quanti }, function () {
        return {
          x: Math.random() * larghezza,
          y: Math.random() * altezza,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.6 + 0.6
        };
      });
    }

    function disegna() {
      ctx.clearRect(0, 0, larghezza, altezza);

      for (let i = 0; i < nodi.length; i++) {
        const a = nodi[i];
        for (let j = i + 1; j < nodi.length; j++) {
          const b = nodi[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            ctx.strokeStyle = "rgba(37, 99, 235," + (0.14 * (1 - dist / 140)) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      nodi.forEach(function (n) {
        ctx.fillStyle = "rgba(37, 99, 235, .40)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function anima() {
      nodi.forEach(function (n) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -10) n.x = larghezza + 10;
        if (n.x > larghezza + 10) n.x = -10;
        if (n.y < -10) n.y = altezza + 10;
        if (n.y > altezza + 10) n.y = -10;
      });
      disegna();
      requestAnimationFrame(anima);
    }

    inizializza();
    window.addEventListener("resize", inizializza);

    if (riduciMovimento) {
      disegna(); /* immagine statica, nessun movimento */
    } else {
      anima();
    }
  }

  /* ----------------------------------------------------------
     Terminale animato nella hero
     ---------------------------------------------------------- */
  const term = document.getElementById("term-body");
  if (term) {
    const righe = [
      { classe: "cmd", testo: "fr-busato --servizi" },
      { classe: "ok", testo: "assistenza hardware e software" },
      { classe: "ok", testo: "reti, backup e sicurezza" },
      { classe: "ok", testo: "software su misura (VB.NET / VBA)" },
      { classe: "ok", testo: "corsi di formazione" },
      { classe: "cmd", testo: "fr-busato --dal 2000" },
      { classe: "riga", testo: "al fianco delle aziende, ogni giorno." }
    ];

    if (riduciMovimento) {
      righe.forEach(function (r) {
        const span = document.createElement("span");
        span.className = "riga " + r.classe;
        span.textContent = r.testo;
        term.appendChild(span);
      });
    } else {
      let indiceRiga = 0;

      function scriviRiga() {
        if (indiceRiga >= righe.length) {
          const cur = document.createElement("span");
          cur.className = "cursore";
          term.appendChild(cur);
          return;
        }
        const r = righe[indiceRiga];
        const span = document.createElement("span");
        span.className = "riga " + r.classe;
        term.appendChild(span);

        let i = 0;
        const veloc = r.classe === "cmd" ? 55 : 14;
        (function batti() {
          span.textContent = r.testo.slice(0, i);
          i++;
          if (i <= r.testo.length) {
            setTimeout(batti, veloc);
          } else {
            indiceRiga++;
            setTimeout(scriviRiga, r.classe === "cmd" ? 350 : 120);
          }
        })();
      }

      setTimeout(scriviRiga, 600);
    }
  }

  /* ----------------------------------------------------------
     Nastro partner: clona il gruppo per lo scorrimento infinito
     ---------------------------------------------------------- */
  const traccia = document.getElementById("marquee-traccia");
  if (traccia) {
    const gruppo = traccia.querySelector(".marquee-gruppo");
    if (gruppo && !riduciMovimento) {
      /* 4 gruppi identici → l'animazione a -50% si ripete senza stacchi */
      for (let i = 0; i < 3; i++) {
        const clone = gruppo.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        traccia.appendChild(clone);
      }
      traccia.classList.add("pronto");
    }
  }

  /* ----------------------------------------------------------
     Tilt 3D del terminale nella hero
     ---------------------------------------------------------- */
  const terminale = document.getElementById("terminale");
  const puntatoreFine = window.matchMedia("(pointer: fine)").matches;
  if (terminale && puntatoreFine && !riduciMovimento) {
    terminale.addEventListener("mousemove", function (e) {
      const r = terminale.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      terminale.style.transform =
        "perspective(900px) rotateY(" + (px * 7).toFixed(2) + "deg)" +
        " rotateX(" + (-py * 7).toFixed(2) + "deg)";
    });
    terminale.addEventListener("mouseleave", function () {
      terminale.style.transform = "";
    });
  }

  /* ----------------------------------------------------------
     Riflettore che segue il cursore sulle card servizio
     ---------------------------------------------------------- */
  if (puntatoreFine) {
    document.querySelectorAll(".servizio").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - r.left) + "px");
        card.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });
  }

  /* ----------------------------------------------------------
     Contatori animati nel pannello dati
     ---------------------------------------------------------- */
  const contatori = document.querySelectorAll("[data-conta]");
  if (contatori.length && !riduciMovimento && "IntersectionObserver" in window) {
    const ossConta = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        if (!v.isIntersecting) return;
        ossConta.unobserve(v.target);
        const fine = parseInt(v.target.dataset.conta, 10);
        const inizio = fine > 100 ? fine - 28 : 0;
        const durata = 1300;
        const t0 = performance.now();
        (function passo(t) {
          const p = Math.min((t - t0) / durata, 1);
          const facile = 1 - Math.pow(1 - p, 3); /* ease-out */
          v.target.textContent = Math.round(inizio + (fine - inizio) * facile);
          if (p < 1) requestAnimationFrame(passo);
        })(t0);
      });
    }, { threshold: 0.6 });
    contatori.forEach(function (el) { ossConta.observe(el); });
  }

  /* ----------------------------------------------------------
     Barra di avanzamento dello scroll
     ---------------------------------------------------------- */
  const progresso = document.getElementById("progresso");
  if (progresso && !riduciMovimento) {
    function aggiornaProgresso() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      progresso.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    }
    window.addEventListener("scroll", aggiornaProgresso, { passive: true });
    aggiornaProgresso();
  }

  /* ----------------------------------------------------------
     Avviso cookie (solo informativo: nessun cookie di
     profilazione; la preferenza è salvata in localStorage)
     ---------------------------------------------------------- */
  const avviso = document.getElementById("avviso-cookie");
  const chiudi = document.getElementById("chiudi-cookie");
  if (avviso && chiudi) {
    let visto = false;
    try {
      visto = localStorage.getItem("frb-avviso-cookie") === "ok";
    } catch (e) { /* localStorage non disponibile */ }

    if (!visto) avviso.hidden = false;

    chiudi.addEventListener("click", function () {
      avviso.hidden = true;
      try {
        localStorage.setItem("frb-avviso-cookie", "ok");
      } catch (e) { /* ignora */ }
    });
  }
})();
