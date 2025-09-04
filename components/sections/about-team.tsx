'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LinkedinIcon, TwitterIcon } from 'lucide-react';

const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'With 15 years in the electronics industry, Rajesh founded the company to revolutionize the resale market.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Priya Patel',
    role: 'Head of Operations',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Priya ensures smooth operations and maintains our high standards of customer service and quality.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Amit Singh',
    role: 'Technical Director',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Amit leads our technical evaluation team and ensures accurate pricing and quality assessments.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  }
];

export function AboutTeam() {
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
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced team is passionate about providing excellent service and building lasting relationships with our customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="flex space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}