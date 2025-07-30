//hooks
import { useEffect, useState } from "react";

//libraries
import * as motion from "motion/react-client";
import { Link } from "react-router-dom";

//components
import ProductCard from "../../components/product/ProductCard";
import Footer from "../../components/ui/Footer";
import Loading from "../../components/states/Loading";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/`);
        const data = await response.json();
        setProducts(data.products.slice(0, 3));
      } catch (error) {
        console.log("Failed to load data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedProduct();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <div className="min-h-screen w-full dark:bg-[#0d1117] dark:text-[#f0f6fc] relative">
        <div className="max-w-7xl w-full mx-auto">
          {/* hero  */}
          <main className="py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center px-6 md:text-start">
                <h1 className="text-4xl  md:text-6xl font-bold leading-tight">
                  <span className="text-blue-600 dark:text-blue-400">
                    Exceptional experience <br></br>
                  </span>
                  starts with <br></br> Quality Products.
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    Jallen Products(JP){" "}
                  </span>
                  - "Discover the extraordinary in everyday essentials"
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                  We believe that every product should enhance your life. From
                  cutting-edge technology to timeless classics, we curate only
                  the finest items that combine quality, innovation, and value.
                </p>
                <div className="flex gap-4 pt-4  justify-center md:justify-start">
                  <Link to={"/product"}>
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 cursor-pointer">
                      Shop Now
                    </button>
                  </Link>
                  <button className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="relative mx-6 md:mx-0">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      scale: {
                        type: "spring",
                        visualDuration: 0.4,
                        bounce: 0.3,
                      },
                    }}
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Premium shopping experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </main>

          {/* featured products */}
          <section className="container mx-auto px-4 py-16 bg-gradient-to-br">
            <div className="text-center md:text-start mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 capitalize">
                Featured Products
              </h2>
              <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto md:ml-30 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 ">
              {products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
