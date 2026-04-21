import { motion } from "framer-motion";
import { Shield } from "./Icons";
import { ButtonLink } from "./Button";
import { WhatsAppIcon } from "./Icons";
import { waGeneric } from "@/lib/whatsapp";

export function Guarantee() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[24px] overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0a0d14 0%, #12192a 50%, #0a0d14 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,194,255,0.28), rgba(0,102,255,0.1) 50%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent 0 19%, #fff 19% 21%, transparent 21%), linear-gradient(0deg, transparent 0 19%, #fff 19% 21%, transparent 21%)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative px-6 py-12 md:p-14 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[11px] font-semibold text-[var(--color-cyan)] uppercase tracking-wider">
                <Shield size={14} />
                The guarantee
              </div>
              <h2 className="mt-4 text-[32px] md:text-[48px] tighter font-extrabold leading-[1.02] text-white">
                No clean.{" "}
                <span
                  className="grad-text"
                  style={{
                    backgroundImage: "linear-gradient(90deg,#00c2ff,#7ee0ff)",
                  }}
                >
                  No charge.
                </span>
              </h2>
              <p className="mt-4 text-[15px] md:text-[16px] text-white/70 leading-relaxed max-w-[560px]">
                We restore medium-to-heavy grout dirt on our first visit. If your
                grout isn&apos;t visibly transformed, you walk away without paying.
                No fine print.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-[12px]">
                {[
                  "Before / after documented",
                  "Inspect before you pay",
                  "Cash or card on completion",
                ].map((t) => (
                  <span
                    key={t}
                    className="bg-white/5 border border-white/10 text-white/85 rounded-full px-3 py-1.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex md:flex-col gap-3 md:items-end">
              <ButtonLink
                href={waGeneric()}
                target="_blank"
                rel="noreferrer"
                variant="whatsapp"
                size="lg"
                className="w-full md:w-auto"
              >
                <WhatsAppIcon size={18} />
                Book on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
