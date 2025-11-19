import { Wifi, Coffee, Bath, Car, Tv, KeyRound } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "High-speed Wi‑Fi" },
  { icon: Coffee, label: "Complimentary breakfast" },
  { icon: Bath, label: "Ensuite bathrooms" },
  { icon: Tv, label: "Smart TV + Streaming" },
  { icon: Car, label: "Free parking" },
  { icon: KeyRound, label: "24/7 self check-in" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">Amenities</h2>
        <p className="text-slate-600 mt-2">Everything you need for a comfortable, memorable stay.</p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {amenities.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Icon className="w-6 h-6 text-slate-900" />
              <span className="text-sm font-medium text-slate-800 text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
