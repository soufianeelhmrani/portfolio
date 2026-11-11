import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

/** Compact language dropdown (EN / FR / AR). */
export default function LanguageSwitcher({ align = "end" }) {
  const { language, setLanguage, languages, currentLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("a11y.switchLanguage")}
        title={t("a11y.switchLanguage")}
        className="glass flex h-10 items-center gap-1.5 rounded-xl px-2.5 text-muted transition-colors duration-300 hover:border-brand/40 hover:text-ink sm:gap-2 sm:px-3"
      >
        <Globe2 className="h-4 w-4" aria-hidden="true" />
        <span className="text-[0.7rem] font-semibold tracking-wide">{currentLanguage.label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            role="listbox"
            aria-label={t("a11y.switchLanguage")}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className={`glass-strong absolute top-[calc(100%+0.55rem)] z-50 w-48 overflow-hidden rounded-2xl p-1.5 shadow-soft ${
              align === "start" ? "start-0" : "end-0"
            }`}
          >
            {languages.map((item) => {
              const selected = item.code === language;
              return (
                <li key={item.code} role="none">
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      setLanguage(item.code);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-start text-sm transition-colors ${
                      selected
                        ? "bg-brand/10 text-ink"
                        : "text-muted hover:bg-elevated/70 hover:text-ink"
                    }`}
                  >
                    <span className="grid h-7 w-8 shrink-0 place-items-center rounded-md bg-elevated/70 font-mono text-[0.62rem] font-semibold text-brand">
                      {item.label}
                    </span>
                    <span className="flex-1 font-medium">{item.name}</span>
                    {selected ? <Check className="h-4 w-4 text-brand" aria-hidden="true" /> : null}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
