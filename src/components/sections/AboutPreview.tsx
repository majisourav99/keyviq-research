import { motion } from "framer-motion";
import { CheckList } from "../ui/CheckList";
import { StatCounter } from "../ui/StatCounter";
import { Button } from "../ui/Button";
import { aboutChecklist, stats } from "../../data/content";
import { images } from "../../data/images";

export function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative order-2 lg:order-1"
        >
          <img
            src={images.about}
            alt="Keyviq Research researcher at work"
            className="rounded-2xl w-full aspect-4/3 object-cover"
          />
          <div className="absolute bottom-5 right-5 rounded-xl bg-keyviq-blue px-6 py-4 text-white shadow-lg">
            <div className="text-2xl font-bold">340+</div>
            <div className="text-xs uppercase tracking-wide text-white/80">Researches Completed</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-keyviq-blue">
            Who We Are
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            The High-Margin Sweet Spot Between Human Expertise & AI Precision
          </h2>
          <p className="mt-4 text-gray-500">
            Keyviq Research is a premium Hybrid (Human + AI) Market Research Agency registered in the
            US, operating globally. Instead of replacing humans with AI, we use AI to
            eliminate human errors — while our Human Experts handle project strategy,
            on-site supervision, and final client recommendations. The result: verified
            human data, zero operational errors, at enterprise scale.
          </p>
          <div className="mt-6">
            <CheckList items={aboutChecklist} columns={2} />
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} light={false} />
            ))}
          </div>
          <div className="mt-8">
            <Button to="/about" icon={false}>
              Learn More About Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
