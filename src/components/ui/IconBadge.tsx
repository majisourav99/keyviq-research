import { iconMap } from "../../lib/icons";

type IconBadgeProps = {
  icon: string;
  size?: "sm" | "md" | "lg";
  tone?: "indigo" | "white" | "navy";
};

const sizeClasses = {
  sm: "size-9 [&>svg]:size-4 rounded-lg",
  md: "size-11 [&>svg]:size-5 rounded-xl",
  lg: "size-14 [&>svg]:size-6 rounded-2xl",
};

const toneClasses = {
  indigo: "bg-gradient-to-br from-keyviq-indigo to-keyviq-violet text-white",
  white: "bg-white text-keyviq-indigo shadow-sm",
  navy: "bg-keyviq-navy-light text-keyviq-violet",
};

export function IconBadge({ icon, size = "md", tone = "indigo" }: IconBadgeProps) {
  const Icon = iconMap[icon] ?? iconMap.Sparkles;
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${sizeClasses[size]} ${toneClasses[tone]}`}
    >
      <Icon />
    </div>
  );
}
