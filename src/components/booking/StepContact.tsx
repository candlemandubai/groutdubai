import type { BookingPayload } from "@/lib/whatsapp";

const DAYS = ["Today", "Tomorrow", "This week", "Next week"];

type Props = {
  payload: BookingPayload;
  onChange: (p: BookingPayload) => void;
};

export function StepContact({ payload, onChange }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-[18px] md:text-[20px] font-extrabold tight">
          Where should we message you?
        </h3>
        <p className="mt-1 text-[13px] text-[var(--color-muted)]">
          We&apos;ll send your quote on WhatsApp within the hour.
        </p>
      </div>

      <Field
        label="Your name"
        value={payload.name}
        onChange={(v) => onChange({ ...payload, name: v })}
        placeholder="e.g. Sarah"
        autoFocus
      />

      <Field
        label="WhatsApp number"
        value={payload.phone}
        onChange={(v) => onChange({ ...payload, phone: v })}
        placeholder="+971 55 123 4567"
        type="tel"
        inputMode="tel"
      />

      <Field
        label="Your area"
        value={payload.area}
        onChange={(v) => onChange({ ...payload, area: v })}
        placeholder="e.g. Dubai Hills, Villa 12"
      />

      <div>
        <label className="text-[13px] font-semibold text-[var(--color-ink)]">
          Preferred day
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {DAYS.map((d) => {
            const active = payload.preferredDay === d;
            return (
              <button
                key={d}
                type="button"
                onClick={() => onChange({ ...payload, preferredDay: d })}
                className={`h-9 px-3.5 rounded-full border text-[12px] font-semibold transition-all ${
                  active
                    ? "bg-[var(--color-ink)] text-white border-[var(--color-ink)]"
                    : "bg-white text-[var(--color-ink)] border-[var(--color-line)] hover:border-[var(--color-ink)]"
                }`}
              >
                {d}
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-[11.5px] text-[var(--color-muted-soft)] leading-relaxed">
        We&apos;ll open WhatsApp with your request ready to send. No spam, no
        call-backs you didn&apos;t ask for.
      </p>
    </div>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  inputMode?: "text" | "tel" | "email";
  autoFocus?: boolean;
};

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  inputMode,
  autoFocus,
}: FieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] font-semibold text-[var(--color-ink)]">
        {label}
      </span>
      <input
        autoFocus={autoFocus}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-11 px-3.5 rounded-[10px] border border-[var(--color-line)] text-[14px] outline-none transition-all focus:border-[var(--color-cyan)] focus:ring-2 focus:ring-[rgba(0,194,255,0.2)]"
      />
    </label>
  );
}
