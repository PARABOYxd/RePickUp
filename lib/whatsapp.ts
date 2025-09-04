import { config } from './config';

export interface WhatsAppMessage {
  type: 'pickup' | 'product' | 'general' | 'contact';
  productName?: string;
  productId?: string;
  customerName?: string;
  customerPhone?: string;
  customMessage?: string;
}

export function generateWhatsAppLink({ type, productName, productId, customerName, customerPhone, customMessage }: WhatsAppMessage): string {
  let message = '';

  switch (type) {
    case 'pickup':
      message = `Hello! I would like to schedule a pickup for my items. ${customerName ? `My name is ${customerName}.` : ''} ${customerPhone ? `My phone number is ${customerPhone}.` : ''} ${customMessage || 'Please let me know the next available slot.'}`;
      break;
    
    case 'product':
      message = `Hi! I'm interested in ${productName || 'this product'}${productId ? ` (ID: ${productId})` : ''}. Could you please provide more details about availability and pricing?`;
      break;
    
    case 'contact':
      message = `Hello! I would like to get in touch regarding your pickup and resale services. ${customMessage || 'Please contact me at your earliest convenience.'}`;
      break;
    
    case 'general':
    default:
      message = customMessage || 'Hello! I would like to know more about your services.';
      break;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${config.business.whatsapp}?text=${encodedMessage}`;
}

export function openWhatsApp(messageConfig: WhatsAppMessage) {
  const link = generateWhatsAppLink(messageConfig);
  window.open(link, '_blank');
}