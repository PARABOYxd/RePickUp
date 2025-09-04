'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';
import { config } from '@/lib/config';
import { motion } from 'framer-motion';

export function FloatingButtons() {
  const handleWhatsAppClick = () => {
    openWhatsApp({ type: 'general' });
  };

  const handleCallClick = () => {
    window.open(`tel:${config.business.phone}`, '_self');
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={handleWhatsAppClick}
          className="h-14 w-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={handleCallClick}
          className="h-14 w-14 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
          size="icon"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </motion.div>
    </motion.div>
  );
}