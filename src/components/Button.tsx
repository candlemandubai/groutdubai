import type { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "whatsapp";
type Size = "md" | "lg";

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-ink)] text-white hover:bg-[var(--color-ink-soft)] shadow-cta",
  secondary:
    "border border-[var(--color-line)] text-[var(--color-ink)] bg-white hover:border-[var(--color-ink)] hover:bg-[var(--color-canvas-soft)]",
  whatsapp:
    "bg-[#25d366] text-white hover:bg-[#1fbb5a] shadow-[0_8px_24px_rgba(37,211,102,0.28)]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[14px]",
  lg: "h-13 px-6 text-[15px]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[12px] font-semibold transition-all duration-150 ring-focus active:scale-[0.98] whitespace-nowrap";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${base} ${sizes[size]} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: LinkProps) {
  return (
    <a
      {...rest}
      className={`${base} ${sizes[size]} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
