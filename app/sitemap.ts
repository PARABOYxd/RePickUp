import { config } from '@/lib/config';

export default function sitemap() {
  const baseUrl = 'https://yoursite.com';

  // Static pages
  const staticPages = [
    '',
    '/products',
    '/pickup-request',
    '/about',
    '/contact',
    '/blog',
    '/faq'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // You can add dynamic pages here by fetching from your API
  // const products = await apiService.getProducts();
  // const productPages = products.map((product) => ({
  //   url: `${baseUrl}/product/${product.slug}`,
  //   lastModified: new Date(product.updatedAt),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }));

  return [...staticPages];
}