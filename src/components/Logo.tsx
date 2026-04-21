type Props = { size?: "sm" | "md" | "lg" };

export function Logo({ size = "md" }: Props) {
  const cls =
    size === "sm"
      ? "text-base"
      : size === "lg"
      ? "text-2xl md:text-3xl"
      : "text-lg md:text-xl";
  return (
    <span className={`font-extrabold tracking-tight ${cls}`}>
      Grout<span className="grad-text">Dubai</span>
    </span>
  );
}
