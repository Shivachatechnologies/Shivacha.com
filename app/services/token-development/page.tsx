import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Token Development Company | Crypto Token Launch & Tokenomics',
  description: 'Shivacha Technologies creates, launches, and audits crypto tokens — ERC-20, governance, utility, security tokens, and stablecoins. 500+ tokens launched, $2B+ raised.',
};

const TOKEN_TYPES = [
  { icon: '🪙', title: 'Utility Tokens (ERC-20)', desc: 'Access tokens for platform features, fee discounts, and service payments. Gas-optimized with snapshot, permit, votes, and burn functions.', chain: 'Ethereum, BNB, Polygon' },
  { icon: '🗳️', title: 'Governance Tokens', desc: 'DAO voting tokens with OpenZeppelin Governor, timelock, quorum settings, delegation, and on-chain proposal execution for decentralized protocol governance.', chain: 'Ethereum, Avalanche' },
  { icon: '📜', title: 'Security Tokens (STO)', desc: 'ERC-1400 / ERC-3643 compliance tokens with investor whitelisting, KYC/AML enforcement, transfer restrictions, forced transfers, and regulatory reporting.', chain: 'Ethereum, Polygon' },
  { icon: '💵', title: 'Stablecoins', desc: 'Algorithmic and collateralized stablecoins — USDC-model fiat-backed, DAI-model over-collateralized, and algorithmic dual-token models with peg stability mechanisms.', chain: 'Multi-chain' },
  { icon: '⚡', title: 'Meme & Community Tokens', desc: 'Fast-launch meme tokens with anti-bot mechanics, max wallet limits, marketing tax, LP lock, renounced ownership, and SafeMoon-style or deflationary models.', chain: 'BNB, Ethereum, Solana' },
  { icon: '🎖️', title: 'Fan & Loyalty Tokens', desc: 'Brand-tokenized loyalty programs, fan engagement tokens, achievement badges, and reward currencies for consumer apps, sports teams, and creator platforms.', chain: 'Polygon, BNB, Solana' },
];

const CHECKLIST = [
  'Tokenomics design & modeling',
  'Smart contract development',
  'Third-party security audit',
  'Token vesting & lock contracts',
  'DEX listing (Uniswap / PancakeSwap)',
  'CEX listing strategy & support',
  'Initial liquidity provision',
  'Presale / IDO contract',
  'Token airdrop mechanics',
  'Legal structuring consultation',
  'Marketing & community toolkit',
  'Post-launch monitoring',
];

const CHAINS = [
  { name: 'Ethereum', icon: '⟠' }, { name: 'BNB Chain', icon: '💛' },
  { name: 'Polygon', icon: '⬡' }, { name: 'Avalanche', icon: '🔺' },
  { name: 'Solana', icon: '◎' }, { name: 'Arbitrum', icon: '🔵' },
  { name: 'Base', icon: '🔷' }, { name: 'TON', icon: '💎' },
];

export default function TokenDevelopmentPage() {
  return (
    <div className="bg-white">

      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] bg-[#00FF87] opacity-[0.05] -left-40 top-0" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Token Development</div>
              <h1 className="h1 text-slate-900 mb-6">
                Crypto Token
                <br /><span className="gt-blue">Development & Launch</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                From tokenomics design to smart contract development, security auditing, and exchange listings —
                we handle the full lifecycle of your crypto token launch. 500+ tokens, $2B+ raised.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Get Free Consultation <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Projects</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { v: '500+', l: 'Tokens Launched' },
                  { v: '$2B+', l: 'Raised via Launches' },
                  { v: '15+', l: 'Chains Supported' },
                  { v: '0', l: 'Post-Audit Exploits' },
                ].map(s => (
                  <div key={s.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: '#00FF87' }}>{s.v}</p>
                    <p className="text-[11px] text-slate-400">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="glass-lg rounded-3xl p-7 border border-slate-200 relative overflow-hidden">
                <div className="scan-line" />
                <p className="text-[12px] text-slate-400 uppercase tracking-wider mb-4">Token Launch Overview</p>
                <div className="space-y-3">
                  {[
                    { label: 'Total Supply', value: '1,000,000,000', icon: '🪙' },
                    { label: 'Circulating Supply', value: '250,000,000 (25%)', icon: '💫' },
                    { label: 'Presale Raised', value: '$4.2M USDT', icon: '💰' },
                    { label: 'DEX Liquidity Locked', value: '$1.8M · 2 years', icon: '🔒' },
                    { label: 'Audit Status', value: 'Passed (0 Critical)', icon: '✅' },
                  ].map(r => (
                    <div key={r.label} className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                      <div className="flex items-center gap-2">
                        <span>{r.icon}</span>
                        <span className="text-[12px] text-slate-400">{r.label}</span>
                      </div>
                      <span className="text-[13px] font-semibold text-slate-900">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Types */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Token Types</div>
            <h2 className="h2 text-slate-900">Tokens We <span className="gt-blue">Design & Build</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOKEN_TYPES.map(t => (
              <div key={t.title} className="card rounded-2xl p-6 border border-slate-200 hover:border-[#00FF87]/30 group">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2 group-hover:text-[#33B5E5] transition-colors">{t.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-3">{t.desc}</p>
                <span className="text-[11px] px-2 py-1 rounded-lg bg-[#00FF87]/08 border border-[#00FF87]/20 text-[#00FF87]">{t.chain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Service Checklist */}
      <section className="section-sm bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Full-Service Launch</div>
              <h2 className="h2 text-slate-900 mb-4">Everything Included in <span className="gt-blue">Your Token Launch</span></h2>
              <p className="lead mb-6">We handle every step from idea to exchange listing — so you can focus on building your community and product.</p>
              <Link href="/contact" className="btn btn-primary">Start Your Launch <ArrowRight size={14} /></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {CHECKLIST.map(c => (
                <div key={c} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                  <CheckCircle size={14} className="text-[#00FF87] flex-shrink-0" />
                  <span className="text-[13px] text-slate-500">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chains */}
      <section className="section-sm bg-slate-50">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="h3 text-slate-900">Chains We <span className="gt-blue">Deploy On</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {CHAINS.map(c => (
              <div key={c.name} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-slate-200 hover:border-slate-300">
                <span className="text-xl">{c.icon}</span>
                <span className="text-[14px] font-medium text-slate-900">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
