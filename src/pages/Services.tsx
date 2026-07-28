import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ServiceCard } from "../components/ui/ServiceCard";
import { CTASection } from "../components/ui/CTASection";
import { services } from "../data/services";

export function Services() {
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
            Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-3xl sm:text-4xl font-semibold text-white tracking-tight"
          >
            Market Research Solutions, Powered by AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-white/70"
          >
            Six ways we turn market signal into strategic decisions — each
            grounded in research methodology and sharpened by our AI
            analytics engine.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Choose a Service" align="left" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Where to Start?"
        subtitle="Tell us about your business and we'll recommend the right research path."
        buttonLabel="Talk to Us"
        buttonTo="/contact"
      />
    </>
  );
}
