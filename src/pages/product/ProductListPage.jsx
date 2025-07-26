import { useTime } from "motion/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/states/Loading";

import ProductItem from "../../components/product/ProductItem";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const withoutImageId = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19, 28];

  const filteredProducts = products.filter((product) => {
    return !withoutImageId.includes(product.id);
  });

  useEffect(() => {
    const fetchproductList = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchproductList();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen w-full dark:bg-[#0d1117] dark:text-[#f0f6fc] relative">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
          {filteredProducts.map((product) => {
            return (
              <div key={product.id}>
                <ProductItem product={product} productID={product.id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
