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
