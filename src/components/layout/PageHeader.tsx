import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  breadcrumb: string;
  image: string;
};

export function PageHeader({ eyebrow, title, breadcrumb, image }: PageHeaderProps) {
  return (
    <section
      className="relative bg-keyviq-navy bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-keyviq-navy/80" />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <span className="text-xs font-bold tracking-widest uppercase text-keyviq-cyan">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {title}
        </h1>
        <p className="mt-3 text-sm text-white/60">
          <Link to="/" className="hover:text-white">
            Home
          </Link>{" "}
          / {breadcrumb}
        </p>
      </motion.div>
    </section>
  );
}
