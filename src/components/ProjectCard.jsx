import { motion } from "framer-motion";
import { ArrowUpRight, Eye, Github } from "lucide-react";
import ProjectArtwork from "./ProjectArtwork";
import Button from "./ui/Button";
import { useLanguage } from "../context/LanguageContext";

/** Project gallery card with generated screenshot, tech chips and actions. */
export default function ProjectCard({ project, onOpen }) {
  const { t } = useLanguage();
  const title = t(`projects.items.${project.id}.title`);
  const description = t(`projects.items.${project.id}.description`);
  const category = t(`projects.filters.${project.categories[0]}`);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className="group glass relative flex h-full flex-col overflow-hidden rounded-3xl transition-colors duration-300 hover:border-brand/30 hover:shadow-glow-sm"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <button
        type="button"
        onClick={onOpen}
        aria-label={`${title} — ${t("common.details")}`}
        className="relative block aspect-[16/10] w-full overflow-hidden text-start"
      >
        <ProjectArtwork
          artwork={project.artwork}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        <span className="absolute start-3 top-3 z-10 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-wider text-white/80 backdrop-blur-md">
          {t("projects.placeholderBadge")}
        </span>

        <span className="absolute inset-x-3 bottom-3 z-10 flex translate-y-2 items-center justify-between opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[0.68rem] font-medium text-white backdrop-blur-md">
            <Eye className="h-3.5 w-3.5" aria-hidden="true" />
            {t("common.details")}
          </span>
          <span className="grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md">
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug text-ink">{title}</h3>
          <span className="mt-0.5 shrink-0 rounded-full border border-line/10 bg-elevated/50 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-wider text-muted">
            {category}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="chip px-2.5 py-0.5 text-[0.68rem]">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-5">
          {project.demo ? (
            <Button
              as="a"
              href={project.demo}
              size="sm"
              variant="secondary"
              className="flex-1"
              icon={ArrowUpRight}
            >
              {t("common.viewDemo")}
            </Button>
          ) : (
            <Button size="sm" variant="secondary" className="flex-1" onClick={onOpen}>
              {t("common.viewDemo")}
            </Button>
          )}

          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} — ${t("common.sourceCode")}`}
            title={t("common.sourceCode")}
            className="glass grid h-9 w-9 shrink-0 place-items-center rounded-xl text-muted transition-colors hover:border-brand/40 hover:text-ink"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
