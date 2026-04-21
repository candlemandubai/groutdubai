import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "./Icons";

const FAQS = [
  {
    q: "How long does a typical job take?",
    a: "Most apartments are completed in 2–4 hours. A full villa with multiple surfaces usually finishes same-day. We'll share an exact estimate after you send photos on WhatsApp.",
  },
  {
    q: "Is it safe for my tiles, stone and sealants?",
    a: "Yes. Our German cleaning systems and solutions are designed for medium-to-heavy dirt without damaging porcelain, ceramic, natural stone, or existing sealants. We test a small area first if you'd like.",
  },
  {
    q: "What does 'no clean, no charge' actually mean?",
    a: "We inspect the finish with you before you pay. If the restoration didn't deliver a visible, dramatic before-and-after, we don't charge — no deposit, no call-out fee, no fine print.",
  },
  {
    q: "Do you clean tile surfaces too, or only the grout lines?",
    a: "Both. Grout is where the dirt builds up, but the tile face is deep-cleaned as part of every job. Stone surfaces can also be sealed after cleaning on request.",
  },
  {
    q: "Which areas of Dubai do you cover?",
    a: "All of Dubai — Downtown, Marina, JVC, JLT, Arabian Ranches, Emirates Hills, Palm Jumeirah, Mirdif, Al Furjan, Dubai Hills, Jumeirah, and more. If you're unsure, send us a message.",
  },
  {
    q: "How do I pay?",
    a: "Cash or card on completion. We invoice after you've inspected the work. No upfront deposits for standard residential jobs.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-[var(--color-canvas-panel)] border-y border-[var(--color-line-soft)]">
      <div className="container-narrow max-w-[800px]">
        <header className="mb-10">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-[var(--color-blue)]">
            Questions?
          </p>
          <h2 className="mt-3 text-[32px] md:text-[44px] tight font-extrabold leading-[1.05]">
            Straight <span className="grad-text">answers</span>.
          </h2>
        </header>
        <div className="divide-y divide-[var(--color-line-soft)] rounded-[16px] border border-[var(--color-line)] bg-white overflow-hidden">
          {FAQS.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Item({
  q,
  a,
  defaultOpen = false,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-5 hover:bg-[var(--color-canvas-soft)] transition-colors"
        aria-expanded={open}
      >
        <span className="text-[15px] md:text-[16px] font-semibold">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-[var(--color-muted)]"
        >
          <ChevronDown />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="px-5 md:px-6 pb-5 text-[14px] text-[var(--color-muted)] leading-relaxed max-w-[680px]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
