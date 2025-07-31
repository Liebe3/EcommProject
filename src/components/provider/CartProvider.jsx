//hooks
import { useEffect, useState } from "react";

//libraries
import Swal from "sweetalert2";

//context
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
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    });
    Swal.fire("Item Added to cart!", "", "success");
  };

  const handleRemoveCart = (removeId) => {
    const filteredCart = carts.filter((cart) => cart.id !== removeId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Removed",
          text: "Your item has been removed",
          icon: "success",
        });
        setCart(filteredCart);
      }
    });
  };

  const updateCartQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ handleAddToCart, carts, handleRemoveCart, updateCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
