import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'White-Label Crypto Exchange Software | Launch in 8 Weeks',
  description: 'Production-ready white-label crypto exchange infrastructure. 100K+ TPS matching engine, CEX+DEX hybrid, 500+ trading pairs, margin & futures. Launch your exchange in 8 weeks.',
};

const FEATURES = [
  {
    icon: '⚡',
    title: '100K+ TPS Matching Engine',
    desc: 'Rust-powered order matching engine capable of processing 100,000+ transactions per second with sub-millisecond latency. Handles institutional-grade order flow without compromise.',
  },
  {
    icon: '🔀',
    title: 'CEX + DEX Hybrid Architecture',
    desc: 'Combine centralized liquidity depth with on-chain settlement. Offer users the speed of a CEX with the self-custody guarantees of a DEX — in a single unified platform.',
  },
  {
    icon: '📊',
    title: '500+ Trading Pairs & Order Types',
    desc: 'Launch with market, limit, stop-loss, OCO, iceberg, and TWAP order types across 500+ spot, margin, and derivatives pairs. Fully configurable pair listing.',
  },
  {
    icon: '📈',
    title: 'Margin, Futures & Derivatives',
    desc: 'Native support for isolated and cross-margin trading up to 125x, perpetual futures, quarterly contracts, and options — with a real-time risk management layer.',
  },
  {
    icon: '🤝',
    title: 'P2P Trading Module',
    desc: 'Built-in peer-to-peer marketplace with escrow, dispute resolution, 150+ payment methods, and a merchant reputation system. Drive fiat on-ramp volume from day one.',
  },
  {
    icon: '🔌',
    title: 'Enterprise API Suite',
    desc: 'REST, WebSocket, and FIX Protocol 4.2/4.4 APIs for institutional trading desks and market makers. Rate-limited, co-location-ready, and fully documented.',
  },
];

const STEPS = [
  { n: '01', title: 'License & Branding Setup', desc: 'We configure your white-label instance, apply your brand identity, and set up your infrastructure environment in your cloud or ours.' },
  { n: '02', title: 'Liquidity & Pairs Configuration', desc: 'Connect to liquidity providers, configure trading pairs, set fee schedules, and enable your chosen order types and margin parameters.' },
  { n: '03', title: 'Compliance & KYC Integration', desc: 'Integrate your KYC/AML provider, configure geo-restrictions, set up AML monitoring rules, and prepare regulatory documentation.' },
  { n: '04', title: 'Launch & Ongoing Support', desc: 'Go live with a dedicated launch team. 24/7 SRE support, real-time monitoring, and quarterly feature releases keep you at the cutting edge.' },
];

const SPECS = [
  { label: 'Matching Engine', value: 'Rust — lock-free LMAX Disruptor pattern' },
  { label: 'Order Bus', value: 'Apache Kafka — 10M+ msgs/sec throughput' },
  { label: 'Order Book', value: 'Redis + custom in-memory — <0.1ms read' },
  { label: 'Trade Database', value: 'PostgreSQL 16 + TimescaleDB for OHLCV' },
  { label: 'Trading UI', value: 'React + TradingView Charting Library' },
  { label: 'Mobile Apps', value: 'React Native — iOS & Android' },
  { label: 'Infrastructure', value: 'Kubernetes, multi-region, 99.99% SLA' },
  { label: 'Security', value: 'HSM cold wallet, MPC hot wallet, WAF, DDoS' },
];

const METRICS = [
  { v: '50+', l: 'Exchanges Launched' },
  { v: '$10B+', l: 'Monthly Client Volume' },
  { v: '100K+', l: 'Transactions / Second' },
  { v: '8 Wks', l: 'Average Time to Launch' },
];

export default function CryptoExchangeProductPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[600px] h-[600px] bg-[#0099E6] opacity-[0.07] -left-40 -top-20" />
        <div className="orb w-[400px] h-[400px] bg-[#00CCFF] opacity-[0.05] right-0 top-1/2" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left copy */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="badge badge-blue">Platform Product</span>
                <span className="badge badge-green">White-Label</span>
              </div>
              <div className="section-label mb-4">Crypto Exchange Infrastructure</div>
              <h1 className="h1 text-slate-900 mb-6">
                Launch a Tier-1 Exchange
                <br /><span className="gt-blue">in 8 Weeks</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                A complete white-label crypto exchange platform — matching engine, trading UI, mobile apps,
                admin back-office, and compliance tooling — ready to deploy under your brand.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Request a Demo <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Live Exchanges</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {METRICS.map(m => (
                  <div key={m.l} className="metric-card">
                    <p className="text-xl font-black gt-blue">{m.v}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{m.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — dashboard visual */}
            <div className="hidden lg:block">
              <div className="dashboard-preview rounded-2xl relative">
                <div className="scan-line" />
                <div className="dashboard-bar">
                  <span className="db-dot bg-red-500" />
                  <span className="db-dot bg-yellow-400" />
                  <span className="db-dot bg-green-400" />
                  <span className="ml-3 text-[11px] text-slate-400">exchange.yourbrand.com — Live Trading</span>
                </div>
                <div className="p-5 space-y-3">
                  {/* Ticker strip */}
                  <div className="flex gap-3 overflow-hidden">
                    {[['BTC/USDT','$67,420','↑2.4%','text-green-400'],['ETH/USDT','$3,521','↑1.8%','text-green-400'],['BNB/USDT','$598','↓0.3%','text-red-400'],['SOL/USDT','$182','↑5.1%','text-green-400']].map(([pair,price,chg,cls]) => (
                      <div key={pair} className="glass rounded-lg px-3 py-1.5 flex-shrink-0">
                        <p className="text-[10px] text-slate-400">{pair}</p>
                        <p className="text-[13px] font-bold text-slate-900">{price}</p>
                        <p className={`text-[10px] font-semibold ${cls}`}>{chg}</p>
                      </div>
                    ))}
                  </div>
                  {/* Simulated order book + chart area */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2 glass rounded-xl p-3 h-36 flex flex-col justify-between">
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider">Price Chart — BTC/USDT</p>
                      <div className="flex items-end gap-1 h-20">
                        {[40,55,45,70,60,80,65,90,75,95,85,100,88,72,92].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: h > 70 ? 'rgba(0,153,230,0.6)' : 'rgba(0,153,230,0.25)' }} />
                        ))}
                      </div>
                      <p className="text-[11px] text-[#33B5E5] font-bold">$67,420.50 <span className="text-green-400 text-[10px]">+2.4%</span></p>
                    </div>
                    <div className="glass rounded-xl p-3 h-36 flex flex-col gap-1 overflow-hidden">
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Order Book</p>
                      {[['67,580','0.42','sell'],['67,560','1.10','sell'],['67,540','0.77','sell'],['—','—','mid'],['67,420','2.31','buy'],['67,400','0.98','buy'],['67,380','1.54','buy']].map(([p,a,s],i) => (
                        <div key={i} className={`flex justify-between text-[9px] font-mono ${s==='sell'?'text-red-400':s==='buy'?'text-green-400':'text-slate-400'}`}>
                          <span>{p}</span><span>{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[['24h Volume','$4.2B'],['Open Orders','18,204'],['Active Users','94,312']].map(([l,v]) => (
                      <div key={l} className="metric-card">
                        <p className="text-[10px] text-slate-400">{l}</p>
                        <p className="text-[13px] font-bold text-[#33B5E5]">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Platform Capabilities</div>
            <h2 className="h2 text-slate-900 mb-4">Everything You Need to <span className="gt-blue">Run an Exchange</span></h2>
            <p className="lead">One platform. Every feature a competitive exchange needs — from matching engine to mobile app.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => (
              <div key={f.title} className="card rounded-2xl p-6 border border-slate-200 hover:border-[#0099E6]/40 group">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2 group-hover:text-[#33B5E5] transition-colors">{f.title}</h3>
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
              <h2 className="h2 text-slate-900 mb-6">Built for <span className="gt-blue">Institutional Scale</span></h2>
              <p className="lead mb-8">Every component is engineered for the most demanding trading environments — from retail exchanges to institutional dark pools.</p>
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
              <h3 className="h3 text-slate-900 mb-6">The Stack Behind the Speed</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Rust','Apache Kafka','Redis','PostgreSQL','TimescaleDB','React','React Native','TypeScript','Kubernetes','AWS / GCP','Cloudflare','HSM Custody'].map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
              <div className="glass-lg rounded-2xl p-6 border border-slate-200">
                <p className="text-[12px] text-slate-400 uppercase tracking-wider mb-4">Performance Benchmarks</p>
                <div className="space-y-4">
                  {[['Order Matching Latency','< 0.1ms','99%'],['API Response (REST)','< 5ms','99.9%'],['WebSocket Feed Delay','< 2ms','99.9%'],['System Uptime (SLA)','99.99%','Annual']].map(([lbl, val, ref]) => (
                    <div key={lbl}>
                      <div className="flex justify-between mb-1">
                        <span className="text-[12px] text-slate-500">{lbl}</span>
                        <span className="text-[12px] font-bold text-[#33B5E5]">{val}</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#0099E6] to-[#00D4FF] rounded-full" style={{ width: ref === '99.99%' ? '99%' : ref === '99.9%' ? '96%' : '90%' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Launch Process</div>
            <h2 className="h2 text-slate-900 mb-4">From Contract to <span className="gt-blue">Live Exchange</span></h2>
            <p className="lead">A proven 8-week delivery process used across 50+ exchange launches worldwide.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="card rounded-2xl p-6 border border-slate-200 relative group hover:border-[#0099E6]/40">
                <div className="text-[48px] font-black text-[#0E1E34] group-hover:text-[#0099E6]/20 transition-colors absolute top-4 right-4 leading-none">{s.n}</div>
                <div className="w-10 h-10 rounded-xl bg-[#0099E6]/10 border border-[#0099E6]/20 flex items-center justify-center mb-4">
                  <span className="text-[#33B5E5] font-bold text-sm">{i + 1}</span>
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2 group-hover:text-[#33B5E5] transition-colors">{s.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY / METRICS ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Client Results</div>
              <h2 className="h2 text-slate-900 mb-6">
                Southeast Asian Exchange
                <br /><span className="gt-blue">Reached $200M Daily Volume</span>
              </h2>
              <p className="lead mb-8">
                A Singapore-based startup licensed our white-label exchange, went live in 7 weeks,
                and scaled to $200M daily trading volume within 6 months — serving 180,000 registered users
                with zero downtime events.
              </p>
              <div className="space-y-3 mb-8">
                {['Launched in 7 weeks from contract signing','Zero downtime in first 12 months of operation','Processed 45M+ trades in the first quarter','Integrated 3 liquidity providers on day one','Passed MAS (Singapore) regulatory review in 30 days'].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0099E6]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-[#33B5E5]" />
                    </div>
                    <span className="text-[14px] text-slate-500">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact#consultation" className="btn btn-primary">
                Get a Demo <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[['$200M','Daily Trading Volume at Peak'],['180K','Registered Users — Month 6'],['7 Weeks','Time to Full Production Launch'],['45M+','Trades Processed — First Quarter'],['99.99%','Platform Uptime — Year One'],['3','Liquidity Providers Integrated']].map(([v, l]) => (
                <div key={l} className="glass-lg rounded-2xl p-6 border border-slate-200 hover:border-[#0099E6]/30 transition-colors">
                  <p className="text-2xl font-black gt-blue mb-1">{v}</p>
                  <p className="text-[13px] text-slate-500">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Integrations</div>
            <h2 className="h2 text-slate-900 mb-4">Connects With Your <span className="gt-blue">Entire Stack</span></h2>
            <p className="lead">Pre-built integrations with major liquidity providers, payment processors, KYC vendors, and custody solutions.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {['Binance Liquidity','Coinbase Prime','B2C2 Market Making','Fireblocks Custody','BitGo Custody','Chainalysis AML','Sumsub KYC','Jumio KYC','Stripe Fiat','Banxa On-Ramp','MoonPay','Simplex','TradingView Charts','CoinGecko Data','CoinMarketCap','Twilio 2FA'].map(name => (
              <div key={name} className="flex items-center gap-2.5 p-3 rounded-xl glass border border-slate-200 hover:border-[#0099E6]/30 transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#0099E6] flex-shrink-0" />
                <span className="text-[13px] text-slate-500">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
