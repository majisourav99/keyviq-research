import { motion } from "framer-motion";
import { CheckList } from "../ui/CheckList";
import { InsightGraphic } from "../ui/InsightGraphic";
import { Button } from "../ui/Button";

const points = [
  "Global reach across 60+ countries",
  "Proprietary AI analytics engine",
  "Real-time, always-on dashboards",
  "Dedicated client success team",
];

export function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <InsightGraphic label="Analyst + AI, Paired" className="order-2 lg:order-1" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-flex items-center rounded-full bg-keyviq-indigo/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-keyviq-indigo font-data">
            About Keyviq Research
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-keyviq-navy tracking-tight">
            Research methodology meets AI analytics
          </h2>
          <p className="mt-4 text-keyviq-slate">
            For over a decade our analysts have partnered with businesses
            seeking market intelligence they can trust. Today, every engagement
            is powered by an AI analytics layer that turns raw signal into
            decisions your team can act on this quarter.
          </p>
          <div className="mt-6">
            <CheckList items={points} />
          </div>
          <div className="mt-8">
            <Button to="/about" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
