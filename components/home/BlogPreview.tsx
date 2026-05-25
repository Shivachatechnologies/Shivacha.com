import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';

const POSTS = [
  {
    tag: 'Blockchain',
    tagColor: '#006FEE',
    title: 'The State of DeFi in 2025: Institutional Adoption and What It Means for Enterprises',
    excerpt: 'Institutional DeFi adoption is accelerating. We analyze the key protocols, compliance frameworks, and infrastructure requirements for enterprise-grade DeFi.',
    author: 'Shivacha Research',
    date: 'May 2025',
    readTime: '8 min read',
    href: '/blog/defi-institutional-adoption-2025',
  },
  {
    tag: 'AI',
    tagColor: '#338EF7',
    title: 'Building Enterprise AI Agents: Architecture Patterns for Financial Services',
    excerpt: 'How to architect autonomous AI agent systems for trading, compliance, and customer operations in regulated financial environments.',
    author: 'AI Lab',
    date: 'April 2025',
    readTime: '12 min read',
    href: '/blog/enterprise-ai-agents-fintech',
  },
  {
    tag: 'Fintech',
    tagColor: '#FFB800',
    title: 'Neo Banking Infrastructure: Complete Guide to Launching a Digital Bank in 2025',
    excerpt: 'From IBAN issuance to open banking APIs — everything you need to know about the technical and regulatory stack for a modern neo bank.',
    author: 'Fintech Desk',
    date: 'March 2025',
    readTime: '15 min read',
    href: '/blog/neo-banking-infrastructure-guide',
  },
  {
    tag: 'RWA',
    tagColor: '#00FF87',
    title: 'Real-World Asset Tokenization: The Complete Technical & Legal Framework',
    excerpt: 'Breaking down the ERC-3643 standard, custody solutions, investor portals, and regulatory requirements for compliant RWA tokenization.',
    author: 'Legal Tech',
    date: 'February 2025',
    readTime: '10 min read',
    href: '/blog/rwa-tokenization-framework',
  },
];

export default function BlogPreview() {
  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-label">Knowledge Hub</div>
            <h2 className="h2 text-slate-900">
              Insights &amp; Research from
              <br /><span className="gt-blue">Shivacha Labs</span>
            </h2>
          </div>
          <Link href="/blog" className="btn btn-secondary flex-shrink-0">
            All Articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {POSTS.map((post) => (
            <Link key={post.href} href={post.href}
              className="card rounded-2xl p-6 border border-slate-200 hover:border-slate-300 group flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="badge text-[11px] font-semibold"
                  style={{ background: `${post.tagColor}12`, borderColor: `${post.tagColor}30`, color: post.tagColor }}>
                  {post.tag}
                </span>
                <div className="flex items-center gap-1.5 text-[12px] text-slate-400">
                  <Clock size={11} />{post.readTime}
                </div>
              </div>
              <h3 className="text-[16px] font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#338EF7] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-[12px] text-slate-400">
                  <User size={12} />{post.author} · {post.date}
                </div>
                <div className="flex items-center gap-1 text-[13px] text-[#338EF7] font-medium">
                  Read <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
