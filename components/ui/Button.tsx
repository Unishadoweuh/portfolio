import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  href,
  onClick,
  type,
  disabled,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200",
    secondary:
      "border border-border hover:border-accent/50 text-text-primary font-medium px-6 py-3 rounded-lg transition-colors duration-200 bg-transparent",
  };

  const classes = `inline-block text-center ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
