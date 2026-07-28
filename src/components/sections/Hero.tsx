import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { StatCounter } from "../ui/StatCounter";
import { InsightGraphic } from "../ui/InsightGraphic";
import { stats } from "../../data/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-keyviq-navy via-keyviq-indigo-dark to-keyviq-indigo">
      <div className="pointer-events-none absolute top-10 right-0 size-96 rounded-full bg-keyviq-violet/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80 font-data">
            AI-Powered Market Research
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] tracking-tight text-white">
            Decisions, backed by data.
            <br />
            Accelerated by AI.
          </h1>
          <p className="mt-6 max-w-lg text-white/70 text-base sm:text-lg">
            Keyviq Research pairs rigorous market research methodology with an
            AI analytics engine, turning consumer signal into strategic
            decisions in days, not months.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/contact" variant="light">
              Book a Demo
            </Button>
            <Button to="/services" variant="ghost">
              Explore Services
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <InsightGraphic tone="dark" label="Live Market Signal" className="shadow-2xl shadow-black/20" />
        </motion.div>
      </div>
    </section>
  );
}
