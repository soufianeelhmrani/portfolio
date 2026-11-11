import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Download, Mail } from "lucide-react";
import Button from "../components/ui/Button";
import SocialLinks from "../components/SocialLinks";
import ProfileVisual from "../components/ProfileVisual";
import { useLanguage } from "../context/LanguageContext";
import { getCvUrl } from "../data/site";
import { useTypewriter } from "../hooks/usePortfolioHooks";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { t, language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const roles = t("hero.roles");
  const typed = useTypewriter(roles, { enabled: !reduceMotion });
  const stats = t("hero.stats");
  const cvUrl = getCvUrl(language);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24"
    >
      <div className="mx-auto grid w-full max-w-8xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-14">
        <motion.div
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          className="relative z-10 max-w-2xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-3.5 py-1.5 text-[0.68rem] font-medium text-emerald-600 dark:text-emerald-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              </span>
              {t("hero.availability")}
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-7 text-sm font-medium uppercase tracking-[0.32em] text-muted"
          >
            {t("hero.greeting")}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 font-display text-[2.7rem] font-extrabold leading-[1.02] tracking-tight text-balance sm:text-6xl xl:text-[4.6rem]"
          >
            <span className="text-gradient">{t("hero.name")}</span>
          </motion.h1>

          <motion.div variants={item} className="mt-5 flex min-h-[2.1rem] items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
            <p
              className="font-display text-base font-medium text-ink sm:text-lg"
              aria-hidden="true"
            >
              {typed}
              <span
                className="ms-0.5 inline-block h-[1.05em] w-[2px] translate-y-[3px] animate-caret bg-brand"
                aria-hidden="true"
              />
            </p>
            <span className="sr-only">{roles.join(" · ")}</span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted sm:text-base"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button as="a" href="#projects" size="lg" iconRight={ArrowUpRight}>
              {t("common.viewProjects")}
            </Button>
            <Button as="a" href="#contact" size="lg" variant="secondary" icon={Mail}>
              {t("common.contactMe")}
            </Button>
            <Button
              as="a"
              href={cvUrl}
              download
              size="lg"
              variant="ghost"
              icon={Download}
              aria-label={t("a11y.cv")}
            >
              {t("common.downloadCv")}
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted">
              {t("footer.connectTitle")}
            </span>
            <span className="h-px w-8 bg-line/20" aria-hidden="true" />
            <SocialLinks size="sm" />
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 border-t border-line/10 pt-7 sm:grid-cols-4"
          >
            {Array.isArray(stats)
              ? stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-2xl font-bold leading-none text-gradient">
                      {stat.value}
                    </dd>
                    <dd className="mt-1.5 text-[0.68rem] leading-snug text-muted">{stat.label}</dd>
                  </div>
                ))
              : null}
          </motion.dl>
        </motion.div>

        <div className="relative z-0 lg:justify-self-end">
          <ProfileVisual />
        </div>
      </div>

      <motion.a
        href="#about"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        aria-label={t("a11y.scrollDown")}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-muted transition-colors hover:text-ink lg:flex"
      >
        <span className="relative grid h-9 w-5 place-items-start rounded-full border border-line/25 p-1">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-brand" />
        </span>
        {t("hero.scroll")}
        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
