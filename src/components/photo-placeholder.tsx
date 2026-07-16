export function PhotoPlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`placeholder-hatch flex ${aspect} w-full items-center justify-center border border-dashed border-line bg-raised ${className}`}
    >
      <span className="px-4 text-center font-mono text-xs tracking-[0.2em] text-faint uppercase">
        Photo · {label}
      </span>
    </div>
  );
}
