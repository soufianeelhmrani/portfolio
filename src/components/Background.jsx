/** Ambient background: gradients, grid and grain. Purely decorative. */
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-base" />

      <div className="absolute inset-0 opacity-50 dark:opacity-100">
        <div className="absolute -top-48 start-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[130px] animate-aurora" />
        <div className="absolute top-1/3 -end-40 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[130px] animate-aurora [animation-delay:-7s]" />
        <div className="absolute -bottom-40 start-0 h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-[120px] animate-aurora [animation-delay:-12s]" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="noise absolute inset-0 opacity-[0.04] mix-blend-soft-light" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
    </div>
  );
}
