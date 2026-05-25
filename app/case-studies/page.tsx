import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Case Studies | Enterprise Blockchain & AI Projects | Shivacha Technologies',
  description: 'Detailed case studies of enterprise blockchain, AI, fintech, and DeFi projects delivered by Shivacha Technologies. Real results, real metrics, real enterprises.',
};

const CASE_STUDIES = [
  {
    client: 'FinVault Exchange', country: '🇺🇸 USA', type: 'Crypto Exchange', duration: '14 weeks',
    color: '#0099E6', logo: 'FV',
    headline: 'Built a Tier-1 crypto exchange processing $847M in daily volume',
    challenge: 'FinVault needed a scalable, institutional-grade centralized exchange that could handle Tier-1 volume from day one — with KYC compliance, advanced trading features, and a mobile-first UX.',
    solution: 'Shivacha built a complete white-label CEX with a custom Rust-based matching engine capable of 100K+ TPS. We delivered multi-chain support, margin trading, derivatives, and a React Native mobile app in 14 weeks.',
    results: [
      { v: '$847M', l: '24h Volume' },
      { v: '100K+', l: 'TPS Capacity' },
      { v: '1.2M', l: 'Active Users' },
      { v: '99.99%', l: 'Uptime' },
    ],
    tech: ['Rust', 'Kafka', 'Redis', 'PostgreSQL', 'React', 'React Native', 'AWS'],
    quote: "Shivacha delivered a Tier-1 exchange that outperforms incumbents. The matching engine's latency is remarkable.",
    quoteName: 'David Hartmann, CTO',
  },
  {
    client: 'NeoFi Digital Bank', country: '🇬🇧 UK', type: 'Neo Banking', duration: '10 weeks',
    color: '#6644FF', logo: 'NF',
    headline: 'Launched a multi-currency neobank with 80% faster customer onboarding',
    challenge: 'NeoFi needed a full digital banking OS — virtual IBANs, SWIFT/SEPA rails, multi-currency accounts, and PSD2 compliance — to obtain FCA authorization and launch in the UK market.',
    solution: 'We built a complete neo-banking infrastructure including core banking microservices, virtual IBAN issuance in 40 countries, open banking APIs, AI-powered KYC, and an iOS/Android app in 10 weeks.',
    results: [
      { v: '180+', l: 'Currencies' },
      { v: '80%', l: 'Faster KYC' },
      { v: '1M+', l: 'Daily Txs' },
      { v: 'FCA', l: 'Authorized' },
    ],
    tech: ['Core Banking API', 'PSD2', 'ISO 20022', 'AI KYC', 'React Native', 'PostgreSQL'],
    quote: 'Our customer onboarding dropped from 3 days to 4 hours. The infrastructure is rock-solid.',
    quoteName: 'Priya Nair, Founder',
  },
  {
    client: 'ForexPro Systems', country: '🇮🇳 India', type: 'Forex Infrastructure', duration: '12 weeks',
    color: '#FFB800', logo: 'FP',
    headline: 'MT5 + CRM + Liquidity platform managing 2,000+ instruments for 100+ brokers',
    challenge: 'ForexPro wanted to transition from fragmented vendor tools to a unified brokerage technology stack — MT5 bridge, liquidity aggregation, risk management, and CRM under one platform.',
    solution: 'We built a complete forex brokerage OS with custom MT5 bridge, liquidity aggregation from 5 prime brokers, real-time risk engine, IB management, and a white-label broker CRM.',
    results: [
      { v: '2000+', l: 'Instruments' },
      { v: '<10ms', l: 'Execution' },
      { v: '100+', l: 'Sub-Brokers' },
      { v: '$50M', l: 'Monthly Vol' },
    ],
    tech: ['FIX Protocol', 'MT5 Bridge', 'Python', 'Redis', 'C++', 'React', 'Kubernetes'],
    quote: 'The unified platform saved us 60% in technology costs and gave us a competitive edge we never had.',
    quoteName: 'Rajesh Menon, CEO',
  },
  {
    client: 'TokenReal Estate', country: '🇸🇬 Singapore', type: 'RWA Tokenization', duration: '16 weeks',
    color: '#00FF87', logo: 'TR',
    headline: '$50M in prime real estate assets tokenized on compliant blockchain infrastructure',
    challenge: 'TokenReal wanted to fractionally tokenize a portfolio of Singapore and Dubai real estate for accredited investors globally — with full regulatory compliance and a secondary trading market.',
    solution: 'We built an end-to-end RWA tokenization platform using ERC-3643 security tokens, Fireblocks custody, an investor KYC portal, automated dividend distribution, and a DEX-powered secondary market.',
    results: [
      { v: '$50M', l: 'Assets Tokenized' },
      { v: '5,000+', l: 'Investors' },
      { v: 'ERC-3643', l: 'Standard' },
      { v: '30+', l: 'Properties' },
    ],
    tech: ['Ethereum', 'ERC-3643', 'Fireblocks', 'Solidity', 'Next.js', 'AWS'],
    quote: 'Shivacha understood both the technical and regulatory complexity. The platform just works.',
    quoteName: 'Sarah Chen, VP Engineering',
  },
  {
    client: 'MedChain Labs', country: '🇦🇺 Australia', type: 'Healthcare Blockchain', duration: '20 weeks',
    color: '#EF4444', logo: 'MC',
    headline: 'Hyperledger-based patient data network across 50+ hospitals in APAC',
    challenge: 'MedChain needed a federated blockchain network to enable secure patient data sharing between competing hospital groups, pharma companies, and insurance providers — HIPAA and LGPD compliant.',
    solution: 'We deployed a Hyperledger Fabric consortium network with privacy channels, FHIR-compatible APIs, ZK-proof patient consent, drug supply chain tracking, and a clinical trials data marketplace.',
    results: [
      { v: '50+', l: 'Hospitals' },
      { v: '2M+', l: 'Patient Records' },
      { v: 'HIPAA', l: 'Compliant' },
      { v: '100%', l: 'Audit Trail' },
    ],
    tech: ['Hyperledger Fabric', 'FHIR', 'ZK-Proofs', 'Node.js', 'Azure', 'Docker'],
    quote: 'Patient data now flows between hospital systems in seconds instead of weeks. Life-saving impact.',
    quoteName: 'Elena Bastos, Director',
  },
  {
    client: 'CryptoArb Capital', country: '🇦🇪 UAE', type: 'AI Trading Bots', duration: '8 weeks',
    color: '#00D4FF', logo: 'CA',
    headline: 'AI-powered trading ecosystem managing $100M across 15 exchanges',
    challenge: 'CryptoArb needed a professional algorithmic trading infrastructure — strategy backtesting, live deployment, multi-exchange connectivity, and ML-powered signal generation — all integrated.',
    solution: 'We built a full trading bot ecosystem with a visual strategy builder, 10+ years of historical backtesting, ML signal engine, live deployment with risk controls, and real-time analytics across 15 exchanges.',
    results: [
      { v: '15', l: 'Exchanges' },
      { v: '$100M', l: 'AUM' },
      { v: '50+', l: 'Strategies' },
      { v: '24/7', l: 'Operation' },
    ],
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'Kubernetes', 'Grafana'],
    quote: "The platform processes 50,000 signals per second. We've scaled from 2 to 15 exchanges without changing a line of strategy code.",
    quoteName: 'Marcus Volkov, CTO',
  },
];

const STATS = [
  { v: '500+', l: 'Projects Delivered', icon: '🚀' },
  { v: '$2.4B+', l: 'Value Managed', icon: '💰' },
  { v: '50+', l: 'Countries', icon: '🌍' },
  { v: '98%', l: 'Client Satisfaction', icon: '⭐' },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#000008]">

      {/* Hero */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] bg-[#0099E6] opacity-[0.06] -left-40 top-0" />
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="section-label justify-center mb-4">Case Studies</div>
            <h1 className="h1 text-white mb-6">
              Real Results for
              <br /><span className="gt-blue">Real Global Enterprises</span>
            </h1>
            <p className="lead max-w-2xl mx-auto mb-10">
              Detailed breakdowns of how Shivacha Technologies has helped enterprises launch, scale, and
              transform with blockchain, AI, and fintech infrastructure across 50+ countries.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {STATS.map(s => (
                <div key={s.l} className="metric-card">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="text-xl font-black gt-blue">{s.v}</p>
                  <p className="text-[11px] text-[#3D5470]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-[#020B18]">
        <div className="container space-y-10">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.client}
              className="card rounded-3xl border border-[#0E1E34] hover:border-[#1E3A5A] overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${cs.color}04 0%, transparent 50%)` }}>

              {/* Header */}
              <div className="p-8 pb-6 border-b border-[#0E1E34]">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-[15px]"
                    style={{ background: `${cs.color}20`, color: cs.color }}>
                    {cs.logo}
                  </div>
                  <div>
                    <p className="text-[16px] font-bold text-white">{cs.client}</p>
                    <p className="text-[13px] text-[#3D5470]">{cs.country}</p>
                  </div>
                  <span className="badge text-[11px]" style={{ background: `${cs.color}15`, borderColor: `${cs.color}30`, color: cs.color }}>
                    {cs.type}
                  </span>
                  <span className="flex items-center gap-1 text-[12px] text-[#3D5470]">
                    <Clock size={11} /> {cs.duration}
                  </span>
                </div>
                <h2 className="text-[20px] font-bold text-white leading-snug mb-6">{cs.headline}</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#3D5470] mb-2">The Challenge</p>
                    <p className="text-[14px] text-[#7A8FA6] leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#3D5470] mb-2">Our Solution</p>
                    <p className="text-[14px] text-[#7A8FA6] leading-relaxed">{cs.solution}</p>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-4 border-b border-[#0E1E34]">
                {cs.results.map((m) => (
                  <div key={m.l} className="text-center py-5 border-r border-[#0E1E34] last:border-0">
                    <div className="text-[22px] font-black" style={{ color: cs.color }}>{m.v}</div>
                    <div className="text-[12px] text-[#3D5470] mt-0.5">{m.l}</div>
                  </div>
                ))}
              </div>

              {/* Quote + Tech */}
              <div className="p-6 flex flex-col md:flex-row items-start gap-6">
                <div className="flex-1 glass rounded-2xl p-5 border border-[#0E1E34]">
                  <p className="text-[14px] text-[#7A8FA6] leading-relaxed italic mb-3">&ldquo;{cs.quote}&rdquo;</p>
                  <p className="text-[13px] font-semibold text-white">— {cs.quoteName}</p>
                </div>
                <div className="md:w-64 flex-shrink-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#3D5470] mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tech.map(t => (
                      <span key={t} className="tech-pill text-[11px] py-1 px-2">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio CTA */}
      <section className="section-sm bg-[#000008]">
        <div className="container">
          <div className="glass rounded-3xl p-10 border border-[#0E1E34] text-center max-w-3xl mx-auto">
            <div className="text-5xl mb-4">📋</div>
            <h2 className="text-2xl font-bold text-white mb-3">Want Our Full Portfolio Deck?</h2>
            <p className="text-[#7A8FA6] mb-6 leading-relaxed">
              We have 400+ additional case studies covering every industry and technology vertical.
              Request a tailored deck with projects specific to your industry and use case.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Request Portfolio Deck <ArrowRight size={14} />
              </Link>
              <Link href="/portfolio" className="btn btn-secondary">View Portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
