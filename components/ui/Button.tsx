interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  href,
  onClick,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200",
    secondary:
      "border border-border hover:border-accent/50 text-text-primary font-medium px-6 py-3 rounded-lg transition-colors duration-200 bg-transparent",
  };

  const classes = `${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
