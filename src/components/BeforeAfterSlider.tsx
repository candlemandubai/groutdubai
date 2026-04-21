import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeftRight } from "./Icons";

type Props = {
  beforeLabel?: string;
  afterLabel?: string;
  height?: string;
};

export function BeforeAfterSlider({
  beforeLabel = "Before",
  afterLabel = "After",
  height = "clamp(280px, 50vw, 460px)",
}: Props) {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    setPos(Math.max(4, Math.min(96, (x / rect.width) * 100)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      setFromClientX(clientX);
      e.preventDefault();
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [setFromClientX]);

  const start = (clientX: number) => {
    dragging.current = true;
    setFromClientX(clientX);
  };

  return (
    <div
      ref={trackRef}
      className="relative w-full rounded-[18px] overflow-hidden shadow-soft border border-[var(--color-line-soft)] select-none cursor-ew-resize"
      style={{ height, touchAction: "none" }}
      onMouseDown={(e) => start(e.clientX)}
      onTouchStart={(e) => start(e.touches[0].clientX)}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 4));
      }}
    >
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(135deg,#3a3430 0%,#5a514a 50%,#2e2925 100%)",
        }}
      >
        <TilePattern color="#1a1612" opacity={0.9} />
      </div>

      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        aria-hidden
        style={{ width: `${pos}%` }}
      >
        <div
          className="absolute inset-0"
          style={{
            width: `${10000 / pos}%`,
            background:
              "linear-gradient(135deg,#f8f9fb 0%,#e9edf2 50%,#ffffff 100%)",
          }}
        >
          <TilePattern color="#d8dee6" opacity={1} />
        </div>
      </div>

      <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-[var(--color-ink)]/80 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-[var(--color-ink)] text-[var(--color-cyan)] px-2.5 py-1 rounded-full">
        {afterLabel}
      </span>

      <div
        className="absolute inset-y-0 w-[2px] pointer-events-none"
        style={{
          left: `${pos}%`,
          transform: "translateX(-1px)",
          background: "var(--color-cyan)",
          boxShadow: "0 0 16px rgba(0,194,255,0.7)",
        }}
      />
      <div
        className="absolute top-1/2 w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#0066ff] shadow-[0_4px_18px_rgba(0,0,0,0.18)] pointer-events-none"
        style={{
          left: `${pos}%`,
          transform: "translate(-50%,-50%)",
        }}
      >
        <ArrowLeftRight size={18} />
      </div>
    </div>
  );
}

function TilePattern({
  color,
  opacity = 1,
}: {
  color: string;
  opacity?: number;
}) {
  return (
    <div
      className="absolute inset-0"
      style={{
        opacity,
        backgroundImage: `
          linear-gradient(90deg,transparent 0 14%,${color} 14% 18%,transparent 18% 36%,${color} 36% 40%,transparent 40% 58%,${color} 58% 62%,transparent 62% 80%,${color} 80% 84%,transparent 84%),
          linear-gradient(0deg,transparent 0 22%,${color} 22% 25%,transparent 25% 55%,${color} 55% 58%,transparent 58% 88%,${color} 88% 91%,transparent 91%)`,
      }}
    />
  );
}
