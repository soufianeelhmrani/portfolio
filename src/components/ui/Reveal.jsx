import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal wrapper. Animations are disabled automatically when the user
 * prefers reduced motion (also enforced globally by <MotionConfig reducedMotion="user" />).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
  amount = 0.2,
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
