import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Shivacha Technologies',
  description: 'Terms of Service for Shivacha Technologies products and services. Read our usage policies, intellectual property terms, and service agreements.',
};

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing or using any Shivacha Technologies website, platform, product, or service (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you are using the Services on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms. If you do not agree to these Terms, do not use our Services.',
  },
  {
    title: '2. Services Description',
    content: 'Shivacha Technologies provides enterprise software development, blockchain infrastructure, AI/ML systems, fintech platforms, and related professional services. The specific scope, deliverables, timelines, and fees for each engagement are defined in a separate Statement of Work (SOW) or Service Agreement signed by both parties. These Terms apply to all such engagements and to use of our website and pre-built platform products.',
  },
  {
    title: '3. Intellectual Property',
    content: 'Unless otherwise specified in a signed SOW: (a) Shivacha retains ownership of all proprietary frameworks, libraries, tools, and pre-existing IP used in the delivery of services; (b) Upon full payment, clients receive a perpetual, non-exclusive licence to use the custom-built deliverables for their stated business purpose; (c) Shivacha may use general knowledge, skills, and techniques acquired during the engagement for other projects; (d) All Shivacha brand assets, website content, and marketing materials are the exclusive property of Shivacha Technologies.',
  },
  {
    title: '4. Payment Terms',
    content: 'Payment terms are defined in the applicable SOW. Unless otherwise agreed: invoices are due within 30 days of issue; late payments incur interest at 1.5% per month; Shivacha reserves the right to suspend services for overdue accounts; all fees are exclusive of applicable taxes (GST, VAT) which are the client\'s responsibility; refunds for partially completed work are not available unless Shivacha is in material breach.',
  },
  {
    title: '5. Confidentiality',
    content: 'Both parties agree to keep confidential any non-public, proprietary, or business-sensitive information shared during the engagement ("Confidential Information"). Neither party will disclose Confidential Information to third parties without written consent, except as required by law. This obligation survives termination for a period of five (5) years. Source code, architecture designs, and client business data are considered Confidential Information.',
  },
  {
    title: '6. Data Protection',
    content: 'Each party shall comply with applicable data protection laws (including GDPR, CCPA, and India\'s Digital Personal Data Protection Act). Where Shivacha processes personal data on behalf of a client, the parties shall execute a Data Processing Agreement (DPA). Shivacha\'s privacy practices regarding website visitors and direct clients are described in our Privacy Policy.',
  },
  {
    title: '7. Warranties & Representations',
    content: 'Shivacha warrants that: (a) it has the right to provide the services; (b) services will be performed in a professional and workmanlike manner; (c) deliverables will substantially conform to the agreed specifications for 90 days post-delivery. EXCEPT AS EXPRESSLY SET FORTH HEREIN, SHIVACHA MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Smart contracts and blockchain deployments involve inherent risks; clients are responsible for independent security audits.',
  },
  {
    title: '8. Limitation of Liability',
    content: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHIVACHA\'S TOTAL LIABILITY FOR ANY CLAIM ARISING UNDER THESE TERMS SHALL NOT EXCEED THE FEES PAID BY CLIENT IN THE THREE (3) MONTHS PRECEDING THE CLAIM. IN NO EVENT SHALL SHIVACHA BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST CRYPTO ASSETS, OR DATA LOSS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
  },
  {
    title: '9. Termination',
    content: 'Either party may terminate an engagement for material breach if the breach is not cured within 30 days of written notice. Shivacha may suspend or terminate services immediately for non-payment, violation of these Terms, or if continued service would expose Shivacha to legal liability. Upon termination, Shivacha will provide client data in a standard format. Sections on IP, confidentiality, payment, liability, and governing law survive termination.',
  },
  {
    title: '10. Acceptable Use',
    content: 'You agree not to use Shivacha\'s services to: develop systems for illegal activities, including but not limited to money laundering, fraud, or sanctions evasion; build platforms that violate applicable financial regulations without obtaining necessary licences; infringe on third-party intellectual property; distribute malware or conduct cyberattacks; violate any applicable law or regulation. Shivacha reserves the right to terminate services if any of these conditions are violated.',
  },
  {
    title: '11. Force Majeure',
    content: 'Neither party shall be liable for delays or failures in performance caused by circumstances beyond its reasonable control, including acts of God, natural disasters, pandemics, war, government action, internet outages, or blockchain network failures. The affected party must notify the other within 5 business days and resume performance as soon as reasonably practicable.',
  },
  {
    title: '12. Governing Law & Dispute Resolution',
    content: 'These Terms are governed by the laws of India, without regard to conflict of law principles. Any disputes shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration under the rules of the Indian Council of Arbitration (ICA), seated in Gurgaon, Haryana. For clients based in the EU or UK, you may also be entitled to seek relief in your local courts for consumer matters.',
  },
  {
    title: '13. Changes to Terms',
    content: 'Shivacha may update these Terms from time to time. We will notify you of material changes by posting a notice on our website and, for active clients, via email. Your continued use of our Services after changes become effective constitutes acceptance of the updated Terms. The current version of these Terms is always available at shivacha.com/terms.',
  },
  {
    title: '14. Contact',
    content: 'For questions about these Terms, contact our Legal team at: legal@shivacha.com | Shivacha Technologies Pvt. Ltd., DLF Cyber City, Gurgaon, Haryana 122002, India.',
  },
];

export default function TermsPage() {
  return (
    <div className="bg-[#000008]">

      <section className="section relative overflow-hidden grid-bg">
        <div className="orb w-96 h-96 bg-[#0099E6] opacity-[0.05] -right-20 top-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Legal</div>
            <h1 className="h1 text-white mb-4">Terms of Service</h1>
            <p className="lead mb-3">
              These Terms govern your use of Shivacha Technologies products, services, and website.
            </p>
            <p className="text-[14px] text-[#3D5470]">
              Last updated: <span className="text-[#7A8FA6]">May 1, 2026</span> &nbsp;·&nbsp;
              Effective: <span className="text-[#7A8FA6]">May 1, 2026</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[#020B18]">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

            {/* Sidebar Nav */}
            <div className="hidden lg:block">
              <div className="glass rounded-2xl p-5 border border-[#0E1E34] sticky top-24">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#3D5470] mb-4">Sections</p>
                <nav className="space-y-1.5">
                  {SECTIONS.map((s, i) => (
                    <a key={i} href={`#section-${i}`}
                      className="block text-[12px] text-[#3D5470] hover:text-[#33B5E5] transition-colors py-0.5 leading-snug">
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-5">
              <div className="card rounded-2xl p-6 border border-[#FFB800]/20 bg-[#FFB800]/04">
                <p className="text-[13px] text-[#FFB800] leading-relaxed">
                  <strong>Important:</strong> These Terms include a limitation of liability clause (Section 8) and an arbitration agreement (Section 12). Please read them carefully.
                </p>
              </div>

              {SECTIONS.map((section, i) => (
                <div key={i} id={`section-${i}`} className="card rounded-2xl p-6 border border-[#0E1E34]">
                  <h2 className="text-[17px] font-bold text-white mb-3">{section.title}</h2>
                  <p className="text-[13px] text-[#7A8FA6] leading-relaxed">{section.content}</p>
                </div>
              ))}

              <div className="glass rounded-2xl p-6 border border-[#0E1E34] text-center">
                <p className="text-[14px] text-[#7A8FA6] mb-4">
                  Questions about these Terms? Contact us at{' '}
                  <a href="mailto:legal@shivacha.com" className="text-[#33B5E5] hover:underline">legal@shivacha.com</a>
                </p>
                <div className="flex justify-center gap-4">
                  <Link href="/privacy" className="text-[13px] text-[#33B5E5] hover:underline">Privacy Policy</Link>
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
