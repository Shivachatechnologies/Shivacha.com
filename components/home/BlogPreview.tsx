import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const POSTS = [
  {
    tag: 'Blockchain', tagColor: '#3B82F6',
    title: 'The State of DeFi in 2025: Institutional Adoption and What It Means for Enterprises',
    author: 'Shivacha Research', date: 'May 2025', readTime: '8 min',
    href: '/blog/defi-institutional-adoption-2025',
  },
  {
    tag: 'AI', tagColor: '#8B5CF6',
    title: 'Building Enterprise AI Agents: Architecture Patterns for Financial Services',
    author: 'AI Lab', date: 'Apr 2025', readTime: '12 min',
    href: '/blog/enterprise-ai-agents-fintech',
  },
  {
    tag: 'Fintech', tagColor: '#F59E0B',
    title: 'Neo Banking Infrastructure: Complete Guide to Launching a Digital Bank in 2025',
    author: 'Fintech Desk', date: 'Mar 2025', readTime: '15 min',
    href: '/blog/neo-banking-infrastructure-guide',
  },
  {
    tag: 'RWA', tagColor: '#10B981',
    title: 'Real-World Asset Tokenization: Complete Technical & Legal Framework',
    author: 'Legal Tech', date: 'Feb 2025', readTime: '10 min',
    href: '/blog/rwa-tokenization-framework',
  },
];

export default function BlogPreview() {
  const [post1, post2, ...rest] = POSTS;
  return (
    <section className="section" style={{ background: '#060B18' }}>
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
            className="flex items-center gap-2 text-[13.5px] font-semibold text-[#60A5FA] border border-[#3B82F6]/25 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 px-5 py-2.5 rounded-xl transition-all flex-shrink-0 self-start md:self-auto">
            All Articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Featured posts */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {[post1, post2].map((post) => (
              <Link key={post.href} href={post.href}
                className="group border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-0.5 flex flex-col relative overflow-hidden"
                style={{ background: '#0C1428' }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top, ${post.tagColor}07, transparent 60%)` }} />
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold mb-4 self-start relative z-10"
                  style={{ background: `${post.tagColor}16`, color: post.tagColor }}>
                  {post.tag}
                </span>
                <h3 className="text-[15px] font-bold text-[rgba(240,246,255,0.80)] group-hover:text-white transition-colors leading-snug line-clamp-3 flex-1 mb-4 relative z-10">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] relative z-10">
                  <span className="text-[12px] text-[rgba(240,246,255,0.30)]">{post.date} · {post.readTime} read</span>
                  <ArrowRight size={14} className="text-white/20 group-hover:text-[#60A5FA] group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          {/* Compact posts */}
          <div className="flex flex-col gap-4">
            {rest.map((post) => (
              <Link key={post.href} href={post.href}
                className="group border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-0.5 flex items-start gap-4"
                style={{ background: '#0C1428' }}>
                <span className="inline-flex px-2.5 py-1 rounded-lg text-[11px] font-bold flex-shrink-0"
                  style={{ background: `${post.tagColor}16`, color: post.tagColor }}>
                  {post.tag}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[13.5px] font-bold text-[rgba(240,246,255,0.75)] group-hover:text-white transition-colors leading-snug line-clamp-2 mb-1.5">
                    {post.title}
                  </h3>
                  <p className="text-[12px] text-[rgba(240,246,255,0.30)]">{post.date} · {post.readTime} read</p>
                </div>
              </Link>
            ))}
            <Link href="/blog"
              className="flex items-center justify-center gap-2 p-5 border border-white/[0.06] hover:border-[#3B82F6]/40 hover:bg-[#3B82F6]/08 rounded-2xl text-[13.5px] font-semibold text-[rgba(240,246,255,0.40)] hover:text-[#60A5FA] transition-all"
              style={{ background: '#0C1428' }}>
              View all articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
