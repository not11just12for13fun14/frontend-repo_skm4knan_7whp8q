import { Star } from "lucide-react";

const rooms = [
  {
    name: "Ocean View Suite",
    price: 189,
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2072&auto=format&fit=crop",
    desc: "King bed • Balcony • Panoramic sea views",
    rating: 4.9,
  },
  {
    name: "Garden Deluxe",
    price: 149,
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1974&auto=format&fit=crop",
    desc: "Queen bed • Patio • Lush garden access",
    rating: 4.8,
  },
  {
    name: "Cozy Standard",
    price: 109,
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop",
    desc: "Double bed • Desk • Smart TV",
    rating: 4.7,
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Our Rooms</h2>
            <p className="text-slate-600 mt-2">Thoughtfully designed spaces for every kind of traveler.</p>
          </div>
          <a href="#booking" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Check availability</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.name} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group">
              <div className="relative h-52 overflow-hidden">
                <img src={room.img} alt={room.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-sm font-medium">${room.price}/night</div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{room.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="text-sm font-medium text-slate-700">{room.rating}</span>
                  </div>
                </div>
                <p className="text-slate-600 mt-1">{room.desc}</p>
                <a href="#booking" className="mt-4 inline-flex px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Book now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
