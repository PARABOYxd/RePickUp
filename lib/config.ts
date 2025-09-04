export const config = {
  business: {
    name: 'ElectroFurni Pickup',
    phone: '+91-9876543210',
    whatsapp: '+919876543210',
    email: 'contact@electrofurni.com',
    address: 'Mumbai, Maharashtra, India',
    hours: 'Mon-Sat: 9AM-7PM, Sun: 10AM-5PM'
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api',
  },
  seo: {
    defaultImage: '/og-image.jpg',
    twitterHandle: '@electrofurni'
  }
} as const;