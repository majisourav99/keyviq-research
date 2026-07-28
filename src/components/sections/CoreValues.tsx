import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { IconBadge } from "../ui/IconBadge";
import { coreValues } from "../../data/content";

const icons = ["ShieldCheck", "Trophy", "Sparkles", "Handshake"];

export function CoreValues() {
  return (
    <section className="bg-keyviq-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What Guides Us"
          title="Our Core Values"
          subtitle="The principles that guide our commitment to excellence and client success."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl bg-white p-6 text-center border border-keyviq-navy/5"
            >
              <div className="flex justify-center">
                <IconBadge icon={icons[i]} size="md" />
              </div>
              <h3 className="mt-4 font-semibold text-keyviq-navy">{value.title}</h3>
              <p className="mt-2 text-sm text-keyviq-slate">{value.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
