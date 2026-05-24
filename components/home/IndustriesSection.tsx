import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const INDUSTRIES = [
  {
    icon: '🏦', name: 'Banking & Finance', href: '/industries/banking',
    desc: 'Core banking modernization, digital wallets, payment infrastructure, and regulatory compliance systems.',
    solutions: ['Digital Banking', 'Payment Rails', 'Core Banking', 'RegTech'],
  },
  {
    icon: '📈', name: 'Forex & Trading', href: '/industries/forex',
    desc: 'Brokerage platforms, liquidity management, risk engines, MT4/MT5 infrastructure, and IB management.',
    solutions: ['FX Platforms', 'Liquidity', 'Risk Engine', 'CRM'],
  },
  {
    icon: '🏥', name: 'Healthcare', href: '/industries/healthcare',
    desc: 'Patient data management, clinical trials on blockchain, supply chain integrity, and health data marketplaces.',
    solutions: ['EHR Blockchain', 'Clinical Trials', 'Supply Chain', 'Telemedicine'],
  },
  {
    icon: '🏠', name: 'Real Estate', href: '/industries/real-estate',
    desc: 'Property tokenization, fractional ownership platforms, smart contract escrow, and title registry systems.',
    solutions: ['Tokenization', 'Fractional', 'Smart Escrow', 'Title Registry'],
  },
  {
    icon: '🎮', name: 'Gaming & Metaverse', href: '/industries/gaming',
    desc: 'Play-to-earn economies, NFT gaming assets, metaverse infrastructure, and blockchain game engines.',
    solutions: ['P2E Games', 'NFT Assets', 'Metaverse', 'Game Tokens'],
  },
  {
    icon: '🏛️', name: 'Government & Public', href: '/industries/government',
    desc: 'National digital ID, land registry, e-voting, public procurement transparency, and CBDC infrastructure.',
    solutions: ['Digital ID', 'e-Voting', 'CBDC', 'Land Registry'],
  },
  {
    icon: '🚚', name: 'Supply Chain', href: '/industries/supply-chain',
    desc: 'End-to-end supply chain visibility, provenance tracking, document authentication, and IoT integration.',
    solutions: ['Provenance', 'IoT', 'Track & Trace', 'Documents'],
  },
  {
    icon: '🛡️', name: 'Insurance & Insurtech', href: '/industries/insurance',
    desc: 'Parametric insurance platforms, claims automation, risk pooling, and fraud detection AI systems.',
    solutions: ['Parametric', 'Claims AI', 'Risk Pools', 'Fraud Detection'],
  },
  {
    icon: '🎓', name: 'Education & EdTech', href: '/industries/education',
    desc: 'Credential verification, microlearning platforms, tokenized education rewards, and institutional systems.',
    solutions: ['Credentials', 'Certification', 'EdTokens', 'Portals'],
  },
];

export default function IndustriesSection() {
  return (
    <section className="section bg-[#000008] relative overflow-hidden" id="industries">
      <div className="orb w-96 h-96 bg-[#00FF87] opacity-[0.04] right-0 bottom-0" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-label justify-center">Industry Solutions</div>
          <h2 className="h2 text-white mb-4">
            Powering Innovation Across
            <br /><span className="gt-blue">Every Major Industry</span>
          </h2>
          <p className="lead">
            Deep domain expertise across verticals — we don&apos;t just build technology,
            we understand your industry&apos;s regulatory landscape, challenges, and growth drivers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((ind) => (
            <Link key={ind.href} href={ind.href}
              className="card rounded-2xl p-6 group border border-[#0E1E34] flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl flex-shrink-0">{ind.icon}</div>
                <div>
                  <h3 className="text-[16px] font-bold text-white group-hover:text-[#60A5FA] transition-colors">
                    {ind.name}
                  </h3>
                </div>
              </div>
              <p className="text-[13px] text-[#7A8FA6] leading-relaxed mb-4 flex-1 line-clamp-2">
                {ind.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {ind.solutions.map((s) => (
                  <span key={s} className="text-[11px] px-2 py-0.5 rounded-md bg-[#060E1C] border border-[#0E1E34] text-[#3D5470] group-hover:border-[#1E3A5A] transition-colors">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-[13px] text-[#60A5FA] font-medium">
                Explore Solutions <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
