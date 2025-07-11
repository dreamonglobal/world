import { Product } from '../types/product';

export const getAllShirts = async (): Promise<Product[]> => [
  {
    id: 'do-builds-classic-tee',
    name: 'DO: Builds Tee',
    images: ['/do-builds-front.png', '/do-builds-back.png'],
    price: 30.00,
    description: 'Soft cotton, classic fit, Dream On logo.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: ['Black'],
    stockBySize: {
      S: 10,
      M: 15,
      L: 8,
      XL: 5,
      XXL: 4,
      XXXL: 0
    },
    shipping: {
      cost: 5.00,
      regions: ['US', 'Canada', 'International'],
      estimatedDays: 5
    }
  }
]; 