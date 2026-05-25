const AWARDS = [
  { icon: '🏆', title: 'Best Blockchain Company 2024',     org: 'FinTech Global Awards' },
  { icon: '🥇', title: 'Top AI Development Firm',          org: 'Clutch Global 2024' },
  { icon: '⭐', title: 'Top Web3 Development Company',     org: 'GoodFirms 2024' },
  { icon: '🎖', title: 'Emerging Technology Leader',       org: 'Deloitte Fast 50' },
  { icon: '🌟', title: 'Best DeFi Development Partner',    org: 'CryptoNomist 2023' },
  { icon: '🏅', title: 'Excellence in Fintech Innovation', org: 'NASSCOM 2023' },
];

const CERTS = [
  { icon: '🔐', name: 'ISO 27001:2022', desc: 'Information Security Management', color: '#3B82F6' },
  { icon: '✅', name: 'SOC 2 Type II',  desc: 'Security, Availability & Privacy',color: '#10B981' },
  { icon: '🛡', name: 'GDPR Compliant', desc: 'EU Data Protection Regulation',   color: '#8B5CF6' },
  { icon: '📋', name: 'CMMI Level 3',   desc: 'Software Development Maturity',   color: '#F59E0B' },
  { icon: '🔒', name: 'PCI DSS',        desc: 'Payment Card Industry Security',  color: '#06B6D4' },
  { icon: '🌐', name: 'ISO 9001:2015',  desc: 'Quality Management Systems',      color: '#EC4899' },
];

export default function AwardsSection() {
  return (
    <section className="section-sm border-y border-white/[0.06]" style={{ background: '#060B18' }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Awards */}
          <div>
            <p className="overline mb-3">Recognition</p>
            <h3 className="h3 mb-8">Awards &amp; <span className="gt-blue">Recognition</span></h3>
            <div className="space-y-3">
              {AWARDS.map((a) => (
                <div key={a.title}
                  className="flex items-center gap-4 p-4 border border-white/[0.06] hover:border-white/[0.12] rounded-xl hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all"
                  style={{ background: '#0C1428' }}>
                  <span className="text-2xl flex-shrink-0">{a.icon}</span>
                  <div>
                    <p className="text-[13.5px] font-semibold text-[rgba(240,246,255,0.80)] leading-tight">{a.title}</p>
                    <p className="text-[12px] text-[rgba(240,246,255,0.35)] mt-0.5">{a.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="overline mb-3">Compliance</p>
            <h3 className="h3 mb-8">Certifications &amp; <span className="gt-blue">Standards</span></h3>
            <div className="grid grid-cols-2 gap-3">
              {CERTS.map((c) => (
                <div key={c.name}
                  className="border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-4 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all flex items-center gap-3"
                  style={{ background: '#0C1428' }}>
                  <span className="text-2xl flex-shrink-0">{c.icon}</span>
                  <div>
                    <p className="text-[13px] font-bold text-[rgba(240,246,255,0.80)]">{c.name}</p>
                    <p className="text-[11px] text-[rgba(240,246,255,0.35)] mt-0.5 leading-snug">{c.desc}</p>
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
