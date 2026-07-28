import { motion } from "framer-motion";
import { InsightGraphic } from "../ui/InsightGraphic";
import { methodologySteps } from "../../data/content";

export function Methodology() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <InsightGraphic label="Methodology Pipeline" />
        <div>
          <span className="inline-flex items-center rounded-full bg-keyviq-indigo/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-keyviq-indigo font-data">
            Our Research Methodology
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-keyviq-navy tracking-tight">
            Rigorous, data-driven, repeatable
          </h2>
          <p className="mt-4 text-keyviq-slate">
            Every engagement follows the same disciplined pipeline — so
            insights are accurate, auditable, and ready to act on.
          </p>
          <ol className="mt-8 space-y-5">
            {methodologySteps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <span className="font-data flex size-8 shrink-0 items-center justify-center rounded-lg bg-keyviq-indigo/10 text-sm font-semibold text-keyviq-indigo">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-keyviq-navy">{step.title}</h3>
                  <p className="text-sm text-keyviq-slate">{step.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
