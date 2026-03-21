interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-card border border-border rounded-xl p-6 transition-colors duration-300 ${
        hover ? "hover:border-accent/50 hover:bg-card-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
