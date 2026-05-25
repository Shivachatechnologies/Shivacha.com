import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Shivacha Technologies',
  description: 'Shivacha Technologies privacy policy. Learn how we collect, use, and protect your personal information.',
};

const SECTIONS = [
  {
    title: '1. Information We Collect',
    content: [
      {
        sub: '1.1 Information You Provide',
        text: 'When you contact us, request a consultation, or sign up for services, we collect: full name, email address, phone number, company name, job title, project requirements, and any other information you choose to provide in forms or direct communications.',
      },
      {
        sub: '1.2 Automatically Collected Information',
        text: 'We automatically collect certain information when you visit our website, including: IP address, browser type and version, operating system, referring URLs, pages viewed, time spent on pages, and other clickstream data. We use cookies and similar tracking technologies for this purpose.',
      },
      {
        sub: '1.3 Business Information',
        text: 'For clients and partners, we may collect business registration details, financial information necessary for billing, and information about your blockchain or fintech projects necessary to provide our services.',
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      {
        sub: 'Service Delivery',
        text: 'We use your information to provide, operate, and improve our services; respond to inquiries and consultation requests; process transactions and send related information; and communicate about projects, deliverables, and support.',
      },
      {
        sub: 'Marketing & Communications',
        text: 'With your consent, we may send you newsletters, product updates, and information about our services. You can opt out of marketing communications at any time by clicking the unsubscribe link in any email or contacting us at privacy@shivacha.com.',
      },
      {
        sub: 'Legal & Compliance',
        text: 'We may use your information to comply with legal obligations, enforce our terms of service, protect our rights and the rights of others, and cooperate with law enforcement when required by law.',
      },
    ],
  },
  {
    title: '3. Information Sharing',
    content: [
      {
        sub: 'We Do Not Sell Your Data',
        text: 'Shivacha Technologies does not sell, rent, or trade your personal information to third parties for their marketing purposes.',
      },
      {
        sub: 'Service Providers',
        text: 'We share information with trusted third-party service providers who assist us in operating our business, including cloud hosting (AWS, Google Cloud), CRM platforms, email service providers, analytics tools, and payment processors. These providers are contractually required to protect your information.',
      },
      {
        sub: 'Business Transfers',
        text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have.',
      },
    ],
  },
  {
    title: '4. Data Security',
    content: [
      {
        sub: 'Security Measures',
        text: 'We implement industry-standard security measures including TLS/SSL encryption for data in transit, AES-256 encryption for data at rest, access controls and authentication, regular security audits and penetration testing, and ISO 27001-aligned security practices.',
      },
      {
        sub: 'Breach Notification',
        text: 'In the event of a data breach that affects your personal information, we will notify you as required by applicable law, and no later than 72 hours after becoming aware of the breach where required by GDPR.',
      },
    ],
  },
  {
    title: '5. Your Rights (GDPR / CCPA)',
    content: [
      {
        sub: 'Your Rights Include',
        text: 'Right of access: request a copy of your personal data. Right to rectification: correct inaccurate data. Right to erasure: request deletion of your data. Right to portability: receive your data in a structured format. Right to object: object to processing of your data. Right to restrict processing. Right to withdraw consent at any time.',
      },
      {
        sub: 'Exercising Your Rights',
        text: 'To exercise any of these rights, contact our Data Protection Officer at privacy@shivacha.com. We will respond within 30 days. For CCPA requests, California residents may also submit requests via our toll-free number listed on the Contact page.',
      },
    ],
  },
  {
    title: '6. Cookies',
    content: [
      {
        sub: 'Types of Cookies',
        text: 'We use: Essential cookies (required for the website to function); Analytics cookies (Google Analytics, to understand site usage — opt-out available); Preference cookies (remember your settings); Marketing cookies (only with your explicit consent).',
      },
      {
        sub: 'Cookie Management',
        text: 'You can control cookies through your browser settings. Disabling certain cookies may affect website functionality. Our cookie consent banner allows granular control over non-essential cookie categories.',
      },
    ],
  },
  {
    title: '7. International Transfers',
    content: [
      {
        sub: 'Cross-Border Transfers',
        text: 'Shivacha Technologies operates globally with offices in India, USA, and UK. Your data may be processed in any of these countries. For transfers from the EEA, we rely on Standard Contractual Clauses (SCCs) approved by the European Commission, adequacy decisions, or other lawful transfer mechanisms.',
      },
    ],
  },
  {
    title: '8. Data Retention',
    content: [
      {
        sub: 'Retention Periods',
        text: 'We retain your personal data for as long as necessary to provide our services and comply with legal obligations. Client project data is retained for 7 years after project completion for legal and accounting purposes. Marketing data is retained until you opt out. Website analytics data is retained for 26 months.',
      },
    ],
  },
  {
    title: '9. Contact Us',
    content: [
      {
        sub: 'Data Controller',
        text: 'Shivacha Technologies Pvt. Ltd., DLF Cyber City, Gurgaon, Haryana 122002, India. Data Protection Officer: privacy@shivacha.com. EU Representative (for GDPR): Shivacha Technologies UK Ltd., London, UK.',
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white">

      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-96 h-96 bg-[#0099E6] opacity-[0.05] -left-20 top-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Legal</div>
            <h1 className="h1 text-slate-900 mb-4">Privacy Policy</h1>
            <p className="lead mb-3">
              Shivacha Technologies Pvt. Ltd. and its affiliates (&ldquo;Shivacha&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;).
            </p>
            <p className="text-[14px] text-slate-400">
              Last updated: <span className="text-slate-500">May 1, 2026</span> &nbsp;·&nbsp;
              Effective: <span className="text-slate-500">May 1, 2026</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

            {/* Sidebar Nav */}
            <div className="hidden lg:block">
              <div className="glass rounded-2xl p-5 border border-slate-200 sticky top-24">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-4">Contents</p>
                <nav className="space-y-2">
                  {SECTIONS.map((s, i) => (
                    <a key={i} href={`#section-${i}`}
                      className="block text-[13px] text-slate-400 hover:text-[#33B5E5] transition-colors py-1">
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              <div className="card rounded-2xl p-6 border border-slate-200">
                <p className="text-[14px] text-slate-500 leading-relaxed">
                  This Privacy Policy explains how Shivacha Technologies collects, uses, discloses, and protects your personal
                  information when you use our website, products, or services. By using our services, you agree to the collection
                  and use of information in accordance with this policy.
                </p>
              </div>

              {SECTIONS.map((section, i) => (
                <div key={i} id={`section-${i}`} className="card rounded-2xl p-6 border border-slate-200">
                  <h2 className="text-[18px] font-bold text-slate-900 mb-5">{section.title}</h2>
                  <div className="space-y-5">
                    {section.content.map((c, j) => (
                      <div key={j}>
                        <h3 className="text-[14px] font-semibold text-[#33B5E5] mb-2">{c.sub}</h3>
                        <p className="text-[13px] text-slate-500 leading-relaxed">{c.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="glass rounded-2xl p-6 border border-slate-200 text-center">
                <p className="text-[14px] text-slate-500 mb-4">
                  Questions about this Privacy Policy? Contact us at{' '}
                  <a href="mailto:privacy@shivacha.com" className="text-[#33B5E5] hover:underline">privacy@shivacha.com</a>
                </p>
                <div className="flex justify-center gap-4">
                  <Link href="/terms" className="text-[13px] text-[#33B5E5] hover:underline">Terms of Service</Link>
                  <Link href="/contact" className="text-[13px] text-[#33B5E5] hover:underline">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
