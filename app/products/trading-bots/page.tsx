import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Algorithmic Trading Bot Ecosystem | Build, Test & Deploy Strategies at Scale',
  description: 'Visual strategy builder, 10+ year backtesting engine, paper trading, live deployment with risk controls across 30+ CEX and DEX. $500M+ monthly bot volume. Enterprise-grade algo trading infrastructure.',
};

const FEATURES = [
  {
    icon: '🧩',
    title: 'Visual Strategy Builder',
    desc: 'Drag-and-drop no-code strategy editor with a full-code IDE escape hatch. Build, combine, and chain indicators, entry/exit rules, and conditional logic — no coding required, with Python/JS override for quants.',
  },
  {
    icon: '📜',
    title: 'Historical Backtesting Engine',
    desc: 'Replay 10+ years of tick-by-tick OHLCV data across 30+ exchanges. Measure PnL, Sharpe ratio, max drawdown, and win rate with transaction cost modelling for realistic results.',
  },
  {
    icon: '🖥️',
    title: 'Paper Trading (Simulated Live)',
    desc: 'Forward-test your strategy against real market data with simulated fills — zero capital at risk. Validate live conditions, order latency, and execution logic before deploying real funds.',
  },
  {
    icon: '🛡️',
    title: 'Live Deployment with Risk Controls',
    desc: 'Deploy to live markets with configurable stop-loss, take-profit, position sizing (fixed, percent-of-equity, Kelly), max drawdown circuit breakers, and per-bot daily loss limits.',
  },
  {
    icon: '🌐',
    title: 'Multi-Exchange Support (30+ CEX + DEX)',
    desc: 'Connect to Binance, Coinbase, OKX, Bybit, Kraken, and 25+ other exchanges via unified API. On-chain DEX execution on Uniswap, dYdX, GMX, Hyperliquid, and more.',
  },
  {
    icon: '📊',
    title: 'Performance Analytics Dashboard',
    desc: 'Real-time PnL tracking, equity curves, drawdown charts, trade log with execution details, and exportable reports. Compare strategy performance side-by-side across markets.',
  },
  {
    icon: '🏪',
    title: 'Strategy Marketplace',
    desc: 'Publish, license, or subscribe to community-built strategies. Monetise your edge or fast-track deployment with proven templates — with transparent, verified performance track records.',
  },
  {
    icon: '⚙️',
    title: 'White-Label & Enterprise API',
    desc: 'Full white-label offering for brokers and fintech platforms. REST and WebSocket APIs for programmatic strategy management, portfolio monitoring, and custom integrations.',
  },
];

const SPECS = [
  { label: 'Strategy Engine', value: 'Python + Rust hot-path execution, sub-10ms order round-trip' },
  { label: 'Data Coverage', value: '10+ years OHLCV, Level 2 order book, and tick data' },
  { label: 'Exchange API', value: 'CCXT-based unified adapter + proprietary FIX protocol connectors' },
  { label: 'Risk Engine', value: 'Real-time portfolio margining, circuit breakers, exposure limits' },
  { label: 'Infrastructure', value: 'Kubernetes on AWS/GCP, dedicated low-latency VPS co-location options' },
  { label: 'Security', value: 'API key vault (HSM), 2FA, IP whitelisting, read-only key enforcement' },
  { label: 'White-Label', value: 'Custom domain, branding, user management, and billing integration' },
  { label: 'Compliance', value: 'Full audit logs, role-based access control, SOC2-aligned controls' },
];

const METRICS = [
  { v: '50+', l: 'Pre-Built Strategies' },
  { v: '30+', l: 'Exchanges Supported' },
  { v: '$500M+', l: 'Monthly Bot Volume' },
  { v: '98.5%', l: 'Backtesting Accuracy' },
];

const COLOR = '#EF4444';

export default function TradingBotsProductPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[600px] h-[600px] opacity-[0.07] -right-40 top-0" style={{ background: COLOR }} />
        <div className="orb w-[350px] h-[350px] opacity-[0.04] left-0 bottom-0" style={{ background: COLOR }} />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="badge badge-blue">Platform Product</span>
                <span className="badge" style={{ background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}40` }}>Algo Trading</span>
              </div>
              <div className="section-label mb-4">Algorithmic Trading Infrastructure</div>
              <h1 className="h1 text-[#F0F6FF] mb-6">
                Build, Test & Deploy
                <br /><span style={{ color: COLOR }}>Trading Strategies at Scale</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                A complete algorithmic trading bot ecosystem — visual strategy builder,
                10+ year backtesting engine, paper trading, and live deployment with
                institutional-grade risk controls across 30+ CEX and DEX venues.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Request a Demo <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Live Deployments</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {METRICS.map(m => (
                  <div key={m.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: COLOR }}>{m.v}</p>
                    <p className="text-[11px] text-[rgba(240,246,255,0.35)] mt-1">{m.l}</p>
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
                  <span className="ml-3 text-[11px] text-[rgba(240,246,255,0.35)]">trading-bots.platform — Strategy Dashboard</span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      ['Total P&L', '+$124,540', 'text-green-400'],
                      ['Sharpe Ratio', '2.34', 'text-[#F0F6FF]'],
                      ['Max Drawdown', '-4.2%', 'text-red-400'],
                      ['Win Rate', '67.8%', 'text-[#F0F6FF]'],
                    ].map(([label, value, cls]) => (
                      <div key={String(label)} className="p-3 rounded-xl bg-[#0C1428] border border-white/[0.06]">
                        <p className="text-[10px] text-[rgba(240,246,255,0.35)] uppercase mb-1">{label}</p>
                        <p className={`text-[15px] font-bold ${cls}`}>{value}</p>
                      </div>
                    ))}
                  </div>
                  {/* Equity curve mock */}
                  <div className="glass rounded-xl p-3">
                    <p className="text-[10px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider mb-2">30-Day Equity Curve</p>
                    <div className="flex items-end gap-0.5 h-14">
                      {[30,35,32,40,38,45,43,55,52,60,58,70,67,75,80,78,88,85,92,100].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i > 12 ? `${COLOR}CC` : `${COLOR}44` }} />
                      ))}
                    </div>
                    <p className="text-[10px] font-bold mt-1" style={{ color: COLOR }}>+34.2% Total Return</p>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      ['BTC Momentum Bot', 'running', '+$12,340'],
                      ['ETH Grid Trader', 'running', '+$8,920'],
                      ['SOL Mean Reversion', 'paused', '+$3,100'],
                    ].map(([name, status, pnl]) => (
                      <div key={String(name)} className="flex items-center gap-3 p-2.5 rounded-lg bg-[#0C1428] border border-white/[0.06]">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${status === 'running' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'}`} />
                        <span className="text-[11px] text-[rgba(240,246,255,0.40)] flex-1">{name}</span>
                        <span className="text-[11px] font-semibold text-green-400">{pnl}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 rounded-xl border flex items-center gap-3" style={{ borderColor: `${COLOR}44`, background: `${COLOR}11` }}>
                    <CheckCircle size={13} style={{ color: COLOR }} />
                    <span className="text-[11px]" style={{ color: '#FCA5A5' }}>All bots protected by 3-layer risk controls</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section bg-[#0C1428]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Platform Capabilities</div>
            <h2 className="h2 text-[#F0F6FF] mb-4">Everything to Run <span style={{ color: COLOR }}>Algorithmic Trading</span></h2>
            <p className="lead">From idea to live strategy — one platform for the entire algo trading lifecycle.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map(f => (
              <div key={f.title} className="card rounded-2xl p-6 border border-white/[0.06] hover:border-[#EF4444]/30 transition-colors group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-[15px] font-bold text-[#F0F6FF] mb-2 group-hover:text-[#FCA5A5] transition-colors">{f.title}</h3>
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
              <h2 className="h2 text-[#F0F6FF] mb-6">Built for <span style={{ color: COLOR }}>Institutional Speed</span></h2>
              <p className="lead mb-8">Sub-10ms order execution, multi-exchange failover, and a risk engine that never sleeps.</p>
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
              <div className="section-label mb-4">Supported Exchanges</div>
              <h3 className="h3 text-[#F0F6FF] mb-6">30+ Venues, One Unified API</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Binance','Coinbase','OKX','Bybit','Kraken','KuCoin','Bitget','Huobi','Gate.io','MEXC','dYdX','GMX','Uniswap V3','PancakeSwap','Hyperliquid','Vertex'].map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
              <div className="glass-lg rounded-2xl p-6 border border-white/[0.06]">
                <p className="text-[12px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider mb-4">Built-In Risk Controls</p>
                <div className="space-y-2">
                  {[
                    'Per-trade stop-loss & take-profit',
                    'Max daily drawdown limits',
                    'Position size caps (% of portfolio)',
                    'Volatility-based position scaling',
                    'Correlated asset exposure alerts',
                    'Emergency kill-switch on all active bots',
                  ].map(rc => (
                    <div key={rc} className="flex items-center gap-3">
                      <Check size={13} style={{ color: COLOR }} className="flex-shrink-0" />
                      <span className="text-[13px] text-[rgba(240,246,255,0.40)]">{rc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO USES IT ── */}
      <section className="section bg-[#0C1428]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Who Uses It</div>
            <h2 className="h2 text-[#F0F6FF] mb-4">Built for <span style={{ color: COLOR }}>Every Trading Profile</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '👤', title: 'Retail Traders', desc: 'Automate your manual strategy. Trade 24/7 without watching screens. Start with 50+ pre-built templates and customise to your style.' },
              { icon: '🏢', title: 'Prop Trading Firms', desc: 'Deploy multiple strategy instances across desks. Centralised risk dashboard, drawdown controls, and P&L attribution per strategy and trader.' },
              { icon: '🏦', title: 'Brokers & Exchanges', desc: 'White-label the full platform under your brand. Offer algo trading as a value-added service — fully managed SaaS or self-hosted.' },
            ].map(u => (
              <div key={u.title} className="card rounded-2xl p-7 border border-white/[0.06] hover:border-[#EF4444]/30 transition-colors">
                <div className="text-4xl mb-4">{u.icon}</div>
                <h3 className="text-[17px] font-bold text-[#F0F6FF] mb-3">{u.title}</h3>
                <p className="text-[13px] text-[rgba(240,246,255,0.40)] leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
