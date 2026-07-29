import { Phone, Mail } from "lucide-react";
import { contactInfo } from "../../data/content";

export function TopBar() {
  return (
    <div className="bg-keyviq-navy text-white text-xs">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-keyviq-cyan">
            <Phone className="size-3.5" />
            <span className="hidden sm:inline">{contactInfo.phone}</span>
          </a>
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 hover:text-keyviq-cyan">
            <Mail className="size-3.5" />
            <span className="hidden sm:inline">{contactInfo.email}</span>
          </a>
        </div>
        <span className="text-white/70">Serving 50+ countries worldwide</span>
      </div>
    </div>
  );
}
