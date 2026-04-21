import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, WhatsAppIcon, CheckIcon } from "../Icons";
import { StepSurfaces } from "./StepSurfaces";
import { StepContact } from "./StepContact";
import { waBooking, type BookingPayload } from "@/lib/whatsapp";

const initial: BookingPayload = {
  surfaces: [],
  homeSize: "",
  name: "",
  area: "",
  phone: "",
  preferredDay: "",
};

type Props = {
  open: boolean;
  onClose: () => void;
};

export function BookingSheet({ open, onClose }: Props) {
  const [step, setStep] = useState<1 | 2>(1);
  const [payload, setPayload] = useState<BookingPayload>(initial);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep(1);
        setPayload(initial);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const canContinueStep1 =
    payload.surfaces.length > 0 && payload.homeSize.length > 0;
  const canSubmit =
    payload.name.trim().length > 0 &&
    payload.phone.trim().length > 0 &&
    payload.area.trim().length > 0;

  const submit = () => {
    const url = waBooking(payload);
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[var(--color-ink)]/45 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 36, stiffness: 360 }}
            className="fixed z-50 inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center md:p-6"
          >
            <div className="relative mx-auto w-full md:max-w-[520px] bg-white md:rounded-[20px] rounded-t-[20px] shadow-[0_-20px_60px_rgba(10,13,20,0.2)] md:shadow-[0_20px_60px_rgba(10,13,20,0.25)] max-h-[92vh] flex flex-col overflow-hidden">
              <div className="flex items-center justify-between px-5 md:px-6 pt-5 pb-3 border-b border-[var(--color-line-soft)]">
                <div className="flex items-center gap-2.5">
                  <StepBadge current={step} index={1} label="Home" />
                  <div className="w-6 h-px bg-[var(--color-line)]" />
                  <StepBadge current={step} index={2} label="Contact" />
                </div>
                <button
                  aria-label="Close"
                  onClick={onClose}
                  className="h-9 w-9 inline-flex items-center justify-center rounded-[10px] border border-[var(--color-line)] hover:bg-[var(--color-canvas-soft)]"
                >
                  <X />
                </button>
              </div>

              <div className="px-5 md:px-6 py-5 overflow-y-auto flex-1">
                {step === 1 ? (
                  <StepSurfaces payload={payload} onChange={setPayload} />
                ) : (
                  <StepContact payload={payload} onChange={setPayload} />
                )}
              </div>

              <div className="px-5 md:px-6 py-4 border-t border-[var(--color-line-soft)] flex items-center gap-3 bg-white">
                {step === 2 && (
                  <button
                    onClick={() => setStep(1)}
                    className="h-11 px-4 rounded-[10px] border border-[var(--color-line)] text-[13px] font-semibold"
                  >
                    Back
                  </button>
                )}
                {step === 1 ? (
                  <button
                    disabled={!canContinueStep1}
                    onClick={() => setStep(2)}
                    className="flex-1 h-11 rounded-[10px] bg-[var(--color-ink)] text-white text-[14px] font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--color-ink-soft)] transition-all shadow-cta"
                  >
                    Continue
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    disabled={!canSubmit}
                    onClick={submit}
                    className="flex-1 h-11 rounded-[10px] bg-[#25d366] text-white text-[14px] font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#1fbb5a] transition-all"
                  >
                    <WhatsAppIcon size={16} />
                    Send on WhatsApp
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function StepBadge({
  current,
  index,
  label,
}: {
  current: 1 | 2;
  index: 1 | 2;
  label: string;
}) {
  const active = current === index;
  const done = current > index;
  return (
    <div className="flex items-center gap-2">
      <span
        className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-[11px] font-bold ${
          active
            ? "bg-[var(--color-ink)] text-white"
            : done
            ? "bg-[var(--color-cyan)] text-[var(--color-ink)]"
            : "bg-[var(--color-canvas-panel)] text-[var(--color-muted)]"
        }`}
      >
        {done ? <CheckIcon size={13} /> : index}
      </span>
      <span
        className={`text-[12px] font-semibold ${
          active ? "text-[var(--color-ink)]" : "text-[var(--color-muted)]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
