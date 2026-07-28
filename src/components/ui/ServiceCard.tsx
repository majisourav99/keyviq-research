import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconBadge } from "./IconBadge";
import type { Service } from "../../data/services";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group flex flex-col rounded-2xl border border-keyviq-navy/5 bg-white p-6 shadow-sm shadow-keyviq-navy/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-keyviq-indigo/10"
    >
      <IconBadge icon={service.icon} size="md" />
      <h3 className="mt-4 text-lg font-semibold text-keyviq-navy">{service.title}</h3>
      <p className="mt-2 text-sm text-keyviq-slate">{service.shortDescription}</p>
      <ul className="mt-4 space-y-1.5 text-sm text-keyviq-slate">
        {service.cardBullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-2">
            <span className="size-1 rounded-full bg-keyviq-indigo" />
            {bullet}
          </li>
        ))}
      </ul>
      <Link
        to={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-keyviq-indigo group-hover:gap-2.5 transition-all"
      >
        Get Started →
      </Link>
    </motion.div>
  );
}
