import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

const INDUSTRIES: Record<string, {
  name: string; icon: string; color: string;
  tagline: string; headline: string; overview: string;
  challenges: string[]; solutions: { icon: string; title: string; desc: string }[];
  techStack: string[]; results: { v: string; l: string }[];
  clients: string; compliance: string[];
}> = {
  banking: {
    name: 'Banking & Finance',
    icon: '🏦',
    color: '#0099E6',
    tagline: 'Digital Banking & Payments Infrastructure',
    headline: 'Modernize Your Financial Infrastructure with Blockchain & AI',
    overview: 'Legacy banking systems cost institutions billions annually in maintenance, fraud, and inefficiency. Shivacha builds next-generation digital banking infrastructure — from core banking microservices and SWIFT/SEPA payment rails to CBDC infrastructure and DeFi-enabled treasury management — helping banks and fintech companies compete with neobank challengers.',
    challenges: [
      'Legacy core banking systems unable to support real-time payments',
      'Rising fraud and AML compliance costs eating into margins',
      'Customer expectations for instant, 24/7 multi-currency banking',
      'Regulatory pressure for open banking (PSD2, UPI, Open Finance)',
      'Inability to offer crypto and DeFi products alongside traditional banking',
    ],
    solutions: [
      { icon: '🏦', title: 'Neo Banking OS', desc: 'Complete digital banking platform with virtual IBANs, multi-currency accounts, SWIFT/SEPA rails, and mobile-first UX. Deployable in 10–14 weeks.' },
      { icon: '💳', title: 'Payment Gateway & Rails', desc: 'Real-time payment infrastructure — UPI, SWIFT, SEPA, ACH, and crypto payment rails with FX conversion and settlement finality.' },
      { icon: '🤖', title: 'AI Fraud Detection', desc: 'Real-time ML models for transaction fraud detection, AML screening, and behavioural analytics with <50ms decision latency.' },
      { icon: '🔓', title: 'Open Banking APIs (PSD2)', desc: 'Regulatory-compliant open banking API layer enabling third-party fintech integrations, account aggregation, and payment initiation.' },
      { icon: '🏛️', title: 'CBDC Infrastructure', desc: 'Central Bank Digital Currency issuance, distribution, and retail wallet infrastructure for central banks and monetary authorities.' },
      { icon: '⛓️', title: 'DeFi Treasury Management', desc: 'Blockchain-powered corporate treasury tools — multi-sig wallets, yield strategies, liquidity management, and tokenized assets.' },
    ],
    techStack: ['Core Banking API', 'ISO 20022', 'SWIFT GPI', 'PSD2', 'AI/ML', 'Blockchain', 'AWS', 'PostgreSQL', 'Kafka', 'React Native'],
    results: [{ v: '80%', l: 'Faster KYC' }, { v: '1M+', l: 'Daily Txs' }, { v: '$2B+', l: 'Processed' }, { v: 'FCA/RBI', l: 'Compliant' }],
    clients: 'Neobanks, Tier-2/3 Commercial Banks, Payment Processors, Remittance Companies, Credit Unions',
    compliance: ['FCA (UK)', 'RBI (India)', 'MAS (Singapore)', 'DFSA (UAE)', 'PSD2', 'ISO 27001'],
  },
  forex: {
    name: 'Forex & Trading',
    icon: '📈',
    color: '#FFB800',
    tagline: 'Institutional-Grade FX Brokerage Technology',
    headline: 'Complete Brokerage Technology Stack for FX & CFD Brokers',
    overview: 'Forex brokerages lose competitive edge and revenue when running fragmented vendor tools. Shivacha builds unified brokerage technology — MT4/MT5 bridges, liquidity aggregation, risk management, IB networks, and CRM — all tightly integrated into one platform. We have deployed technology for 100+ brokers across 30+ countries.',
    challenges: [
      'Fragmented technology stack driving high operational costs',
      'Poor execution quality and slippage losing clients to competitors',
      'Manual IB management and commission calculations causing errors',
      'Lack of multi-asset support beyond FX (crypto, indices, commodities)',
      'Compliance reporting across multiple jurisdictions is manually intensive',
    ],
    solutions: [
      { icon: '🔌', title: 'MT4/MT5 Bridge Integration', desc: 'Custom bridge connecting MT4/MT5 to your liquidity providers with full depth of market, spread markup engine, and execution reporting.' },
      { icon: '💧', title: 'Liquidity Aggregation', desc: 'Aggregate liquidity from 5+ prime brokers (UBS, JP Morgan, LMAX) with smart order routing, best execution, and thin spread delivery.' },
      { icon: '⚡', title: 'Risk Management Engine', desc: 'Real-time risk monitoring with exposure limits, auto-hedging, margin call automation, and regulatory capital reporting.' },
      { icon: '🤝', title: 'IB & Affiliate Network', desc: 'Multi-tier IB management portal with automated commission calculation, real-time reporting, and sub-broker hierarchy management.' },
      { icon: '📊', title: 'Broker CRM', desc: 'Purpose-built FX broker CRM with lead management, onboarding automation, KYC/AML, client portal, and compliance workflows.' },
      { icon: '📱', title: 'White-Label Trading App', desc: 'Branded iOS/Android trading app with real-time charts (TradingView), one-click trading, deposit/withdrawal, and push notifications.' },
    ],
    techStack: ['FIX Protocol', 'MT5 Bridge', 'C++', 'Python', 'Redis', 'PostgreSQL', 'React', 'React Native', 'Kubernetes', 'AWS'],
    results: [{ v: '2000+', l: 'Instruments' }, { v: '<10ms', l: 'Execution' }, { v: '100+', l: 'Brokers' }, { v: '60%', l: 'Cost Savings' }],
    clients: 'Retail FX Brokers, Prop Trading Firms, Prime Brokers, Hedge Funds, Signal Providers, White-Label Operators',
    compliance: ['FCA (UK)', 'CySEC (EU)', 'ASIC (AU)', 'FSCA (SA)', 'SCA (UAE)', 'SEBI (India)'],
  },
  healthcare: {
    name: 'Healthcare',
    icon: '🏥',
    color: '#EF4444',
    tagline: 'Secure Healthcare Data & Supply Chain Infrastructure',
    headline: 'HIPAA-Compliant Blockchain for Patient Data, Drug Supply Chain & Clinical Trials',
    overview: 'Healthcare data fragmentation costs the industry $8.3B annually in inefficiency and medical errors. Shivacha deploys Hyperledger Fabric-based blockchain networks that enable secure patient data sharing across competing hospital groups, transparent pharmaceutical supply chains, and tamper-proof clinical trial data — all while maintaining HIPAA, GDPR, and LGPD compliance.',
    challenges: [
      'Patient data siloed across competing hospital systems cannot be shared securely',
      'Drug supply chain counterfeiting causes thousands of deaths annually',
      'Clinical trial data integrity issues delay FDA approvals',
      'Insurance fraud costing $68B+ annually in the US alone',
      'Telehealth platforms lack secure, auditable health record access',
    ],
    solutions: [
      { icon: '📋', title: 'Patient Data Network', desc: 'Hyperledger Fabric consortium network enabling privacy-preserving patient data sharing between hospitals, insurers, and providers via FHIR-compatible APIs.' },
      { icon: '💊', title: 'Drug Supply Chain Tracking', desc: 'End-to-end pharmaceutical supply chain on blockchain — from manufacturer to patient — with DSCSA compliance, cold-chain monitoring, and anti-counterfeit verification.' },
      { icon: '🔬', title: 'Clinical Trials Platform', desc: 'Immutable clinical trial data registry with protocol compliance, patient consent management, adverse event reporting, and FDA submission-ready audit trails.' },
      { icon: '🏥', title: 'EHR Integration Layer', desc: 'Blockchain bridge to existing EHR systems (Epic, Cerner, MEDITECH) enabling cross-institutional record access with patient consent and full audit trail.' },
      { icon: '🤖', title: 'AI Diagnostics & Analytics', desc: 'ML-powered diagnostic assistance, predictive patient deterioration alerts, and population health analytics from anonymized patient data.' },
      { icon: '💰', title: 'Insurance Fraud Detection', desc: 'AI and blockchain-powered claims verification reducing fraudulent health insurance claims through immutable billing records and pattern detection.' },
    ],
    techStack: ['Hyperledger Fabric', 'FHIR R4', 'ZK-Proofs', 'Node.js', 'Python', 'TensorFlow', 'Azure', 'Docker', 'IPFS', 'PostgreSQL'],
    results: [{ v: '50+', l: 'Hospitals' }, { v: '2M+', l: 'Patient Records' }, { v: 'HIPAA', l: 'Compliant' }, { v: '100%', l: 'Audit Trail' }],
    clients: 'Hospital Networks, Pharmaceutical Companies, Health Insurance Providers, Clinical Research Organisations, Government Health Ministries',
    compliance: ['HIPAA (USA)', 'GDPR (EU)', 'LGPD (Brazil)', 'DSCSA (Drug Supply)', 'ISO 13485', 'HL7 FHIR R4'],
  },
  'real-estate': {
    name: 'Real Estate',
    icon: '🏠',
    color: '#00FF87',
    tagline: 'Property Tokenization & Digital Real Estate Infrastructure',
    headline: 'Fractional Property Ownership, RWA Tokenization & Smart Escrow',
    overview: 'Real estate is the world\'s largest asset class at $326T but remains illiquid, opaque, and inaccessible to most investors. Shivacha builds compliant real estate tokenization platforms — enabling fractional ownership, global investor access, automated dividend distribution, and secondary market liquidity for any property portfolio.',
    challenges: [
      'Property investment is inaccessible below $100K+ entry tickets for most investors',
      'Cross-border property transactions take weeks and involve excessive intermediary fees',
      'Title fraud and ownership disputes cost billions in litigation annually',
      'Rental income distribution to co-owners is manual and error-prone',
      'Regulatory complexity prevents digital securities from reaching global investors',
    ],
    solutions: [
      { icon: '🏘️', title: 'Property Tokenization Platform', desc: 'ERC-3643 / ERC-1400 security token platform converting real estate into tradeable digital securities with embedded compliance rules and investor protections.' },
      { icon: '👥', title: 'Fractional Ownership Portal', desc: 'Investor portal for property fractional ownership — KYC/AML onboarding, investment dashboard, rental yield tracking, and governance voting rights.' },
      { icon: '📝', title: 'Smart Contract Escrow', desc: 'Automated escrow contracts for property transactions — conditional transfer of funds and title upon fulfilment of all conditions, eliminating solicitor delays.' },
      { icon: '📒', title: 'Digital Title Registry', desc: 'Blockchain-based land and property title registry preventing fraud, enabling instant ownership verification, and reducing conveyancing time from months to minutes.' },
      { icon: '💰', title: 'Automated Dividend Distribution', desc: 'On-chain rental income distribution to token holders — proportional, automated, and verifiable. No manual calculations or wire transfers.' },
      { icon: '🔄', title: 'Secondary Market DEX', desc: 'Compliant secondary trading marketplace for property security tokens with KYC-gated access, bid/ask orderbook, and on-chain settlement.' },
    ],
    techStack: ['Ethereum', 'ERC-3643', 'Solidity', 'Fireblocks', 'Next.js', 'Sumsub', 'AWS', 'PostgreSQL', 'The Graph', 'IPFS'],
    results: [{ v: '$50M+', l: 'Tokenized' }, { v: '5000+', l: 'Investors' }, { v: '30+', l: 'Properties' }, { v: 'ERC-3643', l: 'Standard' }],
    clients: 'Real Estate Developers, Investment Platforms, REITs, Property Technology Companies, Family Offices, Real Estate Funds',
    compliance: ['SEC Reg D (USA)', 'MAS (Singapore)', 'DFSA (UAE)', 'FCA (UK)', 'ERC-3643 T-REX', 'GDPR'],
  },
  gaming: {
    name: 'Gaming & Metaverse',
    icon: '🎮',
    color: '#A855F7',
    tagline: 'Web3 Gaming, P2E Economies & Metaverse Infrastructure',
    headline: 'Play-to-Earn Games, NFT Economies & Virtual World Infrastructure',
    overview: 'The gaming industry is undergoing its biggest transformation since mobile — blockchain-powered economies giving players true ownership of in-game assets. Shivacha builds the infrastructure for Web3 games, metaverse platforms, and NFT economies — from smart contracts powering P2E rewards to immersive 3D metaverse worlds with real economic activity.',
    challenges: [
      'In-game assets have no real-world value — players invest time but own nothing',
      'Centralised game servers mean items, currencies, and progress can be deleted',
      'NFT speculation without genuine utility drives boom-bust cycles',
      'Metaverse platforms suffer from low quality, performance issues, and empty worlds',
      'Multi-chain interoperability prevents asset portability across games',
    ],
    solutions: [
      { icon: '🎮', title: 'Play-to-Earn Game Development', desc: 'Full P2E game development — from smart contract reward mechanics and tokenomics design to Unity/Unreal frontend integration and blockchain backend.' },
      { icon: '🎨', title: 'Gaming NFT Marketplace', desc: 'In-game and external NFT marketplace with royalty enforcement, bundling, auction mechanics, and verified game-asset provenance.' },
      { icon: '🌍', title: 'Metaverse World Builder', desc: 'Custom 3D metaverse environments built on Three.js / Babylon.js / Unreal Engine with avatar systems, virtual real estate, and spatial audio.' },
      { icon: '💎', title: 'Token Economy Design', desc: 'Dual-token and single-token game economy design with anti-inflation mechanics, staking rewards, governance rights, and sustainable emission curves.' },
      { icon: '🔗', title: 'Cross-Game Asset Bridge', desc: 'Interoperability layer enabling NFT and token portability across multiple games and metaverse platforms via a unified cross-chain bridge.' },
      { icon: '🏆', title: 'Tournament & Leaderboard', desc: 'Decentralised tournament infrastructure with on-chain prize pools, verifiable leaderboards, anti-cheat mechanisms, and automated prize distribution.' },
    ],
    techStack: ['Ethereum', 'Polygon', 'Solidity', 'Unity', 'Unreal Engine', 'Three.js', 'IPFS', 'React', 'Node.js', 'Redis', 'AWS'],
    results: [{ v: '1M+', l: 'Players' }, { v: '$200M+', l: 'In-Game Economy' }, { v: '50+', l: 'Game Titles' }, { v: 'Multi-Chain', l: 'Support' }],
    clients: 'Game Studios, Metaverse Platforms, GameFi Protocols, NFT Projects, eSports Organisations, Virtual World Developers',
    compliance: ['ESRB Rating', 'PEGI Rating', 'GDPR (EU)', 'COPPA (USA)', 'AML (Token Sales)', 'SEC Guidance on Tokens'],
  },
  government: {
    name: 'Government & Public',
    icon: '🏛️',
    color: '#00D4FF',
    tagline: 'Digital Government, CBDC & Public Sector Blockchain',
    headline: 'National Digital Identity, CBDC Infrastructure & e-Government Platforms',
    overview: 'Governments worldwide are digitizing public services to reduce corruption, improve efficiency, and build trust with citizens. Shivacha works with national governments, central banks, and municipalities to deploy blockchain-based digital identity systems, CBDC infrastructure, land registries, e-voting, and transparent public procurement platforms.',
    challenges: [
      'Identity fraud and document forgery affecting millions of citizens annually',
      'Paper-based land registries susceptible to corruption and title disputes',
      'Electoral systems lacking transparency and verifiability',
      'Public procurement opacity leading to billions in corruption losses',
      'Central banks need digital currency infrastructure to maintain monetary control',
    ],
    solutions: [
      { icon: '🪪', title: 'National Digital Identity', desc: 'Sovereign digital identity system with biometric verification, credential issuance, cross-border recognition, and privacy-preserving ZK-proof verification.' },
      { icon: '💵', title: 'CBDC Infrastructure', desc: 'Central Bank Digital Currency issuance platform with two-tier distribution (central bank → commercial banks → citizens), offline payments, and programmable money features.' },
      { icon: '📒', title: 'Land Title Registry', desc: 'Tamper-proof blockchain land registry preventing fraud, enabling instant ownership verification, and integrating with notary and court systems for dispute resolution.' },
      { icon: '🗳️', title: 'e-Voting Platform', desc: 'Cryptographically verifiable electronic voting with ZK-proof ballot privacy, public auditability, and resilience against manipulation — deployed at national scale.' },
      { icon: '📦', title: 'Public Procurement', desc: 'Transparent blockchain procurement platform publishing tenders, bids, and awards immutably — eliminating bid manipulation and ensuring taxpayer accountability.' },
      { icon: '🤝', title: 'Citizen Services Portal', desc: 'Unified digital citizen services integrating identity, permits, benefits, tax filings, and government communications on a single secure platform.' },
    ],
    techStack: ['Hyperledger Fabric', 'ZK-Proofs', 'Biometrics', 'Node.js', 'AWS GovCloud', 'Azure Government', 'PKI', 'IPFS', 'PostgreSQL', 'React'],
    results: [{ v: '10M+', l: 'Citizens Served' }, { v: '99.99%', l: 'Uptime SLA' }, { v: 'Sovereign', l: 'Data Hosting' }, { v: 'Zero', l: 'Fraud Incidents' }],
    clients: 'National Governments, Central Banks, Municipal Authorities, Ministry of Finance, Ministry of Health, Electoral Commissions',
    compliance: ['ISO 27001', 'eIDAS (EU)', 'NIST Framework', 'GDPR', 'Government Cloud Standards', 'FIPS 140-2'],
  },
};

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const industry = INDUSTRIES[id];
  if (!industry) return {};
  return {
    title: `${industry.name} Blockchain & AI Solutions | Shivacha Technologies`,
    description: `Shivacha Technologies delivers ${industry.tagline} for ${industry.clients}. Enterprise-grade blockchain and AI infrastructure.`,
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const industry = INDUSTRIES[id];
  if (!industry) notFound();

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] opacity-[0.07] -left-40 top-0" style={{ background: industry.color }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">{industry.name}</div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{industry.icon}</span>
            </div>
            <h1 className="h1 text-slate-900 mb-6">
              {industry.headline.split(' ').slice(0, 4).join(' ')}
              <br /><span style={{ color: industry.color }}>{industry.headline.split(' ').slice(4).join(' ')}</span>
            </h1>
            <p className="lead max-w-2xl mb-8">{industry.overview}</p>
            <div className="flex gap-4 flex-wrap mb-10">
              <Link href="/contact#consultation" className="btn btn-primary">
                Get Free Consultation <ArrowRight size={14} />
              </Link>
              <Link href="/case-studies" className="btn btn-secondary">View Case Studies</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {industry.results.map(s => (
                <div key={s.l} className="metric-card">
                  <p className="text-xl font-black" style={{ color: industry.color }}>{s.v}</p>
                  <p className="text-[11px] text-slate-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label mb-4">Industry Challenges</div>
              <h2 className="h2 text-slate-900 mb-4">Problems We <span className="gt-blue">Solve</span></h2>
              <p className="lead mb-6">Deep understanding of the {industry.name.toLowerCase()} sector means we solve the real problems — not generic ones.</p>
              <div className="space-y-3">
                {industry.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-black flex-shrink-0 mt-0.5"
                      style={{ background: `${industry.color}20`, color: industry.color }}>
                      {i + 1}
                    </div>
                    <span className="text-[13px] text-slate-500 leading-relaxed">{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label mb-4">Compliance & Regulation</div>
              <h3 className="h3 text-slate-900 mb-4">Regulatory <span className="gt-blue">Frameworks</span></h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {industry.compliance.map(c => (
                  <div key={c} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200">
                    <CheckCircle size={13} style={{ color: industry.color }} className="flex-shrink-0" />
                    <span className="text-[13px] text-slate-500">{c}</span>
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-slate-400">
                <span className="text-slate-500 font-medium">Typical clients:</span> {industry.clients}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Solutions</div>
            <h2 className="h2 text-slate-900">What We Build for <span style={{ color: industry.color }}>{industry.name}</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.solutions.map((s) => (
              <div key={s.title} className="card rounded-2xl p-6 border border-slate-200 hover:border-slate-300 group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2 group-hover:text-[#33B5E5] transition-colors">{s.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-sm bg-slate-50">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="h3 text-slate-900">Technology <span className="gt-blue">Stack</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {industry.techStack.map(t => (
              <span key={t} className="tech-pill text-[13px]">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
