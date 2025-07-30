//hooks
import { useContext } from "react";

// libraries
import { motion } from "framer-motion";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

//context
import CartContext from "../../context/CartContext";

const CartItemPage = ({ cart }) => {
  const { handleRemoveCart } = useContext(CartContext);
  return (
    <div className="bg-white dark:bg-[#161b22] rounded-xl border border-gray-100 dark:border-[#30363d] p-4 shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-900 dark:text-[#f0f6fc]">
      <div className="flex gap-4">
        {/* Product Image */}
        <motion.div
          className="relative flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-28 h-28 bg-gray-100 dark:bg-[#0d1117] rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={cart.images?.[0]}
              alt={cart.title}
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-base leading-tight line-clamp-2 text-gray-900 dark:text-[#f0f6fc]">
                {cart.title}
              </h3>
            </div>

            {/* Remove Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleRemoveCart(cart.id)}
              className="p-1.5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
              title="Remove item"
            >
              <FiTrash2 size={16} />
            </motion.button>
          </div>

          {/* Price & Quantity */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3">
              <div className="text-[15px] text-gray-600 dark:text-[#8b949e]">
                ${cart.price.toFixed(2)} each <br />
                quantity: {cart.quantity}
              </div>
            </div>

            <div className="text-[16px] font-semibold text-gray-900 dark:text-[#f0f6fc]">
              ${(cart.price * cart.quantity).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemPage;
