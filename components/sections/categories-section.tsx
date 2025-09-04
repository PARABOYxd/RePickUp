'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Smartphone, Sofa, Car, Monitor, Briefcase, Package } from 'lucide-react';

const categories = [
  {
    name: 'Electronics',
    icon: Smartphone,
    description: 'Phones, laptops, TVs, cameras',
    color: 'blue',
    href: '/products?category=electronics'
  },
  {
    name: 'Furniture',
    icon: Sofa,
    description: 'Sofas, chairs, tables, beds',
    color: 'green',
    href: '/products?category=furniture'
  },
  {
    name: 'Appliances',
    icon: Car,
    description: 'Washing machines, refrigerators',
    color: 'purple',
    href: '/products?category=appliances'
  },
  {
    name: 'Office Equipment',
    icon: Briefcase,
    description: 'Desks, chairs, computers',
    color: 'orange',
    href: '/products?category=office'
  },
  {
    name: 'Gaming',
    icon: Monitor,
    description: 'Consoles, PCs, accessories',
    color: 'red',
    href: '/products?category=gaming'
  },
  {
    name: 'Others',
    icon: Package,
    description: 'Miscellaneous items',
    color: 'gray',
    href: '/products?category=others'
  },
];

const colorClasses = {
  blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
  green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
  purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
  orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
  red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
  gray: 'from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
};

export function CategoriesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Buy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We purchase a wide range of electronics and furniture items. 
            Browse our categories to see what we're currently buying.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={category.href}>
                  <div className={`bg-gradient-to-br ${colorClasses[category.color as keyof typeof colorClasses]} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-8 h-8" />
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <span className="text-xs font-semibold">→</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}