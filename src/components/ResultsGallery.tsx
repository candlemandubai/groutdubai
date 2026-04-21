import { motion } from "framer-motion";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Play } from "./Icons";

const CASES = [
  {
    title: "Kitchen floor · Arabian Ranches",
    meta: "4-bed villa · 4 hours",
  },
  {
    title: "Master bath · Downtown",
    meta: "2-bed apartment · 2 hours",
  },
  {
    title: "Staircase · Emirates Hills",
    meta: "3 flights · same day",
  },
];

export function ResultsGallery() {
  return (
    <section id="results" className="py-20 md:py-28">
      <div className="container-narrow">
        <header className="max-w-[620px]">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-[var(--color-blue)]">
            Real Dubai homes
          </p>
          <h2 className="mt-3 text-[32px] md:text-[44px] tight font-extrabold leading-[1.05]">
            Results, <span className="grad-text">not just promises</span>.
          </h2>
          <p className="mt-4 text-[15px] text-[var(--color-muted)] leading-relaxed">
            Drag any slider. Every job is documented — before and after — so you see
            what you&apos;re paying for.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {CASES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col gap-3"
            >
              <BeforeAfterSlider height="clamp(220px, 30vw, 300px)" />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[14px] font-bold">{c.title}</h3>
                  <p className="text-[12px] text-[var(--color-muted)] mt-0.5">
                    {c.meta}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Watch process video (coming soon)"
                  className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--color-ink)] bg-[var(--color-canvas-panel)] border border-[var(--color-line)] rounded-full px-2.5 py-1"
                >
                  <Play size={10} /> 30s
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
