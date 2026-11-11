/**
 * Skills are grouped by category. Descriptions live in translations.js
 * (keys: skills.items.<id>.description) so every language is covered.
 */
export const skillCategories = [
  {
    id: "frontend",
    icon: "layout",
    accent: "from-brand to-cyan-400",
    skills: [
      { id: "html5", name: "HTML5", icon: "html5", color: "#E34F26" },
      { id: "css3", name: "CSS3", icon: "css", color: "#1572B6" },
      { id: "react", name: "React.js", icon: "react", color: "#61DAFB" },
      { id: "tailwind", name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
      { id: "bootstrap", name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
    ],
  },
  {
    id: "programming",
    icon: "braces",
    accent: "from-accent to-fuchsia-400",
    skills: [
      { id: "javascript", name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    ],
  },
  {
    id: "tools",
    icon: "wrench",
    accent: "from-emerald-400 to-brand",
    skills: [
      { id: "git", name: "Git", icon: "git", color: "#F05032" },
      { id: "github", name: "GitHub", icon: "github", color: "#94A3B8" },
    ],
  },
];

/** Flat list used by the hero marquee and small tech chips. */
export const allSkills = skillCategories.flatMap((category) => category.skills);
