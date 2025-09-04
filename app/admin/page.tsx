'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LoadingSpinner } from '@/components/common/loading-spinner';
import { 
  Package, 
  Users, 
  Calendar, 
  DollarSign, 
  Eye, 
  Edit, 
  Check, 
  X,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { apiService } from '@/lib/api';

// Mock data for development
const mockPickupRequests = [
  {
    id: '1',
    name: 'Rahul Sharma',
    phone: '+91-9876543210',
    email: 'rahul@example.com',
    address: 'Bandra West, Mumbai, Maharashtra 400050',
    category: 'electronics',
    items: 'iPhone 12, MacBook Air, iPad',
    preferredDate: '2025-01-20',
    preferredTime: '9:00 AM - 12:00 PM',
    status: 'pending',
    createdAt: '2025-01-15T10:30:00Z',
    estimatedValue: 75000
  },
  {
    id: '2',
    name: 'Priya Patel',
    phone: '+91-9876543211',
    email: 'priya@example.com',
    address: 'Andheri East, Mumbai, Maharashtra 400069',
    category: 'furniture',
    items: 'Sofa set, dining table, wardrobe',
    preferredDate: '2025-01-21',
    preferredTime: '12:00 PM - 3:00 PM',
    status: 'confirmed',
    createdAt: '2025-01-14T14:20:00Z',
    estimatedValue: 45000
  }
];

const mockStats = {
  totalRequests: 156,
  pendingRequests: 23,
  completedRequests: 133,
  totalRevenue: 2500000,
  avgRequestValue: 35000
};

export default function AdminPage() {
  const [selectedStatus, setSelectedStatus] = useState('all');

  const { data: requests, isLoading } = useQuery({
    queryKey: ['pickup-requests'],
    queryFn: () => apiService.getPickupRequests(),
    retry: false,
    throwOnError: false,
    initialData: mockPickupRequests
  });

  const filteredRequests = requests?.filter((request: any) =>
    selectedStatus === 'all' || request.status === selectedStatus
  ) || [];

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      await apiService.updatePickupRequest(id, { status: newStatus });
      // Refetch data or update state
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage pickup requests, products, and business operations</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {[
            { label: 'Total Requests', value: mockStats.totalRequests.toString(), icon: Package, color: 'blue' },
            { label: 'Pending', value: mockStats.pendingRequests.toString(), icon: Calendar, color: 'yellow' },
            { label: 'Completed', value: mockStats.completedRequests.toString(), icon: Check, color: 'green' },
            { label: 'Revenue', value: `₹${(mockStats.totalRevenue / 100000).toFixed(1)}L`, icon: DollarSign, color: 'purple' },
            { label: 'Avg Value', value: `₹${(mockStats.avgRequestValue / 1000).toFixed(0)}K`, icon: Users, color: 'orange' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 bg-${stat.color}-100 text-${stat.color}-600 rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="requests">Pickup Requests</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="requests" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Pickup Requests</h2>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Requests</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner size="lg" />
              </div>
            ) : (
              <div className="space-y-4">
                {filteredRequests.map((request: any) => (
                  <motion.div
                    key={request.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    layout
                  >
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row justify-between gap-6">
                          <div className="flex-1 space-y-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900">{request.name}</h3>
                                <Badge className={getStatusBadge(request.status)}>
                                  {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                                </Badge>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-500">Request #{request.id}</p>
                                <p className="text-sm text-gray-500">
                                  {new Date(request.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <Phone className="w-4 h-4 text-gray-400" />
                                  <span>{request.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Mail className="w-4 h-4 text-gray-400" />
                                  <span>{request.email}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                                  <span className="text-xs">{request.address}</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <p><span className="font-medium">Category:</span> {request.category}</p>
                                <p><span className="font-medium">Items:</span> {request.items}</p>
                                <p><span className="font-medium">Preferred:</span> {request.preferredDate} at {request.preferredTime}</p>
                                <p><span className="font-medium">Est. Value:</span> ₹{request.estimatedValue.toLocaleString()}</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 lg:w-48">
                            <Select
                              value={request.status}
                              onValueChange={(value) => handleStatusUpdate(request.id, value)}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="confirmed">Confirmed</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                              </SelectContent>
                            </Select>
                            
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="flex-1">
                                <Eye className="w-4 h-4 mr-1" />
                                View
                              </Button>
                              <Button variant="outline" size="sm" className="flex-1">
                                <Edit className="w-4 h-4 mr-1" />
                                Edit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Product Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Product management features will be available here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <CardTitle>Customer Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Customer management features will be available here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Analytics and reporting features will be available here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}