import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Download,
  GraduationCap,
  MapPin,
  Puzzle,
  Quote,
  Sparkles,
  Target,
  User,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import { useLanguage } from "../context/LanguageContext";
import { getCvUrl, site } from "../data/site";

const CARD_ICONS = {
  sparkles: Sparkles,
  puzzle: Puzzle,
  book: BookOpen,
  target: Target,
};

/** Stylised editor card used as the About visual. */
function CodeCard() {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-brand/20 via-transparent to-accent/20 blur-3xl"
      />

      <div className="glass relative overflow-hidden rounded-3xl p-1.5 sm:p-2">
        <div className="overflow-hidden rounded-[1.35rem] border border-white/5 bg-[#0A0F1C]">
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-[#FB7185]/80" />
              <span className="h-2 w-2 rounded-full bg-[#FBBF24]/80" />
              <span className="h-2 w-2 rounded-full bg-[#34D399]/80" />
            </div>
            <span className="font-mono text-[0.6rem] text-slate-500">soufiane.js</span>
            <span className="font-mono text-[0.55rem] text-slate-600">UTF-8</span>
          </div>

          <pre
            dir="ltr"
            className="overflow-x-auto p-4 font-mono text-[0.66rem] leading-[1.8] text-slate-300 sm:p-5 sm:text-[0.7rem]"
            aria-hidden="true"
          >
            <code>
              <div>
                <span className="text-[#C084FC]">const</span>{" "}
                <span className="text-[#7DD3FC]">soufiane</span> = {"{"}
              </div>
              <div className="ps-4">
                <span className="text-[#93C5FD]">role</span>:{" "}
                <span className="text-[#86EFAC]">&quot;Frontend Developer&quot;</span>,
              </div>
              <div className="ps-4">
                <span className="text-[#93C5FD]">location</span>:{" "}
                <span className="text-[#86EFAC]">&quot;Morocco&quot;</span>,
              </div>
              <div className="ps-4">
                <span className="text-[#93C5FD]">stack</span>: [
                <span className="text-[#86EFAC]">&quot;React&quot;</span>,{" "}
                <span className="text-[#86EFAC]">&quot;Tailwind&quot;</span>,{" "}
                <span className="text-[#86EFAC]">&quot;JavaScript&quot;</span>],
              </div>
              <div className="ps-4">
                <span className="text-[#93C5FD]">learning</span>:{" "}
                <span className="text-[#FCA5A5]">true</span>,
              </div>
              <div className="ps-4">
                <span className="text-[#93C5FD]">openToWork</span>:{" "}
                <span className="text-[#FCA5A5]">true</span>,
              </div>
              <div>{"};"}</div>
              <div className="mt-2">
                <span className="text-[#C084FC]">export default</span>{" "}
                <span className="text-[#7DD3FC]">soufiane</span>;
              </div>
            </code>
          </pre>

          <div className="flex items-center justify-between border-t border-white/5 px-4 py-2.5">
            <span className="flex items-center gap-1.5 text-[0.6rem] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              {t("about.info.statusValue")}
            </span>
            <span className="font-mono text-[0.55rem] text-slate-500">React · Vite</span>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -bottom-4 end-4 hidden items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-soft sm:flex"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
          <Briefcase className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="leading-tight">
          <span className="block text-[0.6rem] text-muted">{t("about.info.statusLabel")}</span>
          <span className="block text-[0.7rem] font-semibold text-ink">
            {t("about.info.statusValue")}
          </span>
        </span>
      </motion.div>
    </div>
  );
}

export default function About() {
  const { t, language } = useLanguage();
  const paragraphs = t("about.paragraphs");
  const cards = t("about.cards");
  const cvUrl = getCvUrl(language);

  const infoRows = [
    { id: "name", Icon: User, label: t("about.info.nameLabel"), value: site.name },
    { id: "location", Icon: MapPin, label: t("about.info.locationLabel"), value: t("contact.info.locationValue") },
    {
      id: "education",
      Icon: GraduationCap,
      label: t("about.info.educationLabel"),
      value: t("about.info.educationValue"),
    },
    { id: "focus", Icon: Target, label: t("about.info.focusLabel"), value: t("about.info.focusValue") },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1" y={32}>
            <CodeCard />
            <div className="glass mt-5 grid grid-cols-1 gap-2.5 rounded-3xl p-4 sm:grid-cols-2">
              {infoRows.map(({ id, Icon, label, value }) => (
                <div key={id} className="flex items-start gap-2.5 rounded-xl p-2">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-line/10 bg-elevated/40 text-brand">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-muted">
                      {label}
                    </span>
                    <span className="mt-0.5 block text-xs font-medium leading-snug text-ink">
                      {value}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="start"
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
              accent={t("about.titleAccent")}
              description={t("about.description")}
            />

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
              {Array.isArray(paragraphs)
                ? paragraphs.map((paragraph, index) => (
                    <Reveal key={index} delay={0.05 * index}>
                      <p className="text-pretty">{paragraph}</p>
                    </Reveal>
                  ))
                : null}
            </div>

            <Reveal delay={0.15} className="mt-7 flex flex-wrap items-center gap-3">
              <Button as="a" href="#contact" iconRight={ArrowUpRight}>
                {t("about.cta")}
              </Button>
              <Button as="a" href={cvUrl} download variant="secondary" icon={Download}>
                {t("common.downloadCv")}
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.isArray(cards)
            ? cards.map((card, index) => {
                const Icon = CARD_ICONS[card.icon] || Sparkles;
                return (
                  <Reveal key={card.title} delay={index * 0.06}>
                    <div className="group glass h-full rounded-3xl p-5 transition-colors duration-300 hover:border-brand/30">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-line/10 bg-gradient-to-br from-brand/15 to-accent/10 text-brand transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-display text-sm font-semibold text-ink">{card.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted">{card.text}</p>
                    </div>
                  </Reveal>
                );
              })
            : null}
        </div>

        <Reveal delay={0.05} className="mt-5">
          <div className="relative overflow-hidden rounded-3xl border border-line/10 bg-gradient-to-br from-brand/[0.08] via-surface/40 to-accent/[0.08] p-6 sm:p-8">
            <Quote
              className="absolute -end-2 -top-3 h-24 w-24 text-brand/10"
              aria-hidden="true"
            />
            <p className="relative max-w-3xl font-display text-base leading-relaxed text-ink sm:text-lg">
              &ldquo;{t("about.quote")}&rdquo;
            </p>

            <div className="relative mt-6 flex flex-col gap-4 border-t border-line/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-ink">{t("about.goalsTitle")}</h3>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">
                  {t("about.goalsText")}
                </p>
              </div>
              <Button
                as="a"
                href="#contact"
                variant="secondary"
                iconRight={ArrowUpRight}
                className="shrink-0"
              >
                {t("about.cta")}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
