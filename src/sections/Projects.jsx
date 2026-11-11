import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Info } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { useLanguage } from "../context/LanguageContext";
import { projectFilters, projects } from "../data/projects";

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  );

  const selectedProject = projects.find((project) => project.id === selectedId) || null;
  const closeModal = useCallback(() => setSelectedId(null), []);

  return (
    <section id="projects" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          accent={t("projects.titleAccent")}
          description={t("projects.description")}
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2" role="group" aria-label={t("projects.eyebrow")}>
          {projectFilters.map((id) => {
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                aria-pressed={active}
                className={`relative overflow-hidden rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300 ${
                  active
                    ? "text-white"
                    : "border border-line/10 bg-elevated/30 text-muted hover:border-brand/30 hover:text-ink"
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="project-filter-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand to-accent shadow-glow-sm"
                  />
                ) : null}
                <span className="relative">{t(`projects.filters.${id}`)}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full"
              >
                <ProjectCard project={project} onOpen={() => setSelectedId(project.id)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mx-auto mt-8 flex max-w-2xl items-start gap-2.5 rounded-2xl border border-line/10 bg-elevated/20 px-4 py-3 text-xs leading-relaxed text-muted">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
          <p>{t("projects.modal.note")}</p>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <ProjectModal key={selectedProject.id} project={selectedProject} onClose={closeModal} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
