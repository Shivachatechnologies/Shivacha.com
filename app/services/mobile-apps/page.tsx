import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Mobile App Development | Fintech, Blockchain & Enterprise — Shivacha Technologies',
  description: 'Shivacha Technologies builds production-grade mobile apps — React Native, Flutter, Swift, Kotlin. DeFi wallets, trading terminals, crypto apps, and enterprise dashboards for iOS & Android.',
};

const OFFERINGS = [
  { icon: '📱', title: 'React Native Cross-Platform', desc: 'Single codebase for iOS & Android. Native performance, 60fps UI, Hermes engine, Expo/bare workflow — ship faster without sacrificing quality.' },
  { icon: '🦋', title: 'Flutter Applications', desc: 'Pixel-perfect UIs with Flutter. Dart-powered apps with custom animations, Riverpod/Bloc state management, and near-native rendering.' },
  { icon: '🍎', title: 'Native iOS (Swift)', desc: 'Full SwiftUI & UIKit development. Secure Enclave biometrics, ARKit, CoreML on-device AI, and deep App Store optimization.' },
  { icon: '🤖', title: 'Native Android (Kotlin)', desc: 'Jetpack Compose UIs, Room DB, WorkManager, and Android Keystore integration. Built for Google Play and enterprise MDM deployment.' },
  { icon: '💎', title: 'DeFi Wallet Apps', desc: 'Non-custodial wallets with seed phrase management, multi-chain support (EVM, Solana, Cosmos), hardware wallet bridging, and biometric auth.' },
  { icon: '📈', title: 'Trading Terminal Apps', desc: 'Real-time order books, TradingView SDK charting, WebSocket feeds, limit/market/stop orders, and portfolio analytics — all mobile-native.' },
  { icon: '🏢', title: 'Enterprise Dashboards', desc: 'Offline-first enterprise apps with role-based access, SSO/SAML, MDM compliance, white-label theming, and REST/GraphQL backends.' },
  { icon: '🎨', title: 'NFT & Web3 Apps', desc: 'NFT marketplace apps, mint flows, IPFS media handling, OpenSea/Blur integrations, WalletConnect v2, and in-app Web3 browser.' },
];

const TECH = [
  { name: 'React Native', cat: 'Framework' }, { name: 'Flutter', cat: 'Framework' },
  { name: 'Swift 5.9', cat: 'iOS' }, { name: 'Kotlin', cat: 'Android' },
  { name: 'Jetpack Compose', cat: 'Android UI' }, { name: 'SwiftUI', cat: 'iOS UI' },
  { name: 'Web3.js', cat: 'Blockchain' }, { name: 'WalletConnect SDK', cat: 'Blockchain' },
  { name: 'Wagmi / Viem', cat: 'Blockchain' }, { name: 'Expo', cat: 'Toolchain' },
  { name: 'Firebase', cat: 'Backend' }, { name: 'TradingView SDK', cat: 'Charts' },
];

const USE_CASES = [
  { title: 'Crypto Wallets', detail: 'Multi-chain, non-custodial, biometric auth, hardware wallet support' },
  { title: 'Trading Apps', detail: 'Real-time order books, TradingView charts, WebSocket feeds' },
  { title: 'Banking Apps', detail: 'Open banking, PSD2 compliance, biometric KYC, card management' },
  { title: 'NFT Marketplaces', detail: 'Mint, list, bid, and transfer NFTs with IPFS & Arweave media' },
  { title: 'Enterprise ERP Mobile', detail: 'Offline-first, MDM-ready, SSO, complex approval workflows' },
  { title: 'DeFi Frontends', detail: 'Swap interfaces, yield farming dashboards, liquidity pool UIs' },
];

const PROCESS = [
  { step: '01', title: 'Discovery & Architecture', desc: 'We map your user journeys, define the tech stack, and architect the data layer — REST/GraphQL/WebSocket — before writing a line of UI.' },
  { step: '02', title: 'UX/UI Design', desc: 'Figma prototypes with your brand tokens. Interactive prototypes reviewed with stakeholders before development begins.' },
  { step: '03', title: 'Agile Development', desc: 'Two-week sprints with working builds on TestFlight/Firebase App Distribution after each sprint. Full CI/CD from day one.' },
  { step: '04', title: 'QA & Security Testing', desc: 'Device matrix testing (150+ devices via BrowserStack), OWASP Mobile Top 10 checks, performance profiling, and penetration testing.' },
  { step: '05', title: 'Launch & Hyper-care', desc: 'App Store & Play Store submission, phased rollouts, crash monitoring (Sentry), and 90-day post-launch hyper-care support.' },
];

const CHECKLIST = [
  'iOS & Android builds from a single or native codebase',
  'Biometric authentication (Face ID, Touch ID, Fingerprint)',
  'Offline-first architecture with conflict resolution',
  'End-to-end encrypted local storage (Keychain / Keystore)',
  'Push notifications (FCM / APNs) with deep-link routing',
  'App Store & Google Play submission and ASO',
  'CI/CD pipeline (GitHub Actions + Fastlane)',
  'In-app analytics (Mixpanel / Amplitude / custom)',
  'Real-time WebSocket or MQTT data feeds',
  '90-day post-launch monitoring & crash triage',
];

const FAQS = [
  {
    q: 'React Native vs Flutter — which do you recommend?',
    a: 'For teams with existing JavaScript/TypeScript engineers, React Native integrates naturally. Flutter is our recommendation when maximum UI fidelity and animation performance are critical. Both are production-ready; we will advise based on your specific use case.',
  },
  {
    q: 'How long does a crypto wallet app take to build?',
    a: 'A production-grade non-custodial multi-chain wallet takes 10–14 weeks: 2 weeks architecture & design, 8–10 weeks development, 2 weeks QA & security audit. Exchange-integrated wallets with trading UI add 4–6 more weeks.',
  },
  {
    q: 'Do you handle App Store and Google Play submissions?',
    a: 'Yes. We manage the full submission process including metadata, screenshots, compliance reviews (especially for fintech/crypto apps which require additional review), and respond to any reviewer queries on your behalf.',
  },
  {
    q: 'Can you add mobile to an existing web3 project?',
    a: 'Absolutely. We regularly port existing DeFi or fintech web apps to mobile, reusing existing smart contract ABIs, REST/GraphQL APIs, and design systems. We can have a functional prototype in 3–4 weeks.',
  },
];

const STATS = [
  { v: '100+', l: 'Mobile Apps Delivered' },
  { v: '5M+', l: 'Total App Downloads' },
  { v: '4', l: 'Platforms: iOS · Android · RN · Flutter' },
  { v: '8+', l: 'Years Mobile Experience' },
];

export default function MobileAppsPage() {
  return (
    <div className="bg-[#000008]">

      {/* ── HERO ── */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[560px] h-[560px] bg-[#F97316] opacity-[0.05] -right-32 top-0" />
        <div className="orb w-[320px] h-[320px] bg-[#33B5E5] opacity-[0.04] left-0 bottom-0" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Mobile App Development</div>
              <h1 className="h1 text-white mb-6">
                Fintech & Blockchain<br />
                <span className="gt-blue">Mobile Apps That Scale</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                We build production-grade iOS and Android apps for crypto wallets, trading
                terminals, DeFi frontends, and enterprise platforms. React Native, Flutter,
                Swift, Kotlin — delivered with security-first engineering.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Get Free Consultation <ArrowRight size={14} />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">View Mobile Projects</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {STATS.map((s) => (
                  <div key={s.l} className="metric-card">
                    <p className="text-xl font-black gt-blue">{s.v}</p>
                    <p className="text-[11px] text-[#3D5470] leading-tight mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual — mobile wallet dashboard */}
            <div className="hidden lg:block">
              <div className="dashboard-preview max-w-sm ml-auto">
                <div className="dashboard-bar">
                  <span className="db-dot bg-[#F97316]" />
                  <span className="db-dot bg-[#FFB800]" />
                  <span className="db-dot bg-[#34D399]" />
                  <span className="ml-2 text-[11px] text-[#3D5470]">Crypto Wallet — iOS</span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#060E1C] border border-[#0E1E34]">
                    <div>
                      <p className="text-[10px] text-[#3D5470]">Total Balance</p>
                      <p className="text-lg font-black text-white">$84,219.40</p>
                    </div>
                    <span className="badge badge-green text-[10px]">+3.2%</span>
                  </div>
                  {[
                    { coin: 'ETH', val: '$42,100', chg: '+2.1%', color: '#33B5E5' },
                    { coin: 'BTC', val: '$31,400', chg: '+1.8%', color: '#F97316' },
                    { coin: 'SOL', val: '$10,719', chg: '+5.4%', color: '#A78BFA' },
                  ].map((r) => (
                    <div key={r.coin} className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#040F20]">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: `${r.color}20`, color: r.color }}>{r.coin[0]}</div>
                        <span className="text-[12px] font-semibold text-white">{r.coin}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] text-white">{r.val}</p>
                        <p className="text-[10px] text-[#34D399]">{r.chg}</p>
                      </div>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {['Send', 'Receive', 'Swap'].map((a) => (
                      <div key={a} className="text-center py-2 rounded-lg border border-[#0E1E34] text-[11px] text-[#33B5E5] font-semibold">{a}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFERINGS ── */}
      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Services</div>
            <h2 className="h2 text-white">Mobile Development <span className="gt-blue">Capabilities</span></h2>
            <p className="lead mt-4">From DeFi wallets to enterprise dashboards — every platform, every paradigm.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {OFFERINGS.map((s) => (
              <div key={s.title} className="card rounded-2xl p-5 border border-[#0E1E34] hover:border-[#F97316]/30 group">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-[15px] font-bold text-white mb-2 group-hover:text-[#F97316] transition-colors">{s.title}</h3>
                <p className="text-[12px] text-[#7A8FA6] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="section-sm bg-[#000008]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-white">Technologies & <span className="gt-blue">Frameworks</span></h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {TECH.map((t) => (
              <span key={t.name} className="tech-pill">
                <span className="font-semibold text-white">{t.name}</span>
                <span className="text-[#3D5470]"> · {t.cat}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Use Cases</div>
            <h2 className="h2 text-white">Industries & <span className="gt-blue">Applications</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((u) => (
              <div key={u.title} className="card rounded-2xl p-6 border border-[#0E1E34] hover:border-[#F97316]/30">
                <h3 className="text-[16px] font-bold text-white mb-2">{u.title}</h3>
                <p className="text-[13px] text-[#7A8FA6]">{u.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section bg-[#000008]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">How We Work</div>
            <h2 className="h2 text-white">Our Development <span className="gt-blue">Process</span></h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="card rounded-2xl p-5 border border-[#0E1E34] hover:border-[#F97316]/30">
                <div className="text-[11px] font-black text-[#F97316] tracking-widest mb-2">{p.step}</div>
                <h3 className="text-[14px] font-bold text-white mb-2">{p.title}</h3>
                <p className="text-[12px] text-[#7A8FA6] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Deliverables</div>
              <h2 className="h2 text-white mb-4">What&apos;s <span className="gt-blue">Included</span></h2>
              <p className="lead mb-8">Every mobile engagement ships with a complete, production-ready package — not just an app binary.</p>
              <div className="grid gap-3">
                {CHECKLIST.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#F97316] shrink-0 mt-0.5" />
                    <span className="text-[14px] text-[#7A8FA6]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-8 border border-[#0E1E34]">
              <h3 className="h4 text-white mb-6">Start Your Mobile Project</h3>
              <div className="space-y-4 mb-6">
                {[
                  { label: 'App Type', value: 'DeFi / Trading / Enterprise' },
                  { label: 'Platforms', value: 'iOS · Android · Both' },
                  { label: 'Tech Stack', value: 'React Native / Flutter / Native' },
                  { label: 'Timeline', value: '8–16 weeks typical' },
                ].map((f) => (
                  <div key={f.label} className="flex items-center justify-between border-b border-[#0E1E34] pb-3">
                    <span className="text-[13px] text-[#3D5470]">{f.label}</span>
                    <span className="text-[13px] font-semibold text-white">{f.value}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact#consultation" className="btn btn-primary w-full justify-center">
                Book Free Architecture Review <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section bg-[#000008]">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <div className="section-label justify-center">FAQ</div>
            <h2 className="h2 text-white">Common <span className="gt-blue">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="card rounded-2xl p-6 border border-[#0E1E34]">
                <h3 className="text-[15px] font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-[13px] text-[#7A8FA6] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
