import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, Check, MapPin, Users } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { IconBadge } from "../ui/IconBadge";
import { Button } from "../ui/Button";
import { industries, type CaseStudy } from "../../data/content";

function Outcome({ outcome }: { outcome: CaseStudy["outcome"] }) {
  const [before, name, after] = outcome.lead;
  return (
    <div>
      <p className="text-sm text-gray-600">
        {before} <strong className="text-gray-900">{name}</strong> {after}
      </p>
      {outcome.kind === "list" ? (
        <ul className="mt-3 grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
          {outcome.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="size-3.5 text-keyviq-blue shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2">
          {outcome.items.map((item, i) => (
            <span key={item} className="inline-flex items-center gap-1.5">
              <span className="rounded-md bg-keyviq-blue px-2.5 py-1 text-xs font-semibold text-white">
                {item}
              </span>
              {i < outcome.items.length - 1 &&
                (outcome.kind === "flow" ? (
                  <ArrowRight className="size-3.5 text-keyviq-blue" />
                ) : (
                  <span className="text-sm font-bold text-keyviq-blue">×</span>
                ))}
            </span>
          ))}
        </div>
      )}
      <p className="mt-3 text-sm text-gray-500">{outcome.note}</p>
    </div>
  );
}

export function IndustriesSplit() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const current = industries[active];
  const study = current.caseStudy;

  function select(i: number) {
    setActive(i);
    // On stacked (mobile) layout the case study sits below the list — bring it into view.
    if (window.matchMedia("(max-width: 1023px)").matches) {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Our Industry Expertise"
        />

        <div className="mt-12 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 items-start">
          <div className="lg:sticky lg:top-28 flex flex-col divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {industries.map((industry, i) => (
              <button
                key={industry.name}
                onClick={() => select(i)}
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

          <div ref={panelRef} className="scroll-mt-28">
            <AnimatePresence mode="wait">
              <motion.article
                key={current.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl bg-keyviq-mist border border-gray-100 overflow-hidden"
              >
                <img
                  src={study.image}
                  alt={`${current.name} case study: ${study.title}`}
                  className="w-full aspect-[16/9] object-cover"
                />
                <div className="p-6 sm:p-8">
                  <span className="text-xs font-semibold tracking-wide uppercase text-keyviq-blue">
                    Case Study {String(active + 1).padStart(2, "0")} | {current.name}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">{study.title}</h3>
                  <p className="mt-1 text-gray-500">{study.subtitle}</p>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900">Objective</h4>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{study.objective}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900">Methodology</h4>
                      <ul className="mt-2 grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                        {study.methodology.map((m) => (
                          <li key={m} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="size-1.5 rounded-full bg-keyviq-blue shrink-0" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900">
                        Target Groups & Countries
                      </h4>
                      <p className="mt-2 flex items-start gap-2 text-sm text-gray-600">
                        <Users className="size-4 mt-0.5 text-keyviq-blue shrink-0" />
                        {study.targetGroups}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <MapPin className="size-4 text-keyviq-blue" />
                        {study.countries.map((c) => (
                          <span
                            key={c}
                            className="rounded-full bg-white border border-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl bg-white border border-gray-100 p-5">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900">Outcome</h4>
                      <div className="mt-2">
                        <Outcome outcome={study.outcome} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-7">
                    <Button to="/contact">Get in Touch</Button>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
