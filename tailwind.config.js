/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        elevated: "rgb(var(--elevated) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        brand: "rgb(var(--brand) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "Cairo", "system-ui", "sans-serif"],
        display: ["Sora", "Cairo", "system-ui", "sans-serif"],
        arabic: ["Cairo", "Tajawal", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgb(var(--brand) / 0.45)",
        "glow-sm": "0 0 30px -10px rgb(var(--brand) / 0.55)",
        soft: "0 24px 60px -28px rgb(0 0 0 / 0.55)",
        card: "0 1px 0 0 rgb(255 255 255 / 0.06) inset, 0 24px 60px -32px rgb(0 0 0 / 0.6)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        caret: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(3%, -4%, 0) scale(1.05)" },
          "66%": { transform: "translate3d(-3%, 3%, 0) scale(0.97)" },
        },
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 18s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        caret: "caret 1s step-end infinite",
        aurora: "aurora 18s ease-in-out infinite",
        "marquee-x": "marquee-x 28s linear infinite",
      },
    },
  },
  plugins: [],
};
