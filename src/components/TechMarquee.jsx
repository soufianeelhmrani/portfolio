import { allSkills } from "../data/skills";
import { useLanguage } from "../context/LanguageContext";
import TechIcon from "./TechIcon";

/**
 * Infinite technology marquee under the hero.
 * The duplicate row is hidden from assistive technology.
 */
export default function TechMarquee() {
  const { t } = useLanguage();
  const row = [...allSkills, ...allSkills];

  return (
    <div className="relative border-y border-line/10 bg-surface/20 py-5 backdrop-blur-sm">
      <div className="mx-auto flex max-w-8xl items-center gap-6 px-5 sm:px-8">
        <span className="hidden shrink-0 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-muted md:block">
          {t("hero.toolkit")}
        </span>

        <div
          dir="ltr"
          className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          <div className="flex w-max animate-marquee-x items-center gap-3 hover:[animation-play-state:paused]">
            {row.map((skill, index) => (
              <span
                key={`${skill.id}-${index}`}
                aria-hidden={index >= allSkills.length}
                className="flex shrink-0 items-center gap-2 rounded-full border border-line/10 bg-elevated/30 px-3.5 py-1.5 text-xs font-medium text-muted"
              >
                <TechIcon name={skill.icon} className="h-3.5 w-3.5" style={{ color: skill.color }} />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
