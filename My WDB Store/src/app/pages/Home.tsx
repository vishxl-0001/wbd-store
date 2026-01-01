import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { CheckCircle, Shield, Truck } from 'lucide-react';

export const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* HERO SECTION (Background image ONLY till Shop Now) */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568752172055-6961c4146efd?&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover Modern Products
            </h1>

            <p className="text-xl text-gray-100 mb-8">
              Your destination for quality, style, and innovation. Shop the latest collection of premium products.
            </p>

            <Link
              to="/products"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* LIVE STRIP (NO background image) */}
      <section className="bg-white py-6">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-2 rounded-full shadow-md animate-pulse">
            <span className="bg-white text-red-600 text-xs font-bold px-2 py-1 rounded-full">
              LIVE
            </span>
            <p className="text-sm font-semibold">
              Flash Sale • Flat 30–50% OFF • Limited Time.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-gray-100 p-3 rounded-full">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Quality Assured</h3>
                <p className="text-gray-600 text-sm">
                  Every product is thoroughly checked to ensure the highest quality standards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-gray-100 p-3 rounded-full">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Quick and reliable delivery service to get your products on time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-gray-100 p-3 rounded-full">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Secure Payment</h3>
                <p className="text-gray-600 text-sm">
                  100% secure payment processing.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600">
              Discover our handpicked selection of premium products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-block border-2 border-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
