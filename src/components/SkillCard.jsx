import { motion } from "framer-motion";
import TechIcon from "./TechIcon";

/** Single technology card with a coloured icon and a subtle spotlight on hover. */
export default function SkillCard({ skill, description, className = "" }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 340, damping: 26 }}
      className={`group relative overflow-hidden rounded-2xl border border-line/10 bg-elevated/25 p-4 transition-colors duration-300 hover:border-brand/25 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(150px circle at 100% 0%, ${skill.color}20, transparent 70%)`,
        }}
      />

      <div className="relative flex items-start gap-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line/10 bg-base/40 transition-transform duration-300 group-hover:scale-105"
          style={{ color: skill.color }}
        >
          <TechIcon name={skill.icon} className="h-[1.15rem] w-[1.15rem]" />
        </span>
        <div className="min-w-0">
          <h4 className="font-display text-sm font-semibold text-ink">{skill.name}</h4>
          <p className="mt-1.5 text-[0.72rem] leading-relaxed text-muted">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}
