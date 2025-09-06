'use client';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { TestimonialCard } from '@/components/cards/testimonial-card';
import { LoadingCard } from '@/components/common/loading-spinner';
import { apiService } from '@/lib/api';

// Mock data for development
const mockTestimonials = [
  {
    id: '1',
    name: 'Priya Sharma',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    comment: 'Excellent service! They picked up my old furniture and gave me a great price. Very professional and punctual.',
    location: 'Mumbai',
    date: '2025-01-15'
  },
  {
    id: '2',
    name: 'Rahul Gupta',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    comment: 'Sold my iPhone through them. Process was smooth, payment was instant. Highly recommend!',
    location: 'Mumbai',
    date: '2025-01-10'
  },
  {
    id: '3',
    name: 'Anita Singh',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    comment: 'Amazing experience! They handled everything professionally and offered the best price in the market.',
    location: 'Mumbai',
    date: '2025-01-08'
  }
];

export function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: () => apiService.getTestimonials(),
    retry: false,
    throwOnError: false,
    initialData: mockTestimonials
  });

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
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read testimonials from satisfied customers who have sold their items through our platform.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <LoadingCard key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial: any, index: number) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}