'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import { config } from '@/lib/config';
import { cn } from '@/lib/utils';

interface CustomButtonProps {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'call';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  whatsappMessage?: { type: 'pickup' | 'product' | 'general' | 'contact'; [key: string]: any };
}

export function CustomButton({
  variant = 'primary',
  size = 'md',
  children,
  className,
  onClick,
  disabled,
  href,
  whatsappMessage,
  ...props
}: CustomButtonProps) {
  const handleClick = () => {
    if (variant === 'whatsapp' && whatsappMessage) {
      openWhatsApp(whatsappMessage);
    } else if (variant === 'call') {
      window.open(`tel:${config.business.phone}`, '_self');
    } else if (href) {
      window.open(href, '_self');
    } else if (onClick) {
      onClick();
    }
  };

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    whatsapp: 'bg-green-500 hover:bg-green-600 text-white',
    call: 'bg-blue-500 hover:bg-blue-600 text-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const Icon = variant === 'whatsapp' ? MessageCircle : variant === 'call' ? Phone : null;

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        onClick={handleClick}
        disabled={disabled}
        className={cn(
          variantClasses[variant],
          sizeClasses[size],
          'font-semibold shadow-md transition-all duration-300',
          className
        )}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4 mr-2" />}
        {children}
      </Button>
    </motion.div>
  );
}