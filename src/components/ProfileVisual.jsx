import { motion, useReducedMotion } from "framer-motion";
import { Code2, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { site } from "../data/site";
import TechIcon from "./TechIcon";

/**
 * Hero portrait card.
 * The monogram is a designed placeholder — swap the inner block for your photo
 * when you have one (see README for a quick recipe).
 */
export default function ProfileVisual() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const floating = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -10, 0] },
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
        };

  return (
    <div className="relative mx-auto w-full max-w-[26rem]">
      {/* Glow behind the card */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full bg-gradient-to-br from-brand/30 via-accent/20 to-transparent opacity-60 blur-3xl"
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28, rotate: -1.5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div
          aria-hidden="true"
          className="absolute -inset-px rounded-[2.7rem] bg-gradient-to-br from-brand/60 via-transparent to-accent/60 opacity-70"
        />

        <div className="relative rounded-[2.65rem] border border-line/15 bg-surface/60 p-2.5 shadow-soft backdrop-blur-2xl sm:p-3">
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-[2.15rem]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 16%, rgb(var(--brand) / 0.24), transparent 55%), radial-gradient(circle at 82% 84%, rgb(var(--accent) / 0.22), transparent 52%)",
            }}
          >
            <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-50" />

            {/* Orbit rings */}
            <svg
              aria-hidden="true"
              viewBox="0 0 400 400"
              className="absolute left-1/2 top-[43%] h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-70"
            >
              <circle cx="200" cy="200" r="168" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="2 8" className="text-ink" />
              <circle cx="200" cy="200" r="132" fill="none" stroke="currentColor" strokeOpacity="0.14" />
              <circle cx="200" cy="200" r="132" fill="none" stroke="url(#ring)" strokeWidth="2" strokeDasharray="38 400" strokeLinecap="round" />
              <circle cx="200" cy="32" r="3.5" fill="rgb(var(--brand))" />
              <circle cx="332" cy="200" r="2.5" fill="rgb(var(--accent))" />
              <defs>
                <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Availability */}
            <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between gap-2">
              <span className="flex max-w-[85%] items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-[0.63rem] font-medium text-emerald-300 backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="truncate">{t("hero.availability")}</span>
              </span>
              <span className="hidden rounded-lg border border-line/15 bg-surface/60 p-1.5 text-muted backdrop-blur-md sm:block">
                <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </div>

            {/* Monogram placeholder */}
            <div className="absolute inset-x-0 top-[31%] flex flex-col items-center">
              <span className="font-display text-[6.5rem] font-extrabold leading-none tracking-tighter text-gradient sm:text-[7.5rem]">
                {site.initials}
              </span>
              <span className="mt-2 font-mono text-[0.55rem] uppercase tracking-[0.5em] text-muted">
                portfolio · 2026
              </span>
            </div>

            {/* Name plate */}
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-line/15 bg-base/55 p-3.5 backdrop-blur-xl sm:inset-x-4 sm:bottom-4 sm:p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-semibold text-ink sm:text-[0.95rem]">
                    {site.name}
                  </p>
                  <p className="mt-0.5 truncate text-[0.68rem] text-muted">
                    {t("hero.title").split("|")[0].trim()}
                  </p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-3 flex items-center gap-1.5 border-t border-line/10 pt-2.5 text-[0.66rem] text-muted">
                <MapPin className="h-3 w-3 text-brand" aria-hidden="true" />
                {t("contact.info.locationValue")}
                <span className="mx-1 h-1 w-1 rounded-full bg-muted/40" aria-hidden="true" />
                <span>{t("about.info.statusValue")}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating tech badges */}
      <motion.div
        {...floating(0)}
        className="glass absolute -start-4 top-[22%] z-20 hidden items-center gap-2.5 rounded-2xl px-3 py-2.5 shadow-soft sm:flex lg:-start-8"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#61DAFB]/10">
          <TechIcon name="react" className="h-4 w-4" style={{ color: "#61DAFB" }} />
        </span>
        <span className="leading-tight">
          <span className="block text-[0.6rem] text-muted">React.js</span>
          <span className="block text-[0.7rem] font-semibold text-ink">Hooks & UI</span>
        </span>
      </motion.div>

      <motion.div
        {...floating(1.4)}
        className="glass absolute -end-3 bottom-[24%] z-20 hidden items-center gap-2.5 rounded-2xl px-3 py-2.5 shadow-soft sm:flex lg:-end-7"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#06B6D4]/10">
          <TechIcon name="tailwind" className="h-4 w-4" style={{ color: "#06B6D4" }} />
        </span>
        <span className="leading-tight">
          <span className="block text-[0.6rem] text-muted">Tailwind CSS</span>
          <span className="block text-[0.7rem] font-semibold text-ink">Design systems</span>
        </span>
      </motion.div>

      <motion.div
        {...floating(0.7)}
        className="glass absolute -end-2 top-[12%] z-20 hidden rounded-xl px-2.5 py-1.5 font-mono text-[0.65rem] text-brand shadow-soft md:block lg:-end-4"
      >
        {"</>"}
      </motion.div>
    </div>
  );
}
