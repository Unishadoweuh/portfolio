interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export default function Badge({
  children,
  className = "",
  variant = "default",
}: BadgeProps) {
  const variants = {
    default:
      "bg-card border border-border text-text-secondary text-xs px-2.5 py-1 rounded-md",
    accent:
      "bg-card border border-accent/30 text-accent text-xs px-2.5 py-1 rounded-md",
  };

  return (
    <span className={`${variants[variant]} ${className}`}>{children}</span>
  );
}
