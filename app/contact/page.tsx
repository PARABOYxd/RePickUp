import { SEOHead } from '@/components/common/seo-head';
import { generateMetadata } from '@/lib/seo';
import { ContactForm } from '@/components/forms/contact-form';
import { ContactInfo } from '@/components/sections/contact-info';

export const metadata = generateMetadata({
  title: 'Contact Us - Get in Touch for Pickup Services',
  description: 'Contact ElectroFurni Pickup for electronics and furniture pickup services. Call, WhatsApp, or visit our office for immediate assistance.',
  keywords: ['contact', 'pickup service', 'electronics buyer', 'furniture pickup', 'customer service'],
  url: '/contact'
});

export default function ContactPage() {
  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about our pickup service? Want to schedule a pickup? 
                We're here to help you every step of the way.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}