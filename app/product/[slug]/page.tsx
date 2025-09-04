import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { ProductDetails } from '@/components/sections/product-details';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import { generateMetadata as generateSEOMetadata, generateProductSchema } from '@/lib/seo';
import { SEOHead } from '@/components/common/seo-head';
import { apiService } from '@/lib/api';

// Mock product for development
const mockProduct = {
  id: '1',
  name: 'iPhone 14 Pro - Excellent Condition',
  price: 65000,
  originalPrice: 75000,
  condition: 'Excellent',
  category: 'Electronics',
  brand: 'Apple',
  images: [
    'https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  slug: 'iphone-14-pro-excellent',
  description: 'iPhone 14 Pro in excellent condition with minimal signs of use. Includes original charger and case. Battery health at 95%. Fully functional with all features working perfectly.',
  specifications: {
    'Storage': '128GB',
    'Color': 'Deep Purple',
    'Condition': 'Excellent',
    'Battery Health': '95%',
    'Warranty': '3 months',
    'Accessories': 'Charger, Case'
  },
  inStock: true,
  featured: true
};

export async function generateStaticParams() {
  return [
    { slug: 'iphone-14-pro-excellent' }, // 👈 mock slug for static export
  ];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const product = await apiService.getProduct(params.slug);
    return generateSEOMetadata({
      title: `${product.name} - ₹${product.price.toLocaleString()}`,
      description: product.description,
      keywords: [product.name, product.brand, product.category, 'buy', 'resale'],
      image: product.images[0],
      url: `/product/${product.slug}`,
      type: 'product'
    });
  } catch (error) {
    return generateSEOMetadata({
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    });
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  let product;

  try {
    product = await apiService.getProduct(params.slug);
  } catch (error) {
    // Use mock data for development
    product = mockProduct;
    if (params.slug !== mockProduct.slug) {
      notFound();
    }
  }

  if (!product) {
    notFound();
  }

  const productSchema = generateProductSchema(product);

  return (
    <>
      <SEOHead schema={productSchema} />

      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      }>
        <ProductDetails product={product} />
      </Suspense>
    </>
  );
}
