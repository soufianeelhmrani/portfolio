import { GraduationCap, Info, Pencil, School, Sparkles } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { useLanguage } from "../context/LanguageContext";
import { site } from "../data/site";

const ENTRIES = [
  { id: "bac", Icon: GraduationCap },
  { id: "ofppt", Icon: School },
];

export default function Education() {
  const { t } = useLanguage();
  const specialization = site.education.ofpptSpecialization || t("education.specializationPlaceholder");

  return (
    <section id="education" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("education.eyebrow")}
          title={t("education.title")}
          accent={t("education.titleAccent")}
          description={t("education.description")}
        />

        <ol className="relative mx-auto mt-14 max-w-3xl space-y-5 before:absolute before:bottom-8 before:top-8 before:start-[1.375rem] before:w-px before:bg-gradient-to-b before:from-brand/60 before:via-accent/40 before:to-transparent sm:before:start-[1.5rem]">
          {ENTRIES.map(({ id, Icon }, index) => (
            <li key={id} className="relative ps-16 sm:ps-20">
              <span className="absolute start-0 top-1 z-10 grid h-11 w-11 place-items-center rounded-2xl border border-line/15 bg-surface text-brand shadow-glow-sm sm:h-12 sm:w-12">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>

              <Reveal delay={index * 0.08}>
                <div className="glass rounded-3xl p-5 transition-colors duration-300 hover:border-brand/25 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-brand">
                      {t(`education.items.${id}.type`)}
                    </span>
                    <span className="text-xs text-muted">{t(`education.items.${id}.org`)}</span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                    {t(`education.items.${id}.title`)}
                  </h3>

                  {id === "ofppt" ? (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted">
                        {t("education.specializationLabel")}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-brand/30 bg-brand/[0.07] px-2.5 py-1 text-[0.68rem] font-medium text-brand">
                        <Pencil className="h-2.5 w-2.5" aria-hidden="true" />
                        {specialization}
                      </span>
                    </div>
                  ) : null}

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {t(`education.items.${id}.description`)}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}

          <li className="relative ps-16 sm:ps-20">
            <span className="absolute start-0 top-1 z-10 grid h-11 w-11 place-items-center rounded-2xl border border-line/15 bg-surface text-accent shadow-glow-sm sm:h-12 sm:w-12">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>

            <Reveal delay={0.16}>
              <div className="relative overflow-hidden rounded-3xl border border-line/10 bg-gradient-to-br from-brand/[0.08] via-surface/40 to-accent/[0.08] p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                  {t("education.learningTitle")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t("education.learningText")}
                </p>
              </div>
            </Reveal>
          </li>
        </ol>

        <div className="mx-auto mt-8 flex max-w-2xl items-start gap-2.5 rounded-2xl border border-line/10 bg-elevated/20 px-4 py-3 text-xs leading-relaxed text-muted">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
          <p>{t("education.note")}</p>
        </div>
      </div>
    </section>
  );
}
