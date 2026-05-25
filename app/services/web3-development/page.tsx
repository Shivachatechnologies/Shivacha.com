import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Web3 dApp Development Company | Full-Stack dApps & Wallet Integration',
  description: 'Shivacha Technologies builds production-ready Web3 dApps — full-stack decentralised applications, wallet integrations, DAO platforms, subgraph indexing, and decentralised storage. 150+ dApps, 5M+ wallet connections.',
};

const OFFERINGS = [
  { icon: '🌐', title: 'Full-Stack dApp Development', desc: 'End-to-end decentralised application development with Next.js frontends, smart contract backends, and real-time blockchain event listeners via WebSocket providers.' },
  { icon: '👛', title: 'Wallet Integration', desc: 'MetaMask, WalletConnect v2, Coinbase Wallet, Phantom, and Rainbow Kit integrations with multi-chain support and account abstraction (ERC-4337) compatibility.' },
  { icon: '🏛️', title: 'DAO Platform Development', desc: 'Full DAO platforms with proposal creation, on-chain voting, treasury management UI, delegate dashboards, and governance analytics powered by The Graph.' },
  { icon: '📦', title: 'Decentralised Storage Integration', desc: 'IPFS pinning (Pinata/NFT.Storage), Arweave permanent storage, Filecoin deals, and Ceramic Network for mutable decentralised data with DID authentication.' },
  { icon: '🔐', title: 'Web3 Authentication', desc: 'Sign-In with Ethereum (SIWE/EIP-4361), Magic.link passwordless auth, Privy embedded wallets, and Lit Protocol for decentralised access control to encrypted content.' },
  { icon: '📊', title: 'Subgraph & Indexing', desc: 'Custom The Graph subgraphs, Goldsky Mirrors, Envio, and Moralis Stream integrations to index on-chain events and serve fast GraphQL APIs to your dApp frontend.' },
];

const STACK = [
  { name: 'Next.js 14', tag: 'App Router, RSC' },
  { name: 'wagmi v2', tag: 'EVM React Hooks' },
  { name: 'ethers.js v6', tag: 'EVM Library' },
  { name: 'The Graph', tag: 'Subgraph Indexer' },
  { name: 'IPFS / Arweave', tag: 'Decentralised Storage' },
  { name: 'WalletConnect v2', tag: 'Multi-wallet' },
  { name: 'viem', tag: 'Low-level EVM' },
  { name: 'Hardhat', tag: 'Contract Dev' },
  { name: 'Foundry', tag: 'Contract Testing' },
  { name: 'TypeScript', tag: 'Type Safety' },
  { name: 'Tailwind CSS', tag: 'Styling' },
  { name: 'Privy / Lit', tag: 'Auth & Access' },
];

const CHAINS = [
  { name: 'Ethereum', icon: '⟠', desc: 'Mainnet, Sepolia' },
  { name: 'Polygon', icon: '⬡', desc: 'PoS, zkEVM' },
  { name: 'Arbitrum', icon: '🔵', desc: 'One, Nova' },
  { name: 'Optimism', icon: '🔴', desc: 'OP Mainnet' },
  { name: 'Base', icon: '🔷', desc: 'Coinbase L2' },
  { name: 'BNB Chain', icon: '💛', desc: 'BSC, opBNB' },
  { name: 'Avalanche', icon: '🔺', desc: 'C-Chain' },
  { name: 'Solana', icon: '◎', desc: 'Mainnet Beta' },
  { name: 'Near', icon: '🌐', desc: 'Mainnet' },
  { name: 'Celo', icon: '🟡', desc: 'Mobile-first' },
  { name: 'Linea', icon: '🟣', desc: 'zkEVM L2' },
  { name: 'Scroll', icon: '📜', desc: 'zkEVM L2' },
  { name: 'zkSync', icon: '⚡', desc: 'ZK Rollup' },
  { name: 'Starknet', icon: '⭐', desc: 'ZK L2' },
  { name: 'Fantom', icon: '👻', desc: 'EVM compatible' },
  { name: 'Cronos', icon: '🔱', desc: 'Crypto.com chain' },
  { name: 'Moonbeam', icon: '🌙', desc: 'Polkadot EVM' },
  { name: 'Harmony', icon: '☯️', desc: 'Sharded EVM' },
  { name: 'Klaytn', icon: '🇰', desc: 'Kakao chain' },
  { name: 'TON', icon: '💎', desc: 'Telegram Web3' },
];

const USE_CASES = [
  'DeFi Protocol Frontends', 'NFT Marketplace Platforms', 'DAO Governance Dashboards',
  'GameFi & Play-to-Earn', 'Web3 Social Networks', 'Prediction Market dApps',
  'Token Launch Platforms', 'Decentralised Identity', 'On-chain Subscription Billing',
  'Cross-Chain Bridging UI', 'Real-World Asset dApps', 'Decentralised Crowdfunding',
];

const FAQS = [
  {
    q: 'What is the difference between a Web3 dApp and a traditional web app?',
    a: 'A traditional web app relies entirely on centralised servers for data, auth, and business logic. A Web3 dApp moves critical state — ownership, balances, governance votes — onto a public blockchain, using smart contracts as the backend. The frontend is still a web app (React/Next.js) but it communicates with the blockchain via wallet connections (MetaMask, WalletConnect) instead of username/password sessions.',
  },
  {
    q: 'How do you handle the performance lag of reading from blockchains in a dApp UI?',
    a: 'We use a layered data strategy: The Graph subgraphs or Goldsky Mirrors to index on-chain events into fast GraphQL APIs, supplemented by Alchemy/Infura RPC with caching for real-time state reads. This lets us load most page data instantly from the indexer and only hit the RPC for time-sensitive state like balances. We also implement optimistic UI updates so actions feel instant before the transaction confirms.',
  },
  {
    q: 'Can you integrate multiple wallets including mobile wallets?',
    a: 'Yes. We implement WalletConnect v2 (which covers 400+ wallets), MetaMask, Coinbase Wallet, Phantom (Solana), and SafePal/Trust Wallet for mobile. We use RainbowKit or ConnectKit as the UI component layer on EVM chains. For Solana dApps we use @solana/wallet-adapter. Account abstraction (ERC-4337) smart wallets like Biconomy or Alchemy AccountKit are also available for gasless UX.',
  },
  {
    q: 'How long does it take to build a full-stack Web3 dApp?',
    a: 'A straightforward dApp (one contract + wallet connect + basic UI) takes 3–5 weeks. A complex DeFi or DAO platform with multiple contracts, subgraph, analytics, and multi-chain support takes 10–20 weeks. We always start with a 1-week discovery sprint to scope requirements, define the tech stack, and produce a detailed project plan before writing any code.',
  },
];

const COMPARISON = [
  { feature: 'Wallet Support', shivacha: 'MetaMask, WalletConnect, Phantom, AA', typical: 'MetaMask only' },
  { feature: 'Data Layer', shivacha: 'The Graph subgraph + RPC cache', typical: 'Direct RPC calls' },
  { feature: 'Auth Strategy', shivacha: 'SIWE + Privy + Lit Protocol', typical: 'Centralised JWT' },
  { feature: 'Mobile UX', shivacha: 'WalletConnect + deep links', typical: 'Desktop only' },
  { feature: 'Chain Support', shivacha: '20+ EVM + Solana + Near', typical: '1–2 chains' },
  { feature: 'Gas Abstraction', shivacha: 'ERC-4337 AA, gasless txns', typical: 'User pays gas' },
];

export default function Web3DevelopmentPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] opacity-[0.07] -right-40 top-0" style={{ background: '#EF4444' }} />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Web3 dApp Development</div>
              <h1 className="h1 text-[#F0F6FF] mb-6">
                Web3 dApp
                <br /><span style={{ color: '#EF4444' }}>Development Company</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                We build production-grade Web3 decentralised applications — from DeFi frontends to
                DAO platforms. 150+ dApps deployed, 5M+ wallet connections, 20+ chains supported.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Get Free Consultation <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View dApp Portfolio</Link>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { v: '150+', l: 'dApps Deployed' },
                  { v: '5M+', l: 'Wallet Connects' },
                  { v: '20+', l: 'Chains' },
                  { v: '8+', l: 'Years' },
                ].map(s => (
                  <div key={s.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: '#EF4444' }}>{s.v}</p>
                    <p className="text-[11px] text-[rgba(240,246,255,0.35)]">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual — dApp architecture */}
            <div className="hidden lg:block">
              <div className="glass rounded-3xl p-7 border border-white/[0.06] relative overflow-hidden">
                <div className="scan-line" />
                <p className="text-[12px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider mb-1">dApp Full-Stack Architecture</p>
                <p className="text-[10px] text-[rgba(240,246,255,0.35)] mb-4">Request flow: User → Wallet → Contract → Indexer → UI</p>
                <div className="space-y-2">
                  {[
                    { layer: 'Next.js 14 Frontend', sub: 'App Router, RSC, TypeScript', side: 'UI' },
                    { layer: 'wagmi v2 + viem', sub: 'React hooks for EVM state', side: 'SDK' },
                    { layer: 'WalletConnect v2', sub: 'MetaMask / Phantom / 400+ wallets', side: 'AUTH' },
                    { layer: 'Smart Contracts', sub: 'Solidity / Rust — Foundry tested', side: 'CORE' },
                    { layer: 'The Graph Subgraph', sub: 'Indexed events → GraphQL API', side: 'DATA' },
                    { layer: 'IPFS / Arweave', sub: 'Decentralised asset & metadata storage', side: 'STORE' },
                  ].map(({ layer, sub, side }) => (
                    <div key={layer} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#0C1428] border border-white/[0.06]">
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                        style={{ background: '#EF444422', color: '#EF4444' }}>{side}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-semibold text-[#F0F6FF]">{layer}</p>
                        <p className="text-[10px] text-[rgba(240,246,255,0.35)] truncate">{sub}</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                    </div>
                  ))}
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
            <h2 className="h2 text-[#F0F6FF]">Web3 dApp <span style={{ color: '#EF4444' }}>Development Services</span></h2>
            <p className="lead mt-4">Full-stack Web3 engineering from smart contracts to pixel-perfect, wallet-connected frontends.</p>
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

      {/* Tech Stack */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-[#F0F6FF]">Our Web3 <span style={{ color: '#EF4444' }}>Tech Stack</span></h2>
            <p className="text-[rgba(240,246,255,0.40)] mt-2 max-w-lg mx-auto text-[14px]">Modern, battle-tested tooling for every layer of the dApp.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {STACK.map((t) => (
              <div key={t.name} className="card rounded-xl p-3 border border-white/[0.06] hover:border-[#EF4444]/40 text-center">
                <p className="text-[13px] font-bold text-[#F0F6FF] mb-1">{t.name}</p>
                <span className="badge badge-blue text-[10px]">{t.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chains */}
      <section className="section-sm bg-[#0C1428]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-[#F0F6FF]">20+ Chains <span style={{ color: '#EF4444' }}>Supported</span></h2>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-2">
            {CHAINS.map((c) => (
              <div key={c.name} className="card rounded-xl p-3 text-center border border-white/[0.06] hover:border-[#EF4444]/40 cursor-default">
                <div className="text-2xl mb-1">{c.icon}</div>
                <p className="text-[11px] font-semibold text-[#F0F6FF]">{c.name}</p>
                <p className="text-[9px] text-[rgba(240,246,255,0.35)] mt-0.5">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="h3 text-[#F0F6FF]">Shivacha vs <span style={{ color: '#EF4444' }}>Typical Web3 Agency</span></h2>
          </div>
          <div className="card rounded-2xl border border-white/[0.06] overflow-hidden">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left p-4 text-[rgba(240,246,255,0.35)] font-semibold">Feature</th>
                  <th className="p-4 text-center font-bold" style={{ color: '#EF4444' }}>Shivacha</th>
                  <th className="p-4 text-center text-[rgba(240,246,255,0.35)] font-semibold">Typical Agency</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : ''}>
                    <td className="p-4 text-[rgba(240,246,255,0.40)]">{row.feature}</td>
                    <td className="p-4 text-center font-semibold" style={{ color: '#EF4444' }}>{row.shivacha}</td>
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
            <h2 className="h3 text-[#F0F6FF]">Web3 dApp <span style={{ color: '#EF4444' }}>Use Cases</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {USE_CASES.map((uc) => (
              <div key={uc} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0C1428] border border-white/[0.06]">
                <CheckCircle size={14} style={{ color: '#EF4444' }} className="flex-shrink-0" />
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
            <h2 className="h3 text-[#F0F6FF]">Frequently Asked <span style={{ color: '#EF4444' }}>Questions</span></h2>
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
