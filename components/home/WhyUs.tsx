import { Check } from 'lucide-react';

const PILLARS = [
  { title: 'Institutional-Grade',  metric: '99.99% Uptime',     desc: 'Enterprise SLA on every platform we build',          color: '#3B82F6' },
  { title: 'Security-First',       metric: 'ISO 27001 + SOC 2', desc: 'Third-party audits mandatory on all contracts',       color: '#8B5CF6' },
  { title: 'Fast Delivery',        metric: '8-Week Launch',      desc: 'Sprint methodology, weekly releases',                color: '#10B981' },
  { title: '24/7 Global Team',     metric: 'USA · India · UK',  desc: 'Round-the-clock development & support',              color: '#F59E0B' },
  { title: 'R&D Driven',           metric: 'Dedicated Lab',     desc: 'Built for what\'s next, not just what exists',       color: '#06B6D4' },
  { title: 'Long-Term Partner',    metric: 'Post-Launch SLA',   desc: 'We don\'t disappear after deployment',               color: '#EC4899' },
];

const WHY = [
  'Multi-chain expertise across 15+ protocols',
  'Full-stack from concept to production',
  'Third-party smart contract audits on every project',
  'CI/CD with >90% automated test coverage',
  'NDA-protected development as standard',
  'Flexible: fixed-price, T&M, dedicated team',
  'Weekly sprint demos — full transparency',
  'Regulatory compliance consultation included',
];

export default function WhyUs() {
  return (
    <section className="section border-y border-white/[0.06]" id="why-shivacha" style={{ background: '#0C1428' }}>
      <div className="container">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="overline mb-3">Why Shivacha</p>
          <h2 className="h2">
            Not an Agency.<br />
            <span className="gt-blue">An Infrastructure Partner.</span>
          </h2>
          <p className="lead mt-4">
            Specialised in blockchain, AI, and financial technology — operating at institutional scale since 2016.
          </p>
        </div>

        {/* 6 pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {PILLARS.map((p) => (
            <div key={p.title}
              className="border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-0.5 group relative overflow-hidden"
              style={{ background: '#060B18' }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${p.color}07, transparent 65%)` }} />
              <div className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold mb-4 relative z-10"
                style={{ background: `${p.color}16`, color: p.color }}>
                {p.metric}
              </div>
              <h3 className="text-[15px] font-bold text-[rgba(240,246,255,0.85)] group-hover:text-white transition-colors mb-1.5 relative z-10">{p.title}</h3>
              <p className="text-[13px] text-[rgba(240,246,255,0.40)] leading-relaxed relative z-10">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <div className="border border-white/[0.06] rounded-2xl p-8" style={{ background: '#060B18' }}>
          <p className="text-[11px] font-bold uppercase tracking-widest text-[rgba(240,246,255,0.30)] mb-6">What Every Engagement Includes</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {WHY.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#3B82F6' }} />
                <span className="text-[13px] text-[rgba(240,246,255,0.55)] leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
