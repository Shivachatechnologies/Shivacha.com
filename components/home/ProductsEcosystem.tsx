import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PRODUCTS = [
  { name: 'Crypto Exchange',    line: 'CEX & DEX — 100K+ TPS matching engine',     href: '/products/crypto-exchange',  badge: 'Most Popular', accent: '#3B82F6', stat1: '100K TPS',         stat2: '99.99% SLA' },
  { name: 'Neo Banking',        line: 'Virtual IBANs, SWIFT/SEPA, card issuance',  href: '/products/neo-banking',                            accent: '#8B5CF6', stat1: '180+ currencies',  stat2: 'PSD2 ready' },
  { name: 'AI Agent Platform',  line: 'Autonomous AI for trading & compliance',    href: '/products/ai-agents',        badge: 'New',          accent: '#06B6D4', stat1: '15+ AI models',   stat2: '98.5% accuracy' },
  { name: 'Tokenization Engine',line: 'RWA tokenization — ERC-3643 compliant',    href: '/products/tokenization',     badge: 'New',          accent: '#10B981', stat1: '20+ asset types', stat2: '30+ jurisdictions' },
  { name: 'Forex Infrastructure',line: 'MT4/MT5 bridge, liquidity & risk engine',  href: '/products/forex',                                  accent: '#F59E0B', stat1: '2000+ instruments',stat2: '<10ms execution' },
  { name: 'Trading Bots',       line: 'Strategy builder, backtest & live deploy',  href: '/products/trading-bots',                           accent: '#EF4444', stat1: '30+ exchanges',   stat2: '50+ strategies' },
  { name: 'Enterprise Wallet',  line: 'MPC custody across 50+ blockchains',       href: '/products/wallet',                                 accent: '#6366F1', stat1: '50+ chains',      stat2: 'HSM + MPC' },
  { name: 'Crypto Debit Card',  line: 'Visa/Mastercard issuance in 30+ countries',href: '/products/crypto-card',                            accent: '#0EA5E9', stat1: 'Visa & MC',       stat2: 'Real-time FX' },
  { name: 'Broker CRM',         line: 'IB tree, commissions & KYC workflows',     href: '/products/broker-crm',                             accent: '#EC4899', stat1: 'Full IB tree',    stat2: 'Commission engine' },
  { name: 'Cloud & VPS',        line: 'Bare-metal & Kubernetes for fintech',       href: '/products/cloud',                                  accent: '#14B8A6', stat1: '99.99% SLA',      stat2: 'DDoS protected' },
];

const ICONS: Record<string, React.ReactNode> = {
  'Crypto Exchange': (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M12 24h24M28 16l8 8-8 8M20 16l-8 8 8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'Neo Banking': (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="8" y="16" width="32" height="20" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M8 22h32M14 30h6M30 30h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'AI Agent Platform': (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="19" r="7" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M14 38c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="36" cy="16" r="3.5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="16" r="3.5" stroke="currentColor" strokeWidth="2"/>
      <path d="M31 20.5l3.5-1.5M17 20.5l-3.5-1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'Tokenization Engine': (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="24" cy="24" r="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
      <path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'Forex Infrastructure': (
    <svg viewBox="0 0 48 48" fill="none">
      <polyline points="8,36 16,26 22,31 30,18 40,22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="40" cy="22" r="3" fill="currentColor"/>
      <path d="M8 40h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3"/>
    </svg>
  ),
  'Trading Bots': (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="10" y="10" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2.2"/>
      <rect x="26" y="10" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2.2"/>
      <rect x="10" y="26" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2.2"/>
      <rect x="26" y="26" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2.2"/>
    </svg>
  ),
  'Enterprise Wallet': (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="8" y="16" width="32" height="22" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M32 22V16a8 8 0 0 0-16 0v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="24" cy="28" r="4" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  'Crypto Debit Card': (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="6" y="14" width="36" height="22" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M6 21h36" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="10" y="28" width="8" height="4" rx="1.5" fill="currentColor" fillOpacity="0.4"/>
      <circle cx="36" cy="30" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="32" cy="30" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  ),
  'Broker CRM': (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="30" cy="18" r="6" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M8 40c0-5.5 4.5-10 10-10M30 30c5.5 0 10 4.5 10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M22 32c0-1.1.9-2 2-2s2 .9 2 2v8h-4v-8z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  'Cloud & VPS': (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M34 30a8 8 0 1 0-8-8 8 8 0 0 0-8 5A7 7 0 1 0 14 40h20a7 7 0 0 0 0-14z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function ProductsEcosystem() {
  return (
    <section className="section border-y border-white/[0.06]" id="products" style={{ background: '#0C1428' }}>
      <div className="container">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div>
            <p className="overline mb-3">Platform Ecosystem</p>
            <h2 className="h2">
              10 Enterprise Products.<br />
              <span className="gt-blue">One Technology Partner.</span>
            </h2>
          </div>
          <Link href="/products/crypto-exchange"
            className="flex items-center gap-2 text-[13.5px] font-semibold text-[#60A5FA] border border-[#3B82F6]/25 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 px-5 py-2.5 rounded-xl transition-all flex-shrink-0 self-start lg:self-auto">
            All Products <ArrowRight size={14} />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {PRODUCTS.map((p) => (
            <Link key={p.href} href={p.href}
              className="group border border-white/[0.06] hover:border-white/[0.14] rounded-2xl p-5 transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-1 flex flex-col relative overflow-hidden"
              style={{ background: '#060B18' }}>

              {/* Top accent on hover */}
              <div className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"
                style={{ background: p.accent }} />

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top, ${p.accent}08, transparent 60%)` }} />

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0 relative z-10"
                style={{ background: `${p.accent}14`, color: p.accent }}>
                {ICONS[p.name]}
              </div>

              {/* Name + badge */}
              <div className="flex items-start justify-between gap-2 mb-1.5 relative z-10">
                <h3 className="text-[14px] font-bold text-[rgba(240,246,255,0.85)] group-hover:text-white transition-colors leading-snug">
                  {p.name}
                </h3>
                {p.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5"
                    style={{ background: `${p.accent}18`, color: p.accent }}>
                    {p.badge}
                  </span>
                )}
              </div>

              {/* One-liner */}
              <p className="text-[12px] text-[rgba(240,246,255,0.35)] leading-relaxed mb-4 flex-1 relative z-10">{p.line}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-1.5 relative z-10">
                {[p.stat1, p.stat2].map(s => (
                  <span key={s} className="text-[11px] px-2 py-0.5 rounded-md font-medium"
                    style={{ background: `${p.accent}12`, color: p.accent }}>
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/[0.06] rounded-2xl px-7 py-5"
          style={{ background: '#060B18' }}>
          <div>
            <p className="text-[15px] font-bold text-[#F0F6FF]">Need a custom solution?</p>
            <p className="text-[13px] text-[rgba(240,246,255,0.40)] mt-0.5">We build bespoke infrastructure for unique requirements.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/contact#consultation" className="btn btn-primary text-[13.5px] py-2.5 px-5">
              Book Consultation <ArrowRight size={14} />
            </Link>
            <Link href="/case-studies" className="btn btn-secondary text-[13.5px] py-2.5 px-5">
              Case Studies
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
