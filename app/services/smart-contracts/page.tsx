import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Smart Contract Development Company | Audited & Secure Contracts',
  description: 'Shivacha Technologies builds production-grade smart contracts — ERC-20/721/1155 tokens, DeFi protocols, DAO governance, multi-sig wallets, and cross-chain bridges. 300+ contracts audited, zero exploits.',
};

const OFFERINGS = [
  { icon: '🪙', title: 'Custom Token Contracts', desc: 'ERC-20 fungible tokens, ERC-721 NFTs, and ERC-1155 multi-token standards with vesting schedules, access controls, and upgrade proxies.' },
  { icon: '🏦', title: 'DeFi Protocol Contracts', desc: 'AMM pools, lending markets, yield vaults, and liquidity mining contracts engineered with battle-tested patterns and formal verification.' },
  { icon: '🗳️', title: 'DAO Governance Contracts', desc: 'On-chain governance with timelocks, proposal lifecycle, quorum logic, and delegated voting — Governor Bravo / OpenZeppelin Governor compatible.' },
  { icon: '🔐', title: 'Multi-Sig & Wallet Contracts', desc: 'Safe-compatible multi-signature wallets, corporate treasury smart accounts, and account abstraction (ERC-4337) implementations.' },
  { icon: '⏳', title: 'Vesting & Lockup Contracts', desc: 'Token vesting with cliffs, linear and milestone-based schedules, revocable/irrevocable structures for teams, investors, and advisors.' },
  { icon: '🌉', title: 'Cross-Chain Bridge Contracts', desc: 'Lock-and-mint and burn-and-release bridge contracts with decentralized oracle validation and fraud-proof windows for asset portability.' },
];

const CHAINS = [
  { name: 'Ethereum', icon: '⟠', desc: 'EVM, Solidity' },
  { name: 'Solana', icon: '◎', desc: 'Rust, Anchor' },
  { name: 'Polygon', icon: '⬡', desc: 'zkEVM, PoS' },
  { name: 'BNB Chain', icon: '💛', desc: 'BSC, opBNB' },
  { name: 'Avalanche', icon: '🔺', desc: 'C-Chain, EVM' },
  { name: 'Near', icon: '🌐', desc: 'Rust, AssemblyScript' },
  { name: 'Arbitrum', icon: '🔵', desc: 'Optimistic Rollup' },
  { name: 'TON', icon: '💎', desc: 'FunC, Tact' },
];

const TOOLS = [
  { name: 'Hardhat', tag: 'Dev Framework' },
  { name: 'Foundry', tag: 'Testing & Fuzzing' },
  { name: 'OpenZeppelin', tag: 'Secure Libraries' },
  { name: 'Slither', tag: 'Static Analysis' },
  { name: 'MythX', tag: 'Security Scanning' },
  { name: 'Certora', tag: 'Formal Verification' },
];

const USE_CASES = [
  'Token Launch & ICO/IDO', 'DeFi AMM Protocols', 'Play-to-Earn Gaming',
  'NFT Minting & Royalties', 'DAO On-Chain Voting', 'Escrow & Payments',
  'Staking & Rewards', 'Real-World Asset Tokenization', 'Insurance Pools',
  'Supply Chain Provenance', 'Revenue Sharing', 'Subscription Billing',
];

const FAQS = [
  {
    q: 'How do you ensure smart contract security before deployment?',
    a: 'We follow a multi-layered security process: automated static analysis with Slither, fuzz testing with Foundry, manual code review by senior Solidity engineers, and third-party audit coordination with firms like Trail of Bits or Certora for formal verification. Every contract ships with a full test suite achieving >95% branch coverage.',
  },
  {
    q: 'Can you upgrade smart contracts after deployment?',
    a: 'Yes. We implement transparent proxy (EIP-1967), UUPS proxy, or Diamond (EIP-2535) upgrade patterns depending on your requirements. We also advise on governance-gated upgrades via timelocks so that no single admin can push malicious code silently.',
  },
  {
    q: 'What chains do you support for smart contract deployment?',
    a: 'We support all EVM-compatible networks (Ethereum, Polygon, BNB Chain, Avalanche, Arbitrum, Optimism, Base, and more), Solana with Anchor/Rust, Near Protocol, and TON with FunC/Tact. We can deploy the same contract logic to 15+ chains using our cross-chain deployment pipeline.',
  },
  {
    q: 'How long does it take to develop and audit a smart contract?',
    a: 'A standard ERC-20 token with vesting typically takes 1–2 weeks. A complex DeFi protocol (AMM + lending + governance) ranges from 6–12 weeks including internal audit and test coverage. Third-party audit timelines add 2–4 weeks depending on the firm. We provide a detailed project timeline during the scoping call.',
  },
];

const COMPARISON = [
  { feature: 'Test Coverage', shivacha: '≥ 95% branch', typical: '40–60%' },
  { feature: 'Security Audit', shivacha: 'Internal + Third-party', typical: 'Internal only' },
  { feature: 'Upgrade Pattern', shivacha: 'Proxy / Diamond', typical: 'Redeployment' },
  { feature: 'Gas Optimisation', shivacha: 'Custom storage packing', typical: 'Default Solidity' },
  { feature: 'Formal Verification', shivacha: 'Certora / Halmos', typical: 'Not included' },
  { feature: 'Post-Deploy Support', shivacha: '12 months SLA', typical: '30 days' },
];

export default function SmartContractsDevelopmentPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] opacity-[0.07] -left-40 top-0" style={{ background: '#6644FF' }} />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Smart Contract Development</div>
              <h1 className="h1 text-slate-900 mb-6">
                Secure Smart Contract
                <br /><span style={{ color: '#6644FF' }}>Development & Audit</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                We design, develop, and secure smart contracts that power the world's most critical
                on-chain protocols. 300+ contracts audited, zero exploits, $4B+ value secured.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Get Free Consultation <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Contracts</Link>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { v: '300+', l: 'Contracts Audited' },
                  { v: '0', l: 'Exploits' },
                  { v: '15+', l: 'Chains' },
                  { v: '$4B+', l: 'Value Secured' },
                ].map(s => (
                  <div key={s.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: '#6644FF' }}>{s.v}</p>
                    <p className="text-[11px] text-slate-400">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual — contract audit pipeline */}
            <div className="hidden lg:block">
              <div className="glass rounded-3xl p-7 border border-slate-200 relative overflow-hidden">
                <div className="scan-line" />
                <p className="text-[12px] text-slate-400 uppercase tracking-wider mb-4">Smart Contract Lifecycle</p>
                <div className="space-y-3">
                  {[
                    { step: '01', label: 'Requirements & Architecture', status: 'done' },
                    { step: '02', label: 'Contract Development (Solidity / Rust)', status: 'done' },
                    { step: '03', label: 'Unit & Fuzz Testing — Foundry', status: 'done' },
                    { step: '04', label: 'Static Analysis — Slither / MythX', status: 'active' },
                    { step: '05', label: 'Third-Party Security Audit', status: 'pending' },
                    { step: '06', label: 'Mainnet Deployment & Monitoring', status: 'pending' },
                  ].map(({ step, label, status }) => (
                    <div key={step} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold text-slate-900 flex-shrink-0"
                        style={{ background: status === 'done' ? '#6644FF33' : status === 'active' ? '#6644FF' : '#0E1E34', color: status === 'done' ? '#a78bfa' : 'white' }}>
                        {step}
                      </div>
                      <span className="text-[13px] text-slate-500 flex-1">{label}</span>
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${status === 'done' ? 'bg-green-400' : status === 'active' ? 'bg-yellow-400 animate-pulse' : 'bg-[#1E3A5A]'}`} />
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 rounded-xl border flex items-center gap-3" style={{ borderColor: '#6644FF44', background: '#6644FF11' }}>
                  <CheckCircle size={14} style={{ color: '#6644FF' }} />
                  <span className="text-[12px]" style={{ color: '#a78bfa' }}>All deployments verified on-chain with source code</span>
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
            <h2 className="h2 text-slate-900">Smart Contract <span style={{ color: '#6644FF' }}>Development Services</span></h2>
            <p className="lead mt-4">From simple ERC-20 tokens to complex DeFi primitives — every contract we ship is production-hardened.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFERINGS.map((o) => (
              <div key={o.title} className="card rounded-2xl p-6 border border-slate-200 hover:border-slate-300 group">
                <div className="text-4xl mb-4">{o.icon}</div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2 group-hover:transition-colors" style={{ '--hover-color': '#a78bfa' } as React.CSSProperties}>{o.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chains */}
      <section className="section-sm bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-slate-900">Chains & <span style={{ color: '#6644FF' }}>Runtimes</span> We Support</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {CHAINS.map((c) => (
              <div key={c.name} className="card rounded-xl p-4 text-center border border-slate-200 hover:border-[#6644FF]/40 group cursor-default">
                <div className="text-3xl mb-2">{c.icon}</div>
                <p className="text-[13px] font-semibold text-slate-900">{c.name}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolchain */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-slate-900">Security <span style={{ color: '#6644FF' }}>Toolchain</span></h2>
            <p className="text-slate-500 mt-2 max-w-lg mx-auto text-[14px]">Industry-standard tools combined with our proprietary audit checklist.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {TOOLS.map((t) => (
              <div key={t.name} className="card rounded-xl p-4 border border-slate-200 text-center hover:border-[#6644FF]/40">
                <p className="text-[14px] font-bold text-slate-900 mb-1">{t.name}</p>
                <span className="badge badge-blue text-[10px]">{t.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="h3 text-slate-900">Shivacha vs <span style={{ color: '#6644FF' }}>Typical Agency</span></h2>
          </div>
          <div className="card rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 text-slate-400 font-semibold">Feature</th>
                  <th className="p-4 text-center font-bold" style={{ color: '#a78bfa' }}>Shivacha</th>
                  <th className="p-4 text-center text-slate-400 font-semibold">Typical Agency</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : ''}>
                    <td className="p-4 text-slate-500">{row.feature}</td>
                    <td className="p-4 text-center font-semibold" style={{ color: '#a78bfa' }}>{row.shivacha}</td>
                    <td className="p-4 text-center text-slate-400">{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-slate-900">Smart Contract <span style={{ color: '#6644FF' }}>Use Cases</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {USE_CASES.map((uc) => (
              <div key={uc} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle size={14} style={{ color: '#6644FF' }} className="flex-shrink-0" />
                <span className="text-[13px] text-slate-500">{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="h3 text-slate-900">Frequently Asked <span style={{ color: '#6644FF' }}>Questions</span></h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="card rounded-2xl p-6 border border-slate-200">
                <h4 className="text-[15px] font-bold text-slate-900 mb-3">{faq.q}</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
