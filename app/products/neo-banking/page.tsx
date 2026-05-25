import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Neo Banking Platform Software | White-Label Digital Bank',
  description: 'Full-stack white-label neo banking platform. Virtual IBANs in 40+ countries, SWIFT/SEPA/ACH, 180+ currencies, PSD2 Open Banking, KYC/AML built-in, Visa/Mastercard card issuance.',
};

const FEATURES = [
  {
    icon: '🏦',
    title: 'Virtual IBANs — 40+ Countries',
    desc: 'Instantly issue unique IBANs to every customer across 40+ jurisdictions. Receive local payments, SEPA transfers, and SWIFT wires directly into individual virtual accounts with full segregation.',
  },
  {
    icon: '🌐',
    title: 'SWIFT + SEPA + ACH Integration',
    desc: 'Native connectivity to all major payment rails. Send and receive SWIFT gpi, SEPA Credit Transfer, SEPA Instant, ACH debits, and Faster Payments with real-time status tracking.',
  },
  {
    icon: '💱',
    title: '180+ Currency Multi-Wallet',
    desc: 'Hold, convert, and send in 180+ fiat currencies with mid-market FX rates. Multi-currency wallets with instant conversion, rate locking, and forward contracts for enterprise clients.',
  },
  {
    icon: '🔓',
    title: 'PSD2 / Open Banking APIs',
    desc: 'Fully PSD2-compliant account information and payment initiation APIs. Expose AIS and PIS endpoints for third-party providers with strong customer authentication (SCA) built in.',
  },
  {
    icon: '💳',
    title: 'Card Issuance — Visa & Mastercard',
    desc: 'Issue white-label Visa and Mastercard debit and prepaid cards (virtual and physical) with real-time spend controls, dynamic CVV, Apple Pay / Google Pay, and 3DS support.',
  },
  {
    icon: '🛡️',
    title: 'KYC / AML — Compliance Built-In',
    desc: 'Integrated identity verification (document + biometric), sanctions screening, PEP checks, transaction monitoring with AML rules engine, and SAR filing workflow — fully white-labeled.',
  },
];

const STEPS = [
  { n: '01', title: 'License & Regulatory Setup', desc: 'We configure your white-label instance, register your BIN sponsorship or e-money license, and provision your banking infrastructure environment.' },
  { n: '02', title: 'Core Banking Configuration', desc: 'Connect to your core banking system (Temenos, Oracle FLEXCUBE, Finacle, or our built-in core), configure chart of accounts, products, and fee schedules.' },
  { n: '03', title: 'KYC / Compliance Onboarding', desc: 'Integrate your preferred KYC vendor or use our built-in Sumsub/Jumio connectors. Configure AML rule sets, risk scoring, and alert workflows.' },
  { n: '04', title: 'Launch & Scale', desc: 'Go live with a dedicated fintech delivery team. Ongoing compliance updates, regulatory change management, and feature roadmap included.' },
];

const SPECS = [
  { label: 'Core Banking', value: 'Microservices — ISO 20022 native messaging' },
  { label: 'Messaging', value: 'ISO 20022 / MT103 / MT202 / PACS.008' },
  { label: 'Auth', value: 'OAuth 2.0 + PKCE, FIDO2 / WebAuthn SCA' },
  { label: 'Mobile SDK', value: 'React Native — iOS & Android, biometrics' },
  { label: 'Database', value: 'PostgreSQL 16 + Redis for session/cache' },
  { label: 'Infrastructure', value: 'Kubernetes, multi-region, 99.99% SLA' },
  { label: 'Compliance', value: 'FCA, FDIC, PSD2, GDPR, AML5 framework' },
  { label: 'Card Processing', value: 'Visa DPS / Mastercard MDES — 3DS2' },
];

const METRICS = [
  { v: '30+', l: 'Neobanks Launched' },
  { v: '2M+', l: 'Accounts Served' },
  { v: '$5B+', l: 'Transactions Processed' },
  { v: '40+', l: 'Countries Covered' },
];

export default function NeoBankingProductPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[600px] h-[600px] bg-[#6644FF] opacity-[0.07] -left-40 -top-20" />
        <div className="orb w-[400px] h-[400px] bg-[#8B66FF] opacity-[0.05] right-0 top-1/2" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left copy */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="badge badge-blue">Platform Product</span>
                <span className="badge badge-green">White-Label</span>
              </div>
              <div className="section-label mb-4">Neo Banking Platform OS</div>
              <h1 className="h1 text-slate-900 mb-6">
                Full-Stack Digital Banking
                <br /><span style={{ color: '#8B66FF' }}>Infrastructure</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                A complete white-label neo banking operating system — virtual IBANs, payment rails,
                card issuance, KYC/AML, and open banking APIs — ready to deploy under your brand.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Request a Demo <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Live Neobanks</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {METRICS.map(m => (
                  <div key={m.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: '#8B66FF' }}>{m.v}</p>
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
                  <span className="ml-3 text-[11px] text-slate-400">banking.yourbrand.com — Customer Portal</span>
                </div>
                <div className="p-5 space-y-3">
                  {/* Account summary strip */}
                  <div className="flex gap-3 overflow-hidden">
                    {[['EUR Account','€ 48,230.00','IBAN: DE89 3704'],['USD Account','$ 12,540.00','IBAN: US44 0000'],['GBP Account','£ 6,190.00','IBAN: GB29 NWBK']].map(([label, bal, iban]) => (
                      <div key={label} className="glass rounded-lg px-3 py-2 flex-shrink-0 min-w-[120px]">
                        <p className="text-[9px] text-slate-400 uppercase tracking-wide">{label}</p>
                        <p className="text-[13px] font-bold text-slate-900">{bal}</p>
                        <p className="text-[9px] text-[#6644FF] font-mono">{iban}</p>
                      </div>
                    ))}
                  </div>
                  {/* Transaction feed + card */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2 glass rounded-xl p-3 h-36 flex flex-col gap-1 overflow-hidden">
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Recent Transactions</p>
                      {[['SEPA Inbound','+ €12,000','14:32'],['Card Purchase','- €89.50','13:15'],['SWIFT Wire Out','- $5,000','09:00'],['FX Conversion','€ → $','08:40'],['Card Refund','+ €45.00','Yesterday']].map(([desc, amt, time]) => (
                        <div key={desc+time} className="flex justify-between items-center text-[9px]">
                          <span className="text-slate-500 truncate w-28">{desc}</span>
                          <span className={`font-semibold ${amt.startsWith('+') ? 'text-green-400' : 'text-slate-500'}`}>{amt}</span>
                          <span className="text-slate-400">{time}</span>
                        </div>
                      ))}
                    </div>
                    <div className="glass rounded-xl p-3 h-36 flex flex-col justify-between">
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider">Virtual Card</p>
                      <div className="rounded-lg p-2" style={{ background: 'linear-gradient(135deg, #6644FF44, #33B5E522)' }}>
                        <p className="text-[9px] text-[#6644FF] font-mono">•••• •••• •••• 4291</p>
                        <p className="text-[9px] text-slate-500 mt-1">VISA DEBIT</p>
                        <p className="text-[9px] text-slate-400">Exp 05/28</p>
                      </div>
                      <p className="text-[9px] text-green-400 font-semibold">● Active</p>
                    </div>
                  </div>
                  {/* KPI row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[['Active Accounts','94,812'],['Monthly Volume','$420M'],['KYC Pass Rate','98.2%']].map(([l,v]) => (
                      <div key={l} className="metric-card">
                        <p className="text-[10px] text-slate-400">{l}</p>
                        <p className="text-[13px] font-bold" style={{ color: '#8B66FF' }}>{v}</p>
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
            <h2 className="h2 text-slate-900 mb-4">Everything to Run a <span style={{ color: '#8B66FF' }}>Digital Bank</span></h2>
            <p className="lead">One operating system. Every feature a compliant digital bank needs — from IBANs to card issuance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => (
              <div key={f.title} className="card rounded-2xl p-6 border border-slate-200 hover:border-[#6644FF]/40 group">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2 group-hover:text-[#8B66FF] transition-colors">{f.title}</h3>
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
              <h2 className="h2 text-slate-900 mb-6">Built for <span style={{ color: '#8B66FF' }}>Regulatory Scale</span></h2>
              <p className="lead mb-8">Every component is engineered to meet the strictest banking regulations while delivering consumer-grade UX at millions-of-accounts scale.</p>
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
              <h3 className="h3 text-slate-900 mb-6">The Stack Behind the Bank</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['ISO 20022','OAuth2 / PKCE','FIDO2','React Native','PostgreSQL','Redis','Kubernetes','SWIFT gpi','SEPA Instant','ACH','Visa DPS','Mastercard MDES'].map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
              <div className="glass-lg rounded-2xl p-6 border border-slate-200">
                <p className="text-[12px] text-slate-400 uppercase tracking-wider mb-4">Platform Performance</p>
                <div className="space-y-4">
                  {[['Payment Processing Time','< 2 sec','SEPA Instant'],['API Response (REST)','< 50ms','p99'],['Card Auth Latency','< 300ms','Global'],['Platform Uptime','99.99%','Annual SLA']].map(([lbl, val, ref]) => (
                    <div key={lbl}>
                      <div className="flex justify-between mb-1">
                        <span className="text-[12px] text-slate-500">{lbl}</span>
                        <span className="text-[12px] font-bold" style={{ color: '#8B66FF' }}>{val}</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: ref === 'Annual SLA' ? '99%' : ref === 'p99' ? '97%' : '93%', background: 'linear-gradient(to right, #6644FF, #8B66FF)' }} />
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
            <h2 className="h2 text-slate-900 mb-4">From License to <span style={{ color: '#8B66FF' }}>Live Neobank</span></h2>
            <p className="lead">A proven delivery framework used across 30+ neobank and e-money institution launches worldwide.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="card rounded-2xl p-6 border border-slate-200 relative group hover:border-[#6644FF]/40">
                <div className="text-[48px] font-black text-[#0E1E34] group-hover:text-[#6644FF]/20 transition-colors absolute top-4 right-4 leading-none">{s.n}</div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: '#6644FF18', border: '1px solid #6644FF33' }}>
                  <span className="font-bold text-sm" style={{ color: '#8B66FF' }}>{i + 1}</span>
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2 group-hover:text-[#8B66FF] transition-colors">{s.title}</h3>
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
                European Fintech Startup
                <br /><span style={{ color: '#8B66FF' }}>Onboarded 500K Users in 90 Days</span>
              </h2>
              <p className="lead mb-8">
                A UK-based e-money institution licensed our Neo Banking Platform OS, launched in 11 weeks,
                and onboarded 500,000 verified accounts in their first 90 days — processing over $1.2B
                in transactions with a 99.7% KYC pass rate.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Live in 11 weeks from contract to production',
                  '500,000 accounts onboarded in first 90 days',
                  '$1.2B in transactions — zero fraud losses',
                  'FCA e-money license approved in 8 weeks',
                  '99.7% automated KYC pass rate',
                  'Visa card program live from day one',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#6644FF18' }}>
                      <Check size={11} style={{ color: '#8B66FF' }} />
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
              {[['500K','Accounts — First 90 Days'],['$1.2B','Volume — Launch Quarter'],['11 Wks','Contract to Production'],['99.7%','Automated KYC Pass Rate'],['99.99%','Uptime — First Year'],['Zero','Fraud Loss Events']].map(([v, l]) => (
                <div key={l} className="glass-lg rounded-2xl p-6 border border-slate-200 hover:border-[#6644FF]/30 transition-colors">
                  <p className="text-2xl font-black mb-1" style={{ color: '#8B66FF' }}>{v}</p>
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
            <h2 className="h2 text-slate-900 mb-4">Connects With Your <span style={{ color: '#8B66FF' }}>Banking Stack</span></h2>
            <p className="lead">Pre-built connectors for core banking systems, card processors, KYC providers, and payment networks.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {['Temenos Transact','Oracle FLEXCUBE','Finacle Core','Visa DPS','Mastercard MDES','Sumsub KYC','Jumio Verify','Onfido','ComplyAdvantage','Chainalysis AML','SWIFT gpi','SEPA Instant','Stripe Treasury','Modulr Payments','Railsr BaaS','Twilio Verify'].map(name => (
              <div key={name} className="flex items-center gap-2.5 p-3 rounded-xl glass border border-slate-200 hover:border-[#6644FF]/30 transition-colors">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#6644FF' }} />
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
