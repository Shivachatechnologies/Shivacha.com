import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Forex Brokerage Technology Platform | MT4/MT5 Infrastructure',
  description: 'Institutional-grade Forex & CFD brokerage platform. MT4/MT5 bridge integration, liquidity aggregation, STP/ECN routing, risk management engine, back-office CRM. Launch your FX broker fast.',
};

const FEATURES = [
  {
    icon: '🔌',
    title: 'MT4 + MT5 Bridge Integration',
    desc: 'Seamless bridge connectivity to MetaTrader 4 and MetaTrader 5. Full plugin architecture, custom symbol mapping, trade copier, PAMM/MAM module, and admin manager API integration.',
  },
  {
    icon: '💧',
    title: 'Liquidity Aggregation — 10+ LPs',
    desc: 'Aggregate best-bid / best-ask from 10+ tier-1 liquidity providers simultaneously. Smart order routing, fill ratio optimization, and LP performance analytics in one consolidated feed.',
  },
  {
    icon: '⚡',
    title: 'STP + ECN + Market Maker Routing',
    desc: 'Configure per-symbol or per-client routing rules. Run STP for institutional clients, A-book/B-book hybrid for retail, or full ECN model with interbank matching — all from one back-office.',
  },
  {
    icon: '📊',
    title: 'Real-Time Risk Management',
    desc: 'Live P&L exposure monitoring, margin call automation, hedging controls, VaR calculations, and aggregate position netting. Stop-out triggers, partial close rules, and risk desk alerts.',
  },
  {
    icon: '👥',
    title: 'IB & Affiliate Management',
    desc: 'Multi-tier introducing broker network with automated commission calculation, rebate structures, performance-based bonuses, real-time reports, and a self-service IB portal.',
  },
  {
    icon: '📋',
    title: 'Back-Office CRM & Compliance',
    desc: 'Unified CRM for client lifecycle management — onboarding, document collection, account approvals, deposit/withdrawal workflows, transaction monitoring, and regulatory reporting.',
  },
];

const STEPS = [
  { n: '01', title: 'Broker Setup & Licensing', desc: 'We configure your white-label broker instance, register MT4/MT5 server licenses, set up your brand identity, and provision your hosting environment.' },
  { n: '02', title: 'Liquidity & Routing Config', desc: 'Connect to your chosen liquidity providers, configure instrument symbology, set spreads and markup, and define your STP/ECN/MM routing logic.' },
  { n: '03', title: 'CRM, KYC & Compliance', desc: 'Integrate your KYC/AML provider, configure client tier logic, set up IB tree structure, and configure automated compliance reporting for your jurisdiction.' },
  { n: '04', title: 'Launch & Growth Support', desc: 'Go live with dedicated FX tech support. Ongoing LP relationship management, regulatory updates, platform upgrades, and trading infrastructure monitoring.' },
];

const SPECS = [
  { label: 'Execution Engine', value: 'C++ — FIX Protocol 4.4 native' },
  { label: 'MT Bridge', value: 'MT4 / MT5 API — manager + gateway' },
  { label: 'Risk Engine', value: 'Python — real-time P&L, VaR, margin' },
  { label: 'Back-Office', value: 'React SPA — admin, CRM, reporting' },
  { label: 'Connectivity', value: 'FIX 4.4, REST, WebSocket, FTP/SFTP' },
  { label: 'Database', value: 'PostgreSQL — tick history, trade archive' },
  { label: 'Infrastructure', value: 'Equinix LD4 / NY4 co-location ready' },
  { label: 'Compliance', value: 'CySEC, FCA, ASIC, FSCA reporting ready' },
];

const METRICS = [
  { v: '100+', l: 'Brokers Launched' },
  { v: '2000+', l: 'Instruments Available' },
  { v: '< 10ms', l: 'Order Execution' },
  { v: '10+', l: 'Liquidity Providers' },
];

export default function ForexProductPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[600px] h-[600px] bg-[#FFB800] opacity-[0.06] -left-40 -top-20" />
        <div className="orb w-[400px] h-[400px] bg-[#FFCC00] opacity-[0.04] right-0 top-1/2" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left copy */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="badge badge-blue">Platform Product</span>
                <span className="badge badge-green">White-Label</span>
              </div>
              <div className="section-label mb-4">Forex & CFD Trading Infrastructure</div>
              <h1 className="h1 text-[#F0F6FF] mb-6">
                Institutional-Grade FX Platform
                <br /><span style={{ color: '#FFB800' }}>for Brokers</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                A complete white-label Forex brokerage technology stack — MT4/MT5 bridge, liquidity aggregation,
                STP/ECN routing, risk engine, CRM, and compliance — ready to deploy under your brand.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Request a Demo <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Broker Cases</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {METRICS.map(m => (
                  <div key={m.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: '#FFB800' }}>{m.v}</p>
                    <p className="text-[11px] text-[rgba(240,246,255,0.35)] mt-1">{m.l}</p>
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
                  <span className="ml-3 text-[11px] text-[rgba(240,246,255,0.35)]">broker-admin.yourbrand.com — Risk Desk</span>
                </div>
                <div className="p-5 space-y-3">
                  {/* FX rate strip */}
                  <div className="flex gap-2 overflow-hidden">
                    {[['EUR/USD','1.08432','↑0.12%','text-green-400'],['GBP/USD','1.27140','↓0.08%','text-red-400'],['USD/JPY','149.210','↑0.21%','text-green-400'],['XAU/USD','2,341.0','↑0.54%','text-green-400']].map(([pair,price,chg,cls]) => (
                      <div key={pair} className="glass rounded-lg px-2.5 py-1.5 flex-shrink-0">
                        <p className="text-[9px] text-[rgba(240,246,255,0.35)]">{pair}</p>
                        <p className="text-[12px] font-bold text-[#F0F6FF] font-mono">{price}</p>
                        <p className={`text-[9px] font-semibold ${cls}`}>{chg}</p>
                      </div>
                    ))}
                  </div>
                  {/* Exposure + P&L panel */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2 glass rounded-xl p-3 h-36">
                      <p className="text-[10px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider mb-2">Live Exposure — Top Positions</p>
                      <div className="space-y-1.5">
                        {([['EUR/USD','Long 42.1M','text-green-400',85],['GBP/USD','Short 18.4M','text-red-400',45],['XAU/USD','Long 9.8M','text-green-400',30],['USD/JPY','Short 31.2M','text-red-400',62]] as [string,string,string,number][]).map(([sym, exp, cls, w]) => (
                          <div key={sym}>
                            <div className="flex justify-between text-[9px] mb-0.5">
                              <span className="text-[rgba(240,246,255,0.40)] font-mono">{sym}</span>
                              <span className={cls}>{exp}</span>
                            </div>
                            <div className="h-1 bg-slate-200 rounded-full">
                              <div className="h-full rounded-full" style={{ width: `${w}%`, background: w > 50 ? '#FFB80066' : '#FFB80033' }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="glass rounded-xl p-3 h-36 flex flex-col justify-between">
                      <p className="text-[10px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider">Risk Desk</p>
                      <div className="space-y-1.5">
                        <div><p className="text-[9px] text-[rgba(240,246,255,0.35)]">Net P&L</p><p className="text-[12px] font-bold text-green-400">+$48,210</p></div>
                        <div><p className="text-[9px] text-[rgba(240,246,255,0.35)]">Margin Calls</p><p className="text-[12px] font-bold text-red-400">3 Active</p></div>
                        <div><p className="text-[9px] text-[rgba(240,246,255,0.35)]">Hedge Ratio</p><p className="text-[12px] font-bold" style={{ color: '#FFB800' }}>94.2%</p></div>
                      </div>
                    </div>
                  </div>
                  {/* KPI row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[['Open Trades','24,819'],['Daily Volume','$1.4B'],['Active Clients','8,204']].map(([l,v]) => (
                      <div key={l} className="metric-card">
                        <p className="text-[10px] text-[rgba(240,246,255,0.35)]">{l}</p>
                        <p className="text-[13px] font-bold" style={{ color: '#FFB800' }}>{v}</p>
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
      <section className="section bg-[#0C1428]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Platform Capabilities</div>
            <h2 className="h2 text-[#F0F6FF] mb-4">Everything to Run a <span style={{ color: '#FFB800' }}>Regulated Broker</span></h2>
            <p className="lead">From execution infrastructure to back-office compliance — the complete FX brokerage technology stack.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => (
              <div key={f.title} className="card rounded-2xl p-6 border border-white/[0.06] hover:border-[#FFB800]/40 group">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-[16px] font-bold text-[#F0F6FF] mb-2 group-hover:text-[#FFB800] transition-colors">{f.title}</h3>
                <p className="text-[13px] text-[rgba(240,246,255,0.40)] leading-relaxed">{f.desc}</p>
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
              <h2 className="h2 text-[#F0F6FF] mb-6">Built for <span style={{ color: '#FFB800' }}>Institutional Performance</span></h2>
              <p className="lead mb-8">Sub-10ms order execution, FIX Protocol 4.4 connectivity, and Equinix co-location — the same infrastructure tier-1 prime brokers use.</p>
              <div className="space-y-2">
                {SPECS.map(s => (
                  <div key={s.label} className="flex items-start gap-4 p-4 glass rounded-xl border border-white/[0.06]">
                    <span className="text-[12px] font-bold text-[rgba(240,246,255,0.35)] uppercase tracking-wider w-32 flex-shrink-0 pt-0.5">{s.label}</span>
                    <span className="text-[13px] text-[rgba(240,246,255,0.40)]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label mb-4">Tech Stack</div>
              <h3 className="h3 text-[#F0F6FF] mb-6">The Stack Behind the Speed</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['FIX Protocol 4.4','C++','Python','React','MT4 Bridge','MT5 Bridge','PostgreSQL','Equinix LD4','Equinix NY4','Redis','Kafka','Kubernetes'].map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
              <div className="glass-lg rounded-2xl p-6 border border-white/[0.06]">
                <p className="text-[12px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider mb-4">Execution Benchmarks</p>
                <div className="space-y-4">
                  {[['Order Execution (STP)','< 10ms','p99'],['FIX Session Latency','< 2ms','co-location'],['Risk Engine Cycle','< 50ms','real-time'],['Platform Uptime','99.99%','Annual SLA']].map(([lbl, val, ref]) => (
                    <div key={lbl}>
                      <div className="flex justify-between mb-1">
                        <span className="text-[12px] text-[rgba(240,246,255,0.40)]">{lbl}</span>
                        <span className="text-[12px] font-bold" style={{ color: '#FFB800' }}>{val}</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: ref === 'Annual SLA' ? '99%' : ref === 'co-location' ? '98%' : '94%', background: 'linear-gradient(to right, #FFB800, #FFCC44)' }} />
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
      <section className="section bg-[#0C1428]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Launch Process</div>
            <h2 className="h2 text-[#F0F6FF] mb-4">From Contract to <span style={{ color: '#FFB800' }}>Live Brokerage</span></h2>
            <p className="lead">A structured delivery process used across 100+ FX and CFD broker launches across six continents.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="card rounded-2xl p-6 border border-white/[0.06] relative group hover:border-[#FFB800]/40">
                <div className="text-[48px] font-black text-[#0E1E34] group-hover:text-[#FFB800]/20 transition-colors absolute top-4 right-4 leading-none">{s.n}</div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: '#FFB80018', border: '1px solid #FFB80033' }}>
                  <span className="font-bold text-sm" style={{ color: '#FFB800' }}>{i + 1}</span>
                </div>
                <h3 className="text-[15px] font-bold text-[#F0F6FF] mb-2 group-hover:text-[#FFB800] transition-colors">{s.title}</h3>
                <p className="text-[13px] text-[rgba(240,246,255,0.40)] leading-relaxed">{s.desc}</p>
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
              <h2 className="h2 text-[#F0F6FF] mb-6">
                Middle East FX Broker
                <br /><span style={{ color: '#FFB800' }}>Reached $500M Monthly Volume</span>
              </h2>
              <p className="lead mb-8">
                A Dubai-based FX broker deployed our brokerage platform, launched under a DFSA license in 9 weeks,
                and grew to $500M monthly trading volume within 8 months — operating 1,800+ instruments
                across Forex, commodities, indices, and crypto CFDs.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Launched in 9 weeks under DFSA license',
                  '$500M monthly volume at month 8',
                  '1,800+ instruments across all asset classes',
                  'STP model with 4 tier-1 liquidity providers',
                  'IB network of 320+ introducing brokers',
                  '< 8ms average order execution latency',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#FFB80018' }}>
                      <Check size={11} style={{ color: '#FFB800' }} />
                    </div>
                    <span className="text-[14px] text-[rgba(240,246,255,0.40)]">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact#consultation" className="btn btn-primary">
                Get a Demo <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[['$500M','Monthly Volume at Month 8'],['1,800+','Instruments Across All Asset Classes'],['9 Weeks','From Contract to DFSA-Licensed Launch'],['320+','Active Introducing Brokers'],['< 8ms','Average STP Execution Latency'],['99.99%','Platform Uptime — First Year']].map(([v, l]) => (
                <div key={l} className="glass-lg rounded-2xl p-6 border border-white/[0.06] hover:border-[#FFB800]/30 transition-colors">
                  <p className="text-2xl font-black mb-1" style={{ color: '#FFB800' }}>{v}</p>
                  <p className="text-[13px] text-[rgba(240,246,255,0.40)]">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section className="section bg-[#0C1428]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Integrations</div>
            <h2 className="h2 text-[#F0F6FF] mb-4">Connects With Your <span style={{ color: '#FFB800' }}>Trading Ecosystem</span></h2>
            <p className="lead">Pre-built connectors for liquidity providers, MT4/MT5, payment processors, and compliance tools.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {['LMAX Exchange','Sucden Financial','IS Prime','Swissquote LP','B2C2','MetaTrader 4','MetaTrader 5','cTrader','TradingView','Sumsub KYC','Refinitiv FX','Bloomberg B-Pipe','SafeCharge','NUVEI Payments','Stripe','Twilio 2FA'].map(name => (
              <div key={name} className="flex items-center gap-2.5 p-3 rounded-xl glass border border-white/[0.06] hover:border-[#FFB800]/30 transition-colors">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#FFB800' }} />
                <span className="text-[13px] text-[rgba(240,246,255,0.40)]">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
