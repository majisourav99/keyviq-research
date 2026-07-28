import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { IconBadge } from "../ui/IconBadge";
import { industries } from "../../data/content";

const industryIcons: Record<string, string> = {
  Agriculture: "Wheat",
  Environmental: "Leaf",
  Pharmaceutical: "Pill",
  "Food Solutions": "UtensilsCrossed",
  Automotive: "Car",
  Technology: "Cpu",
  Healthcare: "HeartPulse",
  Construction: "HardHat",
};

export function IndustryExpertise() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Our Industry Expertise"
          subtitle="Specialized research solutions across diverse sectors, tuned by industry-specific AI models."
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="flex flex-col items-center gap-3 rounded-2xl bg-keyviq-mist p-6 text-center"
            >
              <IconBadge icon={industryIcons[industry]} size="md" />
              <span className="text-sm font-medium text-keyviq-navy">{industry}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
