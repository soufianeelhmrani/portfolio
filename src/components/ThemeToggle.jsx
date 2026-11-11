import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

/** Dark / light mode switch with animated icon swap. */
export default function ThemeToggle({ className = "" }) {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const label = isDark ? t("a11y.toggleThemeToLight") : t("a11y.toggleThemeToDark");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`glass relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl text-muted transition-colors duration-300 hover:border-brand/40 hover:text-ink ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ y: 12, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -12, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="absolute inset-0 grid place-items-center"
        >
          {isDark ? (
            <Sun className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
          ) : (
            <Moon className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
