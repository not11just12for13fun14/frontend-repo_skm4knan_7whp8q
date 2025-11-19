export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Seaside Guest House</h3>
          <p className="mt-2 text-slate-600">123 Ocean Drive, Coast City</p>
          <p className="text-slate-600">hello@seasideguesthouse.com</p>
          <p className="text-slate-600">+1 (555) 123‑4567</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-900">Policies</h4>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li>Flexible cancellation up to 48 hours</li>
            <li>Check-in: 3 PM • Check-out: 11 AM</li>
            <li>No smoking • Pets on request</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-slate-900">Follow</h4>
          <p className="mt-2 text-slate-600">Instagram • Facebook • TripAdvisor</p>
          <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Seaside Guest House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
