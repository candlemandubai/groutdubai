import { motion } from "framer-motion";
import { ArrowRight } from "./Icons";
import { waSurface } from "@/lib/whatsapp";

type Surface = {
  title: string;
  desc: string;
  tiles: "floor" | "wall" | "stair" | "counter" | "pool" | "bathroom";
};

const SURFACES: Surface[] = [
  {
    title: "Kitchen floors & backsplashes",
    desc: "Grease-soaked grout lines restored without damaging your tiles or stone.",
    tiles: "floor",
  },
  {
    title: "Bathroom floors & walls",
    desc: "Soap scum, mildew, water staining — lifted and sealed for a drier finish.",
    tiles: "bathroom",
  },
  {
    title: "Living & hallway tiles",
    desc: "High-traffic areas brought back to original colour — no harsh smells, safe for pets.",
    tiles: "floor",
  },
  {
    title: "Staircases",
    desc: "Edge-by-edge detailing on stair treads. Safe, even, and dramatically lighter.",
    tiles: "stair",
  },
  {
    title: "Countertops & vanities",
    desc: "Stone and tile counters deep-cleaned, with optional sealing to protect the finish.",
    tiles: "counter",
  },
  {
    title: "Pool decks & balconies",
    desc: "Outdoor tile restoration — algae, dust and pollution stripped in one visit.",
    tiles: "pool",
  },
];

export function WhatWeClean() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-narrow">
        <header className="max-w-[620px]">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-[var(--color-blue)]">
            What we clean
          </p>
          <h2 className="mt-3 text-[32px] md:text-[44px] tight font-extrabold leading-[1.05]">
            Six surfaces. <span className="grad-text">One restoration team.</span>
          </h2>
          <p className="mt-4 text-[15px] text-[var(--color-muted)] leading-relaxed">
            We focus on the high-wear surfaces where grout makes or breaks a room.
            Pricing shared by WhatsApp after a 30-second quote.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SURFACES.map((s, i) => (
            <SurfaceCard key={s.title} surface={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SurfaceCard({ surface, index }: { surface: Surface; index: number }) {
  return (
    <motion.a
      href={waSurface(surface.title)}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      className="group block rounded-[16px] border border-[var(--color-line)] bg-white p-5 hover:border-[var(--color-ink)] hover:shadow-soft transition-all"
    >
      <div className="h-28 rounded-[12px] overflow-hidden mb-4 relative bg-[var(--color-canvas-panel)]">
        <SurfacePreview kind={surface.tiles} />
      </div>
      <h3 className="text-[16px] font-bold leading-tight">{surface.title}</h3>
      <p className="mt-2 text-[13px] text-[var(--color-muted)] leading-relaxed">
        {surface.desc}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--color-blue)]">
        Get a quote
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </span>
    </motion.a>
  );
}

function SurfacePreview({ kind }: { kind: Surface["tiles"] }) {
  const common = "absolute inset-0";
  if (kind === "stair") {
    return (
      <div className={common}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,#e9edf2 0 20%,#d3dae3 20% 40%,#e9edf2 40% 60%,#d3dae3 60% 80%,#e9edf2 80%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-[35%]"
          style={{
            background:
              "linear-gradient(135deg,#3a3430 0%,#5a514a 50%,#2e2925 100%)",
            clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
      </div>
    );
  }
  if (kind === "counter") {
    return (
      <div className={common}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,#ddd6cc 0 45%,#c3b9a6 45% 55%,#ebe3d4 55% 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(ellipse at 70% 60%, rgba(0,0,0,0.08) 0%, transparent 50%)",
          }}
        />
      </div>
    );
  }
  if (kind === "pool") {
    return (
      <div className={common}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,#b8d4e8 0 50%,#4a90c2 50% 100%)",
          }}
        />
        <Grid color="#ffffff" opacity={0.55} />
      </div>
    );
  }
  if (kind === "bathroom") {
    return (
      <div className={common}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg,#f0f4f7 0%,#dde5ec 50%,#eaf0f4 100%)",
          }}
        />
        <Grid color="#b8c4d1" opacity={0.6} />
      </div>
    );
  }
  return (
    <div className={common}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg,#f4f1eb 0%,#e3ddd2 50%,#f4f1eb 100%)",
        }}
      />
      <Grid color="#b8ae9c" opacity={0.5} />
    </div>
  );
}

function Grid({ color, opacity }: { color: string; opacity: number }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        opacity,
        backgroundImage: `linear-gradient(90deg,transparent 0 18%,${color} 18% 22%,transparent 22% 40%,${color} 40% 44%,transparent 44% 62%,${color} 62% 66%,transparent 66% 84%,${color} 84% 88%,transparent 88%),linear-gradient(0deg,transparent 0 30%,${color} 30% 33%,transparent 33% 63%,${color} 63% 66%,transparent 66%)`,
      }}
    />
  );
}
