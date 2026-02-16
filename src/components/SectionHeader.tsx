import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <FadeIn className="mb-15 text-center">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-green-muted">
        {label}
      </p>
      <h2 className="font-heading text-3xl font-normal text-green-dark md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-[540px] text-base leading-relaxed text-text-light">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
