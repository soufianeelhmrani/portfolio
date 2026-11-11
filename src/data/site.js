/**
 * Central place for personal information.
 * Everything marked as a placeholder is safe to replace with your real details.
 */
export const site = {
  name: "ELHAMRANI Soufiane",
  firstName: "Soufiane",
  initials: "SE",
  location: "Morocco",

  // Placeholder contact details — replace with your real address.
  email: "soufiane.elhamrani@example.com",

  // Placeholder profile URLs — replace with your own profile links.
  socials: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com",
  },

  // PDF files live in /public/cv. Run `npm run cv` to regenerate them.
  cv: {
    en: "cv/ELHAMRANI-Soufiane-CV-EN.pdf",
    fr: "cv/ELHAMRANI-Soufiane-CV-FR.pdf",
    ar: "cv/ELHAMRANI-Soufiane-CV-AR.pdf",
  },

  education: {
    // Leave empty to show a clearly marked "to be added" placeholder.
    ofpptSpecialization: "",
  },

  availability: true,
};

/** Resolve a public asset against Vite's base URL. */
export const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

/** The CV matching the active language, with a safe fallback. */
export const getCvUrl = (lang) => assetUrl(site.cv[lang] || site.cv.en);
