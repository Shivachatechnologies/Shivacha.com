import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Enterprise Blockchain & AI Development Services',
  description: 'Shivacha Technologies offers enterprise-grade blockchain, AI, DeFi, NFT, Web3, metaverse, smart contract, and fintech development services for global enterprises.',
};

const SERVICES = [
  {
    icon: '⛓️', title: 'Blockchain Development', href: '/services/blockchain-development', color: '#0066FF',
    desc: 'Custom Layer 1/2 solutions, consensus design, cross-chain bridges, enterprise private blockchains, and protocol development.',
    features: ['Custom blockchain architecture', 'Layer 2 scaling solutions', 'Cross-chain bridges', 'Consensus mechanism design', 'Enterprise private chains', 'Blockchain migration'],
    time: '8–16 weeks', team: '5–15 engineers',
  },
  {
    icon: '🧠', title: 'AI & ML Development', href: '/services/ai-development', color: '#00D4FF',
    desc: 'Custom LLMs, computer vision, NLP, predictive analytics, AI agents, and intelligent automation systems for enterprise.',
    features: ['Custom LLM development', 'AI agent orchestration', 'Computer vision systems', 'Predictive analytics', 'NLP & chatbots', 'MLOps pipelines'],
    time: '6–12 weeks', team: '3–10 engineers',
  },
  {
    icon: '📋', title: 'Smart Contract Development', href: '/services/smart-contracts', color: '#6644FF',
    desc: 'Audited, gas-optimized smart contracts. We handle the full lifecycle from design to third-party audit and deployment.',
    features: ['EVM & non-EVM contracts', 'Gas optimization', 'Third-party security audit', 'Upgrade patterns', 'Multi-sig governance', 'Automated testing'],
    time: '2–8 weeks', team: '2–6 engineers',
  },
  {
    icon: '💱', title: 'DeFi Development', href: '/services/defi-development', color: '#00FF87',
    desc: 'DEXs, lending protocols, yield aggregators, staking platforms, liquidity mining, and full DeFi ecosystem builds.',
    features: ['AMM & order book DEX', 'Lending & borrowing', 'Yield aggregators', 'Staking platforms', 'Liquidity mining', 'DAO governance'],
    time: '10–20 weeks', team: '6–15 engineers',
  },
  {
    icon: '🎨', title: 'NFT Development', href: '/services/nft-development', color: '#FFB800',
    desc: 'NFT marketplaces, minting platforms, fractionalization, gaming NFTs, royalty systems, and digital collectibles.',
    features: ['NFT marketplace', 'Custom minting UI', 'Fractionalization', 'Royalty distribution', 'NFT gaming assets', 'Bulk minting tools'],
    time: '6–14 weeks', team: '4–10 engineers',
  },
  {
    icon: '🌐', title: 'Web3 Development', href: '/services/web3-development', color: '#EF4444',
    desc: 'Decentralized applications, Web3 portals, DAO platforms, decentralized identity, and full dApp ecosystems.',
    features: ['Full-stack dApps', 'Wallet integrations', 'DAO platforms', 'Decentralized storage', 'Web3 auth', 'GraphQL subgraphs'],
    time: '8–16 weeks', team: '5–12 engineers',
  },
  {
    icon: '🌌', title: 'Metaverse Development', href: '/services/metaverse', color: '#A855F7',
    desc: 'Immersive virtual worlds, metaverse gaming, VR/AR integration, virtual real estate, and avatar systems.',
    features: ['3D world building', 'Avatar systems', 'Virtual real estate', 'In-world economy', 'VR/AR integration', 'Cross-platform play'],
    time: '16–30 weeks', team: '8–20 engineers',
  },
  {
    icon: '📱', title: 'Mobile App Development', href: '/services/mobile-apps', color: '#F97316',
    desc: 'Native iOS/Android and cross-platform fintech, DeFi, trading, and enterprise mobile applications.',
    features: ['React Native & Flutter', 'Native iOS & Android', 'DeFi wallet apps', 'Trading platforms', 'Biometric auth', 'Offline-first'],
    time: '8–16 weeks', team: '4–10 engineers',
  },
  {
    icon: '☁️', title: 'Cloud & DevOps', href: '/services/devops', color: '#14B8A6',
    desc: 'Enterprise cloud architecture, CI/CD, Kubernetes, infrastructure automation, and blockchain node management.',
    features: ['Multi-cloud architecture', 'Kubernetes clusters', 'CI/CD pipelines', 'Blockchain nodes', 'Monitoring & alerting', 'Disaster recovery'],
    time: '4–8 weeks', team: '2–6 engineers',
  },
  {
    icon: '🔐', title: 'Security Audits', href: '/services/security-audit', color: '#34D399',
    desc: 'Smart contract audits, penetration testing, threat modeling, compliance assessments, and ongoing security monitoring.',
    features: ['Smart contract audit', 'Penetration testing', 'Threat modeling', 'Compliance review', 'Bug bounty setup', 'Ongoing monitoring'],
    time: '2–4 weeks', team: '2–5 specialists',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#000008]">
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-96 h-96 bg-[#0066FF] opacity-[0.06] -left-20 top-0" />
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="section-label justify-center mb-4">Development Services</div>
            <h1 className="h1 text-white mb-6">Enterprise Development <br /><span className="gt-blue">Services</span></h1>
            <p className="lead max-w-2xl mx-auto">
              Specialized enterprise development services across blockchain, AI, DeFi, NFT, Web3,
              and cloud — delivered by 200+ specialized engineers.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s) => (
              <div key={s.href} className="card rounded-3xl p-7 border border-[#0E1E34] hover:border-[#1E3A5A] group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl flex-shrink-0">{s.icon}</div>
                  <div>
                    <h2 className="text-[18px] font-bold text-white group-hover:text-[#60A5FA] transition-colors mb-1">{s.title}</h2>
                    <div className="flex items-center gap-3">
                      <span className="badge badge-blue text-[11px]">⏱ {s.time}</span>
                      <span className="badge text-[11px] bg-[#6644FF]/10 border-[#6644FF]/25 text-[#A78BFA]">👥 {s.team}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[14px] text-[#7A8FA6] leading-relaxed mb-4">{s.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[12px] text-[#3D5470]">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.color }} />
                      {f}
                    </div>
                  ))}
                </div>
                <Link href={s.href} className="flex items-center gap-2 text-[14px] font-medium transition-colors"
                  style={{ color: s.color }}>
                  Explore Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
