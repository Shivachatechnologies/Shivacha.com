import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const POSTS = [
  {
    tag: 'Blockchain', tagColor: '#006FEE',
    title: 'The State of DeFi in 2025: Institutional Adoption and What It Means for Enterprises',
    excerpt: 'Institutional DeFi is accelerating. We break down the key protocols, compliance frameworks, and infrastructure requirements for enterprise-grade deployment.',
    author: 'Shivacha Research', date: 'May 2025', readTime: '8 min',
    href: '/blog/defi-institutional-adoption-2025', featured: true,
  },
  {
    tag: 'AI', tagColor: '#8B5CF6',
    title: 'Building Enterprise AI Agents: Architecture Patterns for Financial Services',
    excerpt: 'How to architect autonomous multi-agent systems for trading, compliance, and customer ops in regulated environments.',
    author: 'AI Lab', date: 'Apr 2025', readTime: '12 min',
    href: '/blog/enterprise-ai-agents-fintech', featured: true,
  },
  {
    tag: 'Fintech', tagColor: '#F59E0B',
    title: 'Neo Banking Infrastructure: Complete Guide to Launching a Digital Bank in 2025',
    excerpt: 'From IBAN issuance to open banking APIs — everything you need to know about the technical and regulatory stack.',
    author: 'Fintech Desk', date: 'Mar 2025', readTime: '15 min',
    href: '/blog/neo-banking-infrastructure-guide', featured: false,
  },
  {
    tag: 'RWA', tagColor: '#10B981',
    title: 'Real-World Asset Tokenization: Complete Technical & Legal Framework',
    excerpt: 'ERC-3643, custody, investor portals, and regulatory requirements for compliant RWA tokenisation at scale.',
    author: 'Legal Tech', date: 'Feb 2025', readTime: '10 min',
    href: '/blog/rwa-tokenization-framework', featured: false,
  },
];

export default function BlogPreview() {
  const [post1, post2, ...rest] = POSTS;
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="overline mb-3">Knowledge Hub</p>
            <h2 className="h2">
              Insights from<br />
              <span className="gt-blue">Shivacha Labs</span>
            </h2>
          </div>
          <Link href="/blog"
            className="flex items-center gap-2 text-[13.5px] font-semibold text-[#006FEE] border border-blue-200 hover:border-blue-400 hover:bg-blue-50 px-5 py-2.5 rounded-xl transition-all flex-shrink-0 self-start md:self-auto">
            All Articles <ArrowRight size={14} />
          </Link>
        </div>

        {/* Featured 2 + small 2 */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Featured posts — left column */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {[post1, post2].map((post) => (
              <Link key={post.href} href={post.href}
                className="group bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 hover:shadow-[0_8px_28px_rgba(0,0,0,0.07)] transition-all hover:-translate-y-0.5 flex flex-col">
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold mb-4"
                  style={{ background: `${post.tagColor}12`, color: post.tagColor }}>
                  {post.tag}
                </span>
                <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-[#006FEE] transition-colors leading-snug mb-3 line-clamp-3 flex-1">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-[12px] text-slate-400">{post.date} · {post.readTime} read</span>
                  <ArrowRight size={14} className="text-slate-300 group-hover:text-[#006FEE] group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          {/* Small posts — right column */}
          <div className="flex flex-col gap-4">
            {rest.map((post) => (
              <Link key={post.href} href={post.href}
                className="group bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.07)] transition-all hover:-translate-y-0.5 flex items-start gap-4">
                <span className="inline-flex px-2.5 py-1 rounded-lg text-[11px] font-bold flex-shrink-0"
                  style={{ background: `${post.tagColor}12`, color: post.tagColor }}>
                  {post.tag}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[13.5px] font-bold text-slate-900 group-hover:text-[#006FEE] transition-colors leading-snug line-clamp-2 mb-1.5">
                    {post.title}
                  </h3>
                  <p className="text-[12px] text-slate-400">{post.date} · {post.readTime} read</p>
                </div>
              </Link>
            ))}
            <Link href="/blog"
              className="flex items-center justify-center gap-2 p-5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-2xl text-[13.5px] font-semibold text-slate-500 hover:text-[#006FEE] transition-all">
              View all articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
