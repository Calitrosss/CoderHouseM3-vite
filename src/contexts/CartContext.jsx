/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

import { useToast } from "@chakra-ui/react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const toast = useToast();

  const showError = (msg) => {
    toast({
      description: msg,
      status: "error",
      duration: 2500,
      isClosable: true,
      position: "bottom-right",
    });
  };

  const showSuccess = (msg) => {
    toast({
      description: msg,
      status: "success",
      duration: 2500,
      isClosable: true,
      position: "bottom-right",
    });
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      showSuccess("El producto fue agregado");
    } else {
      showError("El producto ya se encuentra agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id != itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
