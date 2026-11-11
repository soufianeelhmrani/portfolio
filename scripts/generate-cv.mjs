/**
 * Generates the three CV PDFs in /public/cv from the same data as the website.
 * Run with: npm run cv
 *
 * Requires Chrome or Edge (used in headless print-to-pdf mode).
 * Override the browser path with CHROME_PATH=/path/to/chrome if needed.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { translations } from "../src/data/translations.js";
import { site } from "../src/data/site.js";
import { projects } from "../src/data/projects.js";
import { skillCategories } from "../src/data/skills.js";

const ROOT = resolve(process.cwd());
const OUT_DIR = resolve(ROOT, "public/cv");
const TMP_DIR = resolve(ROOT, "scripts/.tmp");

const BROWSER_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const browser = BROWSER_CANDIDATES.find((candidate) => existsSync(candidate));
if (!browser) {
  console.error("No Chrome/Edge installation found. Set CHROME_PATH and try again.");
  process.exit(1);
}

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const SKILL_NAMES = {
  html5: "HTML5",
  css3: "CSS3",
  react: "React.js",
  tailwind: "Tailwind CSS",
  bootstrap: "Bootstrap",
  javascript: "JavaScript",
  git: "Git",
  github: "GitHub",
};

function buildHtml(lang) {
  const t = translations[lang];
  const isRtl = lang === "ar";
  const dir = isRtl ? "rtl" : "ltr";
  const bodyFont = isRtl
    ? "'Cairo', 'Segoe UI', Tahoma, sans-serif"
    : "'Inter', 'Segoe UI', Arial, sans-serif";
  const displayFont = isRtl ? "'Cairo', 'Segoe UI', Tahoma, sans-serif" : "'Sora', 'Segoe UI', Arial, sans-serif";

  const skillGroups = skillCategories
    .map(
      (category) => `
        <div class="skill-group">
          <h3>${escapeHtml(t.skills.categories[category.id])}</h3>
          <div class="pills">
            ${category.skills.map((skill) => `<span class="pill">${escapeHtml(SKILL_NAMES[skill.id] || skill.name)}</span>`).join("")}
          </div>
        </div>`,
    )
    .join("");

  const featuredProjects = projects
    .slice(0, 3)
    .map((project) => {
      const item = t.projects.items[project.id];
      return `
        <article class="entry">
          <div class="entry-head">
            <h3>${escapeHtml(item.title)}</h3>
            <span class="entry-tech">${escapeHtml(project.tech.join(" · "))}</span>
          </div>
          <p>${escapeHtml(item.description)}</p>
        </article>`;
    })
    .join("");

  const education = ["bac", "ofppt"]
    .map((id) => {
      const item = t.education.items[id];
      const specialization =
        id === "ofppt"
          ? `<p class="meta">${escapeHtml(t.cv.specialization)}: ${escapeHtml(
              site.education.ofpptSpecialization || t.education.specializationPlaceholder,
            )}</p>`
          : "";
      return `
        <article class="entry">
          <div class="entry-head">
            <h3>${escapeHtml(item.title)}</h3>
            <span class="entry-tech">${escapeHtml(item.org)}</span>
          </div>
          <p class="meta">${escapeHtml(item.type)}</p>
          ${specialization}
          <p>${escapeHtml(item.description)}</p>
        </article>`;
    })
    .join("");

  return `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(t.meta.title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap" rel="stylesheet" />
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  html, body { margin: 0; padding: 0; background: #ffffff; }
  body { font-family: ${bodyFont}; color: #0f172a; }
  .page {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 210mm;
    height: 297mm;
    padding: 14mm 14mm 10mm;
    overflow: hidden;
  }
  .page::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 3.2mm;
    background: linear-gradient(90deg, #2563eb, #7c3aed);
  }
  header { display: flex; align-items: flex-start; justify-content: space-between; gap: 10mm; }
  .name { margin: 0; font-family: ${displayFont}; font-size: 25pt; font-weight: 800; letter-spacing: -0.02em; line-height: 1.05; }
  .role { margin: 2.4mm 0 0; font-size: 10.2pt; font-weight: 600; color: #2563eb; }
  .availability { display: inline-flex; align-items: center; gap: 2mm; margin: 2.6mm 0 0; font-size: 8.2pt; color: #475569; }
  .dot { width: 1.8mm; height: 1.8mm; border-radius: 999px; background: #10b981; }
  .mark {
    display: grid; place-items: center; flex-shrink: 0;
    width: 17mm; height: 17mm; border-radius: 4.5mm;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    color: #ffffff; font-family: ${displayFont}; font-size: 15pt; font-weight: 800;
    box-shadow: 0 4mm 10mm -5mm rgba(37, 99, 235, 0.55);
  }
  .contact {
    display: flex; flex-wrap: wrap; gap: 2.5mm 7mm;
    margin-top: 6mm; padding: 3mm 0;
    border-top: 0.3mm solid #e2e8f0; border-bottom: 0.3mm solid #e2e8f0;
    font-size: 8.2pt; color: #475569;
  }
  .contact b { color: #0f172a; font-weight: 600; margin-inline-end: 1.2mm; }
  .ltr { direction: ltr; unicode-bidi: isolate; display: inline-block; }
  .columns { display: grid; grid-template-columns: 1.65fr 0.9fr; gap: 9mm; margin-top: 6mm; flex: 1; }
  main, aside { min-width: 0; }
  section { margin-bottom: 5.5mm; }
  h2 {
    margin: 0 0 2.6mm; padding-bottom: 1.4mm;
    border-bottom: 0.3mm solid #e2e8f0;
    font-size: 7.6pt; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
    color: #2563eb;
  }
  [dir="rtl"] h2 { letter-spacing: 0; }
  p { margin: 0; font-size: 8.7pt; line-height: 1.55; color: #334155; }
  .lead { font-size: 9pt; color: #334155; }
  .entry { margin-bottom: 3.4mm; padding-bottom: 3.2mm; border-bottom: 0.2mm dashed #e2e8f0; }
  .entry:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: 0; }
  .entry-head { display: flex; align-items: baseline; justify-content: space-between; gap: 4mm; }
  .entry h3 { margin: 0; font-family: ${displayFont}; font-size: 9.6pt; font-weight: 700; color: #0f172a; }
  .entry-tech { flex-shrink: 0; font-size: 7.2pt; font-weight: 600; color: #64748b; }
  .entry p { margin-top: 1.2mm; font-size: 8.4pt; line-height: 1.5; }
  .entry .meta { margin-top: 0.8mm; font-size: 7.8pt; color: #64748b; }
  .skill-group { margin-bottom: 3.4mm; }
  .skill-group:last-child { margin-bottom: 0; }
  .skill-group h3 { margin: 0 0 1.6mm; font-size: 8.2pt; font-weight: 700; color: #0f172a; }
  .pills { display: flex; flex-wrap: wrap; gap: 1.4mm; }
  .pill {
    padding: 0.9mm 2.4mm; border-radius: 999px;
    border: 0.25mm solid #dbeafe; background: #eff6ff;
    font-size: 7.4pt; font-weight: 600; color: #1d4ed8;
  }
  aside p { font-size: 8.2pt; }
  .note { padding: 3mm; border-radius: 2.6mm; background: #f8fafc; border: 0.25mm solid #e2e8f0; }
  footer {
    display: flex; align-items: center; justify-content: space-between; gap: 5mm;
    margin-top: 3mm; padding-top: 3mm; border-top: 0.3mm solid #e2e8f0;
    font-size: 7.2pt; color: #94a3b8;
  }
  footer strong { color: #475569; font-weight: 600; }
</style>
</head>
<body>
  <div class="page">
    <header>
      <div>
        <h1 class="name">${escapeHtml(t.hero.name)}</h1>
        <p class="role">${escapeHtml(t.hero.title)}</p>
        <p class="availability"><span class="dot"></span>${escapeHtml(t.hero.availability)}</p>
      </div>
      <div class="mark">${escapeHtml(site.initials)}</div>
    </header>

    <div class="contact">
      <span><b>${escapeHtml(t.contact.info.emailLabel)}</b><span class="ltr">${escapeHtml(site.email)}</span></span>
      <span><b>${escapeHtml(t.contact.info.locationLabel)}</b>${escapeHtml(t.contact.info.locationValue)}</span>
      <span><b>GitHub</b><span class="ltr">${escapeHtml(site.socials.github.replace(/^https?:\/\//, ""))}</span></span>
      <span><b>LinkedIn</b><span class="ltr">${escapeHtml(site.socials.linkedin.replace(/^https?:\/\//, ""))}</span></span>
    </div>

    <div class="columns">
      <main>
        <section>
          <h2>${escapeHtml(t.cv.profile)}</h2>
          <p class="lead">${escapeHtml(t.about.paragraphs[0])} ${escapeHtml(t.hero.description)}</p>
        </section>

        <section>
          <h2>${escapeHtml(t.cv.projects)}</h2>
          ${featuredProjects}
        </section>

        <section>
          <h2>${escapeHtml(t.cv.education)}</h2>
          ${education}
        </section>
      </main>

      <aside>
        <section>
          <h2>${escapeHtml(t.cv.skills)}</h2>
          ${skillGroups}
        </section>

        <section>
          <h2>${escapeHtml(t.cv.focus)}</h2>
          <p class="note">${escapeHtml(t.skills.exploring)}</p>
        </section>

        <section>
          <h2>${escapeHtml(t.cv.availability)}</h2>
          <p>${escapeHtml(t.contact.availabilityText)}</p>
        </section>
      </aside>
    </div>

    <footer>
      <span><strong>${escapeHtml(site.name)}</strong> · ${escapeHtml(t.cv.footer)}</span>
      <span class="ltr">2026</span>
    </footer>
  </div>
</body>
</html>`;
}

mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(TMP_DIR, { recursive: true });

for (const lang of ["en", "fr", "ar"]) {
  const htmlPath = resolve(TMP_DIR, `cv-${lang}.html`);
  const pdfPath = resolve(OUT_DIR, `ELHAMRANI-Soufiane-CV-${lang.toUpperCase()}.pdf`);
  writeFileSync(htmlPath, buildHtml(lang), "utf8");

  console.log(`Rendering ${lang.toUpperCase()} CV → ${pdfPath}`);
  execFileSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--disable-extensions",
      "--no-pdf-header-footer",
      "--run-all-compositor-stages-before-draw",
      "--virtual-time-budget=6000",
      `--user-data-dir=${resolve(TMP_DIR, "chrome-profile")}`,
      `--print-to-pdf=${pdfPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { stdio: "inherit" },
  );
}

console.log("CV generation complete.");
