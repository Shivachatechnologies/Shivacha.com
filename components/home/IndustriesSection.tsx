import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const INDUSTRIES = [
  { icon: '🏦', name: 'Banking & Finance',   href: '/industries/banking',     desc: 'Core banking, digital wallets, payment rails, RegTech',    color: '#006FEE', span: 'lg:col-span-2' },
  { icon: '📈', name: 'Forex & Trading',      href: '/industries/forex',       desc: 'Brokerage platforms, liquidity, risk engine, IB management', color: '#F59E0B', span: '' },
  { icon: '🏥', name: 'Healthcare',           href: '/industries/healthcare',  desc: 'Patient blockchain, clinical trials, supply chain integrity', color: '#10B981', span: '' },
  { icon: '🏠', name: 'Real Estate',          href: '/industries/real-estate', desc: 'Property tokenization, fractional ownership, smart escrow',  color: '#8B5CF6', span: '' },
  { icon: '🎮', name: 'Gaming & Metaverse',   href: '/industries/gaming',      desc: 'Play-to-earn, NFT assets, metaverse infrastructure',        color: '#EC4899', span: '' },
  { icon: '🏛', name: 'Government & Public',  href: '/industries/government',  desc: 'Digital ID, e-voting, CBDC, land registry systems',         color: '#6366F1', span: 'lg:col-span-2' },
];

export default function IndustriesSection() {
  return (
    <section className="section bg-slate-50 border-y border-slate-200" id="industries">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div>
            <p className="overline mb-3">Industry Solutions</p>
            <h2 className="h2">
              Deep Expertise Across<br />
              <span className="gt-blue">Every Major Vertical</span>
            </h2>
          </div>
          <Link href="/industries"
            className="flex items-center gap-2 text-[13.5px] font-semibold text-[#006FEE] border border-blue-200 hover:border-blue-400 hover:bg-blue-50 px-5 py-2.5 rounded-xl transition-all flex-shrink-0 self-start lg:self-auto">
            All Industries <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind) => (
            <Link key={ind.href} href={ind.href}
              className={`group bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 transition-all hover:shadow-[0_8px_28px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 flex flex-col relative overflow-hidden ${ind.span}`}>
              {/* Colored left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: ind.color }} />
              <div className="text-4xl mb-5">{ind.icon}</div>
              <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-[#006FEE] transition-colors mb-2">{ind.name}</h3>
              <p className="text-[13px] text-slate-400 leading-relaxed flex-1 mb-4">{ind.desc}</p>
              <div className="flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: ind.color }}>
                Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
