import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Case Studies | Enterprise Blockchain & AI Projects',
  description: 'Detailed case studies of enterprise blockchain, AI, and fintech projects delivered by Shivacha Technologies globally.',
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#000008]">
      <section className="section relative overflow-hidden grid-bg">
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="section-label justify-center mb-4">Case Studies</div>
            <h1 className="h1 text-white mb-6">Real Results for <br /><span className="gt-blue">Global Enterprises</span></h1>
            <p className="lead max-w-2xl mx-auto mb-8">
              Detailed breakdowns of how Shivacha Technologies has helped enterprises launch,
              scale, and transform with blockchain, AI, and fintech infrastructure.
            </p>
            <Link href="/portfolio" className="btn btn-primary">
              View Portfolio <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
