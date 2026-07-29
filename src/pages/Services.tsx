import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { CTASection } from "../components/ui/CTASection";
import { PageHeader } from "../components/layout/PageHeader";
import { services } from "../data/services";
import { images } from "../data/images";

export function Services() {
  return (
    <>
      <PageHeader
        eyebrow="What We Offer"
        title="Our Services"
        breadcrumb="Services"
        image={images.pageHeaderServices}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 space-y-16">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.img
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45 }}
                src={images[service.image as keyof typeof images]}
                alt={service.title}
                className="rounded-2xl w-full aspect-4/3 object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <span className="text-xs font-bold tracking-widest uppercase text-keyviq-blue">
                  {service.tag}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-gray-500">{service.shortDescription}</p>
                <div className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {service.cardBullets.map((bullet) => (
                    <span key={bullet} className="flex items-center gap-2 text-sm text-gray-700">
                      <ArrowRight className="size-3.5 text-keyviq-blue shrink-0" />
                      {bullet}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Button to={`/services/${service.slug}`} variant="outline" icon={false}>
                    Get Started
                  </Button>
                </div>
              </motion.div>
            </div>
          ))}
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
