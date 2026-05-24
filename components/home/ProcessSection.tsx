const STEPS = [
  {
    n: '01', title: 'Discovery & Strategy',
    desc: 'Deep-dive into your business requirements, technical stack, and market. We create a detailed architecture blueprint and project roadmap.',
    duration: 'Week 1–2',
    deliverables: ['Technical Specification', 'Architecture Blueprint', 'Project Roadmap', 'Cost Estimate'],
  },
  {
    n: '02', title: 'Architecture & Design',
    desc: 'Enterprise-grade system architecture design with security, scalability, and compliance at the core. UI/UX prototypes for all interfaces.',
    duration: 'Week 2–4',
    deliverables: ['System Architecture', 'Database Design', 'UI/UX Prototypes', 'Security Framework'],
  },
  {
    n: '03', title: 'Agile Development',
    desc: 'Sprint-based development with weekly releases, daily standups, and full transparency via project management tools.',
    duration: 'Week 4–16',
    deliverables: ['Weekly Sprint Demos', 'Feature Releases', 'Code Reviews', 'Test Reports'],
  },
  {
    n: '04', title: 'Security Audit',
    desc: 'Third-party security audits for all smart contracts, penetration testing for APIs, and full compliance review before launch.',
    duration: 'Week 16–18',
    deliverables: ['Audit Reports', 'Pentest Results', 'Compliance Checklist', 'Risk Assessment'],
  },
  {
    n: '05', title: 'Launch & Deploy',
    desc: 'CI/CD-powered zero-downtime deployment to enterprise cloud infrastructure with full monitoring and alerting setup.',
    duration: 'Week 18–20',
    deliverables: ['Production Deploy', 'Monitoring Setup', 'Documentation', 'Training'],
  },
  {
    n: '06', title: 'Support & Growth',
    desc: 'SLA-backed 24/7 maintenance, proactive monitoring, performance optimization, and continuous feature development.',
    duration: 'Ongoing',
    deliverables: ['24/7 Monitoring', 'Incident Response', 'Feature Updates', 'Scaling Support'],
  },
];

export default function ProcessSection() {
  return (
    <section className="section bg-[#020B18] relative overflow-hidden" id="process">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-label justify-center">Our Process</div>
          <h2 className="h2 text-white mb-4">
            Enterprise Delivery
            <br /><span className="gt-blue">Methodology</span>
          </h2>
          <p className="lead">
            A battle-tested delivery framework that ensures every project is delivered
            on time, within budget, and to institutional-grade standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <div key={step.n}
              className="card rounded-2xl p-6 border border-[#0E1E34] hover:border-[#1E3A5A] group relative overflow-hidden">
              {/* Step number bg */}
              <div className="absolute -right-4 -top-4 text-[80px] font-black opacity-[0.04] text-[#0066FF] leading-none select-none">
                {step.n}
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center text-[14px] font-black text-[#60A5FA]">
                    {step.n}
                  </div>
                  <span className="badge badge-blue text-[11px]">{step.duration}</span>
                </div>
                <h3 className="text-[16px] font-bold text-white mb-2 group-hover:text-[#60A5FA] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#7A8FA6] leading-relaxed mb-4">
                  {step.desc}
                </p>
                <div className="space-y-1.5">
                  {step.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-[12px] text-[#3D5470]">
                      <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
              {/* Connecting line for desktop */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-px bg-[#0E1E34] z-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
