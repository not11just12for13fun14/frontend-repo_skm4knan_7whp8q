export default function Location() {
  return (
    <section id="location" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">Location</h2>
        <p className="text-slate-600 mt-2">We're right on the coast, steps from the boardwalk and local cafes.</p>
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200 min-h-[320px]">
            <iframe title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=-3.70379%2C40.41678%2C-3.70379%2C40.41678&layer=mapnik" className="w-full h-full"></iframe>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Getting here</h3>
            <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
              <li>15 mins from the central station</li>
              <li>40 mins from the international airport</li>
              <li>Walking distance to beaches, restaurants, and markets</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex px-4 py-2 rounded-lg bg-slate-900 text-white">Contact us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
