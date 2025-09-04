'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming the Way You Sell Electronics & Furniture
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Since 2020, we've been dedicated to making the process of selling your unwanted electronics 
              and furniture as simple and profitable as possible. Our mission is to provide fair prices, 
              excellent service, and contribute to a more sustainable future through reuse and recycling.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With over 10,000 successful transactions and counting, we've built a reputation for 
              trustworthiness, professionalism, and customer satisfaction that sets us apart in the industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team at work"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}