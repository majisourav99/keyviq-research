import { motion, useReducedMotion } from "framer-motion";
import { iconMap } from "../../lib/icons";

type InsightGraphicProps = {
  variant?: "full" | "compact";
  tone?: "light" | "dark";
  label?: string;
  icon?: string;
  className?: string;
};

const nodes = [
  { x: 40, y: 60, r: 4 },
  { x: 120, y: 30, r: 5 },
  { x: 200, y: 70, r: 7 },
  { x: 280, y: 35, r: 4 },
  { x: 350, y: 65, r: 5 },
  { x: 90, y: 130, r: 5 },
  { x: 200, y: 150, r: 8 },
  { x: 310, y: 125, r: 4 },
  { x: 150, y: 210, r: 4 },
  { x: 250, y: 220, r: 6 },
  { x: 60, y: 190, r: 3 },
  { x: 340, y: 200, r: 4 },
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [2, 6], [3, 7],
  [5, 6], [6, 7], [5, 8], [6, 9], [7, 11], [8, 9], [8, 10], [9, 11],
];

export function InsightGraphic({
  variant = "full",
  tone = "light",
  label,
  icon,
  className = "",
}: InsightGraphicProps) {
  const reduceMotion = useReducedMotion();
  const isDark = tone === "dark";

  const lineColor = isDark ? "rgba(139,92,246,0.35)" : "rgba(61,90,254,0.25)";
  const nodeColor = isDark ? "#8B5CF6" : "#3D5AFE";
  const bg = isDark
    ? "bg-keyviq-navy-light border border-white/10"
    : "bg-keyviq-mist border border-keyviq-indigo/10";

  if (variant === "compact") {
    const Icon = icon ? iconMap[icon] : undefined;
    return (
      <div
        className={`relative overflow-hidden rounded-2xl ${bg} flex flex-col items-center justify-center gap-3 py-10 px-6 ${className}`}
      >
        <svg viewBox="0 0 200 100" className="absolute inset-0 h-full w-full opacity-40">
          {edges.slice(0, 8).map(([a, b], i) => (
            <line
              key={i}
              x1={(nodes[a].x / 380) * 200}
              y1={(nodes[a].y / 260) * 100}
              x2={(nodes[b].x / 380) * 200}
              y2={(nodes[b].y / 260) * 100}
              stroke={lineColor}
              strokeWidth={1}
            />
          ))}
        </svg>
        {Icon && (
          <div className="relative z-10 inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-keyviq-indigo to-keyviq-violet text-white shadow-lg shadow-keyviq-indigo/20">
            <Icon className="size-6" />
          </div>
        )}
        {label && (
          <span
            className={`relative z-10 font-data text-xs font-semibold tracking-wide uppercase ${isDark ? "text-white/70" : "text-keyviq-navy/70"}`}
          >
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${bg} aspect-4/3 flex items-center justify-center ${className}`}
    >
      <svg viewBox="0 0 380 260" className="h-full w-full p-6">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke={lineColor}
            strokeWidth={1.25}
            initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
            animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: i * 0.05, ease: "easeInOut" }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={nodeColor}
            initial={{ opacity: 0.6 }}
            animate={
              reduceMotion
                ? { opacity: 0.9 }
                : { opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }
            }
            transition={{
              duration: 2.6,
              repeat: reduceMotion ? 0 : Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
      {label && (
        <span
          className={`absolute bottom-5 left-1/2 -translate-x-1/2 font-data text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full ${
            isDark ? "bg-white/10 text-white/80" : "bg-white text-keyviq-indigo shadow-sm"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
