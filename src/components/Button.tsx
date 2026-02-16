import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverse";
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: ButtonProps) {
  const base =
    "inline-block px-9 py-4 text-xs font-medium uppercase tracking-[0.12em] text-center transition-all duration-300 hover:-translate-y-0.5";

  const variants = {
    primary: "bg-green-dark text-cream hover:bg-green",
    secondary:
      "border border-green-dark bg-transparent text-green-dark hover:bg-green-dark hover:text-cream",
    inverse: "bg-cream text-green-dark hover:bg-ivory",
  };

  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
