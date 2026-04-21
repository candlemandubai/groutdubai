import { Shield, Sparkle, Clock, CheckIcon } from "./Icons";

const items = [
  {
    Icon: Shield,
    title: "No clean, no charge",
    copy: "If we can't restore it, you don't pay. That's the guarantee.",
  },
  {
    Icon: Sparkle,
    title: "German technology",
    copy: "Professional-grade cleaning systems built for deep restoration.",
  },
  {
    Icon: Clock,
    title: "One-visit finish",
    copy: "Most homes done the same day — no mess, no return trips.",
  },
  {
    Icon: CheckIcon,
    title: "Insured & uniformed",
    copy: "Licensed Dubai technicians. Your home treated like ours.",
  },
];

export function TrustStrip() {
  return (
    <section className="py-14 md:py-20 bg-[var(--color-canvas-soft)] border-y border-[var(--color-line-soft)]">
      <div className="container-narrow grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map(({ Icon, title, copy }) => (
          <div key={title} className="flex flex-col gap-2">
            <div className="w-10 h-10 rounded-[10px] bg-white border border-[var(--color-line)] flex items-center justify-center text-[var(--color-blue)]">
              <Icon size={18} />
            </div>
            <h3 className="text-[14px] font-semibold mt-1">{title}</h3>
            <p className="text-[12.5px] text-[var(--color-muted)] leading-relaxed">
              {copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
