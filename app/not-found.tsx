import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#000008] min-h-screen flex items-center justify-center">
      <div className="container text-center max-w-2xl">
        <div className="text-[120px] font-black gt-blue leading-none mb-4">404</div>
        <h1 className="h2 text-white mb-4">Page Not Found</h1>
        <p className="lead mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn btn-primary">Back to Home <ArrowRight size={14} /></Link>
          <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
          {[
            { label: 'Services', href: '/services' },
            { label: 'Products', href: '/products/crypto-exchange' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'About', href: '/about' },
          ].map(l => (
            <Link key={l.href} href={l.href}
              className="p-3 rounded-xl bg-[#060E1C] border border-[#0E1E34] hover:border-[#1E3A5A] text-[13px] text-[#7A8FA6] hover:text-[#33B5E5] transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
