interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  tag?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  className = "",
  tag,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {tag && (
        <span className="font-mono text-accent text-sm mb-4 block">{tag}</span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
