export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop" alt="Ocean" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <p className="inline-block rounded-full border border-white/30 px-3 py-1 text-sm mb-6 backdrop-blur bg-white/10">Coastal charm, modern comfort</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">Relax at our boutique seaside guest house</h1>
          <p className="mt-6 text-lg text-slate-100/90">Wake up to ocean views, enjoy curated amenities, and explore vibrant coastal life—your perfect escape awaits.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100">Book your stay</a>
            <a href="#rooms" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white border border-white/30 hover:bg-white/20">Explore rooms</a>
          </div>
        </div>
      </div>
    </section>
  );
}
