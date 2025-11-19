import { useState } from "react";

export default function Booking() {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({ checkIn: today, checkOut: today, guests: 2, room: "Ocean View Suite" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-semibold text-slate-900">Check availability</h2>
          <p className="text-slate-600 mt-2">Select your dates and we'll get back to you to confirm your reservation.</p>
          <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Check-in</label>
              <input type="date" name="checkIn" value={form.checkIn} onChange={onChange} min={today} className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Check-out</label>
              <input type="date" name="checkOut" value={form.checkOut} onChange={onChange} min={form.checkIn} className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Guests</label>
              <select name="guests" value={form.guests} onChange={onChange} className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900">
                {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Room type</label>
              <select name="room" value={form.room} onChange={onChange} className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900">
                {["Ocean View Suite","Garden Deluxe","Cozy Standard"].map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full sm:w-auto inline-flex px-6 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Request to book</button>
            </div>
          </form>

          {submitted && (
            <div className="mt-6 rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-emerald-900">
              Thanks! We've received your request for {form.room} from {form.checkIn} to {form.checkOut} for {form.guests} guest(s). We'll email you shortly to confirm.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
