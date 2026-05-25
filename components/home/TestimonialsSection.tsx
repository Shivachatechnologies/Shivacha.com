const TESTIMONIALS = [
  {
    name: 'David Hartmann',
    role: 'CTO, FinVault Exchange',
    country: '🇺🇸 USA',
    avatar: 'DH',
    rating: 5,
    text: 'Shivacha delivered our crypto exchange infrastructure in record time. The matching engine handles 100K+ TPS with zero downtime. Their engineering team\'s depth of blockchain knowledge is genuinely unmatched in the industry.',
    metric: '100K TPS delivered',
    color: '#0099E6',
  },
  {
    name: 'Priya Nair',
    role: 'Founder, NeoFi Bank',
    country: '🇬🇧 UK',
    avatar: 'PN',
    rating: 5,
    text: 'The neo-banking platform Shivacha built for us is world-class. Multi-currency accounts, virtual IBANs, and full PSD2 compliance — launched in 10 weeks. Our customer onboarding time dropped by 80%.',
    metric: '80% faster onboarding',
    color: '#6644FF',
  },
  {
    name: 'Rajesh Menon',
    role: 'CEO, ForexPro Systems',
    country: '🇮🇳 India',
    avatar: 'RM',
    rating: 5,
    text: 'Shivacha\'s forex infrastructure completely transformed our brokerage operations. MT5 integration, liquidity aggregation, and the broker CRM are all battle-tested at scale. Best technology partner we\'ve ever had.',
    metric: 'MT5 + CRM integrated',
    color: '#FFB800',
  },
  {
    name: 'Sarah Chen',
    role: 'VP Engineering, TokenReal',
    country: '🇸🇬 Singapore',
    avatar: 'SC',
    rating: 5,
    text: 'Their tokenization platform exceeded our expectations. Real estate assets on-chain, investor KYC, secondary market — the full stack built with institutional security standards. The smart contract audits alone gave us confidence.',
    metric: '$50M assets tokenized',
    color: '#00FF87',
  },
  {
    name: 'Marcus Volkov',
    role: 'CTO, CryptoArb Capital',
    country: '🇦🇪 UAE',
    avatar: 'MV',
    rating: 5,
    text: 'The AI-powered trading bot ecosystem Shivacha built is generating consistent alpha. Strategy backtesting, live deployment, risk management — all integrated seamlessly. We\'ve scaled to 15 exchanges with one codebase.',
    metric: '15 exchanges integrated',
    color: '#00D4FF',
  },
  {
    name: 'Elena Bastos',
    role: 'Director, HealthChain Lab',
    country: '🇧🇷 Brazil',
    avatar: 'EB',
    rating: 5,
    text: 'Shivacha built our entire healthcare blockchain network — patient data management, clinical trials, and supply chain integrity. HIPAA and LGPD compliant from day one. Exceptional team, exceptional delivery.',
    metric: 'HIPAA + LGPD compliant',
    color: '#EF4444',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section bg-white relative overflow-hidden" id="testimonials">
      <div className="orb w-96 h-96 bg-[#6644FF] opacity-[0.05] left-0 top-1/2" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-label justify-center">Client Success</div>
          <h2 className="h2 text-slate-900 mb-4">
            What Global Enterprises
            <br /><span className="gt-blue">Say About Shivacha</span>
          </h2>
          <p className="lead">
            500+ companies across 50+ countries have trusted Shivacha to build
            their most critical infrastructure. Here&apos;s what they say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="quote-mark">&ldquo;</div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#FFB800] text-sm">★</span>
                ))}
              </div>

              {/* Metric badge */}
              <div className="badge mb-4 text-[11px]"
                style={{ background: `${t.color}12`, borderColor: `${t.color}30`, color: t.color }}>
                📊 {t.metric}
              </div>

              <p className="text-[14px] text-slate-500 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[13px] flex-shrink-0"
                  style={{ background: `${t.color}20`, color: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-slate-900">{t.name}</p>
                  <p className="text-[12px] text-slate-400">{t.role} · {t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom review stats */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {[
            { v: '4.9/5', l: 'Average Rating', icon: '⭐' },
            { v: '500+', l: 'Projects Reviewed', icon: '📝' },
            { v: '98%', l: 'Would Recommend', icon: '👍' },
            { v: '95%', l: 'On-Time Delivery', icon: '✅' },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-black gt-blue">{s.v}</div>
              <div className="text-[12px] text-slate-400">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
