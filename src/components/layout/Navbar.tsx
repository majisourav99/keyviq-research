import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { nav } from "../../data/content";
import { Button } from "../ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-keyviq-navy/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-keyviq-indigo to-keyviq-violet text-white">
            <Sparkles className="size-4.5" />
          </span>
          <span className="font-display text-lg font-semibold text-keyviq-navy">
            Keyviq<span className="text-keyviq-indigo"> Research</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-keyviq-indigo" : "text-keyviq-slate hover:text-keyviq-navy"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" icon={false} className="!py-2.5 !px-5">
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-keyviq-navy"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-keyviq-navy/5 bg-white px-6 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? "text-keyviq-indigo" : "text-keyviq-slate"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button to="/contact" icon={false} className="!py-2.5 !px-5 w-fit" onClick={() => setOpen(false)}>
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}
