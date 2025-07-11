import React from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      className="bg-zinc-900 rounded-lg overflow-hidden flex flex-col items-center p-6 cursor-pointer hover:scale-105 transition-transform"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={e => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View details for ${product.name}`}
    >
      <img src={product.images[0]} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
      <h2 className="text-2xl font-bold mb-2 text-center">{product.name}</h2>
      <p className="text-zinc-400 mb-2 text-center">{product.description}</p>
      <div className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</div>
    </div>
  );
}; 