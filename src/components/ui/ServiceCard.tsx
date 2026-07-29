import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Service } from "../../data/services";
import { images } from "../../data/images";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group flex flex-col rounded-xl bg-white border border-gray-100 overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={images[service.image as keyof typeof images]}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-bold tracking-widest uppercase text-keyviq-blue">
          {service.tag}
        </span>
        <h3 className="mt-2 text-lg font-bold text-gray-900">{service.title}</h3>
        <Link
          to={`/services/${service.slug}`}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-keyviq-blue group-hover:gap-2.5 transition-all"
        >
          Learn More →
        </Link>
      </div>
    </motion.div>
  );
}
