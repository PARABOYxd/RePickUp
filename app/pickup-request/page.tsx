import { PickupRequestForm } from '@/components/forms/pickup-request-form';
import { SEOHead } from '@/components/common/seo-head';
import { generateMetadata } from '@/lib/seo';
import { motion } from 'framer-motion';

const metadata = generateMetadata({
  title: 'Schedule Pickup Request - Free Electronics & Furniture Pickup',
  description: 'Schedule a free pickup for your electronics and furniture. Get instant quotes and turn your unwanted items into cash.',
  keywords: ['pickup request', 'free pickup', 'sell electronics', 'furniture pickup', 'schedule pickup'],
  url: '/pickup-request'
});

export default function PickupRequestPage() {
  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Header */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Schedule Your Pickup
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get instant quotes for your electronics and furniture. Our team will pick up your items at your convenience.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PickupRequestForm />
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Submit Request',
                  description: 'Fill out the form with your item details and preferred pickup time.'
                },
                {
                  step: '2',
                  title: 'Get Quote',
                  description: 'We\'ll evaluate your items and provide an instant quote within 24 hours.'
                },
                {
                  step: '3',
                  title: 'Pickup & Payment',
                  description: 'We pick up your items and pay you immediately upon collection.'
                }
              ].map((process, index) => (
                <div key={process.step} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}