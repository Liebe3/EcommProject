import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Loading from "../../components/states/Loading";
import ProductItem from "../../components/product/ProductItem";
import ProductsNotFound from "../../components/states/ProductsNotFound";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const withoutImageId = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19, 28];

  const filteredProducts = products.filter(
    (product) => !withoutImageId.includes(product.id)
  );

  // 1. Fetch all products on initial load
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products?limit=50`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductList();
  }, []);

  // 2. Debounce the search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  // 3. Fetch filtered products when debounced value changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (debouncedSearch.trim() === "") return;

        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${debouncedSearch}`
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to search data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearch]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen w-full dark:bg-[#0d1117] dark:text-[#f0f6fc] relative">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex items-center gap-2 p-6">
          <div className="flex items-center gap-2 w-full max-w-md">
            <div className="relative md:w-full">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-700 dark:border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {!loading && debouncedSearch && filteredProducts.length === 0 ? (
          <ProductsNotFound />
        ) : (
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 p-6">
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <ProductItem product={product} productID={product.id} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
