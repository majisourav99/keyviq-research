import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { InsightGraphic } from "../ui/InsightGraphic";
import { successStories } from "../../data/content";

const icons = ["TrendingUp", "Globe", "Eye"];

export function SuccessStories() {
  return (
    <section className="bg-keyviq-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Success Stories"
          title="Results Clients Can Point To"
          subtitle="See how clients achieved measurable growth through AI-driven insight."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {successStories.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl bg-white overflow-hidden border border-keyviq-navy/5"
            >
              <InsightGraphic variant="compact" icon={icons[i]} className="rounded-none rounded-t-2xl" />
              <div className="p-6">
                <h3 className="font-semibold text-keyviq-navy">{story.title}</h3>
                <p className="mt-2 text-sm text-keyviq-slate">{story.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
