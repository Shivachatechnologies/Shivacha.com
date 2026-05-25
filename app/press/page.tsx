import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Press & Media | Shivacha Technologies',
  description: 'Press releases, media coverage, awards, and press kit for Shivacha Technologies — global enterprise blockchain, AI, and fintech infrastructure company.',
};

const NEWS = [
  {
    date: 'May 12, 2026', outlet: 'Forbes', type: 'Feature',
    headline: 'How Shivacha Technologies Is Powering the Next Wave of Institutional DeFi',
    excerpt: 'Forbes examines how Shivacha\'s enterprise infrastructure is enabling banks and hedge funds to participate in decentralized finance at scale.',
    color: '#0099E6', href: '#',
  },
  {
    date: 'April 28, 2026', outlet: 'TechCrunch', type: 'News',
    headline: 'Shivacha Raises $40M Series B to Expand Enterprise Blockchain Infrastructure',
    excerpt: 'Shivacha Technologies closes a $40M Series B round led by Andreessen Horowitz to accelerate its enterprise blockchain and AI product expansion.',
    color: '#00FF87', href: '#',
  },
  {
    date: 'April 10, 2026', outlet: 'CoinDesk', type: 'Analysis',
    headline: 'The Infrastructure Play: How Shivacha Is Becoming the AWS of Web3',
    excerpt: 'CoinDesk profiles Shivacha\'s strategy of building reusable enterprise infrastructure — from matching engines to neo banking cores — for the crypto economy.',
    color: '#FFB800', href: '#',
  },
  {
    date: 'March 22, 2026', outlet: 'Financial Times', type: 'Coverage',
    headline: 'Blockchain Infrastructure Firm Shivacha Wins DIFC FinTech Award 2026',
    excerpt: 'The Dubai International Financial Centre recognised Shivacha Technologies as the Best Enterprise Blockchain Infrastructure Provider at its annual FinTech Awards.',
    color: '#A855F7', href: '#',
  },
  {
    date: 'February 15, 2026', outlet: 'Bloomberg', type: 'Interview',
    headline: 'Meet the Company Quietly Building the Financial Infrastructure of Web3',
    excerpt: 'Bloomberg interviews Shivacha CEO Rajat Sharma on the company\'s vision to democratise access to institutional-grade financial infrastructure globally.',
    color: '#EF4444', href: '#',
  },
  {
    date: 'January 30, 2026', outlet: 'The Block', type: 'Research',
    headline: 'Shivacha\'s Tokenization Platform Surpasses $2B in Real-World Assets On-Chain',
    excerpt: 'The Block Research reports Shivacha\'s RWA tokenization platform has surpassed $2B in total assets across real estate, commodities, and private equity.',
    color: '#6644FF', href: '#',
  },
];

const AWARDS = [
  { year: '2026', award: 'Best Enterprise Blockchain Platform', org: 'DIFC FinTech Awards' },
  { year: '2026', award: 'Top 50 Fintech Innovators', org: 'Forbes Asia' },
  { year: '2025', award: 'Global Web3 Infrastructure Company of the Year', org: 'CoinDesk Consensus' },
  { year: '2025', award: 'Best Blockchain Development Company', org: 'Clutch Global Awards' },
  { year: '2024', award: 'Most Innovative DeFi Infrastructure', org: 'DeFi Awards' },
  { year: '2024', award: 'Excellence in Enterprise AI', org: 'AI Summit London' },
  { year: '2023', award: 'Top Blockchain Firm in Asia', org: 'Singapore FinTech Festival' },
  { year: '2023', award: 'Best Smart Contract Audit Firm', org: 'DeFi Security Summit' },
];

const BOILERPLATE = `Shivacha Technologies is a global enterprise infrastructure company that builds, deploys, and operates blockchain, AI, and fintech platforms for banks, exchanges, brokerages, and enterprises worldwide. Founded in 2016, Shivacha has delivered 500+ projects across 50+ countries, with infrastructure managing $2.4B+ in digital assets. The company operates from offices in Gurgaon (India), San Francisco (USA), and London (UK), with 200+ engineers across blockchain, AI, fintech, and cloud disciplines.`;

export default function PressPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] bg-[#0099E6] opacity-[0.06] -right-40 top-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Press & Media</div>
            <h1 className="h1 text-slate-900 mb-6">
              Shivacha in the
              <br /><span className="gt-blue">News</span>
            </h1>
            <p className="lead max-w-xl mb-8">
              Media coverage, press releases, awards, and company news.
              For media inquiries, contact our press team at{' '}
              <a href="mailto:press@shivacha.com" className="text-[#33B5E5] hover:underline">press@shivacha.com</a>.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#press-kit" className="btn btn-primary">
                Download Press Kit <ArrowRight size={14} />
              </a>
              <a href="mailto:press@shivacha.com" className="btn btn-secondary">Media Enquiry</a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Boilerplate */}
      <section className="section-sm bg-slate-50 border-y border-slate-200">
        <div className="container max-w-4xl">
          <div className="glass rounded-3xl p-8 border border-slate-200">
            <h2 className="text-[18px] font-bold text-slate-900 mb-3">Company Overview</h2>
            <p className="text-[14px] text-slate-500 leading-relaxed mb-5">{BOILERPLATE}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { v: '2016', l: 'Founded' },
                { v: '200+', l: 'Engineers' },
                { v: '500+', l: 'Projects' },
                { v: '50+', l: 'Countries' },
              ].map(s => (
                <div key={s.l} className="text-center">
                  <div className="text-[22px] font-black gt-blue">{s.v}</div>
                  <div className="text-[12px] text-slate-400">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Coverage */}
      <section className="section bg-white">
        <div className="container">
          <div className="mb-10">
            <h2 className="h2 text-slate-900 mb-2">Recent <span className="gt-blue">Coverage</span></h2>
            <p className="text-slate-500">Latest news, features, and interviews from global media outlets.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {NEWS.map((item) => (
              <a key={item.headline} href={item.href} target="_blank" rel="noopener noreferrer"
                className="card rounded-2xl p-6 border border-slate-200 hover:border-slate-300 group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="badge text-[11px]"
                    style={{ background: `${item.color}15`, borderColor: `${item.color}30`, color: item.color }}>
                    {item.outlet}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] text-slate-400 flex items-center gap-1">
                      <Calendar size={11} />{item.date}
                    </span>
                    <ExternalLink size={13} className="text-slate-400 group-hover:text-[#33B5E5] transition-colors" />
                  </div>
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#33B5E5] transition-colors line-clamp-2">
                  {item.headline}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed flex-1 line-clamp-3">{item.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200">
                  <span className="badge text-[11px] bg-slate-200 border-slate-300 text-slate-400">{item.type}</span>
                  <span className="text-[13px] font-medium flex items-center gap-1" style={{ color: item.color }}>
                    Read Article <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-slate-900">Awards & <span className="gt-blue">Recognition</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {AWARDS.map((a) => (
              <div key={a.award} className="card rounded-2xl p-5 border border-slate-200 hover:border-slate-300">
                <div className="text-3xl mb-3">🏆</div>
                <div className="badge badge-blue text-[10px] mb-2">{a.year}</div>
                <h4 className="text-[13px] font-bold text-slate-900 mb-1 leading-snug">{a.award}</h4>
                <p className="text-[11px] text-slate-400">{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section id="press-kit" className="section bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-10 border border-slate-200 text-center">
            <div className="text-5xl mb-4">📦</div>
            <h2 className="text-[24px] font-bold text-slate-900 mb-3">Download Press Kit</h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Official logos, executive headshots, product screenshots, brand guidelines,
              and company fact sheet — all in one package.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-7">
              {['Official Logos (SVG, PNG)', 'Executive Headshots', 'Product Screenshots', 'Brand Guidelines', 'Company Fact Sheet', 'Boilerplate Copy'].map(item => (
                <div key={item} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0099E6] flex-shrink-0" />
                  <span className="text-[13px] text-slate-500">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="mailto:press@shivacha.com?subject=Press Kit Request" className="btn btn-primary">
                Request Press Kit <ArrowRight size={14} />
              </a>
              <a href="mailto:press@shivacha.com" className="btn btn-secondary">press@shivacha.com</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
