import type { BookingPayload } from "@/lib/whatsapp";

const SURFACES = [
  "Kitchen",
  "Bathroom",
  "Living/hallway",
  "Staircase",
  "Countertop",
  "Pool/balcony",
];

const HOME_SIZES = ["1BR", "2BR", "3BR", "Villa", "Other"];

type Props = {
  payload: BookingPayload;
  onChange: (p: BookingPayload) => void;
};

export function StepSurfaces({ payload, onChange }: Props) {
  const toggle = (s: string) => {
    const has = payload.surfaces.includes(s);
    onChange({
      ...payload,
      surfaces: has
        ? payload.surfaces.filter((x) => x !== s)
        : [...payload.surfaces, s],
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-[18px] md:text-[20px] font-extrabold tight">
          Which surfaces need restoring?
        </h3>
        <p className="mt-1 text-[13px] text-[var(--color-muted)]">
          Select one or more — we&apos;ll quote all of them.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {SURFACES.map((s) => {
          const active = payload.surfaces.includes(s);
          return (
            <button
              key={s}
              type="button"
              onClick={() => toggle(s)}
              className={`h-10 px-3.5 rounded-full border text-[13px] font-semibold transition-all ${
                active
                  ? "bg-[var(--color-ink)] text-white border-[var(--color-ink)]"
                  : "bg-white text-[var(--color-ink)] border-[var(--color-line)] hover:border-[var(--color-ink)]"
              }`}
            >
              {s}
            </button>
          );
        })}
      </div>

      <div>
        <label className="text-[13px] font-semibold text-[var(--color-ink)]">
          Home size
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {HOME_SIZES.map((h) => {
            const active = payload.homeSize === h;
            return (
              <button
                key={h}
                type="button"
                onClick={() => onChange({ ...payload, homeSize: h })}
                className={`h-10 px-4 rounded-full border text-[13px] font-semibold transition-all ${
                  active
                    ? "bg-[var(--color-ink)] text-white border-[var(--color-ink)]"
                    : "bg-white text-[var(--color-ink)] border-[var(--color-line)] hover:border-[var(--color-ink)]"
                }`}
              >
                {h}
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-[11.5px] text-[var(--color-muted-soft)] leading-relaxed">
        Final price confirmed on WhatsApp after we see photos. No deposit, no
        call-out fee.
      </p>
    </div>
  );
}
