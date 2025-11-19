import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = [
    { label: "Rooms", href: "#rooms" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <span className="font-semibold text-slate-900">Seaside Guest House</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">
            <Phone className="w-4 h-4" />
            Contact
          </a>
        </div>
        <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="block text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white">
              <Phone className="w-4 h-4" /> Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
