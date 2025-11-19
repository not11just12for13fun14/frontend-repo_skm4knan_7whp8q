import { Star } from "lucide-react";

const reviews = [
  {
    name: "Amelia R.",
    text: "Stunning ocean views and the friendliest hosts we've ever met. Breakfast was superb!",
    rating: 5,
  },
  {
    name: "Jon P.",
    text: "Rooms are immaculate, bed was so comfy, and the location is perfect for exploring.",
    rating: 5,
  },
  {
    name: "Nadia K.",
    text: "Loved the modern design and thoughtful touches. Can't wait to return.",
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">Guest Reviews</h2>
        <p className="text-slate-600 mt-2">Real experiences from recent stays.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex gap-1 text-amber-500 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < r.rating ? 'fill-amber-400' : ''}`} />
                ))}
              </div>
              <p className="text-slate-700">“{r.text}”</p>
              <p className="mt-4 text-sm font-medium text-slate-900">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
