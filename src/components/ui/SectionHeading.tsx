import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-2xl`}
    >
      {eyebrow && (
        <span
          className={`mb-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase font-data ${
            light
              ? "bg-white/10 text-white/80"
              : "bg-keyviq-indigo/10 text-keyviq-indigo"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-semibold tracking-tight ${light ? "text-white" : "text-keyviq-navy"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base ${light ? "text-white/70" : "text-keyviq-slate"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
