import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getServiceBySlug } from "../data/services";
import { Button } from "../components/ui/Button";
import { IconBadge } from "../components/ui/IconBadge";
import { CheckList } from "../components/ui/CheckList";
import { InsightGraphic } from "../components/ui/InsightGraphic";
import { CTASection } from "../components/ui/CTASection";
import { SectionHeading } from "../components/ui/SectionHeading";

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug ?? "");

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-keyviq-navy via-keyviq-indigo-dark to-keyviq-indigo py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white"
          >
            ← All Services
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-3xl sm:text-4xl font-semibold text-white tracking-tight"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 max-w-2xl text-white/70"
          >
            {service.heroTagline}
          </motion.p>
          <div className="mt-8">
            <Button to="/contact" variant="light">
              Start Your {service.title.split(" ")[0]} Project
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-keyviq-navy tracking-tight">
              {service.whyItMattersTitle}
            </h2>
            {service.whyItMattersBody.map((p) => (
              <p key={p} className="mt-4 text-keyviq-slate">
                {p}
              </p>
            ))}
          </div>
          <InsightGraphic
            variant="compact"
            icon={service.icon}
            label={service.whyItMattersGraphicLabel}
            className="min-h-56"
          />
        </div>
      </section>

      <section className="bg-keyviq-mist py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What You'll Get" title="Built for This Engagement" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {service.whatYoullGet.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 border border-keyviq-navy/5">
                <IconBadge icon={item.icon} size="md" />
                <h3 className="mt-4 font-semibold text-keyviq-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-keyviq-slate">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 space-y-16">
          {service.detailBlocks.map((block, i) => (
            <div
              key={block.title}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <InsightGraphic variant="compact" icon={service.icon} label={block.graphicLabel} className="min-h-52" />
              <div>
                <h3 className="text-xl font-semibold text-keyviq-navy">{block.title}</h3>
                <p className="mt-2 text-keyviq-slate">{block.body}</p>
                <div className="mt-5">
                  <CheckList items={block.bullets} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-keyviq-mist py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Process" title="How It Works" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {service.howItWorks.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 rounded-2xl bg-white p-6 border border-l-4 border-keyviq-navy/5 border-l-keyviq-indigo"
              >
                <span className="font-data flex size-9 shrink-0 items-center justify-center rounded-lg bg-keyviq-indigo text-sm font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-keyviq-navy">{step.title}</h3>
                  <p className="mt-1 text-sm text-keyviq-slate">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Why Choose Us" title={`Why Businesses Choose Keyviq for ${service.title}`} />
          <div className="mt-10">
            <CheckList items={service.whyChooseUs} columns={2} />
          </div>
        </div>
      </section>

      <CTASection
        title={`Start Your ${service.title} Journey Today`}
        subtitle="Fill in your details and let us help you unlock valuable, AI-driven market insight."
        buttonLabel="Start Now"
        buttonTo="/contact"
      />
    </>
  );
}
