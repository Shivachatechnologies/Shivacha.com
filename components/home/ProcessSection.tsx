const STEPS = [
  { n: '01', title: 'Discovery',        desc: 'Architecture blueprint, tech stack, project roadmap & cost estimate', duration: 'Week 1–2' },
  { n: '02', title: 'Design',           desc: 'System architecture, database design, UI/UX prototypes & security framework', duration: 'Week 2–4' },
  { n: '03', title: 'Development',      desc: 'Sprint-based builds with weekly demos, daily standups & full code transparency', duration: 'Week 4–16' },
  { n: '04', title: 'Security Audit',   desc: 'Third-party smart contract audit, penetration testing & compliance review', duration: 'Week 16–18' },
  { n: '05', title: 'Launch',           desc: 'Zero-downtime deploy to enterprise cloud with monitoring & alerting', duration: 'Week 18–20' },
  { n: '06', title: 'Scale & Support',  desc: 'SLA-backed 24/7 maintenance, performance optimisation & feature roadmap', duration: 'Ongoing' },
];

export default function ProcessSection() {
  return (
    <section className="section bg-white" id="process">
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
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-slate-200 z-0" />

          <div className="grid lg:grid-cols-6 gap-6 relative z-10">
            {STEPS.map((step, i) => (
              <div key={step.n} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Step circle */}
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center mb-5 flex-shrink-0 shadow-sm relative z-10"
                  style={{ borderColor: i === 0 ? '#006FEE' : undefined }}>
                  <span className="text-[22px] font-black" style={{ color: i === 0 ? '#006FEE' : '#94A3B8' }}>
                    {step.n}
                  </span>
                </div>

                {/* Badge */}
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-slate-500 text-[11px] font-semibold mb-3">
                  {step.duration}
                </span>

                <h3 className="text-[15px] font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-[12.5px] text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-14 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            {[['8 weeks', 'Fastest launch'], ['500+', 'Projects delivered'], ['95%', 'On-time delivery']].map(([v, l]) => (
              <div key={l} className="text-center sm:text-left">
                <div className="text-[22px] font-black text-slate-900">{v}</div>
                <div className="text-[11px] text-slate-400">{l}</div>
              </div>
            ))}
          </div>
          <a href="/contact#consultation"
            className="btn btn-primary text-[13.5px] py-2.5 px-6 flex-shrink-0">
            Start Your Project
          </a>
        </div>

      </div>
    </section>
  );
}
