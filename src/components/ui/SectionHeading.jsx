import Reveal from "./Reveal";

/** Reusable section intro: eyebrow, headline with gradient accent, description. */
export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  className = "",
}) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-start"} ${className}`}
    >
      {eyebrow ? (
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-7 bg-gradient-to-r from-brand to-accent" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}

      <Reveal delay={0.06}>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-[2.85rem]">
          {title}
          {accent ? (
            <>
              {" "}
              <span className="text-gradient">{accent}</span>
            </>
          ) : null}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
