interface SectionHeaderProps {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="mb-15 text-center">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-green-muted">
        {label}
      </p>
      <h2 className="font-heading text-3xl font-normal text-green-dark md:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}
