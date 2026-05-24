import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Shivacha Technologies',
  description: 'Explore 500+ enterprise blockchain, AI, and fintech projects delivered by Shivacha Technologies across 50+ countries.',
};

const CASE_STUDIES = [
  {
    client: 'FinVault Exchange', country: '🇺🇸 USA', type: 'Crypto Exchange',
    color: '#0066FF',
    headline: 'Built a Tier-1 crypto exchange handling $847M daily volume',
    description: 'Complete white-label CEX + DEX infrastructure with institutional-grade matching engine, multi-chain support, and advanced trading features. Launched in 14 weeks.',
    metrics: [
      { v: '$847M', l: '24h Volume' },
      { v: '100K', l: 'TPS Engine' },
      { v: '1.2M', l: 'Active Users' },
      { v: '99.99%', l: 'Uptime' },
    ],
    tech: ['Ethereum', 'Solana', 'Rust', 'Node.js', 'AWS'],
    duration: '14 weeks',
  },
  {
    client: 'NeoFi Digital Bank', country: '🇬🇧 UK', type: 'Neo Banking',
    color: '#6644FF',
    headline: 'Launched a multi-currency neo bank with 80% faster customer onboarding',
    description: 'Full digital banking OS with virtual IBANs, SWIFT/SEPA, multi-currency accounts, PSD2 open banking APIs, and AI-powered fraud detection. FCA authorized.',
    metrics: [
      { v: '180+', l: 'Currencies' },
      { v: '80%', l: 'Faster KYC' },
      { v: '1M+', l: 'Daily Txs' },
      { v: 'FCA', l: 'Regulated' },
    ],
    tech: ['Core Banking', 'PSD2 APIs', 'AI Fraud', 'React Native', 'PostgreSQL'],
    duration: '10 weeks',
  },
  {
    client: 'ForexPro Systems', country: '🇮🇳 India', type: 'Forex Infrastructure',
    color: '#FFB800',
    headline: 'MT5 + CRM + Liquidity platform managing 2000+ instruments',
    description: 'Complete forex brokerage infrastructure — MT5 bridge, liquidity aggregator, IB management, automated compliance, and broker CRM. Scaled to 100+ sub-brokers.',
    metrics: [
      { v: '2000+', l: 'Instruments' },
      { v: '<10ms', l: 'Execution' },
      { v: '100+', l: 'Brokers' },
      { v: '$50M', l: 'Monthly Vol' },
    ],
    tech: ['MT5 Bridge', 'FIX Protocol', 'Python', 'Redis', 'Kubernetes'],
    duration: '12 weeks',
  },
  {
    client: 'TokenReal Estate', country: '🇸🇬 Singapore', type: 'RWA Tokenization',
    color: '#00FF87',
    headline: '$50M in real estate assets tokenized on compliant blockchain infrastructure',
    description: 'End-to-end real estate tokenization — property fractional ownership, investor portal, KYC/AML, secondary trading market, and automated dividend distribution.',
    metrics: [
      { v: '$50M', l: 'Tokenized' },
      { v: '5000+', l: 'Investors' },
      { v: 'ERC-3643', l: 'Standard' },
      { v: '30+', l: 'Properties' },
    ],
    tech: ['Ethereum', 'ERC-3643', 'Solidity', 'Next.js', 'AWS'],
    duration: '16 weeks',
  },
  {
    client: 'MedChain Labs', country: '🇦🇺 Australia', type: 'Healthcare Blockchain',
    color: '#EF4444',
    headline: 'Hyperledger-based patient data network used by 50+ hospitals',
    description: 'Federated healthcare blockchain for secure patient data sharing, clinical trials management, pharmaceutical supply chain, and prescription tracking across 50+ hospitals.',
    metrics: [
      { v: '50+', l: 'Hospitals' },
      { v: '2M+', l: 'Records' },
      { v: 'HIPAA', l: 'Compliant' },
      { v: '100%', l: 'Audit Trail' },
    ],
    tech: ['Hyperledger Fabric', 'FHIR', 'Node.js', 'Azure', 'Docker'],
    duration: '20 weeks',
  },
  {
    client: 'CryptoArb Capital', country: '🇦🇪 UAE', type: 'Trading Bots',
    color: '#00D4FF',
    headline: 'AI-powered trading ecosystem across 15 exchanges generating consistent alpha',
    description: 'Full algorithmic trading infrastructure with strategy builder, ML-powered signals, backtesting engine, risk management, and live deployment across 15 crypto exchanges.',
    metrics: [
      { v: '15', l: 'Exchanges' },
      { v: '50+', l: 'Strategies' },
      { v: '$100M', l: 'Managed' },
      { v: '24/7', l: 'Operation' },
    ],
    tech: ['Python', 'TensorFlow', 'Redis', 'FastAPI', 'Kubernetes'],
    duration: '8 weeks',
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-[#000008]">
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-96 h-96 bg-[#0066FF] opacity-[0.06] -left-20 top-0" />
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="section-label justify-center mb-4">Portfolio</div>
            <h1 className="h1 text-white mb-6">500+ Enterprise Projects <br /><span className="gt-blue">Delivered Globally</span></h1>
            <p className="lead max-w-2xl mx-auto">
              From crypto exchanges to neo banks, DeFi protocols to AI trading systems —
              explore how Shivacha has transformed enterprises across 50+ countries.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-7">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.client}
                className="card rounded-3xl border border-[#0E1E34] hover:border-[#1E3A5A] overflow-hidden group">
                {/* Header */}
                <div className="p-6 pb-4" style={{ background: `linear-gradient(135deg, ${cs.color}08 0%, transparent 60%)` }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="badge text-[11px]" style={{ background: `${cs.color}15`, borderColor: `${cs.color}30`, color: cs.color }}>
                        {cs.type}
                      </span>
                      <span className="text-[12px] text-[#3D5470]">{cs.country}</span>
                    </div>
                    <span className="text-[12px] text-[#3D5470]">⏱ {cs.duration}</span>
                  </div>
                  <h3 className="text-[16px] font-bold text-white leading-snug mb-2 group-hover:text-[#60A5FA] transition-colors">
                    {cs.client}: {cs.headline}
                  </h3>
                  <p className="text-[13px] text-[#7A8FA6] leading-relaxed">{cs.description}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 border-y border-[#0E1E34]">
                  {cs.metrics.map((m) => (
                    <div key={m.l} className="text-center py-4 border-r border-[#0E1E34] last:border-0">
                      <div className="text-[16px] font-black" style={{ color: cs.color }}>{m.v}</div>
                      <div className="text-[11px] text-[#3D5470]">{m.l}</div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="p-5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tech.map((t) => (
                      <span key={t} className="tech-pill text-[11px] py-1 px-2">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[13px] font-medium flex-shrink-0 ml-3"
                    style={{ color: cs.color }}>
                    Read More <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More projects CTA */}
          <div className="mt-10 glass rounded-3xl p-8 border border-[#0E1E34] text-center">
            <h3 className="text-xl font-bold text-white mb-2">400+ More Projects in Our Portfolio</h3>
            <p className="text-[#7A8FA6] mb-5">Request our full portfolio deck with detailed case studies for your industry.</p>
            <Link href="/contact" className="btn btn-primary">
              Request Full Portfolio <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
