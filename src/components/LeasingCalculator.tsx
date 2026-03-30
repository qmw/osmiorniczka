import { useState, useMemo } from 'react';

interface CalculationResult {
  monthlyRate: number;
  totalCost: number;
  totalInterest: number;
  netMonthly: number;
  vatMonthly: number;
}

function calculateLeasing(
  netValue: number,
  downPaymentPct: number,
  months: number,
  annualRate: number,
  isOperating: boolean
): CalculationResult {
  const downPayment = netValue * (downPaymentPct / 100);
  const financed = netValue - downPayment;
  const monthlyRate = annualRate / 100 / 12;
  const pmt = financed * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const vatRate = 0.23;
  const vatMonthly = isOperating ? pmt * vatRate : 0;
  const totalCost = pmt * months + downPayment;
  const totalInterest = totalCost - netValue;

  return {
    monthlyRate: pmt,
    totalCost,
    totalInterest,
    netMonthly: pmt,
    vatMonthly,
  };
}

function calculateCredit(
  netValue: number,
  downPaymentPct: number,
  months: number,
  annualRate: number
): CalculationResult {
  const downPayment = netValue * (downPaymentPct / 100);
  const financed = netValue * 1.23 - downPayment * 1.23;
  const monthlyRate = annualRate / 100 / 12;
  const pmt = financed * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalCost = pmt * months + downPayment * 1.23;
  const totalInterest = totalCost - netValue * 1.23;

  return {
    monthlyRate: pmt,
    totalCost,
    totalInterest,
    netMonthly: pmt,
    vatMonthly: 0,
  };
}

function formatPLN(value: number): string {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function LeasingCalculator() {
  const [netValue, setNetValue] = useState(100000);
  const [downPaymentPct, setDownPaymentPct] = useState(10);
  const [months, setMonths] = useState(36);
  const [annualRate, setAnnualRate] = useState(7.5);
  const [leasingType, setLeasingType] = useState<'operating' | 'financial'>('operating');
  const [showResult, setShowResult] = useState(false);

  const leasing = useMemo(
    () => calculateLeasing(netValue, downPaymentPct, months, annualRate, leasingType === 'operating'),
    [netValue, downPaymentPct, months, annualRate, leasingType]
  );

  const credit = useMemo(
    () => calculateCredit(netValue, downPaymentPct, months, annualRate + 1),
    [netValue, downPaymentPct, months, annualRate]
  );

  const savings = credit.totalCost - leasing.totalCost;

  const handleCalculate = () => {
    setShowResult(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input form */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <h3 className="font-heading font-bold text-xl text-slate-800 mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
            </svg>
            Parametry leasingu
          </h3>

          {/* Net value */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Wartosc przedmiotu netto
            </label>
            <div className="relative">
              <input
                type="number"
                value={netValue}
                onChange={(e) => setNetValue(Number(e.target.value))}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl text-right font-mono text-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                min={1000}
                step={1000}
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">PLN</span>
            </div>
            <input
              type="range"
              min={10000}
              max={1000000}
              step={5000}
              value={netValue}
              onChange={(e) => setNetValue(Number(e.target.value))}
              className="w-full mt-2 accent-teal-500"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>10 000</span>
              <span>1 000 000</span>
            </div>
          </div>

          {/* Down payment */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Wklad wlasny: <span className="font-mono text-teal-600">{downPaymentPct}%</span>
              <span className="text-slate-400 ml-1">({formatPLN(netValue * downPaymentPct / 100)})</span>
            </label>
            <input
              type="range"
              min={0}
              max={45}
              step={1}
              value={downPaymentPct}
              onChange={(e) => setDownPaymentPct(Number(e.target.value))}
              className="w-full accent-teal-500"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>0%</span>
              <span>45%</span>
            </div>
          </div>

          {/* Months */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Okres: <span className="font-mono text-teal-600">{months} mies.</span>
              <span className="text-slate-400 ml-1">({(months / 12).toFixed(1)} lat)</span>
            </label>
            <input
              type="range"
              min={12}
              max={84}
              step={6}
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full accent-teal-500"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>12 mies.</span>
              <span>84 mies.</span>
            </div>
          </div>

          {/* Leasing type */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Rodzaj leasingu
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setLeasingType('operating')}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  leasingType === 'operating'
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Operacyjny
              </button>
              <button
                onClick={() => setLeasingType('financial')}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  leasingType === 'financial'
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Finansowy
              </button>
            </div>
          </div>

          {/* Rate info */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Oprocentowanie roczne: <span className="font-mono text-teal-600">{annualRate}%</span>
            </label>
            <input
              type="range"
              min={3}
              max={15}
              step={0.1}
              value={annualRate}
              onChange={(e) => setAnnualRate(Number(e.target.value))}
              className="w-full accent-teal-500"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>3%</span>
              <span>15%</span>
            </div>
          </div>

          <button onClick={handleCalculate} className="w-full py-4 bg-gradient-to-br from-teal-500 to-teal-700 text-white font-heading font-semibold rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-200 text-lg">
            Oblicz rate
          </button>
        </div>

        {/* Results */}
        <div>
          {showResult ? (
            <div className="space-y-6">
              {/* Leasing result */}
              <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl border border-teal-200 p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-teal-800">Leasing {leasingType === 'operating' ? 'operacyjny' : 'finansowy'}</h3>
                  <span className="inline-flex items-center px-2.5 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold">Rekomendowany</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-slate-500 mb-1">Rata miesieczna netto</p>
                  <p className="font-mono font-bold text-4xl text-teal-700">{formatPLN(leasing.monthlyRate)}</p>
                  {leasingType === 'operating' && (
                    <p className="text-sm text-slate-500 mt-1">
                      brutto: {formatPLN(leasing.monthlyRate + leasing.vatMonthly)}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-teal-200/60">
                  <div>
                    <p className="text-xs text-slate-500">Koszt calkowity</p>
                    <p className="font-mono font-semibold text-slate-800">{formatPLN(leasing.totalCost)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Laczne odsetki</p>
                    <p className="font-mono font-semibold text-slate-800">{formatPLN(leasing.totalInterest)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Wklad wlasny</p>
                    <p className="font-mono font-semibold text-slate-800">{formatPLN(netValue * downPaymentPct / 100)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Okres</p>
                    <p className="font-mono font-semibold text-slate-800">{months} mies.</p>
                  </div>
                </div>
              </div>

              {/* Credit comparison */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
                <h3 className="font-heading font-bold text-lg text-slate-700 mb-4">Kredyt firmowy (porownanie)</h3>
                <div className="mb-4">
                  <p className="text-sm text-slate-500 mb-1">Rata miesieczna brutto</p>
                  <p className="font-mono font-bold text-3xl text-slate-700">{formatPLN(credit.monthlyRate)}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div>
                    <p className="text-xs text-slate-500">Koszt calkowity</p>
                    <p className="font-mono font-semibold text-slate-700">{formatPLN(credit.totalCost)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Laczne odsetki</p>
                    <p className="font-mono font-semibold text-slate-700">{formatPLN(credit.totalInterest)}</p>
                  </div>
                </div>
              </div>

              {/* Savings badge */}
              {savings > 0 && (
                <div className="bg-green-50 rounded-2xl border border-green-200 p-5 text-center">
                  <p className="text-sm text-green-700 mb-1">Leasing jest tanszy o</p>
                  <p className="font-mono font-bold text-2xl text-green-700">{formatPLN(savings)}</p>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-coral-50 to-white rounded-2xl border border-coral-200 p-6 text-center">
                <p className="font-heading font-bold text-lg text-slate-800 mb-2">
                  Chcesz otrzymac konkretne oferty?
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Porownamy oferty 30+ firm leasingowych i bankow. Oddzwonimy w 15 minut.
                </p>
                <a href="/kontakt/" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-gradient-to-br from-coral-400 to-coral-500 text-white font-heading font-semibold rounded-xl shadow-lg shadow-coral-400/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                  Bezplatna konsultacja
                </a>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center bg-gradient-to-br from-teal-50/50 to-slate-50 rounded-2xl border border-dashed border-slate-300 p-8">
              <div className="text-center">
                <svg className="w-16 h-16 text-teal-300 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"/>
                </svg>
                <p className="text-slate-500 font-medium mb-1">Ustaw parametry i kliknij</p>
                <p className="text-teal-600 font-heading font-bold text-lg">"Oblicz rate"</p>
                <p className="text-xs text-slate-400 mt-3">Otrzymasz szacunkowa rate leasingu<br/>i porownanie z kredytem firmowym</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="text-xs text-slate-400 text-center mt-6">
        * Kalkulator ma charakter orientacyjny. Rzeczywista rata moze sie roznic w zaleznosci od oferty firmy leasingowej, scoringu klienta i dodatkowych warunkow.
        Skontaktuj sie z nami, aby otrzymac dokadna wycene.
      </p>
    </div>
  );
}
