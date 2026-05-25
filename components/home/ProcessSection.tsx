import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  { n: '01', title: 'Discovery',       desc: 'Architecture blueprint, tech stack, project roadmap & cost estimate',                 duration: 'Week 1–2',   color: '#3B82F6' },
  { n: '02', title: 'Design',          desc: 'System architecture, database design, UI/UX prototypes & security framework',         duration: 'Week 2–4',   color: '#8B5CF6' },
  { n: '03', title: 'Development',     desc: 'Sprint-based builds with weekly demos, daily standups & full code transparency',      duration: 'Week 4–16',  color: '#06B6D4' },
  { n: '04', title: 'Security Audit',  desc: 'Third-party smart contract audit, penetration testing & compliance review',           duration: 'Week 16–18', color: '#F59E0B' },
  { n: '05', title: 'Launch',          desc: 'Zero-downtime deploy to enterprise cloud with monitoring & alerting',                 duration: 'Week 18–20', color: '#10B981' },
  { n: '06', title: 'Scale & Support', desc: 'SLA-backed 24/7 maintenance, performance optimisation & feature roadmap',            duration: 'Ongoing',    color: '#EC4899' },
];

export default function ProcessSection() {
  return (
    <section className="section" id="process" style={{ background: '#060B18' }}>
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="overline mb-3">How We Work</p>
          <h2 className="h2">
            Delivered in Weeks,<br />
            <span className="gt-blue">Built to Last Years</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px z-0"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.25) 10%, rgba(59,130,246,0.25) 90%, transparent)' }} />

          <div className="grid lg:grid-cols-6 gap-6 relative z-10">
            {STEPS.map((step) => (
              <div key={step.n} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Step circle */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0 relative z-10 border border-white/[0.08]"
                  style={{ background: '#0C1428', boxShadow: `0 0 0 1px ${step.color}30` }}>
                  <span className="text-[20px] font-black" style={{ color: step.color }}>
                    {step.n}
                  </span>
                </div>

                {/* Duration badge */}
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold mb-3"
                  style={{ background: `${step.color}14`, color: step.color }}>
                  {step.duration}
                </span>

                <h3 className="text-[15px] font-bold text-[rgba(240,246,255,0.85)] mb-2">{step.title}</h3>
                <p className="text-[12.5px] text-[rgba(240,246,255,0.35)] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-14 border border-white/[0.06] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: '#0C1428' }}>
          <div className="flex flex-wrap items-center gap-8">
            {[['8 weeks', 'Fastest launch'], ['500+', 'Projects delivered'], ['95%', 'On-time delivery']].map(([v, l]) => (
              <div key={l} className="text-center sm:text-left">
                <div className="text-[22px] font-black text-white">{v}</div>
                <div className="text-[11px] text-[rgba(240,246,255,0.35)] mt-0.5">{l}</div>
              </div>
            ))}
          </div>
          <Link href="/contact#consultation" className="btn btn-primary text-[13.5px] py-2.5 px-6 flex-shrink-0 flex items-center gap-2">
            Start Your Project <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
