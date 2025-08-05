import { useContext, useState } from "react";
import { motion } from "framer-motion";

import CartContext from "../../context/CartContext";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Purchase = () => {
  const { carts, setCarts, totalPrice, totalDiscount, totalDiscountedPrice } =
    useContext(CartContext);

  const { users } = useContext(AuthContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zip, setZip] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setNumber("");
    setAddress("");
    setCity("");
    setRegion("");
    setZip("");
    setError("");
  };

  const handleNumber = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setNumber(value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (number.length !== 11) {
      setError("Please enter valid number only!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      //  Construct order object
      const newOrder = {
        firstName,
        email,
        number,
        address,
        items: carts,
        total: totalDiscountedPrice,
        date: new Date().toLocaleString("en-PH", {
          timeZone: "Asia/Manila",
          dateStyle: "medium",
          timeStyle: "short",
        }),
      };

      //  Get existing orders
      const orderKey = `orders-${users.email}`;
      const existingOrders = JSON.parse(localStorage.getItem(orderKey)) || [];

      //  Save new order
      const updatedOrders = [...existingOrders, newOrder];
      localStorage.setItem(orderKey, JSON.stringify(updatedOrders));

      //  Clear cart & form
      localStorage.removeItem(`cart-${users.email}`);
      setCarts([]);
      clearForm();

      setLoading(false);
      navigate("/orders");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0d1117] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Checkout
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Complete your order below
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Shipping Information
                </h2>
              </div>
              <div className="p-6">
                <form
                  onSubmit={handleSubmit}
                  id="placeOrderForm"
                  className="space-y-6"
                >
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        First Name
                      </label>
                      <input
                        value={firstName}
                        type="text"
                        placeholder="Enter your first name"
                        required
                        onChange={(event) => setFirstName(event.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Last Name
                      </label>
                      <input
                        value={lastName}
                        type="text"
                        placeholder="Enter your last name"
                        onChange={(event) => setLastName(event.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <input
                      value={email}
                      type="email"
                      placeholder="Enter your email address"
                      required
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Phone Number
                    </label>
                    <input
                      value={number}
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      maxLength="11"
                      onChange={handleNumber}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    />
                    {error && (
                      <p className="text-red-500 text-sm mt-1">{error}</p>
                    )}
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Street Address
                    </label>
                    <input
                      value={address}
                      type="text"
                      placeholder="Enter your street address"
                      required
                      onChange={(event) => setAddress(event.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    />
                  </div>

                  {/* City, State, ZIP */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Region
                      </label>
                      <input
                        value={region}
                        type="text"
                        placeholder="State"
                        required
                        onChange={(event) => setRegion(event.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        City
                      </label>
                      <input
                        value={city}
                        type="text"
                        placeholder="City"
                        required
                        onChange={(event) => setCity(event.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        ZIP Code
                      </label>
                      <input
                        value={zip}
                        type="text"
                        placeholder="ZIP"
                        required
                        onChange={(event) => setZip(event.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-8"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Order Summary
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">
                        Subtotal
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-green-600 dark:text-green-400">
                      <span>Discount</span>
                      <span className="font-medium">
                        -${totalDiscount.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">
                        Shipping
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Free
                      </span>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>

                  {/* Total */}
                  <div className="flex justify-between items-center text-lg font-bold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>${totalDiscountedPrice.toFixed(2)}</span>
                  </div>

                  {/* Place Order Button */}
                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      form="placeOrderForm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      {loading ? "Loading..." : "Place Order"}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Purchase;
