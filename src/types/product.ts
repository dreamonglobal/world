export type Product = {
  id: string;
  name: string;
  images: string[];
  price: number;
  description: string;
  sizes: string[];
  colors: string[];
  stockBySize: Record<string, number>;
  shipping: {
    cost: number;
    regions: string[];
    estimatedDays: number;
  };
}; 