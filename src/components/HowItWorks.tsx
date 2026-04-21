import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Message us",
    body: "Send a photo or short video on WhatsApp. We'll price it within the hour.",
  },
  {
    n: "02",
    title: "We visit",
    body: "Uniformed technician arrives with German-tech cleaning systems. We lay protection and get to work.",
  },
  {
    n: "03",
    title: "See the before / after",
    body: "You inspect the finish. If it's not visibly transformed, you don't pay a dirham.",
  },
  {
    n: "04",
    title: "Protect it",
    body: "Optional sealing + our maintenance kit keeps it looking new for months.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-canvas-panel)] border-y border-[var(--color-line-soft)]">
      <div className="container-narrow">
        <header className="max-w-[620px]">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-[var(--color-blue)]">
            How it works
          </p>
          <h2 className="mt-3 text-[32px] md:text-[44px] tight font-extrabold leading-[1.05]">
            From WhatsApp to <span className="grad-text">restored</span> — one day.
          </h2>
        </header>

        <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="relative rounded-[14px] border border-[var(--color-line)] bg-white p-5"
            >
              <span className="text-[11px] font-mono font-bold text-[var(--color-blue)] tracking-widest">
                {s.n}
              </span>
              <h3 className="mt-2 text-[16px] font-bold leading-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-[13px] text-[var(--color-muted)] leading-relaxed">
                {s.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
