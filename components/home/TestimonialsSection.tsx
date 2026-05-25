const TESTIMONIALS = [
  {
    name: 'David Hartmann', role: 'CTO',         company: 'FinVault Exchange', flag: '🇺🇸',
    text: 'Shivacha delivered our crypto exchange in record time. The matching engine handles 100K+ TPS with zero downtime. Genuinely unmatched blockchain engineering depth.',
    metric: '100K TPS', color: '#3B82F6', initials: 'DH',
  },
  {
    name: 'Priya Nair',     role: 'Founder',      company: 'NeoFi Bank',        flag: '🇬🇧',
    text: 'World-class neo-banking platform — virtual IBANs, multi-currency, full PSD2 compliance, launched in 10 weeks. Customer onboarding dropped 80% in time.',
    metric: '80% faster onboarding', color: '#8B5CF6', initials: 'PN',
  },
  {
    name: 'Rajesh Menon',   role: 'CEO',          company: 'ForexPro Systems',  flag: '🇮🇳',
    text: 'Forex infrastructure transformed our brokerage entirely. MT5, liquidity aggregation, risk engine — all battle-tested at scale. Best technology partner we\'ve had.',
    metric: 'MT5 + full stack', color: '#F59E0B', initials: 'RM',
  },
  {
    name: 'Sarah Chen',     role: 'VP Engineering',company: 'TokenReal',        flag: '🇸🇬',
    text: 'RWA tokenisation platform exceeded expectations. Real estate on-chain, investor KYC, secondary market — institutional security standards throughout.',
    metric: '$50M assets tokenised', color: '#10B981', initials: 'SC',
  },
  {
    name: 'Marcus Volkov',  role: 'CTO',          company: 'CryptoArb Capital', flag: '🇦🇪',
    text: 'AI trading bots generating consistent alpha. Strategy backtesting, live deployment, risk management — 15 exchanges integrated in one codebase.',
    metric: '15 exchanges live', color: '#06B6D4', initials: 'MV',
  },
  {
    name: 'Elena Bastos',   role: 'Director',     company: 'HealthChain Lab',   flag: '🇧🇷',
    text: 'Full healthcare blockchain network built — patient data, clinical trials, supply chain. HIPAA and LGPD compliant from day one. Exceptional delivery.',
    metric: 'HIPAA + LGPD', color: '#EF4444', initials: 'EB',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section" id="testimonials" style={{ background: '#060B18' }}>
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="overline mb-3">Client Success</p>
          <h2 className="h2">
            Trusted by Teams at<br />
            <span className="gt-blue">500+ Global Enterprises</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name}
              className="border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-0.5 flex flex-col relative overflow-hidden group"
              style={{ background: '#0C1428' }}>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top, ${t.color}06, transparent 60%)` }} />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4 relative z-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 12 12" className="w-3.5 h-3.5 fill-amber-400">
                    <path d="M6 0l1.5 3.3L11 3.8l-2.5 2.4.6 3.5L6 8.1l-3.1 1.6.6-3.5L1 3.8l3.5-.5z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[13.5px] text-[rgba(240,246,255,0.55)] leading-relaxed flex-1 mb-5 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Metric */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold mb-5 self-start relative z-10"
                style={{ background: `${t.color}14`, color: t.color }}>
                ↑ {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06] relative z-10">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[12px] font-black flex-shrink-0"
                  style={{ background: `${t.color}18`, color: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[rgba(240,246,255,0.85)] leading-tight">{t.name}</p>
                  <p className="text-[11.5px] text-[rgba(240,246,255,0.35)]">{t.role}, {t.company} {t.flag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
          {[['4.9/5','Average Rating','⭐'],['500+','Projects Reviewed','📝'],['98%','Would Recommend','👍'],['95%','On-Time Delivery','✅']].map(([v,l,i]) => (
            <div key={l} className="text-center">
              <div className="text-[22px] mb-1">{i}</div>
              <div className="text-[20px] font-black text-white">{v}</div>
              <div className="text-[11.5px] text-[rgba(240,246,255,0.35)]">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
