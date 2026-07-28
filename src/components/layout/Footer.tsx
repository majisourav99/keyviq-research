import { Link } from "react-router-dom";
import { Sparkles, Mail, Phone, MapPin, Link2, MessageCircle } from "lucide-react";
import { footerColumns, contactInfo } from "../../data/content";

export function Footer() {
  return (
    <footer className="bg-keyviq-navy text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-keyviq-indigo to-keyviq-violet text-white">
              <Sparkles className="size-4.5" />
            </span>
            <span className="font-display text-lg font-semibold text-white">Keyviq Research</span>
          </Link>
          <p className="mt-4 text-sm max-w-xs">
            Market research and AI analytics provider, delivering data-driven decisions for businesses worldwide.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Connect with us" className="inline-flex size-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10">
              <Link2 className="size-4" />
            </a>
            <a href="#" aria-label="Message us" className="inline-flex size-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10">
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerColumns.company.map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Resources</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerColumns.resources.map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="size-4 mt-0.5 shrink-0" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white break-all">
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="size-4 mt-0.5 shrink-0" />
              <span>{contactInfo.phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5 shrink-0" />
              <span>{contactInfo.office}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Keyviq Research. All rights reserved.</span>
          <span>Built on rigorous research, accelerated by AI.</span>
        </div>
      </div>
    </footer>
  );
}
