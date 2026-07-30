import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { IconBadge } from "../ui/IconBadge";
import { whyKeyviq } from "../../data/content";

export function WhyKeyviq() {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <section className="bg-keyviq-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Few Reasons Why People Choose Us"
          subtitle="We bring together global reach, local expertise, and relentless commitment to delivering insights that actually move the needle."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyKeyviq.map((item, i) => {
            const isOpen = openTitle === item.title;
            return (
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

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm text-gray-500 border-t border-gray-100 pt-3">
                        {item.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="button"
                  onClick={() => setOpenTitle(isOpen ? null : item.title)}
                  aria-expanded={isOpen}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-keyviq-blue"
                >
                  {isOpen ? "Show Less" : "Read More"}
                  <ChevronDown className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
