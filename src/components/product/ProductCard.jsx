import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800  group w-full ">
      {/* Image Container with proper aspect ratio and breathing space */}
      <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
        <div className="aspect-square rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-inner">
          <img
            src={product.images}
            alt={product.title}
            className="w-full h-full object-cover object-center "
          />
        </div>

        {/* Price badge with enhanced styling */}
        <div className="absolute top-8 left-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold px-2 py-1 rounded-full shadow-xl backdrop-blur-sm border border-blue-400/20 z-10">
          <span className="text-xs opacity-90">$</span>
          <span className="text-sm">{product.price}</span>
        </div>
      </div>

      {/* Content section with better spacing */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        {/* Category tag */}
        <div className="flex items-center space-x-2">
          <span className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
            {product.category || "Featured"}
          </span>
          <span className="text-xs uppercase tracking-wider text-purple-600 dark:text-purple-400 font-semibold bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full">
            stocks: {product.stock}
          </span>
        </div>

        {/* Title with better typography */}
        <h2 className="font-bold text-xl text-gray-900 dark:text-white leading-tight line-clamp-2 ">
          {product.title}
        </h2>

        {/* Description with improved readability */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1">
          {product.description}
        </p>

        {/* Enhanced button with gradient and better interaction */}
        <div className="mt-auto pt-2">
          <Link to={"/product"}>
            <button className=" cursor-pointer group/btn inline-flex items-center justify-center w-full bg-gradient-to-r bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl text-center shadow-lg relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>View Details</span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
