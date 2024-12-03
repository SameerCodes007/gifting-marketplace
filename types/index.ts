export type UserRole = 'ADMIN' | 'VENDOR' | 'BUYER';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  full_name: string;
  created_at: string;
}

export interface VendorProfile {
  id: string;
  user_id: string;
  business_name: string;
  description: string;
  contact_email: string;
  contact_phone: string;
  bank_account: string;
  upi_id?: string;
  is_approved: boolean;
  created_at: string;
}

export interface Product {
  id: string;
  vendor_id: string;
  name: string;
  description: string;
  price: number;
  stock_quantity: number;
  category: string;
  images: string[];
  shipping_info: {
    weight: number;
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
  };
  variants?: ProductVariant[];
  created_at: string;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  name: string;
  price: number;
  stock_quantity: number;
}

export interface Order {
  id: string;
  buyer_id: string;
  vendor_id: string;
  products: OrderProduct[];
  total_amount: number;
  status: OrderStatus;
  payment_status: PaymentStatus;
  shipping_address: Address;
  created_at: string;
}

export interface OrderProduct {
  product_id: string;
  quantity: number;
  price: number;
  variant_id?: string;
}

export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
export type PaymentStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';

export interface Address {
  full_name: string;
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone: string;
}