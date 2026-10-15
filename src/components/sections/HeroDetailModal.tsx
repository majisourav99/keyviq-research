import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "../ui/Button";
import type { HeroDetail } from "../../data/content";

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-xs font-semibold uppercase tracking-wide text-keyviq-blue">
      {steps.map((step, i) => (
        <span key={step} className="inline-flex items-center gap-1.5">
          <span className="rounded-md bg-blue-50 px-2.5 py-1">{step}</span>
          {i < steps.length - 1 && <ArrowRight className="size-3.5 text-keyviq-blue/60" />}
        </span>
      ))}
    </div>
  );
}

export function HeroDetailModal({ detail, onClose }: { detail: HeroDetail; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center bg-keyviq-navy/70 backdrop-blur-sm p-3 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="hero-detail-title"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[calc(100vh-1.5rem)] sm:max-h-[calc(100vh-3rem)] overflow-y-auto rounded-2xl bg-white shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-keyviq-navy px-6 sm:px-10 py-6 text-white">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-keyviq-cyan">
              {detail.subheading}
            </span>
            <h2 id="hero-detail-title" className="mt-2 text-2xl sm:text-3xl font-bold leading-tight">
              {detail.heading}
            </h2>
          </div>
          <button
            aria-label="Close"
            onClick={onClose}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-10 px-6 sm:px-10 py-8">
          <div>
            {detail.intro.map((p) => (
              <p key={p} className="text-gray-600 leading-relaxed mb-3 last:mb-0">
                {p}
              </p>
            ))}

            <div className="mt-8 space-y-7">
              {detail.sections.map((section, i) => (
                <div key={section.title} className="flex gap-4">
                  <span className="text-sm font-bold text-keyviq-blue tabular-nums pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 border-l border-gray-100 pl-4">
                    <h3 className="font-bold text-gray-900">{section.title}</h3>
                    <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{section.body}</p>
                    {section.label && (
                      <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                        {section.label}
                      </div>
                    )}
                    {section.items && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {section.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-gray-200 bg-keyviq-mist px-3 py-1 text-xs text-gray-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                    {section.flow && <Flow steps={section.flow} />}
                    {section.highlight && (
                      <p className="mt-3 text-sm font-semibold text-keyviq-blue">{section.highlight}</p>
                    )}
                    {section.note && <p className="mt-3 text-sm text-gray-500 italic">{section.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl bg-keyviq-navy p-6 text-white">
              <h3 className="text-sm font-bold uppercase tracking-wide text-keyviq-cyan">
                {detail.frameworkTitle}
              </h3>
              <ol className="mt-5">
                {detail.framework.map((item, i) => (
                  <li key={item.step}>
                    <div className="rounded-lg bg-white/5 border border-white/10 px-4 py-3">
                      <div className="text-sm font-bold uppercase tracking-widest">{item.step}</div>
                      <div className="mt-0.5 text-xs text-white/70">{item.body}</div>
                    </div>
                    {i < detail.framework.length - 1 && (
                      <ArrowDown className="mx-auto my-1.5 size-4 text-keyviq-cyan" />
                    )}
                  </li>
                ))}
              </ol>
            </div>

            {detail.results && (
              <div className="rounded-xl border border-gray-100 bg-keyviq-mist p-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-keyviq-blue">The Result</h3>
                <ul className="mt-4 space-y-4">
                  {detail.results.map((r) => (
                    <li key={r.title}>
                      <div className="text-sm font-bold text-gray-900">{r.title}</div>
                      <div className="mt-0.5 text-xs text-gray-600 leading-relaxed">{r.body}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        <div className="border-t border-gray-100 bg-keyviq-mist px-6 sm:px-10 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <p className="text-lg font-bold text-gray-900">{detail.closing}</p>
            <p className="mt-1 text-xs font-semibold tracking-wide text-keyviq-blue">{detail.signature}</p>
          </div>
          <Button to="/contact" icon className="shrink-0 w-fit" onClick={onClose}>
            Get in Touch
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
