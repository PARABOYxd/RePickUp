'use client';

import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  'Free pickup service',
  'Instant quotes',
  'Best market prices',
  'Professional handling'
];

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Sell Your{' '}
                <span className="text-blue-600">Electronics</span>{' '}
                &{' '}
                <span className="text-green-600">Furniture</span>{' '}
                Hassle-Free
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Sell Your Items for the Best Price – Instant Quotes, Free Pickup, and Fast Payments with 100% Transparency.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <CustomButton
                variant="primary"
                size="lg"
                href="/pickup-request"
                className="group"
              >
                Schedule Pickup Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </CustomButton>

              <CustomButton
                variant="whatsapp"
                size="lg"
                whatsappMessage={{
                  type: 'pickup',
                  customMessage: 'I want to schedule a pickup for my items'
                }}
              >
                WhatsApp Quote
              </CustomButton>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-gray-500"
            >
              ⭐ 4.9/5 rating • 1000+ happy customers • Same-day pickup available
            </motion.p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Electronics and furniture pickup service"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 text-center"
            >
              <p className="text-2xl font-bold text-blue-600">₹50K+</p>
              <p className="text-sm text-gray-600">Avg Monthly Sales</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 text-center"
            >
              <p className="text-2xl font-bold text-green-600">24h</p>
              <p className="text-sm text-gray-600">Response Time</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}