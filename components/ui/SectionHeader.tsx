interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  eyebrow,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <div className="mb-4">
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.18em]">
            {eyebrow}
          </p>
          <div className="h-px w-8 bg-accent mt-2" />
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}