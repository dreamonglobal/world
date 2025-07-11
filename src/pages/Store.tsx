import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllShirts } from '../utils/getAllShirts';
import { Product } from '../types/product';
import { ProductCard } from '../components/ProductCard';

export const Store = () => {
  const navigate = useNavigate();
  const [shirts, setShirts] = useState<Product[]>([]);

  useEffect(() => {
    getAllShirts().then(setShirts);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-36">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center">Dream On Store</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shirts.map((shirt) => (
            <ProductCard
              key={shirt.id}
              product={shirt}
              onClick={() => navigate(`/store/${shirt.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 