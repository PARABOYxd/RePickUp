import { config } from './config';

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = config.api.baseUrl;
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options?.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${url}`, error);
      throw error;
    }
  }

  // Products API
  async getProducts(filters?: { category?: string; page?: number; limit?: number }) {
    const params = new URLSearchParams();
    if (filters?.category) params.append('category', filters.category);
    if (filters?.page) params.append('page', filters.page.toString());
    if (filters?.limit) params.append('limit', filters.limit.toString());
    
    return this.request(`/products?${params.toString()}`);
  }

  async getProduct(slug: string) {
    return this.request(`/products/${slug}`);
  }

  async getFeaturedProducts() {
    return this.request('/products/featured');
  }

  // Categories API
  async getCategories() {
    return this.request('/categories');
  }

  // Blog API
  async getBlogPosts(page = 1, limit = 10) {
    return this.request(`/blog?page=${page}&limit=${limit}`);
  }

  async getBlogPost(slug: string) {
    return this.request(`/blog/${slug}`);
  }

  // FAQ API
  async getFAQs() {
    return this.request('/faqs');
  }

  // Testimonials API
  async getTestimonials() {
    return this.request('/testimonials');
  }

  // Contact & Forms API
  async submitPickupRequest(data: any) {
    return this.request('/pickup-requests', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async submitContactForm(data: any) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async subscribeNewsletter(email: string) {
    return this.request('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Admin API
  async getPickupRequests() {
    return this.request('/admin/pickup-requests');
  }

  async updatePickupRequest(id: string, data: any) {
    return this.request(`/admin/pickup-requests/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }
}

export const apiService = new ApiService();