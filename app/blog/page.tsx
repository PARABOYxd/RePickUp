'use client';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { LoadingCard } from '@/components/common/loading-spinner';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { apiService } from '@/lib/api';
import { SEOHead } from '@/components/common/seo-head';

// Mock blog posts for development
const mockPosts = [
  {
    id: '1',
    title: 'How to Get the Best Price for Your Used Electronics',
    excerpt: 'Learn the insider tips and tricks to maximize the value of your electronics when selling.',
    content: '',
    slug: 'best-price-used-electronics',
    featuredImage: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Rajesh Kumar',
    publishedAt: '2025-01-15',
    updatedAt: '2025-01-15',
    category: 'Tips',
    readTime: 5
  },
  {
    id: '2',
    title: 'Sustainable Furniture: Why Buying Pre-owned Makes Sense',
    excerpt: 'Discover the environmental and financial benefits of choosing pre-owned furniture over new items.',
    content: '',
    slug: 'sustainable-furniture-pre-owned',
    featuredImage: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Priya Patel',
    publishedAt: '2025-01-12',
    updatedAt: '2025-01-12',
    category: 'Sustainability',
    readTime: 7
  },
  {
    id: '3',
    title: 'Electronics Recycling: What Happens to Your Old Devices?',
    excerpt: 'Follow the journey of your old electronics through our responsible recycling process.',
    content: '',
    slug: 'electronics-recycling-process',
    featuredImage: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Amit Singh',
    publishedAt: '2025-01-10',
    updatedAt: '2025-01-10',
    category: 'Environment',
    readTime: 4
  }
];

export default function BlogPage() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: () => apiService.getBlogPosts(),
    retry: false,
    throwOnError: false,
    initialData: mockPosts
  });

  return (
    <>
      <SEOHead />
      
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
                Our Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest tips, trends, and insights about electronics and furniture resale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <LoadingCard key={i} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: any, index: number) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </Link>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-sm text-gray-500">{post.readTime} min read</span>
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                          {post.title}
                        </h2>
                      </Link>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}