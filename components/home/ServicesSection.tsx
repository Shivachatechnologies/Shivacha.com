import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8">
        <path d="M8 22c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M14 28l4-4 4 4 4-8 4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="34" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Blockchain Development',
    desc: 'Layer 1/2 protocols, cross-chain bridges, enterprise private chains',
    tags: ['Ethereum', 'Solana', 'Hyperledger'],
    href: '/services/blockchain-development',
    color: '#3B82F6',
  },
  {
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8">
        <circle cx="22" cy="18" r="7" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M10 38c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M32 14l3-3M12 14l-3-3M22 10V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI & ML Development',
    desc: 'Custom LLMs, AI agents, computer vision, predictive analytics',
    tags: ['GPT-4', 'Claude', 'LangChain'],
    href: '/services/ai-development',
    color: '#8B5CF6',
  },
  {
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8">
        <rect x="9" y="9" width="26" height="26" rx="4" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M15 22l5 5 9-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Smart Contracts',
    desc: 'Audited, gas-optimised contracts for DeFi, NFTs, governance',
    tags: ['Solidity', 'Rust', 'Audited'],
    href: '/services/smart-contracts',
    color: '#10B981',
  },
  {
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8">
        <path d="M22 10l10 6v12l-10 6-10-6V16z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
        <path d="M22 10v24M12 16l10 6 10-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'DeFi Development',
    desc: 'DEXs, lending protocols, yield aggregators, AMM solutions',
    tags: ['AMM', 'Lending', 'Staking'],
    href: '/services/defi-development',
    color: '#F59E0B',
  },
  {
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8">
        <rect x="10" y="10" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2.2"/>
        <rect x="20" y="20" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M20 17h4M17 20v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'NFT Development',
    desc: 'NFT marketplaces, minting platforms, gaming assets, royalties',
    tags: ['ERC-721', 'ERC-1155', 'Marketplace'],
    href: '/services/nft-development',
    color: '#EC4899',
  },
  {
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8">
        <circle cx="22" cy="22" r="10" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M12 22h3M29 22h3M22 12v3M22 29v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 15l2 2M27 27l2 2M27 15l-2 2M15 27l-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Web3 Development',
    desc: 'Full-stack dApps, Web3 wallets, DAO platforms, token launchpads',
    tags: ['Next.js', 'ethers.js', 'IPFS'],
    href: '/services/web3-development',
    color: '#06B6D4',
  },
  {
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8">
        <rect x="12" y="8" width="10" height="18" rx="3" stroke="currentColor" strokeWidth="2.2"/>
        <rect x="22" y="14" width="10" height="22" rx="3" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M8 36h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Mobile App Dev',
    desc: 'Native iOS/Android and cross-platform fintech & DeFi apps',
    tags: ['React Native', 'Flutter', 'iOS/Android'],
    href: '/services/mobile-apps',
    color: '#F97316',
  },
  {
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8">
        <rect x="8" y="12" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M15 20h14M15 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="30" cy="26" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'DevOps & Cloud',
    desc: 'Kubernetes orchestration, CI/CD pipelines, infrastructure automation',
    tags: ['AWS', 'Docker', 'Terraform'],
    href: '/services/devops',
    color: '#14B8A6',
  },
  {
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8">
        <path d="M22 10l3 6h7l-5.5 4.5 2 7L22 24l-6.5 3.5 2-7L12 16h7z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
        <path d="M16 32l-4 4M28 32l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Security Audits',
    desc: 'Smart contract audits, penetration testing, VAPT, compliance reviews',
    tags: ['Audit', 'Pentest', 'OWASP'],
    href: '/services/security-audit',
    color: '#EF4444',
  },
];

export default function ServicesSection() {
  return (
    <section className="section" id="services" style={{ background: '#060B18' }}>
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div>
            <p className="overline mb-3">Development Services</p>
            <h2 className="h2">
              Everything You Need to<br />
              <span className="gt-blue">Build &amp; Scale</span>
            </h2>
          </div>
          <Link href="/services"
            className="flex items-center gap-2 text-[13.5px] font-semibold text-[#60A5FA] border border-[#3B82F6]/25 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 px-5 py-2.5 rounded-xl transition-all flex-shrink-0 self-start lg:self-auto">
            All Services <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href}
              className="group flex gap-4 p-5 border border-white/[0.06] hover:border-white/[0.12] rounded-2xl hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all relative overflow-hidden"
              style={{ background: '#0C1428' }}>

              {/* Accent glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${s.color}08, transparent 60%)` }} />

              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10"
                style={{ background: `${s.color}14`, color: s.color }}>
                {s.icon}
              </div>
              <div className="min-w-0 relative z-10">
                <h3 className="text-[14px] font-bold text-[rgba(240,246,255,0.85)] group-hover:text-white transition-colors mb-1">{s.title}</h3>
                <p className="text-[12.5px] text-[rgba(240,246,255,0.35)] leading-relaxed mb-3">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map(t => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-md font-medium"
                      style={{ background: `${s.color}12`, color: s.color }}>{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
