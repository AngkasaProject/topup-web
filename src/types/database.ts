export interface Category {
  id: number;
  slug: string;
  name: string;
  icon: string | null;
  status: number;
}

export interface Service {
  id: number;
  category_id: number;
  slug: string;
  name: string;
  logo: string | null;
  banner: string | null;
  description: string | null;
  input_type: string;
  status: number;
}

export interface Product {
  id: number;
  service_id: number;
  code: string;
  name: string;
  cost_price: number;
  sell_price: number;
  original_price: number;
  status: number;
}

export interface PaymentMethod {
  id: number;

  code: string;

  name: string;

  provider: string;

  group_name: string;

  logo: string | null;

  fee: number;

  status: number;

  sort_order: number;
}
