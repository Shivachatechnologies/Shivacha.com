import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Insights | Shivacha Technologies',
  description: 'Enterprise blockchain, AI, fintech, and DeFi insights from Shivacha Technologies research team.',
};

const POSTS = [
  { tag: 'Blockchain', color: '#0099E6', title: 'The State of DeFi in 2025: Institutional Adoption and Enterprise Requirements', excerpt: 'As institutional DeFi adoption accelerates, we break down the key protocols, compliance frameworks, and infrastructure requirements.', author: 'Shivacha Research', date: 'May 15, 2025', readTime: '8 min', href: '/blog/defi-institutional-2025' },
  { tag: 'AI', color: '#00D4FF', title: 'Building Enterprise AI Agents: Architecture Patterns for Financial Services', excerpt: 'How to architect autonomous AI agent systems for trading, compliance, and customer operations in regulated environments.', author: 'AI Lab', date: 'May 10, 2025', readTime: '12 min', href: '/blog/ai-agents-fintech' },
  { tag: 'Fintech', color: '#FFB800', title: 'Neo Banking Infrastructure: Complete Technical & Regulatory Guide 2025', excerpt: 'IBAN issuance, SWIFT/SEPA, open banking APIs, and regulatory compliance — everything for a modern digital bank.', author: 'Fintech Desk', date: 'April 28, 2025', readTime: '15 min', href: '/blog/neo-banking-guide' },
  { tag: 'RWA', color: '#00FF87', title: 'Real-World Asset Tokenization: Technical & Legal Framework', excerpt: 'ERC-3643, custody solutions, investor portals, and regulatory requirements for compliant RWA tokenization at scale.', author: 'Legal Tech', date: 'April 20, 2025', readTime: '10 min', href: '/blog/rwa-tokenization' },
  { tag: 'Forex', color: '#EF4444', title: 'MT5 vs Custom Trading Engine: When to Choose Each for Your Brokerage', excerpt: 'A deep technical comparison of MT5 integration vs building a custom order matching engine for modern forex brokers.', author: 'Trading Desk', date: 'April 12, 2025', readTime: '9 min', href: '/blog/mt5-vs-custom-engine' },
  { tag: 'Security', color: '#A855F7', title: 'Smart Contract Security in 2025: Patterns, Pitfalls, and Audit Checklist', excerpt: 'Comprehensive security guide covering reentrancy, flash loan attacks, oracle manipulation, and the definitive audit checklist.', author: 'Security Team', date: 'April 5, 2025', readTime: '14 min', href: '/blog/smart-contract-security-2025' },
  { tag: 'Web3', color: '#6644FF', title: 'Account Abstraction ERC-4337: Everything Enterprises Need to Know', excerpt: 'How ERC-4337 changes user onboarding, wallet UX, and enterprise adoption — with implementation examples.', author: 'Protocol Team', date: 'March 28, 2025', readTime: '11 min', href: '/blog/erc-4337-guide' },
  { tag: 'Crypto', color: '#F97316', title: 'Crypto Exchange Architecture: Building for 100K TPS at Enterprise Scale', excerpt: 'From matching engine design to liquidity management — the complete technical architecture of a high-performance crypto exchange.', author: 'Exchange Team', date: 'March 20, 2025', readTime: '16 min', href: '/blog/crypto-exchange-architecture' },
];

export default function BlogPage() {
  return (
    <div className="bg-[#000008]">
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-96 h-96 bg-[#0099E6] opacity-[0.06] right-0 top-0" />
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="section-label justify-center mb-4">Insights & Research</div>
            <h1 className="h1 text-white mb-6">Shivacha <span className="gt-blue">Knowledge Hub</span></h1>
            <p className="lead max-w-2xl mx-auto">
              Deep technical insights, research, and thought leadership on blockchain, AI,
              fintech, and enterprise technology from the Shivacha team.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[#020B18]">
        <div className="container">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {['All', 'Blockchain', 'AI', 'Fintech', 'Forex', 'DeFi', 'Web3', 'Security', 'RWA'].map(cat => (
              <button key={cat}
                className={`px-4 py-2 rounded-xl text-[13px] font-medium transition-all ${
                  cat === 'All'
                    ? 'bg-[#0099E6] text-white'
                    : 'bg-[#060E1C] border border-[#0E1E34] text-[#7A8FA6] hover:text-white hover:border-[#1E3A5A]'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {POSTS.map((post) => (
              <Link key={post.href} href={post.href}
                className="card rounded-2xl p-6 border border-[#0E1E34] hover:border-[#1E3A5A] group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="badge text-[11px]"
                    style={{ background: `${post.color}12`, borderColor: `${post.color}30`, color: post.color }}>
                    <Tag size={10} />{post.tag}
                  </span>
                  <span className="text-[12px] text-[#3D5470] flex items-center gap-1">
                    <Clock size={11} />{post.readTime} read
                  </span>
                </div>
                <h2 className="text-[16px] font-bold text-white mb-3 leading-snug group-hover:text-[#33B5E5] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-[13px] text-[#7A8FA6] leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#0E1E34]">
                  <div className="flex items-center gap-2 text-[12px] text-[#3D5470]">
                    <User size={11} />{post.author} · {post.date}
                  </div>
                  <span className="flex items-center gap-1 text-[13px] font-medium" style={{ color: post.color }}>
                    Read <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
