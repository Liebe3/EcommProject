// hooks
import { useEffect, useState } from "react";

//libraries
import { FiSearch, FiChevronDown } from "react-icons/fi";

//components
import Loading from "../../components/states/Loading";
import ProductItem from "../../components/product/ProductItem";
import ProductsNotFound from "../../components/states/ProductsNotFound";

const ProductListPage = () => {
  const [products, setProducts] = useState(null); // Changed from [] to null
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categoryList = [
    "All",
    ...new Set((products || []).map((product) => product.category)), // Handle null case
  ];

  const withoutImageId = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19, 28];

  const filteredProducts = (products || []) // Handle null case
    .filter((product) => !withoutImageId.includes(product.id))
    .filter((product) =>
      selectedCategory && selectedCategory !== "All"
        ? product.category === selectedCategory
        : true
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
        setLoading(true);

        const url =
          debouncedSearch.trim() === ""
            ? "https://dummyjson.com/products?limit=50"
            : `https://dummyjson.com/products/search?q=${debouncedSearch}`;

        const response = await fetch(url);
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
        <div className="flex items-center gap-4 p-6">
          <div className="flex items-center gap-3 w-full max-w-2xl">
            {/* Search Input */}
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                // onKeyDown={(event) => event.key === "Enter" && handleSearch()}
                className="w-full pl-10 pr-4 py-3 border border-black dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-3 bg-gray-100 border border-black dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors min-w-[120px] justify-between"
              >
                <span className="text-sm font-medium">{selectedCategory}</span>
                <FiChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-10">
                  {categoryList.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        selectedCategory === category
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {products !== null ? ( // Changed condition
          filteredProducts.length === 0 ? (
            <ProductsNotFound />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              {filteredProducts.map((product) => (
                <div key={product.id}>
                  <ProductItem product={product} productID={product.id} />
                </div>
              ))}
            </div>
          )
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
