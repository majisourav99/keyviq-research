import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { nav } from "../../data/content";
import { Button } from "../ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-baseline gap-1.5" onClick={() => setOpen(false)}>
          <span className="flex items-center">
            <span className="text-2xl font-black tracking-tight text-keyviq-blue">KEY</span>
            <span className="text-2xl font-black tracking-tight text-gray-900">VIQ</span>
          </span>
          <span className="text-sm font-medium text-gray-500 hidden sm:inline">Research</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-wide transition-colors ${
                  isActive
                    ? "text-keyviq-blue border-b-2 border-keyviq-blue pb-1"
                    : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" icon={false} className="!py-2.5 !px-5 uppercase text-xs tracking-wide">
            Get a Quote
          </Button>
        </div>

        <button
          className="md:hidden text-gray-900"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? "text-keyviq-blue" : "text-gray-600"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button to="/contact" icon={false} className="!py-2.5 !px-5 w-fit" onClick={() => setOpen(false)}>
            Get a Quote
          </Button>
        </div>
      )}
    </header>
  );
}
