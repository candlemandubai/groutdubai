import { motion } from "framer-motion";
import { Pill } from "./Pill";
import { ButtonLink, Button } from "./Button";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { StarIcon, WhatsAppIcon, ArrowRight } from "./Icons";
import { waGeneric } from "@/lib/whatsapp";
import { SOCIAL_PROOF } from "@/lib/constants";

export function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      <BackgroundGlow />
      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-[720px] mx-auto"
        >
          <Pill>German technology · No clean, no charge</Pill>
          <h1 className="mt-5 text-[40px] md:text-[64px] leading-[0.98] tighter font-extrabold">
            Grout, <span className="grad-text">restored to new</span>.
          </h1>
          <p className="mt-5 md:mt-6 text-[15px] md:text-[17px] text-[var(--color-muted)] leading-relaxed max-w-[560px] mx-auto">
            German-tech restoration for floors, counters &amp; staircases — in one visit.
            <br className="hidden md:block" />
            If we can&apos;t lift the dirt, you don&apos;t pay.
          </p>
          <div className="mt-7 md:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <ButtonLink
              href={waGeneric()}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="lg"
              className="flex-1 sm:flex-initial"
            >
              <WhatsAppIcon size={18} />
              Book on WhatsApp
            </ButtonLink>
            <Button
              variant="secondary"
              size="lg"
              onClick={onBook}
              className="flex-1 sm:flex-initial"
            >
              Get a quote in 30s
              <ArrowRight size={16} />
            </Button>
          </div>
          <div className="mt-5 flex items-center justify-center gap-3 text-[12px] text-[var(--color-muted)] flex-wrap">
            <span className="inline-flex items-center gap-1 text-[var(--color-amber)]">
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
            </span>
            <span className="text-[var(--color-ink)] font-medium">
              {SOCIAL_PROOF.rating}
            </span>
            <span>·</span>
            <span>{SOCIAL_PROOF.jobsCompleted} homes restored</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Same-day quotes</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-10 md:mt-14 max-w-[880px] mx-auto"
        >
          <BeforeAfterSlider />
          <p className="mt-3 text-center text-[11px] uppercase tracking-widest text-[var(--color-muted-soft)]">
            Drag the handle · Real restoration preview
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function BackgroundGlow() {
  return (
    <>
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[420px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,194,255,0.14), rgba(0,102,255,0.06) 40%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,194,255,0.5), transparent)",
        }}
      />
    </>
  );
}
