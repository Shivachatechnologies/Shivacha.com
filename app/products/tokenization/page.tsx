import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Real-World Asset Tokenization Platform | RWA Infrastructure',
  description: 'Institutional-grade RWA tokenization platform. Tokenize real estate, equity, bonds, art, and commodities. ERC-3643 compliant, Fireblocks custody, secondary marketplace, 40+ jurisdictions.',
};

const FEATURES = [
  {
    icon: '🏢',
    title: 'Multi-Asset Tokenization',
    desc: 'Tokenize any real-world asset — commercial real estate, private equity, corporate bonds, commodities, fine art, infrastructure projects, and revenue-sharing agreements — on a single compliant platform.',
  },
  {
    icon: '📜',
    title: 'ERC-3643 / ERC-1400 / ERC-20',
    desc: 'Full support for institutional token standards: ERC-3643 (T-REX) for permissioned security tokens, ERC-1400 for partitioned securities, and ERC-20 for utility and governance tokens.',
  },
  {
    icon: '🔐',
    title: 'Institutional Custody Integration',
    desc: 'Native Fireblocks and BitGo custody integration for institutional-grade asset safeguarding. MPC key management, policy engines, and SOC 2 / ISO 27001 certified custody workflows.',
  },
  {
    icon: '🛒',
    title: 'Secondary Marketplace',
    desc: 'Compliant peer-to-peer and brokered secondary market for tokenized assets. Investor accreditation checks, transfer restrictions, atomic settlement, and on-chain order book.',
  },
  {
    icon: '💰',
    title: 'Automated Distributions',
    desc: 'Smart-contract-driven dividend, interest, and profit-sharing distributions to token holders on a configurable schedule. On-chain waterfall logic, tax reporting hooks, and investor statements.',
  },
  {
    icon: '📊',
    title: 'Cap Table & Compliance Reporting',
    desc: 'Real-time on-chain cap table management with investor registry, transfer agent functions, FATCA/CRS reporting, and automated KYC/AML re-verification for secondary transfers.',
  },
];

const STEPS = [
  { n: '01', title: 'Asset Structuring & Legal', desc: 'We work with your legal counsel to structure the SPV, define token economics, map jurisdictional requirements, and prepare offering documents.' },
  { n: '02', title: 'Token Deployment & KYC', desc: 'Deploy ERC-3643 or ERC-1400 smart contracts, configure transfer restrictions, integrate KYC/AML provider, and launch investor onboarding portal.' },
  { n: '03', title: 'Capital Raise & Distribution', desc: 'Open the primary offering to accredited investors, collect subscriptions, manage escrow, complete token issuance, and initiate first distribution cycle.' },
  { n: '04', title: 'Secondary Market & Reporting', desc: 'Activate the secondary marketplace, enable peer-to-peer trading with compliance guardrails, and generate automated regulatory reports.' },
];

const SPECS = [
  { label: 'Blockchains', value: 'Ethereum, Polygon, Avalanche — multi-chain' },
  { label: 'Token Standards', value: 'ERC-3643 (T-REX), ERC-1400, ERC-20' },
  { label: 'Smart Contracts', value: 'Solidity — audited by Trail of Bits / Certik' },
  { label: 'Custody', value: 'Fireblocks API + BitGo — MPC key mgmt' },
  { label: 'Investor Portal', value: 'React SPA — SSO, document vault, cap table' },
  { label: 'KYC / AML', value: 'Sumsub / Jumio — liveness, sanctions, PEP' },
  { label: 'Reporting', value: 'FATCA / CRS / GDPR — automated generation' },
  { label: 'Infrastructure', value: 'AWS multi-region, ISO 27001, SOC 2 Type II' },
];

const METRICS = [
  { v: '$500M+', l: 'Assets Tokenized' },
  { v: '30+', l: 'Asset Types' },
  { v: '40+', l: 'Jurisdictions' },
  { v: '3 Chains', l: 'Multi-Chain Support' },
];

export default function TokenizationProductPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[600px] h-[600px] bg-[#00FF87] opacity-[0.05] -left-40 -top-20" />
        <div className="orb w-[400px] h-[400px] bg-[#00FFAA] opacity-[0.04] right-0 top-1/2" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left copy */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="badge badge-blue">Platform Product</span>
                <span className="badge badge-green">Institutional</span>
              </div>
              <div className="section-label mb-4">Real-World Asset Tokenization Platform</div>
              <h1 className="h1 text-[#F0F6FF] mb-6">
                Tokenize Any Asset —
                <br /><span style={{ color: '#00FF87' }}>Compliant, Scalable, Institutional</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                A complete institutional RWA tokenization infrastructure — smart contract issuance, investor onboarding,
                custody integration, secondary marketplace, and automated distributions — in one platform.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Request a Demo <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Tokenized Assets</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {METRICS.map(m => (
                  <div key={m.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: '#00FF87' }}>{m.v}</p>
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
                  <span className="ml-3 text-[11px] text-[rgba(240,246,255,0.35)]">portal.yourbrand.com — Asset Registry</span>
                </div>
                <div className="p-5 space-y-3">
                  {/* Asset cards strip */}
                  <div className="flex gap-2 overflow-hidden">
                    {[['Manhattan RE','$24M','Real Estate'],['PrivEQ Fund III','$8M','Private Equity'],['Green Bond 2026','$5M','Fixed Income']].map(([name, val, type]) => (
                      <div key={name} className="glass rounded-lg px-3 py-2 flex-shrink-0 min-w-[110px]">
                        <p className="text-[9px] text-[rgba(240,246,255,0.35)]">{type}</p>
                        <p className="text-[12px] font-bold text-[#F0F6FF]">{name}</p>
                        <p className="text-[11px] font-bold" style={{ color: '#00FF87' }}>{val}</p>
                      </div>
                    ))}
                  </div>
                  {/* Cap table + token supply panel */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2 glass rounded-xl p-3 h-36">
                      <p className="text-[10px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider mb-2">Token Distribution — Manhattan RE</p>
                      <div className="space-y-1.5">
                        {[['Institutional LPs','45%',45],['Family Offices','28%',28],['HNWI Retail','18%',18],['Treasury Reserve','9%',9]].map(([tier, pct, w]) => (
                          <div key={tier}>
                            <div className="flex justify-between text-[9px] mb-0.5">
                              <span className="text-[rgba(240,246,255,0.40)]">{tier}</span>
                              <span style={{ color: '#00FF87' }}>{pct}</span>
                            </div>
                            <div className="h-1 bg-slate-200 rounded-full">
                              <div className="h-full rounded-full" style={{ width: `${w}%`, background: '#00FF8744' }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="glass rounded-xl p-3 h-36 flex flex-col justify-between">
                      <p className="text-[10px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider">Token Info</p>
                      <div className="space-y-1.5">
                        <div><p className="text-[9px] text-[rgba(240,246,255,0.35)]">Standard</p><p className="text-[11px] font-bold" style={{ color: '#00FF87' }}>ERC-3643</p></div>
                        <div><p className="text-[9px] text-[rgba(240,246,255,0.35)]">Total Supply</p><p className="text-[11px] font-bold text-[#F0F6FF]">24,000,000</p></div>
                        <div><p className="text-[9px] text-[rgba(240,246,255,0.35)]">Investors</p><p className="text-[11px] font-bold text-[#F0F6FF]">412 KYC'd</p></div>
                      </div>
                    </div>
                  </div>
                  {/* KPI row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[['Total AUM','$500M+'],['Next Dist.','Jun 30'],['Compliance','All Clear']].map(([l,v]) => (
                      <div key={l} className="metric-card">
                        <p className="text-[10px] text-[rgba(240,246,255,0.35)]">{l}</p>
                        <p className="text-[13px] font-bold" style={{ color: '#00FF87' }}>{v}</p>
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
            <h2 className="h2 text-[#F0F6FF] mb-4">Everything to Tokenize, Distribute & <span style={{ color: '#00FF87' }}>Trade RWAs</span></h2>
            <p className="lead">One compliant platform. From structuring to secondary liquidity — the complete RWA lifecycle.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => (
              <div key={f.title} className="card rounded-2xl p-6 border border-white/[0.06] hover:border-[#00FF87]/30 group">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-[16px] font-bold text-[#F0F6FF] mb-2 group-hover:text-[#00FF87] transition-colors">{f.title}</h3>
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
              <h2 className="h2 text-[#F0F6FF] mb-6">Built for <span style={{ color: '#00FF87' }}>Institutional Standards</span></h2>
              <p className="lead mb-8">Every layer is engineered for the compliance, security, and auditability demands of regulated securities issuance and custody.</p>
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
              <h3 className="h3 text-[#F0F6FF] mb-6">The Stack Behind the Tokens</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Solidity','ERC-3643 (T-REX)','Ethereum','Polygon','Avalanche','Fireblocks','BitGo','React','Sumsub','ISO 27001','SOC 2 Type II','AWS'].map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
              <div className="glass-lg rounded-2xl p-6 border border-white/[0.06]">
                <p className="text-[12px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider mb-4">Compliance Coverage</p>
                <div className="space-y-3">
                  {[['Jurisdictions Supported','40+'],['Regulatory Frameworks','FATCA / CRS / MiFID II / Reg D'],['Smart Contract Audits','Trail of Bits + Certik'],['Data Residency','EU / US / APAC regions']].map(([lbl, val]) => (
                    <div key={lbl} className="flex justify-between items-start gap-4">
                      <span className="text-[12px] text-[rgba(240,246,255,0.40)]">{lbl}</span>
                      <span className="text-[12px] font-bold text-right" style={{ color: '#00FF87' }}>{val}</span>
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
            <div className="section-label justify-center">Tokenization Process</div>
            <h2 className="h2 text-[#F0F6FF] mb-4">From Asset to <span style={{ color: '#00FF87' }}>On-Chain Security</span></h2>
            <p className="lead">A four-phase process that takes any real-world asset from legal structuring to live secondary market trading.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="card rounded-2xl p-6 border border-white/[0.06] relative group hover:border-[#00FF87]/30">
                <div className="text-[48px] font-black text-[#0E1E34] group-hover:text-[#00FF87]/15 transition-colors absolute top-4 right-4 leading-none">{s.n}</div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: '#00FF8718', border: '1px solid #00FF8730' }}>
                  <span className="font-bold text-sm" style={{ color: '#00FF87' }}>{i + 1}</span>
                </div>
                <h3 className="text-[15px] font-bold text-[#F0F6FF] mb-2 group-hover:text-[#00FF87] transition-colors">{s.title}</h3>
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
                UAE Real Estate Fund
                <br /><span style={{ color: '#00FF87' }}>Tokenized $120M Portfolio in 10 Weeks</span>
              </h2>
              <p className="lead mb-8">
                A Dubai-based real estate fund used our tokenization platform to fractionally tokenize a
                $120M commercial property portfolio across four assets. The offering reached full subscription in
                6 weeks with 850+ accredited investors across 22 countries — with automated quarterly distributions
                running since day one.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  '$120M portfolio tokenized across four properties',
                  'Full subscription reached in 6 weeks',
                  '850+ accredited investors across 22 countries',
                  'Quarterly distributions automated via smart contracts',
                  'Secondary market active with 340+ trades to date',
                  'Compliant in UAE, EU, and US regulatory frameworks',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#00FF8718' }}>
                      <Check size={11} style={{ color: '#00FF87' }} />
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
              {[['$120M','Portfolio Tokenized in 10 Weeks'],['850+','Accredited Investors — 22 Countries'],['6 Wks','Time to Full Subscription'],['340+','Secondary Market Trades'],['4','Asset Types in Single Platform'],['100%','Automated Quarterly Distributions']].map(([v, l]) => (
                <div key={l} className="glass-lg rounded-2xl p-6 border border-white/[0.06] hover:border-[#00FF87]/25 transition-colors">
                  <p className="text-2xl font-black mb-1" style={{ color: '#00FF87' }}>{v}</p>
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
            <h2 className="h2 text-[#F0F6FF] mb-4">Connects With Your <span style={{ color: '#00FF87' }}>Capital Markets Stack</span></h2>
            <p className="lead">Pre-built integrations with custody providers, KYC platforms, blockchains, and compliance data vendors.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {['Fireblocks Custody','BitGo Custody','Ethereum Mainnet','Polygon zkEVM','Avalanche C-Chain','Sumsub KYC','Jumio Verify','Refinitiv KYC','ComplyAdvantage','Chainalysis','Refinitiv FATCA','OECD CRS Format','DocuSign eSign','IPFS Document Store','The Graph Protocol','Chainlink Oracles'].map(name => (
              <div key={name} className="flex items-center gap-2.5 p-3 rounded-xl glass border border-white/[0.06] hover:border-[#00FF87]/25 transition-colors">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#00FF87' }} />
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
