import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Crypto Exchange Development Company | CEX & DEX Software',
  description: 'Shivacha Technologies builds white-label CEX and DEX crypto exchanges. 100K+ TPS matching engine, multi-chain, KYC/AML, mobile trading app. 50+ exchanges launched.',
};

const OFFERINGS = [
  { icon: '🏦', title: 'Centralized Exchange (CEX)', desc: 'Full white-label CEX with Rust-based matching engine (100K+ TPS), spot + margin + futures trading, order book management, and institutional-grade API (REST, WebSocket, FIX Protocol).' },
  { icon: '🔄', title: 'Decentralized Exchange (DEX)', desc: 'AMM-based DEX (Uniswap V2/V3 model) and order-book DEX with on-chain settlement, cross-chain swaps, concentrated liquidity, and fee distribution to LP token holders.' },
  { icon: '🌉', title: 'Hybrid CEX+DEX Platform', desc: 'Best of both worlds — centralized performance with decentralized custody. Off-chain order matching with on-chain settlement, non-custodial accounts, and DeFi protocol integrations.' },
  { icon: '📱', title: 'Mobile Trading App', desc: 'React Native mobile trading app for iOS and Android with real-time charts (TradingView integration), biometric auth, push notifications, and full order management.' },
  { icon: '📊', title: 'Derivatives & Futures', desc: 'Perpetual futures with funding rates, options trading, leveraged tokens, and liquidation engine — with cross-margin and isolated-margin account modes.' },
  { icon: '🔐', title: 'Custody & Wallet Systems', desc: 'Cold/hot wallet architecture with HSM-protected private keys, MPC signing, automated sweeping, and Fireblocks/BitGo custody integration for institutional-grade asset security.' },
];

const FEATURES = [
  'Matching engine: 100K+ TPS (Rust/C++)',
  'Multi-chain: BTC, ETH, BNB, SOL, + 100 tokens',
  'KYC/AML with Sumsub / Jumio integration',
  'Advanced order types: Market, Limit, OCO, Stop',
  'Admin panel: Fee management, risk controls',
  'Liquidity integration: Binance, Coinbase, Kraken',
  'TradingView charting library integration',
  'Anti-fraud & bot detection engine',
  'Multi-currency fiat (USD, EUR, GBP, INR)',
  'Staking & earn products built-in',
  'ISO 27001 security architecture',
  'SOC 2 compliant infrastructure',
];

const TECH = [
  { name: 'Rust', cat: 'Matching Engine' },
  { name: 'Kafka', cat: 'Order Streaming' },
  { name: 'Redis', cat: 'Order Book' },
  { name: 'PostgreSQL', cat: 'Trade History' },
  { name: 'TimescaleDB', cat: 'OHLCV Candles' },
  { name: 'React', cat: 'Web Trading UI' },
  { name: 'React Native', cat: 'Mobile App' },
  { name: 'Node.js', cat: 'API Gateway' },
  { name: 'AWS / GCP', cat: 'Cloud Infra' },
  { name: 'Kubernetes', cat: 'Orchestration' },
  { name: 'Fireblocks', cat: 'Custody' },
  { name: 'Sumsub', cat: 'KYC/AML' },
];

export default function CryptoExchangeDevelopmentPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[550px] h-[550px] bg-[#0099E6] opacity-[0.06] -left-40 top-0" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Exchange Development</div>
              <h1 className="h1 text-slate-900 mb-6">
                Crypto Exchange
                <br /><span className="gt-blue">Development Company</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                We build white-label CEX and DEX crypto exchange software. 100K+ TPS matching engines,
                multi-chain support, KYC/AML, mobile apps, and institutional-grade security — delivered in 8–14 weeks.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Get Free Consultation <ArrowRight size={14} />
                </Link>
                <Link href="/products/crypto-exchange" className="btn btn-secondary">View Product</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { v: '50+', l: 'Exchanges Launched' },
                  { v: '$10B+', l: 'Monthly Volume' },
                  { v: '100K+', l: 'TPS Engine' },
                  { v: '14 Wks', l: 'Avg Delivery' },
                ].map(s => (
                  <div key={s.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: '#0099E6' }}>{s.v}</p>
                    <p className="text-[11px] text-slate-400">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="glass-lg rounded-3xl p-6 border border-slate-200 relative overflow-hidden">
                <div className="scan-line" />
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[12px] text-slate-400 uppercase tracking-wider">Exchange Live Feed</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[12px] text-green-400">Live</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {[
                    { pair: 'BTC/USDT', price: '67,420.50', change: '+2.3%', vol: '$142M', up: true },
                    { pair: 'ETH/USDT', price: '3,521.80', change: '+1.8%', vol: '$98M', up: true },
                    { pair: 'SOL/USDT', price: '182.40', change: '-0.5%', vol: '$54M', up: false },
                    { pair: 'BNB/USDT', price: '594.20', change: '+3.1%', vol: '$31M', up: true },
                  ].map(r => (
                    <div key={r.pair} className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                      <span className="text-[13px] font-semibold text-slate-900 w-24">{r.pair}</span>
                      <span className="text-[13px] text-slate-900">{r.price}</span>
                      <span className={`text-[12px] px-1.5 py-0.5 rounded ${r.up ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>{r.change}</span>
                      <span className="text-[11px] text-slate-400 hidden sm:block">{r.vol}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 mb-2">Volume (24h)</p>
                  <div className="flex items-end gap-1 h-12">
                    {[45,60,55,80,65,90,70,95,75,100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm"
                        style={{ height: `${h}%`, background: `linear-gradient(180deg, #0099E6 0%, #00D4FF 100%)`, opacity: 0.6 + i * 0.04 }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">What We Build</div>
            <h2 className="h2 text-slate-900">Exchange Development <span className="gt-blue">Services</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFERINGS.map((o) => (
              <div key={o.title} className="card rounded-2xl p-6 border border-slate-200 hover:border-[#0099E6]/40 group">
                <div className="text-4xl mb-4">{o.icon}</div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2 group-hover:text-[#33B5E5] transition-colors">{o.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What&apos;s Included */}
      <section className="section-sm bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label mb-4">Included Features</div>
              <h2 className="h2 text-slate-900 mb-6">Everything You Need to <span className="gt-blue">Launch & Scale</span></h2>
              <p className="lead mb-6">
                Every exchange we build comes with a full feature set — from the matching engine to the
                mobile app — so you can launch and compete from day one.
              </p>
              <Link href="/contact#demo" className="btn btn-primary">
                Request Demo <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {FEATURES.map(f => (
                <div key={f} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                  <CheckCircle size={14} className="text-[#33B5E5] flex-shrink-0" />
                  <span className="text-[13px] text-slate-500">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-slate-900">Technology <span className="gt-blue">Stack</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {TECH.map(t => (
              <div key={t.name} className="card rounded-xl p-4 text-center border border-slate-200 hover:border-[#0099E6]/40 cursor-default">
                <p className="text-[14px] font-semibold text-slate-900 mb-1">{t.name}</p>
                <p className="text-[11px] text-slate-400">{t.cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
