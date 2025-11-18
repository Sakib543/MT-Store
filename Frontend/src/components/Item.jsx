/* eslint-disable react/prop-types */

import {Link  } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Item = ({ product }) => {
  return (
    <div className="overflow-hidden group relative">
      {/* Product Image */}
      <div className="relative">
        <Link to={`/product/${product._id}`} className="block">
          <img
            src={product.image[0]}
            alt="Product"
            className="w-full h-auto"
          />
        </Link>
        {/* Hoverable Button */}
      <div className="absolute bottom-0 left-0 w-full bg-gray-600 text-white opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition duration-300">
        <Link
          to={`/product/${product._id}`}
          className="block text-center py-2 font-semibold"
        >
          View Details
        </Link>
      </div>
      {/* Icons on Small Screens */}
      <div className="absolute bottom-2 right-2 flex gap-2 lg:hidden">
      {/* Wishlist Link */}
    
      {/* Cart Link */}
      <Link
        to={`/product/${product._id}`}
        title="Add to Cart"
        className="bg-slate-800 text-white p-2 rounded-full shadow hover:bg-gray-800 transition"
      >
        <AiOutlineShoppingCart size={20} />
      </Link>
    </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Product Name */}
        <h4 className="text-lg font-bold line-clamp-1 mb-2">{product.name}</h4>

        {/* Category and Price */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-red-500 font-medium text-lg">Rs {product.price}.00</span>
          <span className="text-gray-500 line-through text-sm">
            Rs {product.originalPrice}.00
          </span>
        </div>
      </div>
      {/* Icons on Small Screens */}
      
    </div>
  );
};



export default Item