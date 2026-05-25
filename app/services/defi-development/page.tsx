import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'DeFi Development Company | AMM DEX, Lending & Yield Protocols',
  description: 'Shivacha Technologies builds production-grade DeFi platforms — AMM DEXes, lending protocols, yield aggregators, staking platforms, and DAO treasuries. 50+ protocols, $2B+ TVL secured.',
};

const OFFERINGS = [
  { icon: '🔄', title: 'AMM DEX Development', desc: 'Uniswap V3-style concentrated liquidity AMMs, multi-hop routing, custom fee tiers, and on-chain price oracles. Full frontend + smart contracts.' },
  { icon: '🏦', title: 'Lending & Borrowing Protocols', desc: 'Aave/Compound-model money markets with collateral management, liquidation bots, interest rate models, and risk parameter governance.' },
  { icon: '📈', title: 'Yield Aggregators', desc: 'Yearn-style auto-compounding vaults with strategy rotation, performance fee logic, and emergency withdrawal mechanisms.' },
  { icon: '🪙', title: 'Staking Platforms', desc: 'Single-asset and LP token staking with configurable emission schedules, lock durations, early exit penalties, and boost multipliers.' },
  { icon: '⛏️', title: 'Liquidity Mining Programs', desc: 'Incentive distribution contracts with merkle-based airdrops, epoch-based rewards, gauge voting, and vote-escrowed tokenomics.' },
  { icon: '🗳️', title: 'DAO Governance', desc: 'On-chain governance with timelocked execution, proposal thresholds, quorum mechanisms, and treasury management modules.' },
];

const PROTOCOLS = [
  { name: 'Uniswap V3 Model', icon: '🦄', desc: 'Concentrated liquidity, tick-range math, TWAP oracle' },
  { name: 'Aave / Compound Model', icon: '👻', desc: 'Variable/stable rate lending, health factor, liquidations' },
  { name: 'Curve Model', icon: '🌊', desc: 'StableSwap invariant, gauge emissions, ve-tokenomics' },
  { name: 'Yearn Model', icon: '🔵', desc: 'Strategy vaults, auto-compound, fee distribution' },
  { name: 'Balancer Model', icon: '⚖️', desc: 'Weighted pools, boosted pools, Vault architecture' },
  { name: 'Convex / Frax Model', icon: '🔒', desc: 'Vote-locking, boosted yields, protocol-owned liquidity' },
];

const CHAINS = [
  { name: 'Ethereum', icon: '⟠', desc: 'Mainnet & testnets' },
  { name: 'Arbitrum', icon: '🔵', desc: 'L2, low fees' },
  { name: 'Optimism', icon: '🔴', desc: 'OP Stack' },
  { name: 'Polygon', icon: '⬡', desc: 'zkEVM & PoS' },
  { name: 'BNB Chain', icon: '💛', desc: 'PancakeSwap ecosystem' },
  { name: 'Avalanche', icon: '🔺', desc: 'C-Chain, Subnets' },
  { name: 'Base', icon: '🔷', desc: 'Coinbase L2' },
  { name: 'Solana', icon: '◎', desc: 'Serum / Raydium' },
];

const USE_CASES = [
  'Decentralised Exchange (DEX)', 'Lending & Borrowing Markets', 'Yield Farming Vaults',
  'Staking & Liquid Staking', 'Cross-Chain Bridges', 'DAO Treasury Management',
  'Synthetic Assets', 'Options & Derivatives Protocols', 'Flash Loan Infrastructure',
  'Real-World Asset Lending', 'Protocol-Owned Liquidity', 'Revenue Sharing Contracts',
];

const FAQS = [
  {
    q: 'How do you protect DeFi protocols against flash loan attacks and oracle manipulation?',
    a: 'We implement TWAP oracles (time-weighted average prices) instead of spot prices, integrate Chainlink or Pyth price feeds as a fallback, add re-entrancy guards via OpenZeppelin, and impose block-delay checks on critical operations. We also run economic attack simulations using Echidna and Foundry fuzz testing before deployment.',
  },
  {
    q: 'Can you fork and customise an existing protocol like Uniswap or Aave?',
    a: 'Yes. We regularly build production forks that extend base protocol code with custom fee structures, new pool types, multi-token rewards, or chain-specific adaptations. We ensure GPL-2.0/3.0 licence compliance and thoroughly audit all divergences from the upstream code that introduced new attack surface.',
  },
  {
    q: 'What is included in a DeFi protocol deployment package?',
    a: 'A full delivery includes: smart contracts + unit/integration/fuzz test suite, deployment scripts (Hardhat/Foundry), admin multisig setup, subgraph indexer, React/Next.js frontend with wallet integration, documentation, and a 30-day post-launch monitoring period with an incident response plan.',
  },
  {
    q: 'How do you handle DeFi protocol upgrades without disrupting liquidity?',
    a: 'We architect protocols with upgrade paths in mind from day one — using proxy patterns (UUPS/Transparent/Diamond), migration contracts, and governance-gated upgrade flows. Liquidity migrations are done with incentive programmes that encourage LPs to move voluntarily rather than forced migrations that risk draining TVL.',
  },
];

const COMPARISON = [
  { feature: 'AMM Model', shivacha: 'V3 Concentrated + V2 Classic', typical: 'V2 fork only' },
  { feature: 'Oracle Strategy', shivacha: 'TWAP + Chainlink fallback', typical: 'Spot price (unsafe)' },
  { feature: 'MEV Protection', shivacha: 'Built-in slippage + private RPC', typical: 'None' },
  { feature: 'Liquidation Engine', shivacha: 'Dutch auction + keeper bots', typical: 'Fixed discount' },
  { feature: 'Governance', shivacha: 've-tokenomics + timelock', typical: 'Admin key' },
  { feature: 'Subgraph & Analytics', shivacha: 'Full The Graph subgraph', typical: 'Not included' },
];

export default function DeFiDevelopmentPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] opacity-[0.07] -right-40 top-0" style={{ background: '#00FF87' }} />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">DeFi Protocol Development</div>
              <h1 className="h1 text-[#F0F6FF] mb-6">
                DeFi Platform
                <br /><span style={{ color: '#00FF87' }}>Development Company</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                We build the DeFi primitives that power decentralised finance — AMM DEXes, lending
                markets, yield vaults, and staking platforms. 50+ protocols shipped, $2B+ TVL.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Get Free Consultation <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View DeFi Projects</Link>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { v: '50+', l: 'DeFi Protocols' },
                  { v: '$2B+', l: 'TVL Secured' },
                  { v: '15+', l: 'Chains' },
                  { v: '8+', l: 'Years' },
                ].map(s => (
                  <div key={s.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: '#00FF87' }}>{s.v}</p>
                    <p className="text-[11px] text-[rgba(240,246,255,0.35)]">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual — DeFi liquidity flow */}
            <div className="hidden lg:block">
              <div className="glass rounded-3xl p-7 border border-white/[0.06] relative overflow-hidden">
                <div className="scan-line" />
                <p className="text-[12px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider mb-4">DeFi Protocol Architecture</p>
                <div className="space-y-2">
                  {[
                    { layer: 'User Interface', sub: 'React + wagmi + ethers.js', color: '#00FF87' },
                    { layer: 'Router / Aggregator', sub: 'Multi-hop swap routing, best price', color: '#00CC6A' },
                    { layer: 'AMM Core Pool', sub: 'Concentrated liquidity, fee collection', color: '#009950' },
                    { layer: 'Oracle Layer', sub: 'TWAP + Chainlink price feeds', color: '#006633' },
                    { layer: 'Governance & Timelock', sub: 'On-chain voting, 48h delay', color: '#004422' },
                  ].map(({ layer, sub, color }) => (
                    <div key={layer} className="rounded-xl p-3 border border-white/[0.06] bg-white">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color }} />
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-semibold text-[#F0F6FF]">{layer}</p>
                          <p className="text-[11px] text-[rgba(240,246,255,0.35)] truncate">{sub}</p>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-lg p-2 text-center border" style={{ borderColor: '#00FF8744', background: '#00FF8711' }}>
                    <p className="text-[11px] font-bold" style={{ color: '#00FF87' }}>$2B+ TVL</p>
                    <p className="text-[10px] text-[rgba(240,246,255,0.35)]">Total Value Locked</p>
                  </div>
                  <div className="rounded-lg p-2 text-center border" style={{ borderColor: '#00FF8744', background: '#00FF8711' }}>
                    <p className="text-[11px] font-bold" style={{ color: '#00FF87' }}>0 Hacks</p>
                    <p className="text-[10px] text-[rgba(240,246,255,0.35)]">Post-Audit Record</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section bg-[#0C1428]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">What We Build</div>
            <h2 className="h2 text-[#F0F6FF]">DeFi Protocol <span style={{ color: '#00FF87' }}>Development Services</span></h2>
            <p className="lead mt-4">End-to-end DeFi development — from smart contract architecture to fully deployed frontend and subgraph.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFERINGS.map((o) => (
              <div key={o.title} className="card rounded-2xl p-6 border border-white/[0.06] hover:border-slate-300 group">
                <div className="text-4xl mb-4">{o.icon}</div>
                <h3 className="text-[16px] font-bold text-[#F0F6FF] mb-2">{o.title}</h3>
                <p className="text-[13px] text-[rgba(240,246,255,0.40)] leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Models */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-[#F0F6FF]">Protocol <span style={{ color: '#00FF87' }}>Models</span> We Implement</h2>
            <p className="text-[rgba(240,246,255,0.40)] mt-2 max-w-lg mx-auto text-[14px]">Battle-tested DeFi architectures, customised to your tokenomics and market.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROTOCOLS.map((p) => (
              <div key={p.name} className="card rounded-2xl p-5 border border-white/[0.06] hover:border-[#00FF87]/30 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className="text-[14px] font-bold text-[#F0F6FF]">{p.name}</h3>
                </div>
                <p className="text-[12px] text-[rgba(240,246,255,0.40)]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chains */}
      <section className="section-sm bg-[#0C1428]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-[#F0F6FF]">Chains We <span style={{ color: '#00FF87' }}>Deploy On</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {CHAINS.map((c) => (
              <div key={c.name} className="card rounded-xl p-4 text-center border border-white/[0.06] hover:border-[#00FF87]/40 cursor-default">
                <div className="text-3xl mb-2">{c.icon}</div>
                <p className="text-[13px] font-semibold text-[#F0F6FF]">{c.name}</p>
                <p className="text-[11px] text-[rgba(240,246,255,0.35)] mt-0.5">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="h3 text-[#F0F6FF]">Shivacha vs <span style={{ color: '#00FF87' }}>Generic DeFi Fork</span></h2>
          </div>
          <div className="card rounded-2xl border border-white/[0.06] overflow-hidden">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left p-4 text-[rgba(240,246,255,0.35)] font-semibold">Feature</th>
                  <th className="p-4 text-center font-bold" style={{ color: '#00FF87' }}>Shivacha</th>
                  <th className="p-4 text-center text-[rgba(240,246,255,0.35)] font-semibold">Generic Fork</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : ''}>
                    <td className="p-4 text-[rgba(240,246,255,0.40)]">{row.feature}</td>
                    <td className="p-4 text-center font-semibold" style={{ color: '#00FF87' }}>{row.shivacha}</td>
                    <td className="p-4 text-center text-[rgba(240,246,255,0.35)]">{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-[#0C1428]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-[#F0F6FF]">DeFi <span style={{ color: '#00FF87' }}>Use Cases</span> We've Built</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {USE_CASES.map((uc) => (
              <div key={uc} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0C1428] border border-white/[0.06]">
                <CheckCircle size={14} style={{ color: '#00FF87' }} className="flex-shrink-0" />
                <span className="text-[13px] text-[rgba(240,246,255,0.40)]">{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="h3 text-[#F0F6FF]">Frequently Asked <span style={{ color: '#00FF87' }}>Questions</span></h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="card rounded-2xl p-6 border border-white/[0.06]">
                <h4 className="text-[15px] font-bold text-[#F0F6FF] mb-3">{faq.q}</h4>
                <p className="text-[13px] text-[rgba(240,246,255,0.40)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
