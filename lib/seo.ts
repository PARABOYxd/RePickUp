import { Metadata } from 'next';
import { config } from './config';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = config.seo.defaultImage,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author
}: SEOProps): Metadata {
  const siteTitle = title ? `${title} | ${config.business.name}` : `${config.business.name} - Electronics & Furniture Resale Service`;
  const siteDescription = description || 'Professional electronics and furniture pickup and resale service. Get instant quotes, schedule free pickups, and sell your items hassle-free.';

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: [...keywords, 'electronics pickup', 'furniture resale', 'sell electronics', 'furniture buyer'].join(', '),
    openGraph: {
      type,
      title: siteTitle,
      description: siteDescription,
      url: url,
      images: [{
        url: image,
        width: 1200,
        height: 630,
        alt: title || config.business.name
      }],
      siteName: config.business.name,
      locale: 'en_US',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] })
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    }
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://yoursite.com',
    name: config.business.name,
    image: config.seo.defaultImage,
    telephone: config.business.phone,
    email: config.business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.0760,
      longitude: 72.8777
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00'
    },
    serviceType: 'Electronics and Furniture Pickup and Resale',
    areaServed: 'Mumbai, Maharashtra, India'
  };
}

export function generateProductSchema(product: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images,
    description: product.description,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'INR',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: config.business.name
      }
    },
    brand: product.brand,
    category: product.category,
    condition: product.condition
  };
}

export function generateArticleSchema(article: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      name: article.author || config.business.name
    },
    publisher: {
      '@type': 'Organization',
      name: config.business.name,
      logo: {
        '@type': 'ImageObject',
        url: config.seo.defaultImage
      }
    }
  };
}

export function generateFAQSchema(faqs: any[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}