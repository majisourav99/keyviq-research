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
          className={`mb-3 inline-block text-xs font-bold tracking-widest uppercase ${
            light ? "text-white/80" : "text-keyviq-blue"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${light ? "text-white" : "text-gray-900"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base ${light ? "text-white/70" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
