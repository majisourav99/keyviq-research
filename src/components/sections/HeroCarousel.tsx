import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";
import { heroSlides } from "../../data/content";
import { images } from "../../data/images";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  function go(delta: number) {
    setIndex((i) => (i + delta + heroSlides.length) % heroSlides.length);
  }

  return (
    <section className="relative h-[600px] overflow-hidden bg-keyviq-navy">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[slide.image as keyof typeof images]})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-keyviq-navy/90 via-keyviq-navy/70 to-keyviq-navy/40" />

      <div className="relative h-full mx-auto max-w-7xl px-6 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-keyviq-cyan">
              {slide.eyebrow}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-white">
              {slide.title}
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/services" variant="light" icon={false}>
                Read More
              </Button>
              <Button to="/contact" variant="ghost" icon={false}>
                Contact Us
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.title}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-keyviq-blue" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
