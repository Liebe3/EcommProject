//libraries
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  FiStar,
  FiShield,
  FiTruck,
  FiAward,
  FiTarget,
  FiGlobe,
} from "react-icons/fi";

const AboutPage = () => {
  const values = [
    {
      icon: FiAward,
      title: "Premium Quality",
      description:
        "Every product is carefully selected and tested to meet our high standards.",
    },
    {
      icon: FiTruck,
      title: "Fast Shipping",
      description:
        "Quick and reliable delivery to get your products when you need them.",
    },
    {
      icon: FiShield,
      title: "Secure Shopping",
      description:
        "Your data and transactions are protected with enterprise-grade security.",
    },
    {
      icon: FiGlobe,
      title: "Global Reach",
      description:
        "Serving customers worldwide with localized support and services.",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full dark:bg-[#0d1117] dark:text-[#f0f6fc] bg-white">
      <div className="max-w-7xl w-full mx-auto">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-[#f0f6fc] mb-6"
              >
                About{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Jallen Products
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                Transforming everyday essentials into extraordinary experiences
                through quality, innovation, and exceptional service.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 border border-black dark:border dark:border-white mr-2 ml-2 rounded-xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-[#f0f6fc] mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  At Jallen Products, we believe that quality shouldn't be a
                  luxury. Our mission is to democratize access to exceptional
                  products that enhance your daily life, combining cutting-edge
                  innovation with timeless reliability.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  We carefully curate each item in our catalog, partnering with
                  trusted manufacturers and emerging innovators to bring you
                  products that deliver real value and lasting satisfaction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br bg-blue-500 rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <FiTarget className="w-12 h-12" />
                    <div>
                      <h3 className="text-2xl font-bold">Our Vision</h3>
                      <p className="opacity-90">
                        Building the future of retail
                      </p>
                    </div>
                  </div>
                  <p className="text-lg opacity-90 leading-relaxed">
                    To become the world's most trusted destination for premium
                    products, where innovation meets accessibility and every
                    purchase is an investment in quality.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white dark:bg-[#0d1117]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-[#f0f6fc] mb-4">
                Why Choose Jallen Products?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our commitment to excellence is reflected in everything we do.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md dark:shadow-none hover:shadow-lg dark:hover:shadow-none transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-[#f0f6fc] mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r bg-blue-600 ">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have discovered the
              extraordinary in everyday essentials.
            </p>
            <motion.button
              onClick={() => navigate("/product")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 inline-flex items-center gap-2 cursor-pointer"
            >
              <FiStar className="w-5 h-5" />
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
