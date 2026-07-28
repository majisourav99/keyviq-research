import { motion } from "framer-motion";

type StatCounterProps = {
  value: string;
  label: string;
  light?: boolean;
};

export function StatCounter({ value, label, light = true }: StatCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div
        className={`font-data text-3xl sm:text-4xl font-semibold ${light ? "text-white" : "text-keyviq-navy"}`}
      >
        {value}
      </div>
      <div className={`mt-1 text-sm ${light ? "text-white/70" : "text-keyviq-slate"}`}>
        {label}
      </div>
    </motion.div>
  );
}
