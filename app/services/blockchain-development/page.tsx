import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Blockchain Development Company | Enterprise Blockchain Solutions',
  description: 'Shivacha Technologies — leading enterprise blockchain development company. Custom Layer 1/2 solutions, cross-chain bridges, DeFi protocols, and private blockchains for global enterprises.',
};

const OFFERINGS = [
  { icon: '🔗', title: 'Custom Blockchain Development', desc: 'Build purpose-built Layer 1 blockchains with custom consensus mechanisms, tokenomics, and governance — tailored to your business model.' },
  { icon: '🌉', title: 'Cross-Chain Bridge Development', desc: 'Secure asset and data bridges between any two blockchain networks. Multi-signature validation, atomic swaps, and lock-and-mint architectures.' },
  { icon: '📊', title: 'Layer 2 Scaling Solutions', desc: 'Optimistic Rollups, ZK-Rollups, State Channels, and Plasma solutions for Ethereum and other L1s. Reduce transaction costs by 99%.' },
  { icon: '🏢', title: 'Enterprise Private Blockchains', desc: 'Hyperledger Fabric, Besu, and Quorum deployments for enterprise permissioned blockchains with access control and privacy layers.' },
  { icon: '🔄', title: 'Blockchain Migration', desc: 'Migrate your existing infrastructure from one chain to another — with full state migration, user asset preservation, and zero downtime.' },
  { icon: '📡', title: 'Blockchain Node Infrastructure', desc: 'Enterprise-grade node deployment, validator setup, archival nodes, and blockchain-as-a-service infrastructure on your cloud.' },
];

const CHAINS = [
  { name: 'Ethereum', icon: '⟠', desc: 'EVM, Solidity, L2s' },
  { name: 'Solana', icon: '◎', desc: 'Rust, high-TPS' },
  { name: 'Polygon', icon: '⬡', desc: 'zkEVM, PoS' },
  { name: 'Hyperledger', icon: '🔷', desc: 'Enterprise, Fabric' },
  { name: 'Avalanche', icon: '🔺', desc: 'Subnets, EVM' },
  { name: 'Polkadot', icon: '⬤', desc: 'Parachains, Substrate' },
  { name: 'BNB Chain', icon: '💛', desc: 'BSC, opBNB' },
  { name: 'TON', icon: '💎', desc: 'Telegram ecosystem' },
  { name: 'Near Protocol', icon: '🌐', desc: 'Sharding, Rust' },
  { name: 'Cosmos', icon: '🌌', desc: 'IBC, Tendermint' },
  { name: 'Arbitrum', icon: '🔵', desc: 'Optimistic Rollup' },
  { name: 'Optimism', icon: '🔴', desc: 'OP Stack, Superchain' },
];

const USE_CASES = [
  'DeFi Protocols & AMMs', 'NFT Marketplaces', 'Enterprise Supply Chain',
  'Digital Identity & KYC', 'Asset Tokenization', 'Cross-Border Payments',
  'Decentralized Governance', 'Healthcare Data Networks', 'Trade Finance',
  'Gaming & Metaverse', 'Carbon Credit Tracking', 'Legal Document Registry',
];

export default function BlockchainDevelopmentPage() {
  return (
    <div className="bg-[#000008]">
      {/* Hero */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] bg-[#0099E6] opacity-[0.07] -left-40 top-0" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Blockchain Development</div>
              <h1 className="h1 text-white mb-6">
                Enterprise Blockchain
                <br /><span className="gt-blue">Development Company</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                We architect and build enterprise-grade blockchain solutions — from custom Layer 1
                protocols to complex DeFi ecosystems. 8+ years, 200+ blockchain projects, 15+ chains.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Get Free Consultation <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Projects</Link>
              </div>
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: '200+', l: 'Blockchain Projects' },
                  { v: '15+', l: 'Chains Supported' },
                  { v: '8+', l: 'Years Experience' },
                ].map(s => (
                  <div key={s.l} className="metric-card">
                    <p className="text-xl font-black gt-blue">{s.v}</p>
                    <p className="text-[11px] text-[#3D5470]">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="hidden lg:block">
              <div className="glass-lg rounded-3xl p-7 border border-[#0E1E34] relative overflow-hidden">
                <div className="scan-line" />
                <p className="text-[12px] text-[#3D5470] uppercase tracking-wider mb-4">Blockchain Infrastructure Overview</p>
                {/* Simulated chain diagram */}
                <div className="space-y-3">
                  {['Layer 1: Custom Blockchain', 'Layer 2: Scaling & ZK-Proofs', 'Application Layer: dApps & APIs', 'Cross-Chain Bridge', 'Developer SDK & Tools'].map((layer, i) => (
                    <div key={layer} className="flex items-center gap-3 p-3 rounded-xl bg-[#060E1C] border border-[#0E1E34]">
                      <div className="w-8 h-8 rounded-lg bg-[#0099E6]/15 flex items-center justify-center text-[12px] font-bold text-[#33B5E5]">
                        L{i + 1}
                      </div>
                      <span className="text-[13px] text-[#7A8FA6]">{layer}</span>
                      <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">What We Build</div>
            <h2 className="h2 text-white">Blockchain Development <span className="gt-blue">Services</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFERINGS.map((o) => (
              <div key={o.title} className="card rounded-2xl p-6 border border-[#0E1E34] hover:border-[#1E3A5A] group">
                <div className="text-4xl mb-4">{o.icon}</div>
                <h3 className="text-[16px] font-bold text-white mb-2 group-hover:text-[#33B5E5] transition-colors">{o.title}</h3>
                <p className="text-[13px] text-[#7A8FA6] leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chains */}
      <section className="section-sm bg-[#000008]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-white">Blockchains We <span className="gt-blue">Build On</span></h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {CHAINS.map((c) => (
              <div key={c.name} className="card rounded-xl p-4 text-center border border-[#0E1E34] hover:border-[#0099E6]/40 group cursor-default">
                <div className="text-3xl mb-2">{c.icon}</div>
                <p className="text-[13px] font-semibold text-white">{c.name}</p>
                <p className="text-[11px] text-[#3D5470] mt-0.5">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-white">Blockchain <span className="gt-blue">Use Cases</span> We've Built</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {USE_CASES.map((uc) => (
              <div key={uc} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060E1C] border border-[#0E1E34]">
                <CheckCircle size={14} className="text-[#33B5E5] flex-shrink-0" />
                <span className="text-[13px] text-[#7A8FA6]">{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
