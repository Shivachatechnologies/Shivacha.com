import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Nft Development | Shivacha Technologies',
  description: 'Enterprise Nft Development services by Shivacha Technologies. Build production-grade solutions with 200+ blockchain engineers.',
};

export default function Page() {
  return (
    <div className="bg-[#000008]">
      <section className="section relative overflow-hidden grid-bg">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Nft Development</div>
            <h1 className="h1 text-white mb-6">Enterprise <span className="gt-blue">Nft Development</span></h1>
            <p className="lead max-w-xl mb-8">
              Production-grade Nft Development solutions built by Shivacha Technologies — 200+ engineers,
              8+ years experience, enterprise security standards.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact#consultation" className="btn btn-primary">
                Get Free Consultation <ArrowRight size={14} />
              </Link>
              <Link href="/portfolio" className="btn btn-secondary">View Projects</Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
