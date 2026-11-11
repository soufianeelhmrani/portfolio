import { Braces, LayoutTemplate, Sparkles, Wrench } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import SkillCard from "../components/SkillCard";
import { useLanguage } from "../context/LanguageContext";
import { skillCategories } from "../data/skills";

const CATEGORY_ICONS = {
  layout: LayoutTemplate,
  braces: Braces,
  wrench: Wrench,
};

function CategoryPanel({ category }) {
  const { t } = useLanguage();
  const Icon = CATEGORY_ICONS[category.icon] || Sparkles;
  const isWide = category.id === "frontend";

  return (
    <div className="glass flex h-full flex-col rounded-3xl p-4 sm:p-5">
      <div className="flex items-center gap-3">
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${category.accent} text-white shadow-glow-sm`}
        >
          <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
        </span>
        <h3 className="min-w-0 font-display text-sm font-semibold text-ink sm:text-base">
          {t(`skills.categories.${category.id}`)}
        </h3>
        <span className="ms-auto rounded-full border border-line/10 bg-elevated/50 px-2.5 py-0.5 font-mono text-[0.65rem] text-muted">
          {String(category.skills.length).padStart(2, "0")}
        </span>
      </div>

      <div className={`mt-4 grid flex-1 gap-2.5 ${isWide ? "sm:grid-cols-2" : ""}`}>
        {category.skills.map((skill, index) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            description={t(`skills.items.${skill.id}.description`)}
            className={isWide && index === category.skills.length - 1 ? "sm:col-span-2" : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLanguage();
  const [frontend, programming, tools] = skillCategories;

  return (
    <section id="skills" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("skills.eyebrow")}
          title={t("skills.title")}
          accent={t("skills.titleAccent")}
          description={t("skills.description")}
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2" y={28}>
            <CategoryPanel category={frontend} />
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal delay={0.08} y={28}>
              <CategoryPanel category={programming} />
            </Reveal>
            <Reveal delay={0.14} y={28} className="flex-1">
              <CategoryPanel category={tools} />
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-4">
          <div className="glass flex flex-col gap-3 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {t("skills.exploringLabel")}
              </span>
              <span className="text-xs font-medium text-ink">{t("skills.exploring")}</span>
            </div>
            <p className="max-w-md text-[0.7rem] leading-relaxed text-muted/80">{t("skills.note")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
