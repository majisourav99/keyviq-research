import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { CheckList } from "../ui/CheckList";
import { deliverables, capabilityTags } from "../../data/content";

export function WhatWeDeliver() {
  return (
    <section className="bg-gradient-to-b from-keyviq-mist to-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="What We Deliver"
          subtitle="Comprehensive research capability designed to address your most complex business questions."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="rounded-2xl bg-white p-6 border border-keyviq-navy/5 shadow-sm shadow-keyviq-navy/5"
            >
              <h3 className="font-semibold text-keyviq-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-keyviq-slate">{item.body}</p>
              <div className="mt-4">
                <CheckList items={item.bullets} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {capabilityTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-keyviq-indigo/20 bg-white px-4 py-2 text-xs font-medium text-keyviq-indigo font-data"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
