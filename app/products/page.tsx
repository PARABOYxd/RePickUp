'use client';

import { useState, Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/cards/product-card';
import { LoadingCard } from '@/components/common/loading-spinner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { apiService } from '@/lib/api';
import { SEOHead } from '@/components/common/seo-head';
import { generateMetadata } from '@/lib/seo';

// Mock products for development
const mockProducts = [
  {
    id: '1',
    name: 'iPhone 14 Pro - Excellent Condition',
    price: 65000,
    originalPrice: 75000,
    condition: 'Excellent',
    category: 'electronics',
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
    category: 'furniture',
    images: ['https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500'],
    slug: 'modern-l-shaped-sofa',
    inStock: true
  },
  {
    id: '3',
    name: 'MacBook Air M2 - Like New',
    price: 85000,
    originalPrice: 95000,
    condition: 'Like New',
    category: 'electronics',
    images: ['https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500'],
    slug: 'macbook-air-m2-like-new',
    inStock: true
  },
  {
    id: '4',
    name: 'Executive Office Chair',
    price: 8000,
    originalPrice: 12000,
    condition: 'Good',
    category: 'furniture',
    images: ['https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=500'],
    slug: 'executive-office-chair',
    inStock: true
  },
  {
    id: '5',
    name: 'Samsung 55" Smart TV',
    price: 35000,
    originalPrice: 45000,
    condition: 'Excellent',
    category: 'electronics',
    images: ['https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=500'],
    slug: 'samsung-55-smart-tv',
    inStock: true
  },
  {
    id: '6',
    name: 'Wooden Dining Table Set',
    price: 18000,
    originalPrice: 25000,
    condition: 'Good',
    category: 'furniture',
    images: ['https://images.pexels.com/photos/1126384/pexels-photo-1126384.jpeg?auto=compress&cs=tinysrgb&w=500'],
    slug: 'wooden-dining-table-set',
    inStock: true
  }
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const { data: products, isLoading } = useQuery({
    queryKey: ['products', selectedCategory, currentPage],
    queryFn: () => apiService.getProducts({ 
      category: selectedCategory !== 'all' ? selectedCategory : undefined,
      page: currentPage,
      limit: 12 
    }),
    retry: false,
    throwOnError: false,
    initialData: mockProducts
  });

  const filteredProducts = products?.filter((product: any) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || product.category === selectedCategory)
  ) || [];

  const metadata = generateMetadata({
    title: 'Products - Quality Electronics & Furniture for Sale',
    description: 'Browse our collection of quality pre-owned electronics and furniture. All items are thoroughly inspected and priced competitively.',
    keywords: ['used electronics', 'second hand furniture', 'refurbished items', 'affordable electronics'],
    url: '/products'
  });

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Our Products
              </h1>
              <p className="text-xl text-gray-600">
                Quality electronics and furniture at affordable prices
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full md:w-64"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                    <SelectItem value="appliances">Appliances</SelectItem>
                    <SelectItem value="office">Office Equipment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <p className="text-sm text-gray-600">
                Showing {filteredProducts.length} products
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <LoadingCard key={i} />
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-600 mb-4">No products found</p>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product: any, index: number) => (
                  <ProductCard key={product.id} product={product} priority={index < 4} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}