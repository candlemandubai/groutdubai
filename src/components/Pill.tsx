import type { ReactNode } from "react";

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#f0f5fb] text-[#0066ff] px-3 py-1.5 text-[11px] font-semibold tracking-wide uppercase">
      <span
        className="w-1.5 h-1.5 rounded-full bg-[#00c2ff]"
        style={{ boxShadow: "0 0 8px #00c2ff" }}
      />
      {children}
    </span>
  );
}
