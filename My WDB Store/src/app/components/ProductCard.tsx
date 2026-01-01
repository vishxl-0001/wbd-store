import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Product } from "../contexts/CartContext";
import { useCart } from "../contexts/CartContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">

      {/* CLICKABLE AREA */}
      <Link to={`/product/${product.id}`} className="group block relative">

        {/* IMAGE */}
        <div className="aspect-square overflow-hidden bg-gray-100 relative">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* DISCOUNT BADGE */}
          {product.discountPercent && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discountPercent}% OFF
            </span>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <h3 className="font-medium mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* RATING */}
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">
              ({product.rating})
            </span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-green-600">
              ₹{product.price.toLocaleString()}
            </span>

            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

        </div>
      </Link>

      {/* BUTTONS */}
      <div className="px-4 pb-4 flex gap-2">
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors cursor-pointer"
        >
          Add to Cart
        </button>

        <Link
          to={`/product/${product.id}`}
          className="flex-1 bg-black text-white py-2 rounded text-center hover:bg-gray-800 transition-colors"
        >
          Buy Now
        </Link>
      </div>

    </div>
  );
};
