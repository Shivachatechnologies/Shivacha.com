import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Enterprise Multi-Chain Wallet Infrastructure | MPC + HSM Institutional Custody',
  description: 'Institutional-grade multi-chain wallet platform. MPC key management, HSM hardware security, threshold signatures, policy engine, Chainalysis compliance screening. $2B+ assets managed across 50+ chains.',
};

const FEATURES = [
  {
    icon: '🔗',
    title: 'Multi-Chain Support (50+ Chains)',
    desc: 'Native support for Ethereum, Bitcoin, Solana, BNB Chain, Polygon, Avalanche, Tron, TON, and 40+ more. One wallet SDK, every major chain — with automatic support for new EVM-compatible networks.',
  },
  {
    icon: '🔐',
    title: 'MPC Key Management',
    desc: 'Multi-Party Computation splits private keys into shards held across separate secure enclaves — no single point of compromise. Sign transactions without ever reconstructing the full private key.',
  },
  {
    icon: '🏦',
    title: 'HSM Hardware Security',
    desc: 'FIPS 140-2 Level 3 certified Hardware Security Modules for cold storage signing. Physical tamper-protection with key ceremony audit trails — meeting the highest institutional custody standards.',
  },
  {
    icon: '✍️',
    title: 'Threshold Signatures (TSS)',
    desc: 'Configurable m-of-n threshold signature schemes. Require 2-of-3, 3-of-5, or any quorum structure for transaction approval — eliminating single-key risk and enabling distributed governance.',
  },
  {
    icon: '📋',
    title: 'Policy Engine',
    desc: 'Spending limits by amount, token, or destination. Address whitelisting and blacklisting. Multi-approval workflows for large transfers. Time-locked transfers and geographic access restrictions.',
  },
  {
    icon: '🔍',
    title: 'Compliance Screening (Chainalysis)',
    desc: 'Native Chainalysis KYT integration for real-time transaction screening. Automatic risk scoring, OFAC sanctions checking, and alert workflows for your compliance team.',
  },
  {
    icon: '🔌',
    title: 'Enterprise API + SDK',
    desc: 'REST and WebSocket APIs with language SDKs for JavaScript, Python, Go, and Java. Webhook event streams for deposits, withdrawals, and policy triggers. Full OpenAPI 3.0 documentation.',
  },
  {
    icon: '📱',
    title: 'White-Label Mobile Wallet',
    desc: 'Fully brandable iOS and Android wallet app built on your infrastructure. Custom UI, feature toggles, biometric auth, push notifications — app store deployment under your brand.',
  },
  {
    icon: '🧊',
    title: 'Cold / Hot Wallet Segregation',
    desc: 'Automated hot/cold sweep rules keep operational hot wallets minimally funded. Cold vaults remain air-gapped with manual approval workflows required for any withdrawal above thresholds.',
  },
];

const SPECS = [
  { label: 'Key Security', value: 'MPC-TSS (GG18/GG20) + HSM FIPS 140-2 L3 — no full key in memory' },
  { label: 'Chains', value: '50+ EVM, UTXO, and non-EVM chains supported natively' },
  { label: 'Transaction Speed', value: 'Sub-second MPC signing cluster, <2s broadcast confirmation' },
  { label: 'Policy Engine', value: 'Real-time rule evaluation, configurable quorum, full audit trail' },
  { label: 'Compliance', value: 'Chainalysis KYT + TRM Labs + Elliptic — pluggable providers' },
  { label: 'Certifications', value: 'SOC2 Type II + ISO 27001 — reports available under NDA' },
  { label: 'API', value: 'REST + WebSocket, SDKs in JS/Python/Go/Java, OpenAPI 3.0 spec' },
  { label: 'Deployment', value: 'SaaS, private cloud, or on-premise — all deployment modes supported' },
];

const METRICS = [
  { v: '50+', l: 'Chains Supported' },
  { v: '$2B+', l: 'Assets Managed' },
  { v: 'SOC2+ISO', l: 'Certifications' },
  { v: 'MPC', l: 'Key Security' },
];

const COLOR = '#A855F7';

export default function WalletProductPage() {
  return (
    <div className="bg-[#000008]">

      {/* ── HERO ── */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[600px] h-[600px] opacity-[0.07] -left-40 top-0" style={{ background: COLOR }} />
        <div className="orb w-[350px] h-[350px] opacity-[0.04] right-0 bottom-0" style={{ background: COLOR }} />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="badge badge-blue">Platform Product</span>
                <span className="badge" style={{ background: `${COLOR}18`, color: COLOR, border: `1px solid ${COLOR}40` }}>Enterprise Custody</span>
              </div>
              <div className="section-label mb-4">Enterprise Wallet Infrastructure</div>
              <h1 className="h1 text-white mb-6">
                Institutional-Grade Wallet
                <br /><span style={{ color: COLOR }}>for Digital Assets</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                A complete enterprise multi-chain wallet infrastructure — MPC key management,
                HSM hardware security, compliance screening, policy engine, and white-label
                mobile apps. $2B+ in assets managed across 50+ blockchains.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Request a Demo <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Deployments</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {METRICS.map(m => (
                  <div key={m.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: COLOR }}>{m.v}</p>
                    <p className="text-[11px] text-[#3D5470] mt-1">{m.l}</p>
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
                  <span className="ml-3 text-[11px] text-[#3D5470]">custody.platform — Wallet Console</span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="glass rounded-xl p-3 border border-[#0E1E34]">
                    <p className="text-[10px] text-[#3D5470] uppercase tracking-wider mb-1">Total Assets Under Custody</p>
                    <p className="text-[22px] font-black" style={{ color: COLOR }}>$248,412,900</p>
                    <div className="flex gap-3 mt-1">
                      <span className="text-[10px] text-green-400">Hot: $12.4M</span>
                      <span className="text-[10px] text-[#3D5470]">•</span>
                      <span className="text-[10px] text-[#7A8FA6]">Cold: $235.9M</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      ['₿', 'Bitcoin', '1,820.4 BTC', '$123.8M', 'cold'],
                      ['⟠', 'Ethereum', '24,500 ETH', '$86.2M', 'cold'],
                      ['◎', 'Solana', '312,000 SOL', '$38.4M', 'hot'],
                    ].map(([icon, chain, amt, usd, temp]) => (
                      <div key={String(chain)} className="flex items-center gap-2.5 glass rounded-lg px-3 py-2">
                        <span className="text-sm font-bold w-5 text-center" style={{ color: COLOR }}>{icon}</span>
                        <span className="text-[11px] font-semibold text-white flex-1">{chain}</span>
                        <span className="text-[10px] text-[#3D5470]">{amt}</span>
                        <span className="text-[11px] font-bold text-white">{usd}</span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${temp === 'cold' ? 'bg-blue-900/40 text-blue-300' : 'bg-green-900/40 text-green-300'}`}>{temp}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[['MPC Shards', '3/3 Active'],['HSM Status', 'Online'],['Policy Rules', '24 Active']].map(([l, v]) => (
                      <div key={l} className="metric-card">
                        <p className="text-[10px] text-[#3D5470]">{l}</p>
                        <p className="text-[11px] font-bold text-green-400">{v}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 rounded-xl border flex items-center gap-3" style={{ borderColor: `${COLOR}44`, background: `${COLOR}11` }}>
                    <CheckCircle size={13} style={{ color: COLOR }} />
                    <span className="text-[11px]" style={{ color: '#D8B4FE' }}>MPC key shards verified across 3 geo-locations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Platform Capabilities</div>
            <h2 className="h2 text-white mb-4">Security-First <span style={{ color: COLOR }}>Custody Infrastructure</span></h2>
            <p className="lead">Every layer of the custody stack — from key generation to compliance reporting — built for institutional requirements.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => (
              <div key={f.title} className="card rounded-2xl p-6 border border-[#0E1E34] hover:border-[#A855F7]/30 transition-colors group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-[15px] font-bold text-white mb-2 group-hover:text-[#C084FC] transition-colors">{f.title}</h3>
                <p className="text-[13px] text-[#7A8FA6] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH SPECS ── */}
      <section className="section bg-[#000008]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-4">Technical Architecture</div>
              <h2 className="h2 text-white mb-6">Zero Single Point <span style={{ color: COLOR }}>of Failure</span></h2>
              <p className="lead mb-8">MPC + HSM + threshold signatures in a defence-in-depth architecture — no entity can unilaterally access funds.</p>
              <div className="space-y-2">
                {SPECS.map(s => (
                  <div key={s.label} className="flex items-start gap-4 p-4 glass rounded-xl border border-[#0E1E34]">
                    <span className="text-[12px] font-bold text-[#3D5470] uppercase tracking-wider w-32 flex-shrink-0 pt-0.5">{s.label}</span>
                    <span className="text-[13px] text-[#7A8FA6]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label mb-4">Compliance & Certifications</div>
              <h3 className="h3 text-white mb-6">Enterprise-Grade Security Standards</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['MPC-TSS (GG18/GG20)','HSM FIPS 140-2 L3','Threshold ECDSA','Chainalysis KYT','TRM Labs','SOC2 Type II','ISO 27001','FATF Travel Rule','React Native','Go / Node.js','PostgreSQL','Kubernetes'].map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
              <div className="glass-lg rounded-2xl p-6 border border-[#0E1E34]">
                <p className="text-[12px] text-[#3D5470] uppercase tracking-wider mb-4">Security Checklist</p>
                <div className="space-y-2.5">
                  {[
                    'Air-gapped cold storage with HSM signing',
                    'Geo-distributed MPC key shards (3+ nodes)',
                    'Real-time anomaly detection & alerting',
                    'Address whitelist enforcement on all withdrawals',
                    'Time-lock delays on large-value transfers',
                    'Zero-knowledge proof authorization flows',
                    'Automated threat response and incident playbooks',
                  ].map(sf => (
                    <div key={sf} className="flex items-center gap-3">
                      <Check size={13} style={{ color: COLOR }} className="flex-shrink-0" />
                      <span className="text-[13px] text-[#7A8FA6]">{sf}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Who Uses It</div>
            <h2 className="h2 text-white mb-4">Built for <span style={{ color: COLOR }}>Institutional Operators</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { icon: '🏦', title: 'Crypto Exchanges', desc: 'Segregate hot and cold wallets, automate sweeps, and maintain compliance screening on all deposits and withdrawals.' },
              { icon: '💼', title: 'Asset Managers', desc: 'Manage client digital asset portfolios with multi-approval workflows, full audit trails, and regulatory reporting.' },
              { icon: '🏢', title: 'Corporate Treasuries', desc: 'Hold BTC/ETH in institutional-grade cold storage with board-level approval policies and insurance coverage.' },
              { icon: '🏗️', title: 'DeFi Protocols', desc: 'Secure protocol treasuries with multisig + timelock governance. Automate operational payouts with configurable policy rules.' },
            ].map(u => (
              <div key={u.title} className="card rounded-2xl p-6 border border-[#0E1E34] hover:border-[#A855F7]/30 transition-colors">
                <div className="text-3xl mb-4">{u.icon}</div>
                <h3 className="text-[15px] font-bold text-white mb-2">{u.title}</h3>
                <p className="text-[13px] text-[#7A8FA6] leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
