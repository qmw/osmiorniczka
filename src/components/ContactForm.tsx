import { useState } from 'react';

export default function ContactForm({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'leasing',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API endpoint
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-xl text-slate-800 mb-2">Dziekujemy!</h3>
        <p className="text-slate-600">Oddzwonimy w ciagu 15 minut w godzinach pracy (pon-pt, 8-18).</p>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Imie"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
        />
        <input
          type="tel"
          placeholder="Numer telefonu"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
        />
        <button type="submit" className="px-6 py-3 bg-gradient-to-br from-coral-400 to-coral-500 text-white font-heading font-semibold rounded-xl shadow-lg shadow-coral-400/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap">
          Oddzwoncie do mnie
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Imie *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Telefon *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Czego szukasz?</label>
        <select
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors bg-white"
        >
          <option value="leasing">Leasing</option>
          <option value="kredyt">Kredyt firmowy</option>
          <option value="faktoring">Faktoring</option>
          <option value="inne">Inne</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Wiadomosc (opcjonalnie)</label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Np. Szukam leasingu na samochod dostawczy, wartosc ok. 150 tys. netto..."
          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors resize-none"
        />
      </div>
      <button type="submit" className="w-full py-4 bg-gradient-to-br from-teal-500 to-teal-700 text-white font-heading font-semibold rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-lg">
        Wyslij — oddzwonimy w 15 min
      </button>
      <p className="text-xs text-slate-400 text-center">
        Zadnych zobowiazan. Konsultacja jest calkowicie bezplatna.
      </p>
    </form>
  );
}
