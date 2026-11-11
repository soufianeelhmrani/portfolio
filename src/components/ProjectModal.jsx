import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Check, ExternalLink, Github, Info, X } from "lucide-react";
import ProjectArtwork from "./ProjectArtwork";
import Button from "./ui/Button";
import { useLanguage } from "../context/LanguageContext";
import { useLockBodyScroll } from "../hooks/usePortfolioHooks";

/** Accessible project details dialog with focus trap and scroll lock. */
export default function ProjectModal({ project, onClose }) {
  const { t } = useLanguage();
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);

  useLockBodyScroll(Boolean(project));

  useEffect(() => {
    if (!project) return undefined;

    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  const title = t(`projects.items.${project.id}.title`);
  const description = t(`projects.items.${project.id}.description`);
  const features = t(`projects.items.${project.id}.features`);
  const category = t(`projects.filters.${project.categories[0]}`);

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#02040A]/80 backdrop-blur-md"
        aria-hidden="true"
      />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] border border-line/15 bg-base/95 shadow-soft backdrop-blur-2xl sm:rounded-[2rem]"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[2rem]">
          <ProjectArtwork artwork={project.artwork} />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t("a11y.closeDialog")}
            className="absolute end-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md transition-colors hover:bg-black/65"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
          <span className="absolute bottom-4 start-4 z-20 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-wider text-white/80 backdrop-blur-md">
            {t("projects.placeholderBadge")}
          </span>
        </div>

        <div className="p-5 sm:p-8">
          <p className="eyebrow">{category}</p>
          <h2
            id="project-dialog-title"
            className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{description}</p>

          <div className="mt-7 grid gap-7 sm:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted">
                {t("projects.modal.highlights")}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {Array.isArray(features)
                  ? features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
                          <Check className="h-2.5 w-2.5" aria-hidden="true" />
                        </span>
                        {feature}
                      </li>
                    ))
                  : null}
              </ul>
            </div>

            <div>
              <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted">
                {t("projects.modal.stack")}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-2 rounded-xl border border-line/10 bg-elevated/30 p-3 text-[0.7rem] leading-relaxed text-muted">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                {t("projects.modal.note")}
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-2.5 border-t border-line/10 pt-6 sm:flex-row sm:items-center">
            {project.demo ? (
              <Button as="a" href={project.demo} icon={ExternalLink} className="sm:flex-1">
                {t("common.viewDemo")}
              </Button>
            ) : (
              <div className="flex flex-1 items-center gap-2 rounded-xl border border-dashed border-line/15 px-4 py-3 text-xs leading-relaxed text-muted">
                <Info className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                {t("projects.modal.previewNote")}
              </div>
            )}

            <Button as="a" href={project.code} variant="secondary" icon={Github}>
              {t("common.sourceCode")}
            </Button>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body,
  );
}
