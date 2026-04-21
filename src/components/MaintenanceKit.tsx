import { motion } from "framer-motion";
import { CheckIcon, WhatsAppIcon } from "./Icons";
import { ButtonLink } from "./Button";
import { waKit } from "@/lib/whatsapp";

const includes = [
  "500 ml spray bottle",
  "Apply-side microfibre (blue)",
  "Buff-side microfibre (white)",
  "Safe on grout, stone, porcelain",
];

export function MaintenanceKit() {
  return (
    <section id="kit" className="py-20 md:py-28 bg-[var(--color-canvas-panel)] border-y border-[var(--color-line-soft)]">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] uppercase tracking-widest font-semibold text-[var(--color-blue)]">
              Keep it looking new
            </p>
            <h2 className="mt-3 text-[32px] md:text-[44px] tight font-extrabold leading-[1.05]">
              The <span className="grad-text">GroutDubai</span> Maintenance Kit.
            </h2>
            <p className="mt-4 text-[15px] text-[var(--color-muted)] leading-relaxed max-w-[520px]">
              A simple spray + two-towel system to keep restored grout looking new
              between visits. One towel to apply, one to wipe clean. That&apos;s it.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {includes.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-[14px] text-[var(--color-ink)]"
                >
                  <span className="mt-0.5 text-[var(--color-blue)]">
                    <CheckIcon size={16} />
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <ButtonLink
                href={waKit()}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                size="lg"
              >
                <WhatsAppIcon size={18} />
                Order on WhatsApp
              </ButtonLink>
              <div className="flex items-baseline gap-1.5 text-[var(--color-muted)]">
                <span className="text-[12px] uppercase tracking-widest">From</span>
                <span className="text-[20px] font-extrabold text-[var(--color-ink)]">
                  AED —
                </span>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-[var(--color-muted-soft)]">
              Delivered within Dubai · price shared on WhatsApp
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <KitVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function KitVisual() {
  return (
    <div
      className="relative aspect-[5/4] rounded-[24px] overflow-hidden border border-[var(--color-line)] shadow-soft"
      style={{
        background:
          "radial-gradient(ellipse at 30% 30%, #ffffff 0%, #f0f5fb 55%, #dbe6f1 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute -top-10 -left-10 w-56 h-56 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,194,255,0.35), transparent 70%)",
        }}
      />

      <div className="absolute inset-0 flex items-end justify-center pb-8">
        <div className="relative flex items-end gap-6 md:gap-8">
          <div className="relative">
            <div
              className="w-[110px] h-[40px] rounded-t-[10px]"
              style={{
                background: "linear-gradient(180deg, #1a1f2c, #0a0d14)",
              }}
            />
            <div
              className="w-[140px] h-[200px] rounded-[12px] -mt-1 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(230,243,252,0.95) 100%)",
                border: "1.5px solid rgba(10,13,20,0.12)",
                boxShadow: "0 20px 40px rgba(10,13,20,0.12), inset 0 0 0 1px rgba(255,255,255,0.8)",
              }}
            >
              <div className="absolute inset-x-6 top-14 h-[100px] rounded-md bg-white border border-[var(--color-line)] flex flex-col items-center justify-center gap-1.5">
                <span className="text-[9px] font-extrabold tracking-widest grad-text">
                  GROUTDUBAI
                </span>
                <span className="text-[7px] uppercase tracking-widest text-[var(--color-muted)]">
                  Grout Maintenance
                </span>
                <span className="mt-1 w-10 h-[2px] bg-[var(--color-cyan)] rounded-full" />
                <span className="text-[7px] text-[var(--color-muted-soft)]">
                  500 ml · safe for tile
                </span>
              </div>
              <div
                className="absolute inset-x-8 bottom-6 h-[30px] rounded-sm"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,194,255,0.35), rgba(0,102,255,0.25))",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pb-4">
            <Towel tint="#cfe8ff" label="Apply" />
            <Towel tint="#ffffff" label="Buff" border />
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 inset-x-0 flex justify-center">
        <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--color-muted-soft)] font-semibold">
          Spray · Apply · Buff
        </span>
      </div>
    </div>
  );
}

function Towel({
  tint,
  label,
  border,
}: {
  tint: string;
  label: string;
  border?: boolean;
}) {
  return (
    <div
      className="relative w-[90px] h-[60px] rounded-[6px] shadow-[0_6px_20px_rgba(10,13,20,0.08)]"
      style={{
        background: `linear-gradient(145deg, ${tint}, color-mix(in srgb, ${tint} 86%, #000 4%))`,
        border: border ? "1px solid rgba(10,13,20,0.1)" : "none",
      }}
    >
      <div
        className="absolute inset-1 rounded-[4px] opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(10,13,20,0.08) 0 2px, transparent 2px 6px)",
        }}
      />
      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-wider text-[var(--color-muted)]">
        {label}
      </span>
    </div>
  );
}
