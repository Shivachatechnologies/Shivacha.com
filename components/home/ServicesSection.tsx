import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: '⛓️', title: 'Blockchain Development', href: '/services/blockchain-development',
    desc: 'Custom Layer 1/2 solutions, consensus mechanism design, cross-chain bridges, and enterprise private blockchains.',
    tags: ['Ethereum', 'Solana', 'Hyperledger', 'Polygon'],
    color: '#0099E6',
  },
  {
    icon: '🧠', title: 'AI & ML Development', href: '/services/ai-development',
    desc: 'Custom LLMs, computer vision, NLP, predictive analytics, AI agents, and intelligent automation systems.',
    tags: ['GPT-4', 'TensorFlow', 'PyTorch', 'LangChain'],
    color: '#00D4FF',
  },
  {
    icon: '📋', title: 'Smart Contract Development', href: '/services/smart-contracts',
    desc: 'Audited, gas-optimized smart contracts for DeFi, NFTs, governance, and complex business logic.',
    tags: ['Solidity', 'Rust', 'Vyper', 'Audited'],
    color: '#6644FF',
  },
  {
    icon: '💱', title: 'DeFi Platform Development', href: '/services/defi-development',
    desc: 'DEXs, lending protocols, yield aggregators, staking platforms, liquidity mining, and AMM solutions.',
    tags: ['AMM', 'Lending', 'Yield', 'Staking'],
    color: '#00FF87',
  },
  {
    icon: '🎨', title: 'NFT & Digital Assets', href: '/services/nft-development',
    desc: 'NFT marketplaces, minting platforms, fractionalization, gaming NFTs, and royalty distribution systems.',
    tags: ['ERC-721', 'ERC-1155', 'Marketplace', 'Gaming'],
    color: '#FFB800',
  },
  {
    icon: '🌌', title: 'Metaverse Development', href: '/services/metaverse',
    desc: 'Immersive virtual worlds, metaverse gaming, VR/AR integration, virtual real estate, and avatar systems.',
    tags: ['Unity', 'Unreal', 'WebGL', 'VR/AR'],
    color: '#EF4444',
  },
  {
    icon: '📱', title: 'Mobile App Development', href: '/services/mobile-apps',
    desc: 'Native iOS/Android and cross-platform fintech, DeFi, and enterprise mobile applications.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    color: '#F97316',
  },
  {
    icon: '☁️', title: 'Cloud & DevOps', href: '/services/devops',
    desc: 'Enterprise cloud architecture, CI/CD pipelines, Kubernetes orchestration, and infrastructure automation.',
    tags: ['AWS', 'Docker', 'K8s', 'Terraform'],
    color: '#14B8A6',
  },
  {
    icon: '🔐', title: 'Security & Audits', href: '/services/security-audit',
    desc: 'Comprehensive smart contract audits, penetration testing, security architecture reviews, and compliance assessments.',
    tags: ['Audit', 'Pentest', 'OWASP', 'VAPT'],
    color: '#A855F7',
  },
];

export default function ServicesSection() {
  return (
    <section className="section bg-[#020B18] relative overflow-hidden" id="services">
      <div className="orb w-96 h-96 bg-[#6644FF] opacity-[0.05] left-0 bottom-0" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="section-label">Development Services</div>
            <h2 className="h2 text-white">
              Enterprise-Grade Development
              <br /><span className="gt-blue">Services & Solutions</span>
            </h2>
          </div>
          <Link href="/services" className="btn btn-secondary flex-shrink-0">
            All Services <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href}
              className="card rounded-2xl p-6 group border border-[#0E1E34] relative overflow-hidden"
              style={{ '--card-color': s.color } as React.CSSProperties}>
              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `radial-gradient(ellipse at 20% 20%, ${s.color}08 0%, transparent 60%)` }} />
              {/* Top border line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }} />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-[16px] font-bold text-white mb-2 group-hover:text-[#33B5E5] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[#7A8FA6] leading-relaxed mb-4 line-clamp-3">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {s.tags.map((tag) => (
                    <span key={tag} className="tech-pill text-[11px] py-1 px-2">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[13px] font-medium transition-colors"
                  style={{ color: s.color }}>
                  Learn More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
