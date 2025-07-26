// src/pages/ProductPage.jsx
import React, { use, useContext, useEffect, useState } from "react";
import { href, Link, useParams } from "react-router-dom";
import ProductsNotFound from "../../components/states/ProductsNotFound";
import CartContext from "../../context/CartContext";
import { span } from "motion/react-client";
import Loading from "../../components/states/Loading";

const ProductPage = () => {
  const PRODUCT_LINK = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
  ];

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { handleAddToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProductId = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductId();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen w-full dark:bg-[#0d1117] dark:text-[#f0f6fc] bg-gray-50">
      <div className="max-w-7xl w-full mx-auto py-8">
        {product ? (
          <>
            <div className="flex space-x-2 text-sm text-gray-600 max-w-6xl mx-auto mb-5 px-5 lg:px-0">
              {PRODUCT_LINK.map((link, index) => {
                return (
                  <span
                    key={link.name}
                    className="flex items-center space-x-3 text-sm text-black dark:text-white"
                  >
                    <Link
                      to={link.href}
                      className="hover:text-blue-500 transition-colors"
                    >
                      <h1>{link.name}</h1>
                    </Link>
                    {index < PRODUCT_LINK.length - 1 && (
                      <span className="text-gray-400 ">{" > "}</span>
                    )}
                  </span>
                );
              })}
            </div>
            <div className="bg-white dark:bg-[#161b22] rounded-xl shadow-lg border border-gray-200 dark:border-[#30363d] overflow-hidden max-w-6xl mx-auto">
              <div className="p-8 grid md:grid-cols-2 gap-12">
                <div className="bg-gray-50 dark:bg-[#0d1117] rounded-lg p-6 flex items-center justify-center">
                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-full max-h-[400px] object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400 ">
                    ${product.price}
                  </p>
                  <div>
                    <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-[#f0f6fc]">
                      {product.title}
                    </h1>
                    <p className="text-gray-600 dark:text-[#8b949e] text-lg leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="text-xl  tracking-wider text-blue-600 dark:text-blue-400">
                    {product.stock < 5 ? (
                      <p className="text-red-600 font-bold">
                        Only {product.stock} left in stock!
                      </p>
                    ) : (
                      <p className="text-gray-600">
                        Available: {product.stock}
                      </p>
                    )}
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 ${
                            index < product.rating
                              ? "text-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-[#30363d] pt-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        onClick={() => product && handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <ProductsNotFound />
        )}
      </div>
    </div>
  );
};

export default ProductPage;
