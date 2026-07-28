import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { IconBadge } from "../ui/IconBadge";
import { Button } from "../ui/Button";
import { whyKeyviq } from "../../data/content";

const icons = ["Award", "Sparkles", "ShieldCheck", "Globe", "ShieldCheck", "Handshake"];

export function WhyKeyviq() {
  return (
    <section className="bg-keyviq-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Keyviq"
          title="The Complete Package for Data-Driven Growth"
          subtitle="Everything you need for market and consumer insight, in one AI-augmented partner."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyKeyviq.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="rounded-2xl bg-white p-6 border border-keyviq-navy/5"
            >
              <IconBadge icon={icons[i]} size="sm" />
              <h3 className="mt-4 font-semibold text-keyviq-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-keyviq-slate">{item.body}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button to="/about" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
