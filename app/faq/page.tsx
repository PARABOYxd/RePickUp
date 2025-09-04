'use client';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { apiService } from '@/lib/api';
import { SEOHead } from '@/components/common/seo-head';
import { generateFAQSchema } from '@/lib/seo';

// Mock FAQs for development
const mockFAQs = [
  {
    id: '1',
    question: 'How does the pickup process work?',
    answer: 'Simply submit a pickup request through our website or WhatsApp. We\'ll evaluate your items, provide a quote, and schedule a convenient pickup time. Our team will come to your location, verify the items, and pay you on the spot.',
    category: 'Process'
  },
  {
    id: '2',
    question: 'What types of electronics do you buy?',
    answer: 'We purchase a wide range of electronics including smartphones, laptops, tablets, TVs, cameras, gaming consoles, and more. Items should be in working condition or have minor issues that can be repaired.',
    category: 'Products'
  },
  {
    id: '3',
    question: 'Do you buy damaged furniture?',
    answer: 'We consider furniture with minor damage or wear. The final price depends on the condition and repairability. We evaluate each piece individually to provide the best possible quote.',
    category: 'Products'
  },
  {
    id: '4',
    question: 'How do you determine the price?',
    answer: 'Our pricing is based on current market rates, item condition, brand value, age, and demand. We use industry-standard evaluation criteria to ensure fair and competitive pricing.',
    category: 'Pricing'
  },
  {
    id: '5',
    question: 'Is the pickup service really free?',
    answer: 'Yes! We provide completely free pickup service within our service areas. There are no hidden charges or fees. You only pay for the items we purchase from you.',
    category: 'Service'
  },
  {
    id: '6',
    question: 'How quickly do you respond to requests?',
    answer: 'We typically respond to pickup requests within 2-4 hours during business hours. Pickups are usually scheduled within 24-48 hours based on your preferred time slot.',
    category: 'Service'
  },
  {
    id: '7',
    question: 'What payment methods do you offer?',
    answer: 'We offer immediate payment via cash, bank transfer, or UPI. Payment is processed on the spot after item verification during pickup.',
    category: 'Payment'
  },
  {
    id: '8',
    question: 'Do you provide any warranty on purchased items?',
    answer: 'Yes, we provide a 1-3 month warranty on electronics and furniture we sell, depending on the item category and condition. Warranty terms are clearly specified for each product.',
    category: 'Warranty'
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const { data: faqs, isLoading } = useQuery({
    queryKey: ['faqs'],
    queryFn: () => apiService.getFAQs(),
    retry: false,
    throwOnError: false,
    initialData: mockFAQs
  });

  const filteredFAQs = faqs?.filter((faq: any) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const faqSchema = generateFAQSchema(faqs || []);

  return (
    <>
      <SEOHead schema={faqSchema} />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Find answers to common questions about our pickup and resale services.
              </p>

              {/* Search */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner size="lg" />
              </div>
            ) : filteredFAQs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-600 mb-4">No FAQs found</p>
                <p className="text-gray-500">Try adjusting your search terms</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="space-y-2">
                      {filteredFAQs.map((faq: any, index: number) => (
                        <AccordionItem 
                          key={faq.id} 
                          value={faq.id}
                          className="border border-gray-200 rounded-lg px-4"
                        >
                          <AccordionTrigger className="text-left hover:no-underline">
                            <span className="font-semibold text-gray-900">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help with any questions you might have.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}