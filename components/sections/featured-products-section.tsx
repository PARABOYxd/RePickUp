'use client';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProductCard } from '@/components/cards/product-card';
import { LoadingCard } from '@/components/common/loading-spinner';
import { apiService } from '@/lib/api';
import { ArrowRight } from 'lucide-react';

// Mock data for development
const mockProducts = [
  {
    id: '1',
    name: 'iPhone 14 Pro - Excellent Condition',
    price: 65000,
    originalPrice: 75000,
    condition: 'Excellent',
    category: 'Electronics',
    images: ['https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&w=500'],
    slug: 'iphone-14-pro-excellent',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Modern L-Shaped Sofa Set',
    price: 25000,
    originalPrice: 35000,
    condition: 'Good',
    category: 'Furniture',
    images: ['https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500'],
    slug: 'modern-l-shaped-sofa',
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'MacBook Air M2 - Like New',
    price: 85000,
    originalPrice: 95000,
    condition: 'Like New',
    category: 'Electronics',
    images: ['https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500'],
    slug: 'macbook-air-m2-like-new',
    inStock: true,
    featured: true
  }
];

export function FeaturedProductsSection() {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['featured-products'],
    queryFn: () => apiService.getFeaturedProducts(),
    // Use mock data when API fails
    retry: false,
    throwOnError: false,
    initialData: mockProducts
  });

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check out our latest arrivals and best deals on quality electronics and furniture.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <LoadingCard key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Failed to load featured products. Please try again later.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.slice(0, 3).map((product: any, index: number) => (
                <ProductCard key={product.id} product={product} priority={index === 0} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 group"
                >
                  View All Products
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}