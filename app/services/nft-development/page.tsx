import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'NFT Development Company | Marketplace, Minting & Digital Assets',
  description: 'Shivacha Technologies builds full-stack NFT platforms — OpenSea-style marketplaces, minting platforms, fractionalization, gaming NFTs, and royalty distribution. 100+ NFT platforms, 10M+ NFTs minted.',
};

const OFFERINGS = [
  { icon: '🛍️', title: 'NFT Marketplace Development', desc: 'OpenSea-style peer-to-peer marketplaces with fixed-price listings, English/Dutch auctions, offer systems, royalty enforcement, and collection analytics.' },
  { icon: '🎨', title: 'NFT Minting Platform', desc: 'Fully configurable minting dApps with allowlist/public phases, merkle proof gating, reveal mechanics, batch minting, and gas optimisation.' },
  { icon: '🔪', title: 'NFT Fractionalization', desc: 'Split high-value NFTs into ERC-20 fractional tokens allowing shared ownership, liquidity, and governance over the underlying asset.' },
  { icon: '🎮', title: 'Gaming NFT Infrastructure', desc: 'On-chain game item standards (ERC-1155), loot generation, crafting/burn mechanics, rental and delegation protocols for play-to-earn games.' },
  { icon: '🎵', title: 'Music & Art Platforms', desc: 'Creator-first platforms with programmable royalty splits (EIP-2981), streaming rights, edition mechanics, and secondary market royalty enforcement.' },
  { icon: '💰', title: 'Royalty Distribution Engine', desc: 'Automated on-chain royalty routing to multiple recipients, split contracts, escrow mechanics, and off-chain royalty reconciliation dashboards.' },
];

const STANDARDS = [
  { name: 'ERC-721', icon: '🎖️', desc: 'Unique non-fungible tokens — the foundational NFT standard on Ethereum and EVM chains' },
  { name: 'ERC-1155', icon: '📦', desc: 'Multi-token standard supporting fungible, semi-fungible, and non-fungible in a single contract' },
  { name: 'SPL Token', icon: '◎', desc: 'Solana Program Library token standard for NFTs on Solana with compressed NFT (cNFT) support' },
  { name: 'Metaplex', icon: '🌟', desc: 'Solana NFT standard with Candy Machine, Token Metadata program, and Bubblegum cNFTs' },
];

const CHAINS = [
  { name: 'Ethereum', icon: '⟠', desc: 'ERC-721, ERC-1155' },
  { name: 'Solana', icon: '◎', desc: 'SPL, Metaplex' },
  { name: 'Polygon', icon: '⬡', desc: 'Low-fee NFTs' },
  { name: 'BNB Chain', icon: '💛', desc: 'BEP-721/1155' },
  { name: 'Arbitrum', icon: '🔵', desc: 'L2 NFTs' },
  { name: 'Avalanche', icon: '🔺', desc: 'Gaming focus' },
  { name: 'Base', icon: '🔷', desc: 'Coinbase L2' },
  { name: 'Tezos', icon: '🅣', desc: 'FA2 standard' },
  { name: 'Near', icon: '🌐', desc: 'NEP-171' },
  { name: 'Immutable X', icon: '⚡', desc: 'Gas-free gaming' },
  { name: 'Starknet', icon: '⭐', desc: 'ZK gaming NFTs' },
  { name: 'TON', icon: '💎', desc: 'Telegram NFTs' },
];

const USE_CASES = [
  'Digital Art Collections', 'Play-to-Earn Game Assets', 'Real Estate Tokenisation',
  'Music Rights & Royalties', 'Sports Collectibles & Cards', 'Loyalty & Membership NFTs',
  'Event Ticketing', 'Fashion & Wearables', 'Brand NFT Campaigns',
  'Academic Credentials', 'Carbon Credit NFTs', 'Virtual Land & Metaverse',
];

const FAQS = [
  {
    q: 'What is the difference between ERC-721 and ERC-1155 and which should I use?',
    a: 'ERC-721 represents a single unique token per ID — ideal for 1-of-1 art or profile picture collections where each token is distinct. ERC-1155 supports multiple copies per ID in a single contract — ideal for gaming items, edition prints, or any case where you need both fungible and non-fungible tokens under one contract. We evaluate your use case and recommend the right standard during the architecture phase.',
  },
  {
    q: 'How do you ensure royalties are enforced across all marketplaces?',
    a: 'We implement EIP-2981 on-chain royalty info as a baseline. For stronger enforcement, we offer operator filter registry patterns (similar to OpenSea\'s original approach) or build custom marketplace contracts that enforce royalties natively. We also advise on programmable royalty routers that distribute automatically to multiple recipients without off-chain reconciliation.',
  },
  {
    q: 'Can you build a marketplace that supports both Ethereum and Solana NFTs?',
    a: 'Yes. We have built cross-chain NFT marketplaces that aggregate listings from EVM chains and Solana under a single frontend. We use chain-specific wallet adapters (wagmi for EVM, @solana/wallet-adapter for Solana) and a normalised off-chain indexer to surface multi-chain inventory. Cross-chain atomic swaps are available for advanced use cases.',
  },
  {
    q: 'What does an NFT minting platform development engagement include?',
    a: 'A full minting platform includes: NFT smart contract (ERC-721A for gas savings), metadata generation pipeline, IPFS/Arweave upload service, allowlist management with merkle proofs, mint frontend (Next.js), wallet integration, on-chain reveal logic, collection analytics dashboard, and post-mint marketplace listing integration. Timeline is typically 4–8 weeks depending on complexity.',
  },
];

const COMPARISON = [
  { feature: 'Token Standard', shivacha: 'ERC-721A + ERC-1155 hybrid', typical: 'Basic ERC-721' },
  { feature: 'Gas Efficiency', shivacha: 'ERC-721A batch minting', typical: 'Single mint loops' },
  { feature: 'Royalty Enforcement', shivacha: 'EIP-2981 + operator filter', typical: 'Metadata only' },
  { feature: 'Metadata Storage', shivacha: 'IPFS + Arweave backup', typical: 'Centralised server' },
  { feature: 'Reveal Mechanism', shivacha: 'Chainlink VRF randomness', typical: 'Pseudo-random' },
  { feature: 'Analytics', shivacha: 'Full collection dashboard', typical: 'Not included' },
];

export default function NFTDevelopmentPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] opacity-[0.07] -left-40 top-0" style={{ background: '#FFB800' }} />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">NFT & Digital Assets Development</div>
              <h1 className="h1 text-[#F0F6FF] mb-6">
                NFT Platform
                <br /><span style={{ color: '#FFB800' }}>Development Company</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                We build the infrastructure behind world-class NFT ecosystems — from minting
                contracts to full marketplace platforms. 100+ platforms shipped, 10M+ NFTs minted.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Get Free Consultation <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View NFT Projects</Link>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { v: '100+', l: 'NFT Platforms' },
                  { v: '10M+', l: 'NFTs Minted' },
                  { v: '$500M+', l: 'Volume' },
                  { v: '12+', l: 'Chains' },
                ].map(s => (
                  <div key={s.l} className="metric-card">
                    <p className="text-xl font-black" style={{ color: '#FFB800' }}>{s.v}</p>
                    <p className="text-[11px] text-[rgba(240,246,255,0.35)]">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual — NFT mint pipeline */}
            <div className="hidden lg:block">
              <div className="glass rounded-3xl p-7 border border-white/[0.06] relative overflow-hidden">
                <div className="scan-line" />
                <p className="text-[12px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider mb-4">NFT Platform Architecture</p>
                <div className="space-y-3">
                  {[
                    { step: 'A', label: 'Artwork & Metadata Generation', note: '10,000 traits' },
                    { step: 'B', label: 'IPFS / Arweave Upload', note: 'Permanent storage' },
                    { step: 'C', label: 'ERC-721A Smart Contract', note: 'Gas-optimised' },
                    { step: 'D', label: 'Allowlist + Merkle Proof', note: 'Phase gating' },
                    { step: 'E', label: 'Minting Frontend (Next.js)', note: 'Wallet connect' },
                    { step: 'F', label: 'Marketplace Integration', note: 'OpenSea / custom' },
                  ].map(({ step, label, note }) => (
                    <div key={step} className="flex items-center gap-3 p-3 rounded-xl bg-[#0C1428] border border-white/[0.06]">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold text-[#F0F6FF] flex-shrink-0"
                        style={{ background: '#FFB80033', color: '#FFB800' }}>
                        {step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] text-[rgba(240,246,255,0.40)]">{label}</p>
                        <p className="text-[10px] text-[rgba(240,246,255,0.35)]">{note}</p>
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
            <h2 className="h2 text-[#F0F6FF]">NFT <span style={{ color: '#FFB800' }}>Development Services</span></h2>
            <p className="lead mt-4">From a simple minting contract to a full OpenSea competitor — every platform is built for scale.</p>
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

      {/* Standards */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-[#F0F6FF]">NFT <span style={{ color: '#FFB800' }}>Standards</span> We Implement</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {STANDARDS.map((s) => (
              <div key={s.name} className="card rounded-2xl p-5 border border-white/[0.06] hover:border-[#FFB800]/30 text-center">
                <span className="text-3xl block mb-3">{s.icon}</span>
                <h3 className="text-[14px] font-bold text-[#F0F6FF] mb-2">{s.name}</h3>
                <p className="text-[12px] text-[rgba(240,246,255,0.40)]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chains */}
      <section className="section-sm bg-[#0C1428]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-[#F0F6FF]">Chains & <span style={{ color: '#FFB800' }}>Networks</span> We Build On</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {CHAINS.map((c) => (
              <div key={c.name} className="card rounded-xl p-4 text-center border border-white/[0.06] hover:border-[#FFB800]/40 cursor-default">
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
            <h2 className="h3 text-[#F0F6FF]">Shivacha vs <span style={{ color: '#FFB800' }}>Typical NFT Agency</span></h2>
          </div>
          <div className="card rounded-2xl border border-white/[0.06] overflow-hidden">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left p-4 text-[rgba(240,246,255,0.35)] font-semibold">Feature</th>
                  <th className="p-4 text-center font-bold" style={{ color: '#FFB800' }}>Shivacha</th>
                  <th className="p-4 text-center text-[rgba(240,246,255,0.35)] font-semibold">Typical Agency</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : ''}>
                    <td className="p-4 text-[rgba(240,246,255,0.40)]">{row.feature}</td>
                    <td className="p-4 text-center font-semibold" style={{ color: '#FFB800' }}>{row.shivacha}</td>
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
            <h2 className="h3 text-[#F0F6FF]">NFT <span style={{ color: '#FFB800' }}>Use Cases</span> We've Built</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {USE_CASES.map((uc) => (
              <div key={uc} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0C1428] border border-white/[0.06]">
                <CheckCircle size={14} style={{ color: '#FFB800' }} className="flex-shrink-0" />
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
            <h2 className="h3 text-[#F0F6FF]">Frequently Asked <span style={{ color: '#FFB800' }}>Questions</span></h2>
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
