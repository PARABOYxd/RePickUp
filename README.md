# ElectroFurni Pickup - Electronics & Furniture Resale Website

A modern, production-ready Next.js 14 website for electronics and furniture pickup and resale business.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for responsive design and utility-first styling
- **shadcn/ui** components for consistent, accessible UI
- **Framer Motion** for smooth animations and interactions
- **React Query** for efficient API data fetching and caching
- **SEO Optimized** with meta tags, schemas, and sitemap
- **WhatsApp Integration** for instant customer communication
- **Responsive Design** optimized for all device sizes
- **Performance Optimized** for 95+ Lighthouse scores

## 📦 Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # Homepage
│   ├── products/          # Products listing & details
│   ├── pickup-request/    # Pickup request form
│   ├── about/            # About us page
│   ├── contact/          # Contact page
│   ├── blog/             # Blog section
│   ├── faq/              # FAQ page
│   ├── admin/            # Admin dashboard
│   ├── sitemap.ts        # Auto-generated sitemap
│   └── robots.ts         # Robots.txt
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── common/           # Reusable components
│   ├── cards/            # Card components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components
│   └── sections/         # Page sections
├── lib/
│   ├── api.ts            # API service layer
│   ├── config.ts         # App configuration
│   ├── seo.ts            # SEO utilities
│   ├── whatsapp.ts       # WhatsApp utilities
│   └── utils.ts          # General utilities
```

## 🛠 Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **State Management**: React Query
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Image Optimization**: next/image

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd electronics-furniture-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Business Configuration

Update `lib/config.ts` with your business details:

```typescript
export const config = {
  business: {
    name: 'Your Business Name',
    phone: '+91-XXXXXXXXXX',
    whatsapp: '+91XXXXXXXXXX',
    email: 'contact@yourbusiness.com',
    address: 'Your Business Address',
    hours: 'Business Hours'
  },
  api: {
    baseUrl: 'https://your-backend-api.com/api',
  }
};
```

### Backend API Integration

The frontend is designed to work with your Java backend. Update the API endpoints in `lib/api.ts`:

- Products API: `/products`, `/products/{slug}`, `/products/featured`
- Categories API: `/categories`
- Blog API: `/blog`, `/blog/{slug}`
- FAQ API: `/faqs`
- Forms API: `/pickup-requests`, `/contact`
- Admin API: `/admin/pickup-requests`

## 🎨 Customization

### Brand Colors

Update colors in `tailwind.config.ts` and the CSS variables in `app/globals.css`.

### Images

Replace placeholder images with your own:
- Logo: Update in `components/layout/navbar.tsx`
- Hero images: Update in respective section components
- OG image: Add your `public/og-image.jpg`

## 📈 SEO Features

- Dynamic meta tags for all pages
- Schema.org markup (LocalBusiness, Product, Article, FAQ)
- XML sitemap auto-generation
- Robots.txt configuration
- Open Graph and Twitter Card support
- Canonical URLs
- Image alt tags
- Internal linking structure

## 📱 WhatsApp Integration

The website includes comprehensive WhatsApp integration:

- Floating WhatsApp button on all pages
- Pre-filled messages for different contexts
- Product inquiry messages
- Pickup request shortcuts
- Contact form integration

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Use the build command `npm run build` and publish directory `out`
- **Self-hosted**: Use the static files from the `out` directory

## 📊 Performance Optimization

- Image optimization with next/image
- Code splitting with Next.js App Router
- Lazy loading for components and images
- Efficient API caching with React Query
- Minimal bundle size with tree shaking
- Critical CSS inlining
- Preloading for critical resources

## 🔧 Development Tools

- **ESLint**: Code linting
- **TypeScript**: Type checking
- **Tailwind CSS**: Utility-first styling
- **Auto-formatting**: Prettier integration (recommended)

## 📞 Support

For technical support or questions:
- Email: your-email@domain.com
- WhatsApp: +91-XXXXXXXXXX
- Phone: +91-XXXXXXXXXX

## 📄 License

This project is proprietary and confidential.