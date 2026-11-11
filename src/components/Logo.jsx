import { site } from "../data/site";

/** Brand mark + name. Always links back to the hero. */
export default function Logo({ onClick }) {
  return (
    <a
      href="#home"
      onClick={onClick}
      className="group flex shrink-0 items-center gap-3"
      aria-label={`${site.name} — home`}
    >
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand to-accent font-display text-sm font-extrabold text-white shadow-glow-sm transition-transform duration-300 group-hover:scale-105">
        <span className="relative z-10">{site.initials}</span>
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
      </span>
      <span className="hidden leading-tight sm:block">
        <span className="block font-display text-[0.82rem] font-semibold tracking-wide text-ink">
          ELHAMRANI
        </span>
        <span className="block text-[0.62rem] font-medium uppercase tracking-[0.28em] text-muted">
          Soufiane
        </span>
      </span>
    </a>
  );
}
