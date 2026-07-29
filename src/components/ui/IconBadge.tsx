import { iconMap } from "../../lib/icons";

type IconBadgeProps = {
  icon: string;
  size?: "sm" | "md" | "lg";
  tone?: "blue" | "light" | "navy";
};

const sizeClasses = {
  sm: "size-9 [&>svg]:size-4 rounded-lg",
  md: "size-11 [&>svg]:size-5 rounded-lg",
  lg: "size-14 [&>svg]:size-6 rounded-xl",
};

const toneClasses = {
  blue: "bg-keyviq-blue text-white",
  light: "bg-blue-50 text-keyviq-blue",
  navy: "bg-keyviq-navy-light text-keyviq-cyan",
};

export function IconBadge({ icon, size = "md", tone = "blue" }: IconBadgeProps) {
  const Icon = iconMap[icon] ?? iconMap.Sparkles;
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${sizeClasses[size]} ${toneClasses[tone]}`}
    >
      <Icon />
    </div>
  );
}
