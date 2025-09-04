'use client';

import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { ArrowRight, Clock, DollarSign, Shield } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Quick Process',
    description: '24-48 hour turnaround'
  },
  {
    icon: DollarSign,
    title: 'Best Prices',
    description: 'Competitive market rates'
  },
  {
    icon: Shield,
    title: 'Secure Service',
    description: 'Safe and reliable'
  }
];

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Turn Your Items into Cash?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have earned money from their unwanted items. 
            Get started today with our simple pickup process.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CustomButton
              variant="primary"
              size="lg"
              href="/pickup-request"
              className="bg-white text-blue-600 hover:bg-gray-100 group"
            >
              Schedule Pickup Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </CustomButton>
            
            <CustomButton
              variant="secondary"
              size="lg"
              href="/products"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Browse Products
            </CustomButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-blue-100 text-sm"
          >
            No hidden fees • Free pickup • Instant quotes
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}