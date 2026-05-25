import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Crypto Debit Card Program Infrastructure | Launch Your Own Crypto Card',
  description: 'Launch your branded crypto debit card program. Visa/Mastercard BIN sponsorship, real-time crypto-to-fiat conversion, virtual + physical cards, Apple Pay / Google Pay. 50+ countries, 10+ active programs.',
};

const FEATURES = [
  {
    icon: '💳',
    title: 'Visa / Mastercard BIN Sponsorship',
    desc: 'Full BIN sponsorship under Visa and Mastercard programs. We handle the issuing bank relationships, scheme compliance, and card network certifications — you get the cards under your brand.',
  },
  {
    icon: '⚡',
    title: 'Real-Time Crypto-to-Fiat Conversion',
    desc: 'Crypto balances are converted to fiat at the point of sale in real time — no pre-conversion needed. Best-rate execution across multiple liquidity sources with spread transparency.',
  },
  {
    icon: '🃏',
    title: 'Virtual + Physical Cards',
    desc: 'Issue virtual cards instantly for online and in-app purchases. Ship embossed physical cards (magnetic stripe + chip + contactless) globally via your programme management dashboard.',
  },
  {
    icon: '🔒',
    title: 'Spend Controls & Limits',
    desc: 'Card-level controls for merchant category restrictions (MCCs), daily/weekly/monthly spend limits, ATM withdrawal caps, geographic restrictions, and single-transaction limits.',
  },
  {
    icon: '🎁',
    title: 'Crypto Rewards & Cashback',
    desc: 'Configurable cashback in your native token or any crypto asset. Tiered reward rates by card tier, merchant category, or spend volume — to drive loyalty and card spend.',
  },
  {
    icon: '📱',
    title: 'Apple Pay + Google Pay',
    desc: 'Full NFC tokenization for Apple Pay and Google Pay. Push provisioning from your mobile app to the user\'s device wallet — frictionless digital wallet integration.',
  },
  {
    icon: '🪪',
    title: 'KYC / AML Built-In',
    desc: 'Card application KYC with identity verification, liveness checks, and AML screening pre-integrated. Compliant with card network KYC requirements across all supported jurisdictions.',
  },
  {
    icon: '🖥️',
    title: 'Card Management Dashboard',
    desc: 'Real-time transaction monitoring, card issuance, freeze/unfreeze, spend analytics, fraud alerts, chargeback management, and cardholder support tools — all in one admin panel.',
  },
  {
    icon: '📲',
    title: 'White-Label Mobile App',
    desc: 'Fully branded iOS and Android app with card management, transaction history, crypto top-up, rewards tracking, and push notifications — delivered under your brand in weeks.',
  },
];

const SPECS = [
  { label: 'Card Networks', value: 'Visa and Mastercard — certified issuing programmes' },
  { label: 'Conversion', value: 'Real-time at POS via liquidity aggregator, best-rate routing' },
  { label: 'Card Types', value: 'Virtual (instant) + physical (shipped globally via Idemia/Thales)' },
  { label: 'Digital Wallets', value: 'Apple Pay, Google Pay — NFC tokenization with push provisioning' },
  { label: 'KYC/AML', value: 'Sumsub / Onfido integration, Chainalysis screening, OFAC checks' },
  { label: 'Supported Crypto', value: 'BTC, ETH, USDT, USDC, BNB, SOL, and custom tokens' },
  { label: 'Geographic Reach', value: '50+ countries — EEA, UK, APAC, LATAM, ME coverage' },
  { label: 'White-Label', value: 'Custom card design, branded app, custom domain admin portal' },
];

const METRICS = [
  { v: '10+', l: 'Active Card Programs' },
  { v: '50+', l: 'Countries Supported' },
  { v: 'Visa+MC', l: 'Certified' },
  { v: 'Real-Time', l: 'Crypto Conversion' },
];

const COLOR = '#00CCFF';

export default function CryptoCardProductPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[600px] h-[600px] opacity-[0.07] -right-40 -top-20" style={{ background: COLOR }} />
        <div className="orb w-[350px] h-[350px] opacity-[0.04] left-0 bottom-0" style={{ background: COLOR }} />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="badge badge-blue">Platform Product</span>
                <span className="badge" style={{ background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}40` }}>Card Infrastructure</span>
              </div>
              <div className="section-label mb-4">Crypto Card Program Infrastructure</div>
              <h1 className="h1 text-slate-900 mb-6">
                Launch Your Own
                <br /><span style={{ color: COLOR }}>Crypto Card Program</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                End-to-end infrastructure to issue your own Visa or Mastercard crypto debit card
                programme. Real-time crypto-to-fiat conversion at POS, virtual and physical cards,
                Apple/Google Pay, and a white-label app — all under your brand.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Request a Demo <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Card Programs</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {METRICS.map(m => (
                  <div key={m.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: COLOR }}>{m.v}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{m.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard visual */}
            <div className="hidden lg:block">
              <div className="dashboard-preview rounded-2xl relative">
                <div className="scan-line" />
                <div className="dashboard-bar">
                  <span className="db-dot bg-red-500" />
                  <span className="db-dot bg-yellow-400" />
                  <span className="db-dot bg-green-400" />
                  <span className="ml-3 text-[11px] text-slate-400">cards.yourplatform.com — Card Management</span>
                </div>
                <div className="p-5 space-y-3">
                  {/* Virtual card mockup */}
                  <div className="rounded-2xl p-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #00334466, #001A2A66)', border: `1px solid ${COLOR}33` }}>
                    <div className="flex justify-between items-start mb-4">
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider">Virtual Card</p>
                      <p className="text-[11px] font-bold" style={{ color: COLOR }}>VISA</p>
                    </div>
                    <p className="text-[14px] font-mono text-slate-900 tracking-widest mb-3">4242 •••• •••• 8741</p>
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Alex K.</span>
                      <span>Exp: 12/27</span>
                    </div>
                  </div>
                  {/* Recent transactions */}
                  <div className="glass rounded-xl p-3">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-2">Recent Transactions</p>
                    {[
                      ['Amazon', '–$84.99', 'USD', '0.0022 ETH'],
                      ['Starbucks', '–$6.50', 'USD', '168 USDT'],
                      ['Netflix', '–$15.99', 'USD', '15.99 USDC'],
                    ].map(([merchant, amount, fiat, crypto]) => (
                      <div key={String(merchant)} className="flex items-center justify-between py-1.5 border-b border-slate-200 last:border-0">
                        <span className="text-[11px] font-semibold text-slate-900">{merchant}</span>
                        <span className="text-[11px] text-red-400">{amount} {fiat}</span>
                        <span className="text-[10px] text-slate-400">{crypto}</span>
                      </div>
                    ))}
                  </div>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    {[['Cards Issued','48,210'],['MTD Spend','$2.4M'],['Cashback Paid','$18,940']].map(([l, v]) => (
                      <div key={l} className="metric-card">
                        <p className="text-[10px] text-slate-400">{l}</p>
                        <p className="text-[12px] font-bold" style={{ color: COLOR }}>{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Platform Capabilities</div>
            <h2 className="h2 text-slate-900 mb-4">Everything to Run <span style={{ color: COLOR }}>a Crypto Card Program</span></h2>
            <p className="lead">From BIN sponsorship to cardholder app — the complete infrastructure stack for launching your card programme.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => (
              <div key={f.title} className="card rounded-2xl p-6 border border-slate-200 hover:border-[#00CCFF]/30 transition-colors group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2 group-hover:text-[#7EE8FF] transition-colors">{f.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH SPECS ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-4">Technical Architecture</div>
              <h2 className="h2 text-slate-900 mb-6">Card-Grade <span style={{ color: COLOR }}>Infrastructure Stack</span></h2>
              <p className="lead mb-8">Visa/Mastercard certified processing, PCI-DSS compliant infrastructure, real-time FX settlement — enterprise-ready on day one.</p>
              <div className="space-y-2">
                {SPECS.map(s => (
                  <div key={s.label} className="flex items-start gap-4 p-4 glass rounded-xl border border-slate-200">
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider w-32 flex-shrink-0 pt-0.5">{s.label}</span>
                    <span className="text-[13px] text-slate-500">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label mb-4">Tech Stack</div>
              <h3 className="h3 text-slate-900 mb-6">Card Issuance Technology</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Visa DPS','Mastercard MDES','EMV Tokenization','Apple Pay','Google Pay','Idemia Card Personalisation','Sumsub KYC','Chainalysis','React Native','Node.js / Go','PostgreSQL','PCI-DSS L1'].map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
              <div className="glass-lg rounded-2xl p-6 border border-slate-200">
                <p className="text-[12px] text-slate-400 uppercase tracking-wider mb-4">Supported Crypto Assets</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    ['Bitcoin (BTC)', 'Native + Lightning'],
                    ['Ethereum (ETH)', 'ERC-20 tokens'],
                    ['USDT / USDC', 'Multi-chain stablecoins'],
                    ['BNB / SOL', 'BNB Chain, Solana'],
                    ['Your Token', 'Custom ERC-20 / BEP-20'],
                    ['50+ more', 'Configurable on request'],
                  ].map(([asset, detail]) => (
                    <div key={String(asset)} className="flex items-start gap-2 p-2 rounded-lg bg-white">
                      <CheckCircle size={12} style={{ color: COLOR }} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[12px] font-semibold text-slate-900">{asset}</p>
                        <p className="text-[11px] text-slate-400">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Who Uses It</div>
            <h2 className="h2 text-slate-900 mb-4">Perfect for <span style={{ color: COLOR }}>These Use Cases</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { icon: '🏦', title: 'Crypto Exchanges', desc: 'Add a card as a spending feature to retain users and increase on-platform activity — no cards expertise needed.' },
              { icon: '💰', title: 'DeFi Protocols', desc: 'Let users spend DeFi yield and liquidity rewards directly with a branded card — bridging on-chain and real-world.' },
              { icon: '🌍', title: 'Remittance Fintechs', desc: 'Issue cards to recipients in 50+ countries so cross-border transfers are immediately spendable at any POS terminal.' },
              { icon: '🏷️', title: 'Loyalty Platforms', desc: 'Issue branded reward cards where points or tokens can be spent in real-world retail — driving programme engagement.' },
            ].map(u => (
              <div key={u.title} className="card rounded-2xl p-6 border border-slate-200 hover:border-[#00CCFF]/30 transition-colors">
                <div className="text-3xl mb-4">{u.icon}</div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2">{u.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
