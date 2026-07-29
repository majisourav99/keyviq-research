import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { IconBadge } from "../ui/IconBadge";
import { industries } from "../../data/content";

export function IndustriesSplit() {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Our Industry Expertise"
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {industries.map((industry, i) => (
              <button
                key={industry.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 px-5 py-4 text-left transition-colors ${
                  i === active
                    ? "bg-blue-50 border-l-4 border-l-keyviq-blue"
                    : "border-l-4 border-l-transparent hover:bg-gray-50"
                }`}
              >
                <IconBadge icon={industry.icon} size="sm" tone={i === active ? "blue" : "light"} />
                <div className="flex-1">
                  <div className="text-xs font-semibold tracking-wide uppercase text-gray-400">
                    Industry {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className={`font-semibold ${i === active ? "text-keyviq-blue" : "text-gray-900"}`}>
                    {industry.name}
                  </div>
                </div>
                <ChevronRight className={`size-4 ${i === active ? "text-keyviq-blue" : "text-gray-300"}`} />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl bg-keyviq-mist p-8 flex flex-col justify-center"
            >
              <IconBadge icon={current.icon} size="lg" tone="blue" />
              <span className="mt-5 text-xs font-semibold tracking-wide uppercase text-keyviq-blue">
                Industry {String(active + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">{current.name}</h3>
              <p className="mt-3 text-gray-500">{current.body}</p>
              <div className="mt-5 h-1 w-10 rounded-full bg-keyviq-blue" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
