import { SEOHead } from '@/components/common/seo-head';
import { generateMetadata } from '@/lib/seo';
import { AboutHero } from '@/components/sections/about-hero';
import { AboutStats } from '@/components/sections/about-stats';
import { AboutTeam } from '@/components/sections/about-team';
import { AboutValues } from '@/components/sections/about-values';

export const metadata = generateMetadata({
  title: 'About Us - Electronics & Furniture Resale Experts',
  description: 'Learn about our mission to provide the best electronics and furniture pickup and resale service. Professional, reliable, and customer-focused.',
  keywords: ['about us', 'company', 'electronics resale', 'furniture pickup', 'team', 'mission'],
  url: '/about'
});

export default function AboutPage() {
  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen">
        <AboutHero />
        <AboutStats />
        <AboutValues />
        <AboutTeam />
      </div>
    </>
  );
}