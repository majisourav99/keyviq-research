import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { testimonials } from "../../data/content";
import { images } from "../../data/images";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  function go(delta: number) {
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length);
  }

  return (
    <section className="bg-keyviq-mist py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" />

        <div className="mt-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-white p-8 sm:p-10 shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 size-8 text-blue-100" />
              <p className="italic text-gray-700 leading-relaxed">"{item.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={images[item.avatar as keyof typeof images]}
                  alt={item.name}
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                  <div className="text-sm text-keyviq-blue">{item.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-keyviq-blue" : "w-1.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="inline-flex size-9 items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-white"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="inline-flex size-9 items-center justify-center rounded-md bg-keyviq-blue text-white hover:bg-blue-800"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
