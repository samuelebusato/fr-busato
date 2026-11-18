"""Genera la brochure aziendale in PDF da brochure.html.

    py -I brochure/genera.py              # scrive il PDF accanto a questo file
    py -I brochure/genera.py --anteprime DIR   # e in più una PNG per pagina in DIR

Il PDF lo stampa Chrome in modalità headless (A4, senza margini, senza intestazioni),
con i caratteri del sito presi da assets/fonts. Lo sfondo a costellazione di copertina
e retro si disegna qui, con un seme fisso: a ogni giro esce identico.
"""
import math
import random
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

QUI = Path(__file__).resolve().parent
SORGENTE = QUI / "brochure.html"
PDF = QUI / "F.R. di Busato Fausto - Brochure aziendale.pdf"
CHROME = [
    Path(r"C:\Program Files\Google\Chrome\Application\chrome.exe"),
    Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"),
]


def costellazione(seme: int, nodi: int, zona) -> str:
    """Nodi e linee come lo sfondo del sito, in mm su una pagina A4 (210x297)."""
    rnd = random.Random(seme)
    x0, y0, x1, y1 = zona
    punti = [(rnd.uniform(x0, x1), rnd.uniform(y0, y1)) for _ in range(nodi)]
    linee = []
    for i, (ax, ay) in enumerate(punti):
        for bx, by in punti[i + 1:]:
            d = math.hypot(ax - bx, ay - by)
            if d < 34:
                op = 0.30 * (1 - d / 34)
                linee.append(f'<line x1="{ax:.1f}" y1="{ay:.1f}" x2="{bx:.1f}" y2="{by:.1f}" stroke="#7fb4ff" stroke-width=".25" stroke-opacity="{op:.2f}"/>')
    cerchi = []
    for x, y in punti:
        r = rnd.uniform(0.45, 1.1)
        op = rnd.uniform(0.35, 0.8)
        cerchi.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r:.2f}" fill="#9fc2ff" fill-opacity="{op:.2f}"/>')
    return ('<svg class="costellazione" viewBox="0 0 210 297" preserveAspectRatio="none" aria-hidden="true">'
            + "".join(linee) + "".join(cerchi) + "</svg>")


def trova_chrome() -> Path:
    for p in CHROME:
        if p.exists():
            return p
    sys.exit("Né Chrome né Edge trovati nei percorsi attesi: " + ", ".join(map(str, CHROME)))


def main() -> None:
    anteprime = None
    if "--anteprime" in sys.argv:
        anteprime = Path(sys.argv[sys.argv.index("--anteprime") + 1])

    html = SORGENTE.read_text(encoding="utf-8")
    html = html.replace("{{COSTELLAZIONE}}", costellazione(2000, 70, (-10, -10, 220, 307)))
    # Sul retro solo nella fascia alta, lontano dai contatti e dalla nota sui marchi.
    html = html.replace("{{COSTELLAZIONE_RETRO}}", costellazione(1996, 34, (-10, -10, 220, 95)))
    # Il file costruito va in una cartella temporanea: <base> tiene validi i percorsi relativi.
    html = html.replace("<head>", f'<head>\n<base href="{QUI.as_uri()}/">', 1)

    with tempfile.TemporaryDirectory() as tmp:
        costruito = Path(tmp) / "brochure.html"
        costruito.write_text(html, encoding="utf-8")
        profilo = Path(tmp) / "profilo-chrome"
        uscita = Path(tmp) / "brochure.pdf"
        cmd = [
            str(trova_chrome()), "--headless=new", "--disable-gpu", "--no-first-run",
            "--no-default-browser-check", f"--user-data-dir={profilo}",
            "--allow-file-access-from-files", "--no-pdf-header-footer",
            "--virtual-time-budget=8000", f"--print-to-pdf={uscita}", costruito.as_uri(),
        ]
        r = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
        if not uscita.exists():
            sys.exit(f"Chrome non ha prodotto il PDF (codice {r.returncode}):\n{r.stderr[-2000:]}")
        shutil.copyfile(uscita, PDF)

    import pymupdf
    doc = pymupdf.open(PDF)
    doc.set_metadata({
        "title": "F.R. di Busato Fausto — Brochure aziendale",
        "author": "F.R. di Busato Fausto",
        "subject": "Sviluppo software su misura, reti sicure, consulenza informatica e privacy",
        "keywords": "F.R. di Busato Fausto, Novellara, software su misura, reti sicure, GDPR, NIS2, Cyberse, frGest",
        "creator": "brochure/genera.py",
    })
    doc.saveIncr()
    print(f"{PDF.name}: {doc.page_count} pagine")
    caratteri = sorted({f[3] for p in doc for f in p.get_fonts()})
    print("caratteri incorporati:", ", ".join(caratteri))
    if anteprime:
        anteprime.mkdir(parents=True, exist_ok=True)
        for i, pagina in enumerate(doc, 1):
            pagina.get_pixmap(dpi=110).save(anteprime / f"pagina-{i}.png")
        print("anteprime in", anteprime)


if __name__ == "__main__":
    main()
