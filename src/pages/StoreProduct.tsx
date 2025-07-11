import { useParams, Link } from 'react-router-dom';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useEffect, useState } from 'react';
import { getAllShirts } from '../utils/getAllShirts';
import { Product } from '../types/product';

export const StoreProduct = () => {
  const { id } = useParams();
  const [shirt, setShirt] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    getAllShirts().then(shirts => {
      const found = shirts.find((s: Product) => s.id === id);
      setShirt(found || null);
      setLoading(false);
      if (found) {
        setSelectedSize(found.sizes[0] || '');
        setSelectedColor(found.colors[0] || '');
        setMainImage(found.images[0] || '');
      }
    });
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-black text-white pt-32 text-center">Loading...</div>;
  }

  if (!shirt) {
    return (
      <div className="min-h-screen bg-black text-white pt-32 text-center">
        <h1 className="text-4xl font-bold mb-8">Product not found</h1>
        <Link to="/store" className="text-white hover:text-zinc-300 transition inline-flex items-center gap-2">
          ← Back to Store
        </Link>
      </div>
    );
  }

  const inStock = shirt.stockBySize[selectedSize] > 0;
  const maxQty = shirt.stockBySize[selectedSize] || 1;
  const totalPrice = (shirt.price * quantity + shirt.shipping.cost).toFixed(2);

  return (
    <div className="min-h-screen bg-black text-white pt-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start bg-zinc-900 rounded-lg p-8 shadow-lg">
          {/* Images Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="w-full mb-4">
              <img
                src={mainImage}
                alt={shirt.name}
                className="w-full h-96 object-cover rounded-lg border border-zinc-800 bg-zinc-800"
              />
            </div>
            {shirt.images.length > 1 && (
              <div className="flex gap-2 justify-center">
                {shirt.images.map((img, idx) => (
                  <button
                    key={img}
                    className={`border-2 rounded-lg w-20 h-20 object-cover ${mainImage === img ? 'border-red-500' : 'border-zinc-700'}`}
                    onClick={() => setMainImage(img)}
                    aria-label={`Show image ${idx + 1}`}
                  >
                    <img src={img} alt={shirt.name + ' thumbnail ' + (idx + 1)} className="w-full h-full object-cover rounded-lg" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{shirt.name}</h1>
              <div className="text-2xl font-semibold mb-2 text-red-400">${shirt.price.toFixed(2)}</div>
              <div className="mb-2 text-sm text-zinc-400">{inStock ? `${maxQty} in stock for size ${selectedSize}` : `Out of stock for size ${selectedSize}`}</div>
              <p className="text-zinc-300 mb-4">{shirt.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label className="block mb-1 text-sm">Size</label>
                <select
                  className="bg-zinc-800 text-white rounded px-3 py-2"
                  value={selectedSize}
                  onChange={e => setSelectedSize(e.target.value)}
                >
                  {shirt.sizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm">Color</label>
                <select
                  className="bg-zinc-800 text-white rounded px-3 py-2"
                  value={selectedColor}
                  onChange={e => setSelectedColor(e.target.value)}
                >
                  {shirt.colors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm">Quantity</label>
                <input
                  type="number"
                  min={1}
                  max={maxQty}
                  value={quantity}
                  onChange={e => setQuantity(Math.max(1, Math.min(maxQty, Number(e.target.value))))}
                  className="bg-zinc-800 text-white rounded px-3 py-2 w-20"
                  disabled={!inStock}
                />
              </div>
            </div>
            <div className="mb-2 text-sm text-zinc-400">
              Shipping: ${shirt.shipping.cost.toFixed(2)} ({shirt.shipping.regions.join(', ')}) — {shirt.shipping.estimatedDays} days
            </div>
            <div className="text-2xl font-semibold mb-4">Total: ${totalPrice}</div>
            <PayPalButtons
              style={{
                color: 'gold',
                shape: 'pill',
                label: 'pay',
                layout: 'horizontal',
                height: 48,
              }}
              disabled={!inStock}
              createOrder={(data, actions) => {
                return actions.order.create({
                  intent: 'CAPTURE',
                  purchase_units: [
                    {
                      amount: {
                        value: totalPrice,
                        currency_code: 'USD',
                      },
                      description: `${shirt.name} (${selectedSize}, ${selectedColor}) x${quantity}`,
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                if (actions.order) {
                  await actions.order.capture();
                  alert('Thank you for your purchase!');
                }
              }}
            />
            <div className="mt-6">
              <Link to="/store" className="text-white hover:text-zinc-300 transition inline-flex items-center gap-2">
                ← Back to Store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 