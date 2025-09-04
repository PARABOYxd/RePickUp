import { Suspense } from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { CategoriesSection } from '@/components/sections/categories-section';
import { FeaturedProductsSection } from '@/components/sections/featured-products-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';
import { SEOHead } from '@/components/common/seo-head';
import { LoadingCard } from '@/components/common/loading-spinner';
import { generateLocalBusinessSchema } from '@/lib/seo';

export default function Home() {
  return (
    <>
      <SEOHead schema={generateLocalBusinessSchema()} />
      
      <HeroSection />
      
      <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8"><LoadingCard /><LoadingCard /><LoadingCard /><LoadingCard /></div>}>
        <CategoriesSection />
      </Suspense>
      
      <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8"><LoadingCard /><LoadingCard /><LoadingCard /></div>}>
        <FeaturedProductsSection />
      </Suspense>
      
      <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8"><LoadingCard /><LoadingCard /><LoadingCard /></div>}>
        <TestimonialsSection />
      </Suspense>
      
      <CTASection />
    </>
  );
}