import Hero from '@/components/home/Hero';
import StatsSection from '@/components/home/StatsSection';
import ProductsEcosystem from '@/components/home/ProductsEcosystem';
import ServicesSection from '@/components/home/ServicesSection';
import WhyUs from '@/components/home/WhyUs';
import TechnologiesSection from '@/components/home/TechnologiesSection';
import ProcessSection from '@/components/home/ProcessSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import AwardsSection from '@/components/home/AwardsSection';
import BlogPreview from '@/components/home/BlogPreview';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProductsEcosystem />
      <ServicesSection />
      <WhyUs />
      <TechnologiesSection />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialsSection />
      <AwardsSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}
