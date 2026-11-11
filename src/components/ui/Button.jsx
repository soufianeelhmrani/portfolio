import { motion } from "framer-motion";

const VARIANTS = {
  primary:
    "bg-gradient-to-r from-brand to-accent text-white shadow-glow-sm hover:shadow-glow btn-shine",
  secondary:
    "glass text-ink hover:border-brand/40 hover:bg-elevated/60",
  outline:
    "border border-line/20 bg-transparent text-ink hover:border-brand/50 hover:text-brand",
  ghost: "text-muted hover:bg-elevated/60 hover:text-ink",
};

const SIZES = {
  sm: "px-3.5 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-sm sm:text-[0.95rem]",
};

/**
 * Shared button/anchor with consistent focus, hover and motion behaviour.
 * Renders a real <a> when `as="a"` is provided.
 */
export default function Button({
  as = "button",
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconRight: IconRight,
  className = "",
  children,
  ...rest
}) {
  const Tag = as === "a" ? motion.a : motion.button;
  const isExternal = typeof href === "string" && /^https?:\/\//.test(href);

  return (
    <Tag
      href={href}
      type={as === "button" ? rest.type || "button" : undefined}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-300 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {Icon ? <Icon className="h-4 w-4 shrink-0" aria-hidden="true" /> : null}
      <span>{children}</span>
      {IconRight ? <IconRight className="h-4 w-4 shrink-0" aria-hidden="true" /> : null}
    </Tag>
  );
}
