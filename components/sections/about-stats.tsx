'use client';

import { motion } from 'framer-motion';
import { Users, Package, DollarSign, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '10,000+',
    label: 'Happy Customers',
    description: 'Satisfied with our service'
  },
  {
    icon: Package,
    number: '50,000+',
    label: 'Items Processed',
    description: 'Electronics & furniture sold'
  },
  {
    icon: DollarSign,
    number: '₹2Cr+',
    label: 'Total Payouts',
    description: 'Paid to customers'
  },
  {
    icon: Award,
    number: '4.9/5',
    label: 'Customer Rating',
    description: 'Average review score'
  }
];

export function AboutStats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600">
            These numbers reflect our commitment to excellent service and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</h4>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}