import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Share2, Rss, Link2, Send } from "lucide-react";
import { footerColumns, contactInfo } from "../../data/content";
import { services } from "../../data/services";

export function Footer() {
  return (
    <footer className="bg-keyviq-navy text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-black tracking-tight text-white">KEY</span>
            <span className="text-2xl font-black tracking-tight text-keyviq-cyan">VIQ</span>
          </Link>
          <p className="mt-4 text-sm max-w-xs">
            A premium Hybrid (Human + AI) Market Research Agency delivering high-integrity data
            across 50+ countries with zero operational errors.
          </p>
          <div className="mt-5 flex gap-3">
            {[Share2, Rss, Link2, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="inline-flex size-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerColumns.quickLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">Our Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">Contact Info</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5 shrink-0" />
              <span>{contactInfo.office}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="size-4 mt-0.5 shrink-0" />
              <span>{contactInfo.phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="size-4 mt-0.5 shrink-0" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white break-all">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} KEYVIQ. Premium Market Research — Global Operations. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/contact" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
