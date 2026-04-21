import { WhatsAppIcon } from "./Icons";
import { waGeneric } from "@/lib/whatsapp";

export function WhatsAppFAB() {
  return (
    <a
      href={waGeneric()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with GroutDubai on WhatsApp"
      className="wa-fab fixed bottom-5 right-5 z-30 flex items-center gap-2 bg-[#25d366] text-white h-14 px-4 md:px-5 rounded-full ring-focus hover:bg-[#1fbb5a] transition-colors"
    >
      <WhatsAppIcon size={24} />
      <span className="hidden sm:inline text-[14px] font-semibold">
        WhatsApp
      </span>
    </a>
  );
}
