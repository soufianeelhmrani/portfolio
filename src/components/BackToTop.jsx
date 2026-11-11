import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useScrolled } from "../hooks/usePortfolioHooks";

/** Floating back-to-top control that appears after scrolling. */
export default function BackToTop() {
  const visible = useScrolled(600);
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label={t("a11y.backToTop")}
          title={t("a11y.backToTop")}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
          className="glass-strong fixed bottom-6 end-5 z-40 grid h-11 w-11 place-items-center rounded-full text-ink shadow-soft transition-colors hover:text-brand sm:bottom-8 sm:end-8"
        >
          <ArrowUp className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
