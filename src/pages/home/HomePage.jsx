import React, { useEffect, useState } from "react";
import ProductCard from "../../components/product/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Failed to fetch products", error));
  }, []);

  const withoutImageId = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19, 28];

  const filteredProducts = products.filter((product) => {
    return !withoutImageId.includes(product.id);
  });

  return (
    <div className="min-h-screen w-full dark:bg-[#0d1117] dark:text-[#f0f6fc]">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex py-16 bg-red-400">

          <div>

          </div>

        </div>

        <div>
          <ul>
            {filteredProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
