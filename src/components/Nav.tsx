import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Menu, X, WhatsAppIcon } from "./Icons";
import { waGeneric } from "@/lib/whatsapp";

const links = [
  { label: "What we clean", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Kit", href: "#kit" },
  { label: "FAQ", href: "#faq" },
];

export function Nav({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
        scrolled
          ? "backdrop-blur-md bg-white/85 border-b border-[var(--color-line-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16">
        <a href="#top" className="ring-focus rounded-md">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a
            href={waGeneric()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 h-10 px-3 rounded-[10px] text-[13px] font-semibold text-[var(--color-ink)] hover:bg-[var(--color-canvas-panel)] transition-colors"
          >
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
          <button
            onClick={onBook}
            className="h-10 px-4 rounded-[10px] bg-[var(--color-ink)] text-white text-[13px] font-semibold hover:bg-[var(--color-ink-soft)] transition-colors"
          >
            Get a quote
          </button>
        </div>
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-[10px] border border-[var(--color-line)] bg-white"
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="container-narrow flex items-center justify-between h-16 border-b border-[var(--color-line-soft)]">
            <Logo />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="h-10 w-10 inline-flex items-center justify-center rounded-[10px] border border-[var(--color-line)]"
            >
              <X />
            </button>
          </div>
          <div className="container-narrow py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xl font-semibold py-3 border-b border-[var(--color-line-soft)]"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={() => {
                  setOpen(false);
                  onBook();
                }}
                className="h-12 rounded-[12px] bg-[var(--color-ink)] text-white text-[15px] font-semibold"
              >
                Get a quote in 30s
              </button>
              <a
                href={waGeneric()}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="h-12 rounded-[12px] bg-[#25d366] text-white text-[15px] font-semibold inline-flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={18} />
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
