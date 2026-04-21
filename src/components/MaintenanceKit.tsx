import { motion } from "framer-motion";
import { CheckIcon, WhatsAppIcon } from "./Icons";
import { ButtonLink } from "./Button";
import { waKit } from "@/lib/whatsapp";

const includes = [
  "200 ml spray bottle",
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
    <div className="relative aspect-[5/4] rounded-[24px] overflow-hidden border border-[var(--color-line)] shadow-soft bg-[var(--color-canvas-panel)]">
      <img
        src="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1400&q=85&auto=format&fit=crop"
        srcSet="
          https://images.unsplash.com/photo-1585421514738-01798e348b17?w=700&q=85&auto=format&fit=crop 700w,
          https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1400&q=85&auto=format&fit=crop 1400w
        "
        sizes="(min-width: 1024px) 540px, 100vw"
        alt="GroutDubai Maintenance Kit — spray bottle and microfibre towels"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,194,255,0.04) 0%, transparent 40%, rgba(10,13,20,0.06) 100%)",
        }}
      />
    </div>
  );
}
