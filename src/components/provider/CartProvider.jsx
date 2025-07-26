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

  //check if product and product.id is exist
  const handleAddToCart = (product) => {
    if (!product || !product.id) {
      return;
    }

    // finding the existing item
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      //item not exist we add quantity property to arrray object product
      if (!existingItem) {
        return [...prevCart, { ...product, quantity: 1 }];
      }
      // Item exists – increment the quantity
      else {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
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
