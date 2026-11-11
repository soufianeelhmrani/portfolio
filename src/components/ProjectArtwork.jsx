import { useId } from "react";

/** Small helper for the mock browser chrome. */
function Chrome({ children, from, to, id }) {
  return (
    <div
      dir="ltr"
      className="relative h-full w-full overflow-hidden bg-[#070A12]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at 18% 8%, ${from}66, transparent 55%), radial-gradient(circle at 88% 92%, ${to}55, transparent 55%)`,
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="absolute inset-3 overflow-hidden rounded-xl border border-white/10 bg-[#0B1220]/90 shadow-2xl sm:inset-4">
        <div className="flex h-6 items-center gap-1.5 border-b border-white/10 px-2.5 sm:h-7">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FB7185]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#FBBF24]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" />
          <div className="mx-auto flex h-3.5 w-2/5 items-center gap-1 rounded-full bg-white/[0.06] px-2">
            <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
            <span className="h-1 w-1/2 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="h-[calc(100%-1.5rem)] p-2.5 sm:h-[calc(100%-1.75rem)] sm:p-3">
          {children}
        </div>
      </div>

      <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-glow`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <circle cx="90%" cy="10%" r="90" fill="none" stroke={`url(#${id}-glow)`} strokeOpacity="0.3" />
      </svg>
    </div>
  );
}

const bar = (className = "") => `rounded-full bg-white/10 ${className}`;

function Dashboard({ from, to, id }) {
  return (
    <div className="flex h-full gap-2 sm:gap-2.5">
      <div className="hidden w-1/5 flex-col gap-1.5 rounded-lg border border-white/5 bg-white/[0.03] p-2 sm:flex">
        <div className="mb-1 h-2 w-2 rounded-sm" style={{ background: from }} />
        {[0, 1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className={`h-1.5 rounded ${item === 0 ? "" : "bg-white/10"}`}
            style={item === 0 ? { background: `${from}88` } : undefined}
          />
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className={bar("h-1.5 w-16")} />
          <div className="h-3 w-10 rounded-full" style={{ background: `${from}55` }} />
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((item) => (
            <div key={item} className="rounded-lg border border-white/5 bg-white/[0.04] p-1.5">
              <div className={bar("h-1 w-2/3")} />
              <div
                className="mt-1.5 h-2 w-1/2 rounded-sm"
                style={{ background: item === 1 ? to : from, opacity: 0.75 }}
              />
            </div>
          ))}
        </div>

        <div className="relative flex-1 overflow-hidden rounded-lg border border-white/5 bg-white/[0.03] p-2">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
          <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="relative h-full w-full">
            <defs>
              <linearGradient id={`${id}-area`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={from} stopOpacity="0.45" />
                <stop offset="100%" stopColor={from} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 34 L14 27 L28 30 L42 19 L56 23 L70 12 L84 17 L100 8 L100 40 L0 40 Z"
              fill={`url(#${id}-area)`}
            />
            <path
              d="M0 34 L14 27 L28 30 L42 19 L56 23 L70 12 L84 17 L100 8"
              fill="none"
              stroke={from}
              strokeWidth="1.4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx="70" cy="12" r="2" fill={to} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Landing({ from, to }) {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm" style={{ background: from }} />
          <span className={bar("h-1 w-8")} />
        </div>
        <div className="flex items-center gap-2">
          <span className={bar("h-1 w-6")} />
          <span className={bar("h-1 w-6")} />
          <span className="h-3 w-10 rounded-full" style={{ background: from }} />
        </div>
      </div>

      <div className="flex flex-1 items-center gap-3">
        <div className="flex-1 space-y-1.5">
          <span className={bar("block h-1 w-12")} />
          <div
            className="h-2.5 w-full rounded-sm sm:h-3"
            style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
          />
          <div className={bar("h-2.5 w-4/5")} />
          <div className={bar("h-1 w-full")} />
          <div className={bar("h-1 w-3/4")} />
          <div className="mt-2 h-4 w-16 rounded-full" style={{ background: from }} />
        </div>

        <div
          className="relative h-full w-2/5 overflow-hidden rounded-lg border border-white/10"
          style={{ background: `linear-gradient(135deg, ${from}44, ${to}33)` }}
        >
          <span className="absolute -end-4 -top-4 h-12 w-12 rounded-full" style={{ background: `${to}55` }} />
          <span className="absolute bottom-2 start-2 h-6 w-6 rounded-md border border-white/20 bg-white/10" />
          <span className="absolute bottom-4 end-3 h-2 w-8 rounded-full bg-white/20" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((item) => (
          <div key={item} className="rounded-md border border-white/5 bg-white/[0.04] p-1.5">
            <span className="block h-1 w-1/2 rounded-full bg-white/20" />
            <span className="mt-1 block h-1 w-3/4 rounded-full bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Tasks({ from, to }) {
  const columns = [
    { color: from, cards: [0, 1] },
    { color: to, cards: [0, 1, 2] },
    { color: "#94A3B8", cards: [0] },
  ];

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className={bar("h-1.5 w-14")} />
        <span className="h-3 w-8 rounded-full" style={{ background: `${from}55` }} />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-1.5 sm:gap-2">
        {columns.map((column, index) => (
          <div key={index} className="flex flex-col gap-1.5 rounded-lg border border-white/5 bg-white/[0.03] p-1.5">
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: column.color }} />
              <span className={bar("h-1 w-2/3")} />
            </div>
            {column.cards.map((card) => (
              <div key={card} className="rounded-md border border-white/5 bg-white/[0.05] p-1.5">
                <span className="block h-1 w-2/3 rounded-full bg-white/20" />
                <span className="mt-1 block h-1 w-full rounded-full bg-white/10" />
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="h-2 w-2 rounded-full" style={{ background: `${column.color}99` }} />
                  <span className="h-1 w-4 rounded-full bg-white/10" />
                </div>
              </div>
            ))}
            <div className="mt-auto h-3 rounded-md border border-dashed border-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Portfolio({ from, to }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
      <div className="flex items-center gap-1.5 self-start">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: from }} />
        <span className={bar("h-1 w-6")} />
        <span className="ms-auto" />
      </div>
      <div
        className="grid h-9 w-9 place-items-center rounded-full border-2 text-[0.5rem] font-bold text-white sm:h-11 sm:w-11"
        style={{ borderColor: from, background: `${from}33` }}
      >
        SE
      </div>
      <div className="h-2 w-2/3 rounded-full bg-white/20" />
      <div className="h-1 w-1/2 rounded-full bg-white/10" />
      <div className="flex gap-1">
        <span className="h-2.5 w-8 rounded-full" style={{ background: from }} />
        <span className="h-2.5 w-8 rounded-full border border-white/15" />
      </div>
      <div className="mt-1 grid w-full grid-cols-3 gap-1.5">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="h-8 rounded-md border border-white/5 sm:h-10"
            style={{ background: item === 1 ? `${to}22` : "rgba(255,255,255,0.04)" }}
          />
        ))}
      </div>
    </div>
  );
}

function Weather({ from, to }) {
  return (
    <div className="flex h-full gap-2">
      <div
        className="relative flex w-1/2 flex-col justify-between overflow-hidden rounded-lg border border-white/10 p-2"
        style={{ background: `linear-gradient(145deg, ${from}44, ${to}22)` }}
      >
        <div className="flex items-center justify-between">
          <span className={bar("h-1 w-8")} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: to }} />
        </div>
        <div className="flex items-end gap-1.5">
          <span className="font-display text-2xl font-bold leading-none text-white sm:text-3xl">24°</span>
          <span className="mb-0.5 text-[0.45rem] text-white/70">Sunny</span>
        </div>
        <div className="space-y-1">
          <span className={bar("block h-1 w-3/4 bg-white/20")} />
          <span className={bar("block h-1 w-1/2 bg-white/15")} />
        </div>
        <span
          className="absolute -end-5 -top-5 h-14 w-14 rounded-full opacity-40"
          style={{ background: to }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        {[0, 1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex flex-1 items-center justify-between rounded-md border border-white/5 bg-white/[0.04] px-2"
          >
            <span className={bar("h-1 w-6")} />
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: item % 2 ? to : from }} />
              <span className={bar("h-1 w-4")} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Shop({ from, to }) {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className={bar("h-1.5 w-12")} />
        <div className="flex items-center gap-1">
          <span className="h-3 w-8 rounded-full border border-white/15" />
          <span className="h-3 w-3 rounded-full" style={{ background: from }} />
        </div>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-1.5">
        {[0, 1, 2].map((item) => (
          <div key={item} className="flex flex-col overflow-hidden rounded-lg border border-white/5 bg-white/[0.04]">
            <div
              className="relative flex-1"
              style={{
                background: `linear-gradient(145deg, ${item === 1 ? to : from}55, transparent)`,
              }}
            >
              <span className="absolute inset-x-2 bottom-2 h-2 rounded-sm bg-white/20" />
            </div>
            <div className="space-y-1 p-1.5">
              <span className={bar("block h-1 w-3/4")} />
              <div className="flex items-center justify-between">
                <span className="h-1.5 w-4 rounded-sm" style={{ background: `${from}cc` }} />
                <span className="h-2 w-2 rounded-full bg-white/15" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const VARIANTS = {
  dashboard: Dashboard,
  landing: Landing,
  tasks: Tasks,
  portfolio: Portfolio,
  weather: Weather,
  shop: Shop,
};

/** Generated project screenshot placeholder — no external images required. */
export default function ProjectArtwork({ artwork, className = "" }) {
  const id = useId().replace(/:/g, "");
  const { variant = "dashboard", from = "#3B82F6", to = "#8B5CF6" } = artwork || {};
  const Variant = VARIANTS[variant] || Dashboard;

  return (
    <div className={`h-full w-full ${className}`}>
      <Chrome from={from} to={to} id={id}>
        <Variant from={from} to={to} id={id} />
      </Chrome>
    </div>
  );
}
