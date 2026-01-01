import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <button
          onClick={() => navigate('/products')}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Product Image */}
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2 text-sm text-gray-600">{product.category}</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">({product.rating} rating)</span>
          </div>

          <div className="mb-6">
  <div className="flex items-center gap-4">
    <span className="text-4xl font-bold text-green-600">
      ₹{product.price.toLocaleString()}
    </span>

    {product.originalPrice && (
      <span className="text-xl text-gray-500 line-through">
        ₹{product.originalPrice.toLocaleString()}
      </span>
    )}

    {product.discountPercent && (
      <span className="text-lg font-semibold text-red-500">
        {product.discountPercent}% OFF
      </span>
    )}
  </div>

  <p className="text-sm text-green-700 mt-1">
    Inclusive of all taxes
  </p>
</div>


          <div className="mb-8">
            <h3 className="font-semibold mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Buy Now
            </button>
            <button
              onClick={() => navigate('/products')}
              className="flex-1 border-2 border-black px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
            </button>
          </div>

          {/* <div className="mt-8 pt-8 border-t space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Free Shipping</span>
              <span className="font-semibold">On orders above ₹999</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Time</span>
              <span className="font-semibold">3-5 Business Days</span>
            </div>
            <div className="flex justify-between">
              <span>Return Policy</span>
              <span className="font-semibold">7 Days Easy Return</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
