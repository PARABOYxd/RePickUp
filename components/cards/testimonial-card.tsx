'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    avatar?: string;
    rating: number;
    comment: string;
    location?: string;
    date: string;
  };
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start gap-4">
        <Quote className="w-8 h-8 text-blue-200 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <p className="text-gray-700 mb-4 italic leading-relaxed">
            "{testimonial.comment}"
          </p>
          
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              ({testimonial.rating}/5)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage 
                src={testimonial.avatar || `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100`} 
                alt={testimonial.name} 
              />
              <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              {testimonial.location && (
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}