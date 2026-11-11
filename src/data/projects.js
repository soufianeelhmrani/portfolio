/**
 * Editable placeholder projects.
 * - `categories` drive the filter buttons.
 * - `tech` is rendered as chips.
 * - `demo` / `code` are optional URLs. When `demo` is missing, the Live Demo
 *   button opens the project details modal instead of a broken external link.
 * - Title, description and highlights are translated in translations.js.
 */
export const projects = [
  {
    id: "nova",
    categories: ["react", "ui"],
    tech: ["React", "Tailwind CSS", "CSS3"],
    demo: null,
    code: "https://github.com",
    artwork: { variant: "dashboard", from: "#3B82F6", to: "#22D3EE" },
  },
  {
    id: "lumen",
    categories: ["javascript", "ui"],
    tech: ["HTML5", "CSS3", "JavaScript"],
    demo: null,
    code: "https://github.com",
    artwork: { variant: "landing", from: "#8B5CF6", to: "#EC4899" },
  },
  {
    id: "taskflow",
    categories: ["react", "javascript"],
    tech: ["React", "JavaScript", "Tailwind CSS"],
    demo: null,
    code: "https://github.com",
    artwork: { variant: "tasks", from: "#10B981", to: "#3B82F6" },
  },
  {
    id: "aurora",
    categories: ["react", "ui"],
    tech: ["React", "Bootstrap", "CSS3"],
    demo: null,
    code: "https://github.com",
    artwork: { variant: "portfolio", from: "#A78BFA", to: "#22D3EE" },
  },
  {
    id: "weatherly",
    categories: ["javascript", "ui"],
    tech: ["JavaScript", "HTML5", "CSS3"],
    demo: null,
    code: "https://github.com",
    artwork: { variant: "weather", from: "#38BDF8", to: "#FBBF24" },
  },
  {
    id: "shopkit",
    categories: ["react", "ui"],
    tech: ["React", "Tailwind CSS", "Git"],
    demo: null,
    code: "https://github.com",
    artwork: { variant: "shop", from: "#FB7185", to: "#8B5CF6" },
  },
];

export const projectFilters = ["all", "react", "javascript", "ui"];
