import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Crypto Wallet Development Company | Mobile & Browser Wallets',
  description: 'Shivacha Technologies builds custom crypto wallets — mobile (iOS/Android), browser extension, MPC/custodial, and hardware wallets. 50+ wallets, 5M+ users.',
};

const WALLET_TYPES = [
  { icon: '📱', title: 'Mobile Wallet (iOS & Android)', desc: 'Native Swift/Kotlin or React Native cross-platform wallets with biometric auth, push notifications, in-app swap, staking, and WalletConnect V2 integration for 50+ chains.', accent: '#0099E6' },
  { icon: '🌐', title: 'Browser Extension Wallet', desc: 'Chrome/Firefox/Brave extension wallets (MetaMask-style) with injected Web3 provider, dApp browser, hardware wallet support (Ledger/Trezor), and multi-chain account management.', accent: '#6644FF' },
  { icon: '🔐', title: 'MPC / Custodial Wallet', desc: 'Multi-Party Computation wallets where private keys are never in one place. HSM-backed threshold signatures, policy engines, spend limits, and institutional custody frameworks.', accent: '#00FF87' },
  { icon: '💳', title: 'Smart Contract Wallet', desc: 'ERC-4337 Account Abstraction wallets with social recovery, gasless transactions (paymaster), session keys, batched transactions, and biometric signing without seed phrases.', accent: '#FFB800' },
  { icon: '⚙️', title: 'Hardware Wallet Firmware', desc: 'Custom firmware for hardware wallets (STM32, Ledger SDK) with secure element integration, TRNG-based key generation, display-verified transactions, and multi-asset support.', accent: '#A855F7' },
  { icon: '🏢', title: 'Enterprise Wallet SDK', desc: 'White-label wallet SDK for enterprises to embed crypto payments, staking, and NFT management into any app — with React Native, Flutter, and native iOS/Android SDKs.', accent: '#00D4FF' },
];

const FEATURES = [
  '50+ blockchain networks supported',
  'Biometric auth (Face ID, fingerprint)',
  'WalletConnect V2 dApp browser',
  'In-wallet DEX swap (aggregator)',
  'NFT gallery with metadata display',
  'Hardware wallet (Ledger/Trezor) bridge',
  'ERC-4337 gasless transactions',
  'Multi-sig transaction approval',
  'Real-time price feeds & portfolio',
  'Push notifications for transactions',
  'CSV export for tax reporting',
  'White-label branding ready',
];

const CHAINS = [
  'Ethereum', 'Bitcoin', 'Solana', 'BNB Chain', 'Polygon', 'Avalanche',
  'Arbitrum', 'Optimism', 'Base', 'TON', 'Near Protocol', 'Cosmos',
  'Tron', 'Cardano', 'Polkadot', 'Fantom',
];

export default function WalletDevelopmentPage() {
  return (
    <div className="bg-[#000008]">

      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] bg-[#A855F7] opacity-[0.05] -left-40 top-0" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Wallet Development</div>
              <h1 className="h1 text-white mb-6">
                Crypto Wallet
                <br /><span className="gt-blue">Development Company</span>
              </h1>
              <p className="lead max-w-xl mb-8">
                We build custom mobile, browser extension, MPC, and smart contract wallets for enterprises,
                fintech startups, and consumer apps — 50+ wallets shipped, 5M+ end users.
              </p>
              <div className="flex gap-4 flex-wrap mb-10">
                <Link href="/contact#consultation" className="btn btn-primary">
                  Get Free Consultation <ArrowRight size={14} />
                </Link>
                <Link href="/products/wallet" className="btn btn-secondary">View Product</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { v: '50+', l: 'Wallets Shipped' },
                  { v: '5M+', l: 'End Users' },
                  { v: '50+', l: 'Chains Supported' },
                  { v: 'iOS & Android', l: 'Native & Cross-Platform' },
                ].map(s => (
                  <div key={s.l} className="metric-card">
                    <p className="text-lg font-black" style={{ color: '#A855F7' }}>{s.v}</p>
                    <p className="text-[11px] text-[#3D5470]">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="glass-lg rounded-3xl p-7 border border-[#0E1E34] relative overflow-hidden">
                <div className="scan-line" />
                <p className="text-[12px] text-[#3D5470] uppercase tracking-wider mb-4">Enterprise Wallet Dashboard</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[13px] text-[#3D5470]">Total Portfolio Value</p>
                    <p className="text-2xl font-black text-white">$248,420.50</p>
                  </div>
                  <span className="text-[12px] px-2 py-1 rounded-lg text-green-400 bg-green-400/10">+8.4% 24h</span>
                </div>
                <div className="space-y-2 mb-4">
                  {[
                    { token: 'ETH', amount: '42.5', value: '$149,680', pct: '60%' },
                    { token: 'BTC', amount: '1.2', value: '$80,904', pct: '33%' },
                    { token: 'USDC', amount: '17,836', value: '$17,836', pct: '7%' },
                  ].map(r => (
                    <div key={r.token} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#060E1C] border border-[#0E1E34]">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[12px] flex-shrink-0"
                        style={{ background: '#A855F720', color: '#A855F7' }}>{r.token}</div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-[13px] font-semibold text-white">{r.token}</span>
                          <span className="text-[13px] text-white">{r.value}</span>
                        </div>
                        <div className="w-full bg-[#0E1E34] rounded-full h-1 mt-1">
                          <div className="h-1 rounded-full" style={{ width: r.pct, background: '#A855F7' }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  {['Send', 'Receive', 'Swap', 'Stake'].map(a => (
                    <button key={a} className="flex-1 py-2 rounded-xl text-[12px] font-medium text-white"
                      style={{ background: '#A855F720', border: '1px solid #A855F730' }}>{a}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Types */}
      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Wallet Types</div>
            <h2 className="h2 text-white">Wallets We <span className="gt-blue">Design & Build</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WALLET_TYPES.map(w => (
              <div key={w.title} className="card rounded-2xl p-6 border border-[#0E1E34] group"
                style={{ ['--hover-color' as string]: w.accent }}>
                <div className="text-4xl mb-4">{w.icon}</div>
                <h3 className="text-[15px] font-bold text-white mb-2 group-hover:text-[#33B5E5] transition-colors">{w.title}</h3>
                <p className="text-[13px] text-[#7A8FA6] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-sm bg-[#000008]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">Standard Features</div>
              <h2 className="h2 text-white mb-4">Every Wallet Includes <span className="gt-blue">These Features</span></h2>
              <p className="lead mb-6">
                Our wallet template delivers a production-ready feature set so you don&apos;t build from scratch —
                you customize and launch faster.
              </p>
              <Link href="/contact#demo" className="btn btn-primary">Request Demo <ArrowRight size={14} /></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {FEATURES.map(f => (
                <div key={f} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060E1C] border border-[#0E1E34]">
                  <CheckCircle size={14} className="text-[#A855F7] flex-shrink-0" />
                  <span className="text-[13px] text-[#7A8FA6]">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chains */}
      <section className="section-sm bg-[#020B18]">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="h3 text-white">50+ Blockchain <span className="gt-blue">Networks Supported</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {CHAINS.map(c => (
              <span key={c} className="tech-pill text-[13px]">{c}</span>
            ))}
            <span className="tech-pill text-[13px]">+34 more chains...</span>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
