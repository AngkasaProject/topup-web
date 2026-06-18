export interface Service {
  id: number;

  slug: string;

  name: string;

  category: string;

  inputType: string;

  logo: string;

  banner: string;

  description: string;

  badges: readonly string[];
}
