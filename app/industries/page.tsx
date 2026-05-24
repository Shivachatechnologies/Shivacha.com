import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Industry Solutions | Shivacha Technologies',
  description: 'Enterprise blockchain, AI, and fintech solutions tailored for banking, forex, healthcare, real estate, gaming, government, and more.',
};

const INDUSTRIES = [
  {
    id: 'banking', icon: '🏦', name: 'Banking & Finance', color: '#0066FF',
    headline: 'Modernizing Financial Infrastructure',
    desc: 'From core banking modernization to DeFi-powered financial products. We build the infrastructure for the next generation of digital banking.',
    solutions: ['Digital Banking OS', 'Payment Rails (SWIFT/SEPA)', 'Core Banking Integration', 'Open Banking APIs (PSD2)', 'RegTech & AML', 'CBDC Infrastructure'],
    clients: 'Neobanks, Tier-2/3 Banks, Payment Processors, Remittance Companies',
  },
  {
    id: 'forex', icon: '📈', name: 'Forex & Trading', color: '#FFB800',
    headline: 'Institutional-Grade Trading Infrastructure',
    desc: 'Complete brokerage technology — MT4/MT5 integration, liquidity aggregation, risk management, and CRM built for FX brokers and prop trading firms.',
    solutions: ['MT4/MT5 Bridge', 'Liquidity Aggregation', 'Risk Engine', 'IB Management', 'Broker CRM', 'Regulatory Reporting'],
    clients: 'FX Brokers, Prop Trading Firms, Hedge Funds, Signal Providers',
  },
  {
    id: 'healthcare', icon: '🏥', name: 'Healthcare', color: '#EF4444',
    headline: 'Secure Healthcare Data Infrastructure',
    desc: 'HIPAA-compliant blockchain networks for patient data, clinical trials, pharmaceutical supply chain, and health data marketplaces.',
    solutions: ['Patient Data Management', 'Clinical Trials Blockchain', 'Drug Supply Chain', 'EHR Integration', 'Telehealth Platforms', 'Health Data Marketplace'],
    clients: 'Hospital Networks, Pharma Companies, Insurance, Health Tech Startups',
  },
  {
    id: 'real-estate', icon: '🏠', name: 'Real Estate', color: '#00FF87',
    headline: 'Property Tokenization & Digital Real Estate',
    desc: 'Fractional ownership, property tokenization, smart contract escrow, title registry, and RWA marketplace infrastructure for real estate.',
    solutions: ['Property Tokenization', 'Fractional Ownership', 'Smart Escrow', 'Title Registry', 'Investor Portals', 'Secondary Market'],
    clients: 'Real Estate Developers, Investment Platforms, REITs, Property Tech',
  },
  {
    id: 'gaming', icon: '🎮', name: 'Gaming & Metaverse', color: '#A855F7',
    headline: 'Web3 Gaming & Virtual Economy Infrastructure',
    desc: 'Play-to-earn economies, NFT gaming assets, metaverse infrastructure, in-game marketplaces, and blockchain game engines.',
    solutions: ['P2E Game Development', 'NFT Game Assets', 'Metaverse Worlds', 'In-Game Economies', 'Gaming NFT Marketplace', 'Token Launch'],
    clients: 'Game Studios, Metaverse Platforms, GameFi Protocols, NFT Projects',
  },
  {
    id: 'government', icon: '🏛️', name: 'Government & Public', color: '#00D4FF',
    headline: 'Digital Government & CBDC Infrastructure',
    desc: 'National digital identity, land registry, e-voting, public procurement transparency, CBDC infrastructure, and citizen service platforms.',
    solutions: ['Digital National ID', 'Land Title Registry', 'e-Voting Platform', 'CBDC Infrastructure', 'Public Procurement', 'Citizen Services'],
    clients: 'National Governments, Municipalities, Government Agencies, Central Banks',
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-[#000008]">
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-96 h-96 bg-[#0066FF] opacity-[0.06] -left-20 top-0" />
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="section-label justify-center mb-4">Industries</div>
            <h1 className="h1 text-white mb-6">Industry-Specific <br /><span className="gt-blue">Infrastructure Solutions</span></h1>
            <p className="lead max-w-2xl mx-auto">Deep domain expertise across every major industry. We understand the regulatory landscape, technical challenges, and growth drivers specific to your sector.</p>
          </div>
        </div>
      </section>

      <section className="section bg-[#020B18]">
        <div className="container space-y-8">
          {INDUSTRIES.map((ind, i) => (
            <div key={ind.id} id={ind.id}
              className="card rounded-3xl p-8 border border-[#0E1E34] hover:border-[#1E3A5A] group"
              style={{ background: `linear-gradient(135deg, ${ind.color}04 0%, transparent 50%)` }}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl">{ind.icon}</span>
                    <div>
                      <h2 className="text-[22px] font-bold text-white group-hover:text-[#60A5FA] transition-colors">{ind.name}</h2>
                      <p className="text-[14px] font-medium" style={{ color: ind.color }}>{ind.headline}</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#7A8FA6] leading-relaxed mb-4">{ind.desc}</p>
                  <p className="text-[12px] text-[#3D5470] mb-4"><span className="font-medium text-[#7A8FA6]">Clients:</span> {ind.clients}</p>
                  <Link href={`/industries/${ind.id}`} className="btn btn-secondary text-sm py-2.5 px-5">
                    Explore Solutions <ArrowRight size={13} />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {ind.solutions.map(s => (
                    <div key={s} className="flex items-center gap-2 p-3 rounded-xl bg-[#060E1C] border border-[#0E1E34] text-[13px] text-[#7A8FA6]">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ind.color }} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
