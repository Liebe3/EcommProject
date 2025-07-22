// src/pages/ProductPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsNotFound from "../../components/states/ProductsNotFound";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Failed to load product", err));
  }, [id]);

  return (
    <div className="min-h-screen w-full dark:bg-[#0d1117] dark:text-[#f0f6fc] bg-gray-50 relative">
      <div className="max-w-7xl w-full mx-auto py-8">
        {product ? (
          <div className="bg-white dark:bg-[#161b22] rounded-xl shadow-lg border border-gray-200 dark:border-[#30363d] overflow-hidden max-w-6xl mx-auto">
            <div className="p-8 grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 dark:bg-[#0d1117] rounded-lg p-6 flex items-center justify-center">
                <img
                  src={product.images}
                  alt={product.title}
                  className="w-full max-h-[400px] object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-[#f0f6fc]">
                    {product.title}
                  </h1>
                  <p className="text-gray-600 dark:text-[#8b949e] text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div className="border-t border-gray-200 dark:border-[#30363d] pt-6">
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-6">
                    ${product.price}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      onClick={() => alert("Add to Cart logic coming soon!")}
                    >
                      Add to Cart
                    </button>
                    <button className="border-2 border-gray-300 dark:border-[#30363d] text-gray-700 dark:text-[#f0f6fc] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-[#21262d] transition-all duration-200">
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ProductsNotFound />
        )}
      </div>
    </div>
  );
};

export default ProductPage;
