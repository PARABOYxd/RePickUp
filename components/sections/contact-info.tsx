'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { config } from '@/lib/config';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    description: config.business.phone,
    action: 'Call Now',
    type: 'call' as const
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Instant support and quotes',
    action: 'Chat Now',
    type: 'whatsapp' as const
  },
  {
    icon: Mail,
    title: 'Email',
    description: config.business.email,
    action: 'Send Email',
    type: 'email' as const
  }
];

const businessInfo = [
  {
    icon: MapPin,
    title: 'Address',
    description: config.business.address
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: config.business.hours
  },
  {
    icon: Navigation,
    title: 'Service Area',
    description: 'Mumbai & surrounding areas'
  }
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Contact Methods
        </h2>
        <p className="text-gray-600 mb-6">
          Choose your preferred way to get in touch with us. We're always ready to help!
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{method.title}</h3>
                        <p className="text-gray-600 text-sm">{method.description}</p>
                      </div>
                    </div>
                    
                    <CustomButton
                      variant={method.type}
                      size="sm"
                      whatsappMessage={method.type === 'whatsapp' ? { type: 'contact' } : undefined}
                      href={method.type === 'email' ? `mailto:${config.business.email}` : undefined}
                    >
                      {method.action}
                    </CustomButton>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Business Info */}
      <Card>
        <CardHeader>
          <CardTitle>Business Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {businessInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={info.title} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{info.title}</h4>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </motion.div>
  );
}