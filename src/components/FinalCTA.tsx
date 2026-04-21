import { ButtonLink, Button } from "./Button";
import { WhatsAppIcon, ArrowRight } from "./Icons";
import { waGeneric } from "@/lib/whatsapp";

export function FinalCTA({ onBook }: { onBook: () => void }) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow text-center max-w-[680px]">
        <h2 className="text-[36px] md:text-[56px] tighter font-extrabold leading-[1.0]">
          Your grout, <span className="grad-text">transformed</span> — by tomorrow.
        </h2>
        <p className="mt-5 text-[15px] md:text-[17px] text-[var(--color-muted)] leading-relaxed">
          Send a photo. We&apos;ll quote in minutes. If we can&apos;t restore it, you
          don&apos;t pay.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <ButtonLink
            href={waGeneric()}
            target="_blank"
            rel="noreferrer"
            variant="whatsapp"
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
      </div>
    </section>
  );
}
