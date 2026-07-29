import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getServiceBySlug } from "../data/services";
import { Button } from "../components/ui/Button";
import { IconBadge } from "../components/ui/IconBadge";
import { CheckList } from "../components/ui/CheckList";
import { CTASection } from "../components/ui/CTASection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { images } from "../data/images";

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug ?? "");

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const heroImage = images[service.image as keyof typeof images];

  return (
    <>
      <section
        className="relative bg-keyviq-navy bg-cover bg-center py-16 sm:py-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-keyviq-navy/80" />
        <div className="relative mx-auto max-w-4xl px-6">
          <Link
            to="/services"
            className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white"
          >
            ← All Services
          </Link>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 block text-xs font-bold tracking-widest uppercase text-keyviq-cyan"
          >
            {service.tag}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl text-white/70"
          >
            {service.heroTagline}
          </motion.p>
          <div className="mt-8">
            <Button to="/contact" variant="light" icon={false}>
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              {service.whyItMattersTitle}
            </h2>
            {service.whyItMattersBody.map((p) => (
              <p key={p} className="mt-4 text-gray-500">
                {p}
              </p>
            ))}
          </div>
          <img
            src={heroImage}
            alt={service.title}
            className="rounded-2xl w-full aspect-4/3 object-cover"
          />
        </div>
      </section>

      <section className="bg-keyviq-mist py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What You'll Get" title="Built for This Engagement" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {service.whatYoullGet.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 border border-gray-100">
                <IconBadge icon={item.icon} size="md" />
                <h3 className="mt-4 font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.body}</p>
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
              <img
                src={heroImage}
                alt={block.title}
                className="rounded-2xl w-full aspect-4/3 object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">{block.title}</h3>
                <p className="mt-2 text-gray-500">{block.body}</p>
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
                className="flex gap-4 rounded-2xl bg-white p-6 border border-l-4 border-gray-100 border-l-keyviq-blue"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-keyviq-blue text-sm font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Why Choose Us" title={`Why Businesses Choose KEYVIQ for ${service.title}`} />
          <div className="mt-10">
            <CheckList items={service.whyChooseUs} columns={2} />
          </div>
        </div>
      </section>

      <CTASection
        title={`Start Your ${service.title} Journey Today`}
        subtitle="Fill in your details and let us help you unlock verified, AI-accelerated market insight."
        buttonLabel="Contact Us"
        buttonTo="/contact"
      />
    </>
  );
}
