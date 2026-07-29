import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { IconBadge } from "../ui/IconBadge";
import { whyKeyviq } from "../../data/content";

export function WhyKeyviq() {
  return (
    <section className="bg-keyviq-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Few Reasons Why People Choose Us"
          subtitle="We bring together global reach, local expertise, and relentless commitment to delivering insights that actually move the needle."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyKeyviq.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="rounded-2xl bg-white p-6 border border-gray-100"
            >
              <IconBadge icon={item.icon} size="sm" tone="light" />
              <h3 className="mt-4 font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{item.body}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-keyviq-blue">
                Read More →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
