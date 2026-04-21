import { Logo } from "./Logo";
import { Phone, MapPin, WhatsAppIcon } from "./Icons";
import {
  BRAND,
  LEGAL_COMPANY,
  LICENSE_NO,
  PHONE_DISPLAY,
  CITY,
  DOMAIN,
  SERVICE_AREAS,
} from "@/lib/constants";
import { waGeneric } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-ink)] text-white/80 pt-16 pb-10">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 md:gap-8">
          <div>
            <div className="text-white">
              <Logo size="lg" />
            </div>
            <p className="mt-4 text-[13px] text-white/60 leading-relaxed max-w-[300px]">
              German-technology grout restoration across Dubai. No clean, no
              charge.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-[13px]">
              <a
                href={waGeneric()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-[var(--color-cyan)] transition-colors"
              >
                <WhatsAppIcon size={14} /> WhatsApp us
              </a>
              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Phone size={14} /> {PHONE_DISPLAY}
              </a>
              <span className="inline-flex items-center gap-2 text-white/60">
                <MapPin size={14} /> {CITY}
              </span>
            </div>
          </div>

          <FooterCol title="Services">
            {[
              "Kitchen floors",
              "Bathrooms",
              "Staircases",
              "Countertops",
              "Pool decks",
              "Living tiles",
            ].map((s) => (
              <a key={s} href="#services" className="hover:text-white">
                {s}
              </a>
            ))}
          </FooterCol>

          <FooterCol title="Areas">
            {SERVICE_AREAS.slice(0, 8).map((a) => (
              <span key={a} className="text-white/60">
                {a}
              </span>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            <a href="#kit" className="hover:text-white">
              Maintenance Kit
            </a>
            <a href="#results" className="hover:text-white">
              Results
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a
              href={waGeneric()}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Contact
            </a>
          </FooterCol>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11.5px] text-white/50">
          <p>
            © {year} {BRAND}. {DOMAIN} — operated by {LEGAL_COMPANY}, Dubai DED
            License {LICENSE_NO}.
          </p>
          <p className="text-white/40">Handled with German technology.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-widest text-white/40 font-semibold mb-4">
        {title}
      </h4>
      <div className="flex flex-col gap-2.5 text-[13px] text-white/75">
        {children}
      </div>
    </div>
  );
}
