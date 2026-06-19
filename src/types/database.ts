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
  status: number;
}

export interface Product {
  id: number;
  service_id: number;
  code: string;
  name: string;
  cost_price: number;
  sell_price: number;
  status: number;
}
