const AWARDS = [
  { icon: '🏆', title: 'Best Blockchain Company 2024', org: 'FinTech Awards' },
  { icon: '🥇', title: 'Top AI Development Firm', org: 'Clutch Global 2024' },
  { icon: '⭐', title: 'Top Web3 Development Company', org: 'GoodFirms 2024' },
  { icon: '🎖️', title: 'Emerging Technology Leader', org: 'Deloitte Fast 50' },
  { icon: '🌟', title: 'Best DeFi Development Partner', org: 'CryptoNomist 2023' },
  { icon: '🏅', title: 'Excellence in Fintech Innovation', org: 'NASSCOM 2023' },
];

const CERTIFICATIONS = [
  { icon: '🔐', name: 'ISO 27001:2022', desc: 'Information Security' },
  { icon: '✅', name: 'SOC 2 Type II', desc: 'Security & Privacy' },
  { icon: '🛡️', name: 'GDPR Compliant', desc: 'Data Protection' },
  { icon: '📋', name: 'CMMI Level 3', desc: 'Dev Maturity' },
  { icon: '🔒', name: 'PCI DSS', desc: 'Payment Security' },
  { icon: '🌐', name: 'ISO 9001:2015', desc: 'Quality Management' },
];

export default function AwardsSection() {
  return (
    <section className="section-sm bg-[#020B18] relative overflow-hidden border-y border-[#0E1E34]">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Awards */}
          <div>
            <div className="section-label mb-5">Recognition</div>
            <h3 className="h3 text-white mb-8">Awards &amp; Recognition</h3>
            <div className="grid grid-cols-2 gap-4">
              {AWARDS.map((a) => (
                <div key={a.title}
                  className="card rounded-2xl p-4 border border-[#0E1E34] hover:border-[#1E3A5A] group flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{a.icon}</span>
                  <div>
                    <p className="text-[13px] font-semibold text-white leading-tight mb-1 group-hover:text-[#60A5FA] transition-colors">
                      {a.title}
                    </p>
                    <p className="text-[11px] text-[#3D5470]">{a.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="section-label mb-5">Compliance</div>
            <h3 className="h3 text-white mb-8">Certifications &amp; Compliance</h3>
            <div className="grid grid-cols-2 gap-4">
              {CERTIFICATIONS.map((c) => (
                <div key={c.name}
                  className="card rounded-2xl p-5 border border-[#0E1E34] hover:border-[#0066FF]/40 group text-center">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <p className="text-[14px] font-bold text-white mb-1 group-hover:gt-blue transition-colors">{c.name}</p>
                  <p className="text-[12px] text-[#3D5470]">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
