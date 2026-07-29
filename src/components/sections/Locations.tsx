import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";
import { locations } from "../../data/content";
import { images } from "../../data/images";

export function Locations() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-keyviq-blue">
            Locations
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Support across 50+ countries
            <br />
            <span className="text-keyviq-blue">around the world</span>
          </h2>
          <p className="mt-3 text-gray-500">
            With presence globally, we provide local expertise with a worldwide perspective.
          </p>
        </motion.div>

        <div
          className="mt-12 relative rounded-2xl overflow-hidden bg-cover bg-center p-6 sm:p-8"
          style={{ backgroundImage: `url(${images.earthAtNight})` }}
        >
          <div className="absolute inset-0 bg-keyviq-navy/70" />
          <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.country}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (i % 4) * 0.06 }}
                className="rounded-xl bg-white/10 backdrop-blur-sm p-4 border border-white/10"
              >
                <span className="text-2xl">{loc.flag}</span>
                <div className="mt-2 font-semibold text-white text-sm">{loc.country}</div>
                <div className="mt-1 flex items-center gap-1 text-xs text-white/70">
                  <MapPin className="size-3" />
                  {loc.branches} branches
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative mt-6 flex items-center gap-3">
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-keyviq-cyan">
              <Globe className="size-4" />
            </span>
            <div>
              <div className="text-white font-semibold text-sm">50+ Countries Worldwide</div>
              <div className="text-white/60 text-xs">Delivering local expertise across 50+ countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
