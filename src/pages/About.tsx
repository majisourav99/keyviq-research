import { motion } from "framer-motion";
import { CheckList } from "../components/ui/CheckList";
import { InsightGraphic } from "../components/ui/InsightGraphic";
import { StatCounter } from "../components/ui/StatCounter";
import { CoreValues } from "../components/sections/CoreValues";
import { CTASection } from "../components/ui/CTASection";
import { stats } from "../data/content";

const milestones = [
  "Founded to close the gap between market research and real-time decision making",
  "Built a proprietary AI analytics engine trained across 60+ countries of panel data",
  "Grew into a full-service research partner spanning 8 industries",
];

export function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-keyviq-navy via-keyviq-indigo-dark to-keyviq-indigo py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80 font-data"
          >
            About Keyviq Research
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-3xl sm:text-4xl font-semibold text-white tracking-tight"
          >
            Research You Can Trust. Analysis That Keeps Up.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-white/70"
          >
            We started Keyviq Research on a simple premise: market research
            shouldn't take longer than the market itself to move. AI
            analytics closes that gap.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <InsightGraphic label="A Decade of Signal" />
          <div>
            <h2 className="text-3xl font-semibold text-keyviq-navy tracking-tight">Our Story</h2>
            <p className="mt-4 text-keyviq-slate">
              Keyviq Research was founded by a team of market researchers and
              data scientists who kept hitting the same wall: brilliant
              qualitative work, buried under a six-week analysis backlog. We
              built the AI analytics layer we wished we'd had — and started
              offering it to clients.
            </p>
            <p className="mt-4 text-keyviq-slate">
              Today that same engine powers every engagement we run, from a
              single focus group to a multi-market entry study.
            </p>
            <div className="mt-6">
              <CheckList items={milestones} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-keyviq-navy py-16">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-3 gap-6 max-w-md sm:max-w-none">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <CoreValues />

      <CTASection
        title="Want to Work With Us?"
        subtitle="Tell us about your business and we'll show you what AI-powered research looks like for your category."
        buttonLabel="Get in Touch"
        buttonTo="/contact"
      />
    </>
  );
}
