import { CheckCircle } from 'lucide-react';

const PILLARS = [
  {
    icon: '🏛️', title: 'Institutional-Grade Infrastructure',
    desc: 'Every system we build is designed to enterprise standards — high availability, horizontal scalability, and disaster recovery built-in from day one.',
    metric: '99.99% Uptime SLA',
  },
  {
    icon: '🛡️', title: 'Security-First Engineering',
    desc: 'ISO 27001 certified processes, mandatory smart contract audits by third-party firms, penetration testing, and secure SDLC for every project.',
    metric: 'ISO 27001 Certified',
  },
  {
    icon: '⚡', title: 'Delivery Velocity',
    desc: 'Agile sprint methodology with weekly releases. Most enterprise platforms launched in 8–12 weeks — faster than any competitor without compromising quality.',
    metric: '8-Week Launch Track',
  },
  {
    icon: '🌍', title: 'Global 24/7 Delivery',
    desc: 'Distributed teams across USA, India, and UK provide round-the-clock development, support, and monitoring across all time zones.',
    metric: 'USA · India · UK',
  },
  {
    icon: '🧪', title: 'Research & Innovation',
    desc: 'Dedicated R&D division tracking every major blockchain protocol, AI breakthrough, and fintech regulation. We build for what\'s coming, not just what\'s here.',
    metric: 'Dedicated R&D Team',
  },
  {
    icon: '🤝', title: 'Long-Term Partnership',
    desc: 'We don\'t disappear post-launch. SLA-backed maintenance contracts, proactive monitoring, version upgrades, and strategic roadmap consultation.',
    metric: 'Post-Launch Support',
  },
];

const CHECKLIST = [
  'Multi-chain expertise across 15+ protocols',
  'Full-stack development from concept to production',
  'Third-party security audits on all smart contracts',
  'CI/CD pipelines with automated test coverage >90%',
  'Post-launch SLA with guaranteed response times',
  'NDA-protected development for confidential projects',
  'Flexible engagement: fixed-price, T&M, dedicated team',
  'Weekly sprint demos with full project transparency',
  'Regulatory compliance consultation included',
  'API-first architecture for seamless integrations',
];

export default function WhyUs() {
  return (
    <section className="section bg-white relative overflow-hidden" id="why-shivacha">
      <div className="orb w-[500px] h-[500px] bg-[#0099E6] opacity-[0.05] right-0 top-1/4" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="section-label">Why Shivacha</div>
            <h2 className="h2 text-slate-900 mb-6">
              Why Global Enterprises
              <br /><span className="gt-blue">Choose Shivacha</span>
            </h2>
            <p className="lead mb-8">
              We&apos;re not a generalist software agency. We&apos;re a specialized enterprise infrastructure
              company with deep expertise in blockchain, AI, and financial technology —
              operating at institutional scale.
            </p>

            {/* Checklist */}
            <div className="space-y-3">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0099E6]/15 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={12} className="text-[#33B5E5]" />
                  </div>
                  <span className="text-[14px] text-slate-500">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map((p) => (
              <div key={p.title}
                className="card rounded-2xl p-5 border border-slate-200 hover:border-slate-300 group">
                <div className="text-3xl mb-3">{p.icon}</div>
                <div className="badge badge-blue text-[10px] mb-3">{p.metric}</div>
                <h3 className="text-[14px] font-bold text-slate-900 mb-2 group-hover:text-[#33B5E5] transition-colors">
                  {p.title}
                </h3>
                <p className="text-[12px] text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom comparison table */}
        <div className="mt-16 glass rounded-3xl p-8 border border-slate-200 overflow-x-auto">
          <h3 className="text-lg font-bold text-slate-900 mb-6">How We Compare</h3>
          <table className="w-full text-[13px]">
            <thead>
              <tr>
                <th className="text-left text-slate-400 font-medium pb-3 pr-6">Criteria</th>
                <th className="text-center pb-3 px-4">
                  <span className="badge badge-blue">Shivacha</span>
                </th>
                <th className="text-center pb-3 px-4 text-slate-400">Generic Agency</th>
                <th className="text-center pb-3 px-4 text-slate-400">Freelancers</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Enterprise-grade architecture', '✅', '⚠️', '❌'],
                ['Security audits included', '✅', '❌', '❌'],
                ['24/7 support SLA', '✅', '⚠️', '❌'],
                ['Multi-chain expertise', '✅', '⚠️', '⚠️'],
                ['Regulatory compliance', '✅', '⚠️', '❌'],
                ['Post-launch maintenance', '✅', '⚠️', '❌'],
                ['Dedicated R&D team', '✅', '❌', '❌'],
              ].map(([criteria, ...values]) => (
                <tr key={criteria} className="border-t border-slate-200">
                  <td className="py-3 pr-6 text-slate-500">{criteria}</td>
                  {values.map((v, i) => (
                    <td key={i} className="py-3 px-4 text-center text-base">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
