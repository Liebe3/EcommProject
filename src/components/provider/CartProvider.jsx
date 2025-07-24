import React, { useEffect, useState } from "react";
import CartContext from "../../context/CartContext";

const CartProvider = ({ children }) => {
  const [carts, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem("carts");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failse to parse from local storage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts]);

  const handleAddToCart = (product) => {
    if (!product?.id) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
