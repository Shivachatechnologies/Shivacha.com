import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Partner Program | Shivacha Technologies',
  description: 'Join the Shivacha Partner Program. Technology, reseller, and referral partners earn up to 25% commission on referred projects. 150+ active partners across 40+ countries.',
};

const TIERS = [
  {
    name: 'Referral Partner',
    icon: '🤝',
    color: '#006FEE',
    commission: '8%',
    desc: 'Earn commissions by referring clients to Shivacha. Ideal for consultants, freelancers, and advisors in the blockchain and fintech space.',
    requirements: ['No minimum volume', 'Free onboarding', 'Deal registration portal'],
    benefits: [
      '8% commission on closed deals',
      'Co-branded collateral access',
      'Partner portal & tracking',
      'Dedicated partner manager',
    ],
    cta: 'Join Free',
    href: '/contact?type=partner-referral',
  },
  {
    name: 'Reseller Partner',
    icon: '🏢',
    color: '#6644FF',
    commission: '15%',
    desc: 'White-label or resell Shivacha products and services under your brand. Ideal for IT consulting firms, agencies, and system integrators.',
    requirements: ['Min. 2 deals/year', 'Technical certification', 'Dedicated account manager'],
    benefits: [
      '15% margin on all products',
      'White-label licensing rights',
      'Sales engineering support',
      'Priority deal registration',
      'Co-marketing budget',
      'Quarterly business reviews',
    ],
    cta: 'Apply Now',
    href: '/contact?type=partner-reseller',
    featured: true,
  },
  {
    name: 'Technology Partner',
    icon: '⚙️',
    color: '#00FF87',
    commission: '25%',
    desc: 'Deep technology integration and joint go-to-market. Ideal for platform providers, infrastructure companies, and enterprise ISVs.',
    requirements: ['Technical integration', 'Joint case study', 'Mutual NDA'],
    benefits: [
      'Up to 25% revenue share',
      'Joint product roadmap input',
      'Co-selling motions',
      'Shared engineering resources',
      'Joint press & marketing',
      'Executive sponsorship',
    ],
    cta: 'Schedule Call',
    href: '/contact?type=partner-technology',
  },
];

const PARTNER_BENEFITS = [
  { icon: '💰', title: 'Competitive Commissions', desc: 'Industry-leading 8–25% commissions paid within 30 days of project close.' },
  { icon: '🎓', title: 'Free Certification', desc: 'Shivacha Certified Partner program with free online training on all products.' },
  { icon: '📊', title: 'Partner Portal', desc: 'Real-time deal registration, pipeline tracking, and commission reporting.' },
  { icon: '🚀', title: 'Co-Selling Support', desc: 'Sales engineers and solution architects available for joint client calls.' },
  { icon: '📣', title: 'Co-Marketing', desc: 'Joint webinars, co-branded case studies, and partner spotlight campaigns.' },
  { icon: '🌍', title: 'Global Reach', desc: 'Access to Shivacha\'s 50+ country client network and enterprise relationships.' },
];

const CURRENT_PARTNERS = [
  { name: 'AWS Partner Network', type: 'Technology', region: 'Global' },
  { name: 'Microsoft Azure', type: 'Technology', region: 'Global' },
  { name: 'Fireblocks', type: 'Technology', region: 'Global' },
  { name: 'Sumsub', type: 'Technology', region: 'Global' },
  { name: 'Chainalysis', type: 'Technology', region: 'USA / EU' },
  { name: 'FinTech Hub London', type: 'Ecosystem', region: 'UK' },
  { name: 'Dubai Future Foundation', type: 'Ecosystem', region: 'UAE' },
  { name: 'Singapore FinTech Assoc.', type: 'Ecosystem', region: 'SEA' },
];

const STATS = [
  { v: '150+', l: 'Active Partners', icon: '🤝' },
  { v: '40+', l: 'Countries', icon: '🌍' },
  { v: '$180M+', l: 'Partner-Referred Revenue', icon: '💰' },
  { v: '25%', l: 'Max Commission', icon: '📈' },
];

export default function PartnersPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-[500px] h-[500px] bg-[#006FEE] opacity-[0.06] -left-40 top-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Partner Program</div>
            <h1 className="h1 text-[#F0F6FF] mb-6">
              Grow Your Business
              <br /><span className="gt-blue">With Shivacha</span>
            </h1>
            <p className="lead max-w-xl mb-8">
              Join 150+ partners worldwide earning commissions by referring, reselling, or integrating
              Shivacha&apos;s enterprise blockchain, AI, and fintech infrastructure.
            </p>
            <div className="flex gap-4 flex-wrap mb-10">
              <Link href="/contact?type=partner" className="btn btn-primary">
                Become a Partner <ArrowRight size={14} />
              </Link>
              <a href="mailto:partners@shivacha.com" className="btn btn-secondary">partners@shivacha.com</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map(s => (
                <div key={s.l} className="metric-card">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="text-xl font-black gt-blue">{s.v}</p>
                  <p className="text-[11px] text-[rgba(240,246,255,0.35)]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="section bg-[#0C1428]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center">Partnership Tiers</div>
            <h2 className="h2 text-[#F0F6FF]">Choose Your <span className="gt-blue">Partner Level</span></h2>
            <p className="lead mt-4">Three tiers designed to match where you are — from individual referrers to enterprise system integrators.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div key={tier.name}
                className={`card rounded-3xl p-7 border flex flex-col ${tier.featured ? 'border-[#6644FF]/40 relative overflow-hidden' : 'border-white/[0.06]'}`}
                style={{ background: tier.featured ? `${tier.color}06` : undefined }}>
                {tier.featured && (
                  <div className="absolute top-0 right-0 px-4 py-1.5 text-[11px] font-bold text-[#F0F6FF] rounded-bl-2xl"
                    style={{ background: tier.color }}>
                    MOST POPULAR
                  </div>
                )}
                <div className="text-4xl mb-3">{tier.icon}</div>
                <h3 className="text-[20px] font-bold text-[#F0F6FF] mb-1">{tier.name}</h3>
                <div className="text-[32px] font-black mb-2" style={{ color: tier.color }}>{tier.commission}</div>
                <p className="text-[12px] text-[rgba(240,246,255,0.35)] mb-1">commission rate</p>
                <p className="text-[13px] text-[rgba(240,246,255,0.40)] leading-relaxed mb-5">{tier.desc}</p>

                <div className="space-y-2 mb-5 flex-1">
                  {tier.benefits.map(b => (
                    <div key={b} className="flex items-center gap-2">
                      <CheckCircle size={13} style={{ color: tier.color }} className="flex-shrink-0" />
                      <span className="text-[13px] text-[rgba(240,246,255,0.40)]">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.06] mb-5">
                  <p className="text-[11px] text-[rgba(240,246,255,0.35)] uppercase tracking-wider mb-2">Requirements</p>
                  {tier.requirements.map(r => (
                    <div key={r} className="flex items-center gap-2 text-[12px] text-[rgba(240,246,255,0.35)]">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: tier.color }} />
                      {r}
                    </div>
                  ))}
                </div>

                <Link href={tier.href}
                  className="btn text-center"
                  style={{ background: `${tier.color}20`, border: `1px solid ${tier.color}40`, color: tier.color }}>
                  {tier.cta} <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-sm bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="h3 text-[#F0F6FF]">Why Partners Choose <span className="gt-blue">Shivacha</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {PARTNER_BENEFITS.map((b) => (
              <div key={b.title} className="card rounded-2xl p-5 border border-white/[0.06] hover:border-slate-300">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="text-[15px] font-bold text-[#F0F6FF] mb-2">{b.title}</h3>
                <p className="text-[13px] text-[rgba(240,246,255,0.40)] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="section bg-[#0C1428]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="h3 text-[#F0F6FF]">Our <span className="gt-blue">Partner Ecosystem</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {CURRENT_PARTNERS.map((p) => (
              <div key={p.name} className="card rounded-xl p-4 border border-white/[0.06] hover:border-slate-300">
                <p className="text-[14px] font-semibold text-[#F0F6FF] mb-1">{p.name}</p>
                <div className="flex items-center justify-between">
                  <span className="badge badge-blue text-[10px]">{p.type}</span>
                  <span className="text-[11px] text-[rgba(240,246,255,0.35)]">{p.region}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Apply CTA */}
          <div className="glass rounded-3xl p-10 border border-white/[0.06] text-center max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-[22px] font-bold text-[#F0F6FF] mb-3">Ready to Partner with Shivacha?</h3>
            <p className="text-[rgba(240,246,255,0.40)] mb-6 leading-relaxed">
              Complete our partner application. Our team will review it within 48 hours and schedule an onboarding call.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact?type=partner" className="btn btn-primary">
                Apply Now <ArrowRight size={14} />
              </Link>
              <a href="mailto:partners@shivacha.com" className="btn btn-secondary">Contact Partner Team</a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
