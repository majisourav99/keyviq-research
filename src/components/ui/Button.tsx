import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "light";

type ButtonProps = {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  icon?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variantClasses: Record<Variant, string> = {
  primary: "bg-keyviq-blue text-white hover:bg-blue-800 shadow-lg shadow-keyviq-blue/25",
  outline:
    "bg-white text-keyviq-blue border border-keyviq-blue/30 hover:bg-keyviq-mist",
  ghost: "bg-white/10 text-white border border-white/30 hover:bg-white/20",
  light: "bg-white text-keyviq-blue hover:bg-white/90 shadow-lg shadow-black/10",
};

export function Button({
  to,
  href,
  variant = "primary",
  children,
  icon = true,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-md px-6 py-3 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="size-4" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
