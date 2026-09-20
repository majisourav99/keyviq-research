import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { contactInfo, brand } from "../../data/content";

export function TopBar() {
  return (
    <div className="bg-keyviq-navy text-white text-xs">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center gap-4">
        <Link to="/" className="inline-flex items-center justify-center rounded bg-white p-0.5 shrink-0">
          <img src="/logo-hex.png" alt={brand.name} className="h-5 w-auto" />
        </Link>
        <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 hover:text-keyviq-cyan">
          <Mail className="size-3.5" />
          <span className="hidden sm:inline">{contactInfo.email}</span>
        </a>
      </div>
    </div>
  );
}
