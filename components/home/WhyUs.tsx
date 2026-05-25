import { CheckCircle2 } from 'lucide-react';

const PILLARS = [
  { icon: '🏛', title: 'Institutional-Grade',  metric: '99.99% Uptime',      desc: 'Enterprise SLA on every platform we build' },
  { icon: '🛡', title: 'Security-First',        metric: 'ISO 27001 + SOC 2',  desc: 'Third-party audits mandatory on all contracts' },
  { icon: '⚡', title: 'Fast Delivery',          metric: '8-Week Launch',       desc: 'Sprint methodology, weekly releases' },
  { icon: '🌍', title: '24/7 Global Team',       metric: 'USA · India · UK',   desc: 'Round-the-clock development & support' },
  { icon: '🧪', title: 'R&D Driven',             metric: 'Dedicated Lab',      desc: 'Built for what\'s next, not just what exists' },
  { icon: '🤝', title: 'Long-Term Partner',      metric: 'Post-Launch SLA',    desc: 'We don\'t disappear after deployment' },
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
    <section className="section bg-slate-50 border-y border-slate-200" id="why-shivacha">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {PILLARS.map((p) => (
            <div key={p.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-0.5">
              <div className="text-3xl mb-4">{p.icon}</div>
              <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#006FEE]/8 text-[#006FEE] text-[11px] font-bold mb-3">
                {p.metric}
              </div>
              <h3 className="text-[15px] font-bold text-slate-900 mb-1.5">{p.title}</h3>
              <p className="text-[13px] text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Checklist row */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">What Every Engagement Includes</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {WHY.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-[#006FEE] flex-shrink-0 mt-0.5" />
                <span className="text-[13px] text-slate-600 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
