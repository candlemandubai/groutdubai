import { motion } from "framer-motion";
import { StarIcon } from "./Icons";

const REVIEWS = [
  {
    quote:
      "I genuinely thought my kitchen grout was ruined. One visit and it looks like the tiles were just laid. The team was on time and tidy — no mess left behind.",
    name: "Sarah",
    meta: "Arabian Ranches",
  },
  {
    quote:
      "Booked on WhatsApp in the morning, they came the same afternoon. The before/after on my staircase is unreal. Already booked them for my parents' villa.",
    name: "Mohammed",
    meta: "Downtown",
  },
  {
    quote:
      "The maintenance spray is a game-changer. My bathroom grout has stayed bright for months. Honest pricing, zero upsell pressure.",
    name: "Priya",
    meta: "Dubai Hills",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <header className="max-w-[620px] mb-10 md:mb-12">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-[var(--color-blue)]">
            What Dubai says
          </p>
          <h2 className="mt-3 text-[32px] md:text-[44px] tight font-extrabold leading-[1.05]">
            People who&apos;ve had it done,{" "}
            <span className="grad-text">talk about it</span>.
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-[16px] border border-[var(--color-line)] p-6 bg-white"
            >
              <span className="flex gap-0.5 text-[var(--color-amber)]">
                <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
              </span>
              <blockquote className="mt-3 text-[14px] md:text-[15px] text-[var(--color-ink)] leading-relaxed">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 pt-4 border-t border-[var(--color-line-soft)] text-[12px]">
                <span className="font-semibold text-[var(--color-ink)]">
                  {r.name}
                </span>
                <span className="text-[var(--color-muted)]"> · {r.meta}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
