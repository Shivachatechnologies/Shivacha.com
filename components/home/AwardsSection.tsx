const AWARDS = [
  { icon: '🏆', title: 'Best Blockchain Company 2024',      org: 'FinTech Global Awards' },
  { icon: '🥇', title: 'Top AI Development Firm',           org: 'Clutch Global 2024' },
  { icon: '⭐', title: 'Top Web3 Development Company',      org: 'GoodFirms 2024' },
  { icon: '🎖', title: 'Emerging Technology Leader',        org: 'Deloitte Fast 50' },
  { icon: '🌟', title: 'Best DeFi Development Partner',     org: 'CryptoNomist 2023' },
  { icon: '🏅', title: 'Excellence in Fintech Innovation',  org: 'NASSCOM 2023' },
];

const CERTS = [
  { icon: '🔐', name: 'ISO 27001:2022',  desc: 'Information Security Management' },
  { icon: '✅', name: 'SOC 2 Type II',   desc: 'Security, Availability & Privacy' },
  { icon: '🛡', name: 'GDPR Compliant',  desc: 'EU Data Protection Regulation' },
  { icon: '📋', name: 'CMMI Level 3',    desc: 'Software Development Maturity' },
  { icon: '🔒', name: 'PCI DSS',         desc: 'Payment Card Industry Security' },
  { icon: '🌐', name: 'ISO 9001:2015',   desc: 'Quality Management Systems' },
];

export default function AwardsSection() {
  return (
    <section className="section-sm bg-slate-50 border-y border-slate-200">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Awards */}
          <div>
            <p className="overline mb-3">Recognition</p>
            <h3 className="h3 mb-8">Awards & <span className="gt-blue">Recognition</span></h3>
            <div className="space-y-3">
              {AWARDS.map((a) => (
                <div key={a.title} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all">
                  <span className="text-2xl flex-shrink-0">{a.icon}</span>
                  <div>
                    <p className="text-[13.5px] font-semibold text-slate-900 leading-tight">{a.title}</p>
                    <p className="text-[12px] text-slate-400 mt-0.5">{a.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="overline mb-3">Compliance</p>
            <h3 className="h3 mb-8">Certifications & <span className="gt-blue">Standards</span></h3>
            <div className="grid grid-cols-2 gap-3">
              {CERTS.map((c) => (
                <div key={c.name} className="bg-white border border-slate-200 rounded-xl p-4 hover:border-slate-300 hover:shadow-sm transition-all flex items-center gap-3">
                  <span className="text-2xl flex-shrink-0">{c.icon}</span>
                  <div>
                    <p className="text-[13px] font-bold text-slate-900">{c.name}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
