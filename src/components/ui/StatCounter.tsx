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
        className={`text-3xl sm:text-4xl font-bold ${light ? "text-white" : "text-keyviq-blue"}`}
      >
        {value}
      </div>
      <div className={`mt-1 text-sm ${light ? "text-white/70" : "text-gray-500"}`}>
        {label}
      </div>
    </motion.div>
  );
}
