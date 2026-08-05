/* ============================================================
   MOTIVI — decorazioni animate a tema, una per progetto.
   Ogni motivo è un SVG "line-art" che richiama il contesto del
   software e si tinge del colore del progetto (currentColor =
   --c sulla card, --accent sulla pagina): ogni progetto è
   diverso ma coerente con lo stile generale.

   Uso:
     MOTIVI.ha(id)   -> true se il progetto ha un motivo
     MOTIVI.crea(id) -> elemento .motivo pronto da inserire

   Le primitive di animazione (m-pulse, m-flow, m-sweep,
   m-spin-rev, m-travel, m-write, m-bar, m-halo) sono nel CSS
   (sezioni V7/V8).
   ============================================================ */
window.MOTIVI = (function () {
  "use strict";

  var VB = 'viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice"';

  function wrap(inner, cls) {
    var d = document.createElement("div");
    d.className = "motivo " + (cls || "");
    d.setAttribute("aria-hidden", "true");
    d.innerHTML = '<svg class="m-svg" ' + VB + '>' + inner + "</svg>";
    return d;
  }
  function linea(cls, x1, y1, x2, y2, style) {
    return '<line class="' + cls + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"' + (style ? ' style="' + style + '"' : "") + "/>";
  }
  function cerchio(cls, cx, cy, r, style) {
    return '<circle class="' + cls + '" cx="' + cx + '" cy="' + cy + '" r="' + r + '"' + (style ? ' style="' + style + '"' : "") + "/>";
  }

  /* --- Second Brain: rete di sinapsi che si accendono --- */
  function sinapsi() {
    var hub = [[120, 120, 8], [280, 88, 9]];
    var nodi = [[48, 52, 4], [92, 150, 5], [60, 182, 3.5], [160, 60, 5], [210, 150, 4.5], [250, 182, 4], [330, 160, 5], [352, 58, 4.5], [300, 28, 3.5], [180, 24, 4], [372, 120, 3.5], [28, 110, 4]];
    var tutti = hub.concat(nodi);
    var archi = [[0, 1], [0, 2], [0, 3], [0, 5], [0, 13], [0, 4], [1, 6], [1, 8], [1, 9], [1, 10], [1, 12], [1, 5], [2, 4], [3, 4], [5, 11], [6, 7], [8, 12], [9, 10], [3, 13], [7, 1]];
    var s = "";
    archi.forEach(function (e, i) {
      var a = tutti[e[0]], b = tutti[e[1]];
      if (!a || !b) return;
      s += linea("m-edge m-flow", a[0], a[1], b[0], b[1], "--d:" + (i * 0.21).toFixed(2) + "s");
    });
    /* dendriti: brevi diramazioni attorno ai nodi */
    [[48, 52, -14, -10], [160, 60, 12, -12], [210, 150, 10, 14], [330, 160, 14, -8], [92, 150, -12, 12], [352, 58, 10, -12]].forEach(function (d) {
      s += linea("m-edge", d[0], d[1], d[0] + d[2], d[1] + d[3]);
    });
    hub.forEach(function (h, i) {
      s += cerchio("m-ring m-halo", h[0], h[1], h[2] + 8, "--d:" + (i * 1.1).toFixed(2) + "s");
    });
    tutti.forEach(function (n, i) {
      s += cerchio("m-node m-pulse", n[0], n[1], n[2], "--d:" + (i * 0.24).toFixed(2) + "s");
    });
    return s;
  }

  /* --- ScraperAH: radar che ruota, con scia ed echi --- */
  function radar() {
    var cx = 200, cy = 110, s = "";
    [40, 74, 106].forEach(function (r, i) {
      s += cerchio(i === 1 ? "m-ring m-tratt" : "m-ring", cx, cy, r);
    });
    s += linea("m-ring", cx - 106, cy, cx + 106, cy) + linea("m-ring", cx, cy - 106, cx, cy + 106);
    /* tacche sul bordo esterno */
    for (var a = 0; a < 360; a += 30) {
      var rad = a * Math.PI / 180;
      s += linea("m-ring", cx + 100 * Math.sin(rad), cy - 100 * Math.cos(rad), cx + 106 * Math.sin(rad), cy - 106 * Math.cos(rad));
    }
    [[150, 82], [252, 142], [236, 64], [168, 150], [282, 104], [206, 58]].forEach(function (b, i) {
      s += cerchio("m-blip m-pulse", b[0], b[1], 4.5, "--d:" + (i * 0.55).toFixed(2) + "s");
    });
    s += cerchio("m-ring m-halo", 252, 142, 11, "--d:.4s");
    /* spazzata con scia che sfuma (due spicchi dietro la linea) */
    s += '<g class="m-sweep"><rect class="m-hit" x="0" y="0" width="400" height="220"/>' +
      '<polygon class="m-wedge" style="opacity:.16" points="200,110 200,4 132,29"/>' +
      '<polygon class="m-wedge" style="opacity:.07" points="200,110 132,29 96,92"/>' +
      linea("m-scan", cx, cy, cx, 4) + "</g>";
    return s;
  }

  /* --- Distinta Base: albero che si dirama (BOM) --- */
  function distinta() {
    var s = "";
    var radice = [200, 30];
    var l1 = [[120, 92], [280, 92]];
    var l2 = [[64, 158], [150, 158], [244, 158], [330, 158]];
    function gomito(a, b, i) {
      var midY = (a[1] + b[1]) / 2;
      return '<polyline class="m-edge m-flow" style="--d:' + (i * 0.3).toFixed(2) + 's" fill="none" points="' +
        a[0] + "," + a[1] + " " + a[0] + "," + midY + " " + b[0] + "," + midY + " " + b[0] + "," + b[1] + '"/>';
    }
    s += gomito(radice, l1[0], 0) + gomito(radice, l1[1], 1);
    s += gomito(l1[0], l2[0], 2) + gomito(l1[0], l2[1], 3) + gomito(l1[1], l2[2], 4) + gomito(l1[1], l2[3], 5);
    s += '<rect class="m-box m-pulse" x="188" y="18" width="24" height="24" rx="6"/>';
    l1.forEach(function (n, i) {
      s += '<rect class="m-box m-pulse" style="--d:' + (0.35 + i * 0.3) + 's" x="' + (n[0] - 10) + '" y="' + (n[1] - 10) + '" width="20" height="20" rx="5"/>';
    });
    l2.forEach(function (n, i) {
      s += '<rect class="m-box m-pulse" style="--d:' + (0.9 + i * 0.22) + 's" x="' + (n[0] - 8) + '" y="' + (n[1] - 8) + '" width="16" height="16" rx="4"/>';
      s += linea("m-edge", n[0], n[1] + 8, n[0], n[1] + 26);
      s += cerchio("m-node m-pulse", n[0], n[1] + 32, 3, "--d:" + (1.3 + i * 0.22) + "s");
    });
    return s;
  }

  /* --- Returns Management: macchina a stati con flusso --- */
  function flusso() {
    var st = [[52, 110], [140, 60], [140, 160], [235, 110], [325, 60], [325, 160]];
    var archi = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5]];
    var s = "";
    archi.forEach(function (e, i) {
      var a = st[e[0]], b = st[e[1]];
      s += linea("m-edge m-flow", a[0], a[1], b[0], b[1], "--d:" + (i * 0.4).toFixed(2) + "s");
      var mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
      var ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
      var p1 = (mx + 6 * Math.cos(ang)) + "," + (my + 6 * Math.sin(ang));
      var p2 = (mx - 5 * Math.cos(ang) + 4 * Math.sin(ang)) + "," + (my - 5 * Math.sin(ang) - 4 * Math.cos(ang));
      var p3 = (mx - 5 * Math.cos(ang) - 4 * Math.sin(ang)) + "," + (my - 5 * Math.sin(ang) + 4 * Math.cos(ang));
      s += '<polygon class="m-freccia" points="' + p1 + " " + p2 + " " + p3 + '"/>';
    });
    st.forEach(function (n, i) {
      s += cerchio("m-ring", n[0], n[1], 15) + cerchio("m-node m-pulse", n[0], n[1], 6, "--d:" + (i * 0.45).toFixed(2) + "s");
    });
    s += cerchio("m-ring", st[5][0], st[5][1], 19);
    return s;
  }

  /* --- frGest: documento che si compila da solo --- */
  function documento() {
    var s = '<rect class="m-ring" style="opacity:.4" x="120" y="18" width="160" height="184" rx="10"/>';
    s += linea("m-edge", 138, 44, 210, 44) + '<rect class="m-box" style="opacity:.35" x="238" y="34" width="26" height="18" rx="4"/>';
    var righe = [[138, 74, 124], [138, 92, 98], [138, 110, 116], [138, 128, 84], [138, 146, 110]];
    righe.forEach(function (r, i) {
      s += linea("m-scan m-write", r[0], r[1], r[0] + r[2], r[1], "--len:" + r[2] + "; --d:" + (i * 0.5).toFixed(2) + "s");
    });
    s += linea("m-edge", 138, 168, 262, 168);
    s += cerchio("m-node m-pulse", 246, 186, 9, "--d:2.6s");
    s += '<polyline class="m-scan" fill="none" points="242,186 245,190 251,182"/>';
    /* fogli sullo sfondo, sfalsati */
    s += '<rect class="m-ring" style="opacity:.14" x="104" y="30" width="160" height="184" rx="10" transform="rotate(-4 184 122)"/>';
    return s;
  }

  /* --- Gestionale Aste & Dati: barre che crescono + trend --- */
  function grafico() {
    var s = linea("m-ring", 60, 180, 350, 180) + linea("m-ring", 60, 180, 60, 30);
    var barre = [[84, 60], [126, 95], [168, 75], [210, 120], [252, 100], [294, 140]];
    barre.forEach(function (b, i) {
      s += '<rect class="m-barra m-bar" style="--d:' + (i * 0.25).toFixed(2) + 's" x="' + b[0] + '" y="' + (180 - b[1]) + '" width="24" height="' + b[1] + '" rx="4"/>';
    });
    var punti = barre.map(function (b) { return (b[0] + 12) + "," + (168 - b[1]); }).join(" ");
    s += '<polyline class="m-scan m-flow" style="opacity:.65" fill="none" points="' + punti + " 340,40" + '"/>';
    s += cerchio("m-node m-pulse", 340, 40, 5, "--d:1.4s");
    return s;
  }

  var B = {
    "second-brain": function () { return wrap(sinapsi(), "m-sinapsi"); },
    "scraper-aste-auto": function () { return wrap(radar(), "m-radar"); },
    "distinta-base-parametrica": function () { return wrap(distinta(), "m-distinta"); },
    "returns-management-aws": function () { return wrap(flusso(), "m-flusso"); },
    "frgest": function () { return wrap(documento(), "m-documento"); },
    "gestionale-aste-dati": function () { return wrap(grafico(), "m-grafico"); }
  };

  return {
    ha: function (id) { return typeof B[id] === "function"; },
    crea: function (id) { return B[id] ? B[id]() : null; }
  };
})();
