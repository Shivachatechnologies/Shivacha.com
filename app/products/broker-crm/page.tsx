import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Forex & Crypto Broker CRM Platform | Complete Client Lifecycle Management',
  description: 'White-label broker CRM with lead management, KYC/AML, client portal, IB/affiliate automation, MT4/MT5 integration, and EMIR/MiFID II compliance. 100+ brokers, 500K+ clients managed.',
};

const FEATURES = [
  {
    icon: '🎯',
    title: 'Lead Management & Sales Pipeline',
    desc: 'Full CRM sales pipeline from lead capture to funded account. Lead scoring, assignment rules, activity tracking, call/email logging, and sales team performance dashboards.',
  },
  {
    icon: '🪪',
    title: 'KYC/AML Document Verification',
    desc: 'Built-in document upload, OCR extraction, liveness checks, and AML screening. Integrates with Sumsub, Jumio, Onfido, and Chainalysis — or bring your own KYC provider.',
  },
  {
    icon: '🖥️',
    title: 'Client Portal (Deposits, Withdrawals, History)',
    desc: 'Fully branded client portal for account management, live trading history, deposit/withdrawal requests, document upload, and real-time account balance — all under your brand.',
  },
  {
    icon: '🤝',
    title: 'IB/Affiliate Portal with Commission Automation',
    desc: 'Dedicated introducing broker portal with real-time client tracking, tiered commission structures, automated payouts, performance reports, and multi-level affiliate trees.',
  },
  {
    icon: '📧',
    title: 'Email & SMS Automation Workflows',
    desc: 'Visual workflow builder for onboarding sequences, deposit nudges, reactivation campaigns, birthday triggers, and compliance reminders — with segmentation and A/B testing.',
  },
  {
    icon: '🏷️',
    title: 'Multi-Brand Support',
    desc: 'Run multiple broker brands from a single CRM instance. Separate client pools, brand identities, commission plans, and compliance rules per brand — with a unified admin dashboard.',
  },
  {
    icon: '📑',
    title: 'Compliance Reporting (EMIR / MiFID II)',
    desc: 'Automated trade reporting, transaction reporting, and best execution documentation. Configurable for EMIR, MiFID II, CFTC, and regional regulatory frameworks.',
  },
  {
    icon: '🔌',
    title: 'MT4 / MT5 / cTrader Integration',
    desc: 'Native manager API integration with MetaTrader 4, MetaTrader 5, and cTrader. Real-time account sync, trade mirroring, balance transfers, and group management from the CRM.',
  },
  {
    icon: '🎫',
    title: 'Ticketing & Support System',
    desc: 'Built-in helpdesk with ticket routing, SLA tracking, live chat widget, and knowledge base. Full client interaction history attached to every CRM profile.',
  },
];

const SPECS = [
  { label: 'Trading Platforms', value: 'MT4, MT5, cTrader, Match-Trader — native manager API' },
  { label: 'KYC Providers', value: 'Sumsub, Jumio, Onfido, Shufti Pro — pluggable' },
  { label: 'Payment Methods', value: 'Cards, wire, crypto, e-wallets, local methods — 50+ PSPs' },
  { label: 'Compliance', value: 'EMIR, MiFID II, CFTC, FCA, CySEC, ASIC reporting modules' },
  { label: 'Deployment', value: 'SaaS multi-tenant or dedicated self-hosted on your cloud' },
  { label: 'Branding', value: 'Full white-label — domain, logo, colours, email templates' },
  { label: 'API', value: 'REST + Webhooks — integrate ERP, BI, and third-party tools' },
  { label: 'Scalability', value: 'Kubernetes, auto-scale to 1M+ client accounts per instance' },
];

const METRICS = [
  { v: '100+', l: 'Brokers Using It' },
  { v: '500K+', l: 'Clients Managed' },
  { v: '40+', l: 'Country Compliance' },
  { v: 'MT4/MT5', l: 'Native Integration' },
];

const COLOR = '#0099E6';

export default function BrokerCRMProductPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[600px] h-[600px] opacity-[0.07] -left-40 -top-20" style={{ background: COLOR }} />
        <div className="orb w-[350px] h-[350px] opacity-[0.04] right-0 bottom-0" style={{ background: COLOR }} />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="badge badge-blue">Platform Product</span>
                <span className="badge" style={{ background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}40` }}>Broker CRM</span>
              </div>
              <div className="section-label mb-4">Forex / Crypto Broker CRM</div>
              <h1 className="h1 text-slate-900 mb-6">
                Complete Client Lifecycle
                <br /><span style={{ color: COLOR }}>Management for Brokers</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                The all-in-one CRM platform for Forex and crypto brokers — lead management,
                KYC/AML, client portal, IB/affiliate automation, MT4/MT5 integration,
                and full regulatory compliance reporting.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Request a Demo <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Broker Clients</Link>
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
                  <span className="ml-3 text-[11px] text-slate-400">crm.yourbrokerage.com — Admin</span>
                </div>
                <div className="p-5 space-y-3">
                  {/* Pipeline summary */}
                  <div className="grid grid-cols-4 gap-2">
                    {[['Leads','1,284'],['KYC Pending','87'],['Funded','4,912'],['Active Traders','2,108']].map(([l, v]) => (
                      <div key={l} className="metric-card">
                        <p className="text-[10px] text-slate-400">{l}</p>
                        <p className="text-[13px] font-bold" style={{ color: COLOR }}>{v}</p>
                      </div>
                    ))}
                  </div>
                  {/* Client rows */}
                  <div className="glass rounded-xl p-3">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-2">Recent Clients</p>
                    {[
                      ['James W.', 'KYC Approved', 'MT5 Live', '+$5,000'],
                      ['Priya S.', 'Pending KYC', 'Demo', '—'],
                      ['Marco F.', 'KYC Approved', 'MT4 Live', '+$12,400'],
                    ].map(([name, kyc, platform, dep]) => (
                      <div key={String(name)} className="flex items-center justify-between py-1.5 border-b border-slate-200 last:border-0">
                        <span className="text-[11px] font-semibold text-slate-900 w-24">{name}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${kyc === 'KYC Approved' ? 'bg-green-400/10 text-green-400' : 'bg-yellow-400/10 text-yellow-400'}`}>{kyc}</span>
                        <span className="text-[10px] text-slate-400">{platform}</span>
                        <span className="text-[11px] font-bold text-[#33B5E5]">{dep}</span>
                      </div>
                    ))}
                  </div>
                  {/* IB commission strip */}
                  <div className="glass rounded-xl p-3">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">IB Commissions This Month</p>
                    <p className="text-[18px] font-black" style={{ color: COLOR }}>$48,240</p>
                    <p className="text-[10px] text-slate-400">across 38 active IBs</p>
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
            <h2 className="h2 text-slate-900 mb-4">Everything a Modern <span style={{ color: COLOR }}>Broker Needs</span></h2>
            <p className="lead">One platform covering the full client lifecycle — from first lead to long-term retention and compliance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => (
              <div key={f.title} className="card rounded-2xl p-6 border border-slate-200 hover:border-[#0099E6]/30 transition-colors group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2 group-hover:text-[#33B5E5] transition-colors">{f.title}</h3>
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
              <h2 className="h2 text-slate-900 mb-6">White-Label Ready <span style={{ color: COLOR }}>Out of the Box</span></h2>
              <p className="lead mb-8">Deployed under your domain, your brand, your servers — in as little as 4 weeks from contract signing.</p>
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
              <div className="section-label mb-4">Regulatory Coverage</div>
              <h3 className="h3 text-slate-900 mb-6">Compliance Across 40+ Jurisdictions</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['FCA (UK)','CySEC (EU)','ASIC (AU)','DFSA (UAE)','FSA (SVG)','FSC (BVI)','EMIR Reporting','MiFID II','CFTC (US)','MAS (SG)','ADGM (UAE)'].map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
              <div className="glass-lg rounded-2xl p-6 border border-slate-200">
                <p className="text-[12px] text-slate-400 uppercase tracking-wider mb-4">Supported Payment Methods</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    ['Credit / Debit Cards','Visa, Mastercard, Amex'],
                    ['Crypto Deposits','BTC, ETH, USDT, USDC, 50+'],
                    ['Wire Transfer','SWIFT, SEPA, CHAPS'],
                    ['E-Wallets','Skrill, Neteller, PayPal'],
                    ['Local Methods','PIX, UPI, FPS, iDEAL'],
                    ['Stablecoins','USDT, USDC, BUSD, DAI'],
                  ].map(([method, detail]) => (
                    <div key={String(method)} className="flex items-start gap-2 p-2 rounded-lg bg-white">
                      <CheckCircle size={12} style={{ color: COLOR }} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[12px] font-semibold text-slate-900">{method}</p>
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
            <h2 className="h2 text-slate-900 mb-4">Built for Every <span style={{ color: COLOR }}>Type of Broker</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📈', title: 'Forex Brokers', desc: 'Full MT4/MT5 integration, PAMM/MAM support, IB tree management, and MiFID II reporting for regulated Forex brokers worldwide.' },
              { icon: '₿', title: 'Crypto Brokers & Exchanges', desc: 'Crypto deposit/withdrawal handling, AML screening on all transactions, and compliance-grade client documentation for digital asset brokers.' },
              { icon: '🔀', title: 'Multi-Asset Brokers', desc: 'Run Forex, crypto, stocks, and commodities under one CRM. Separate compliance workflows, payment rails, and trading platforms per asset class.' },
            ].map(u => (
              <div key={u.title} className="card rounded-2xl p-7 border border-slate-200 hover:border-[#0099E6]/30 transition-colors">
                <div className="text-4xl mb-4">{u.icon}</div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-3">{u.title}</h3>
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
