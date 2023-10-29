/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

import { useToast } from "@chakra-ui/react";

export const CartContext = createContext({
  cart: [],
  cartCant: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCant, setCartCant] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const toast = useToast();

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      setCartCant((prev) => prev + quantity);
      setCartTotal((prev) => prev + item.price * quantity);
      showSuccess("El producto fue agregado");
    } else {
      showError("El producto ya se encuentra agregado");
    }
  };

  const removeItem = (itemId) => {
    const itemRemoved = cart.find((prod) => prod.id === itemId);
    const cartUpdated = cart.filter((prod) => prod.id != itemId);
    setCart(cartUpdated);
    setCartCant((prev) => prev - itemRemoved.quantity);
    setCartTotal((prev) => prev - itemRemoved.price * itemRemoved.quantity);
    showInfo("El producto fue removido");
  };

  const clearCart = () => {
    setCart([]);
    setCartCant(0);
    setCartTotal(0);
    showInfo("El carrito fue vaciado");
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const showInfo = (msg) => {
    toast({
      description: msg,
      status: "info",
      duration: 2500,
      position: "bottom-right",
    });
  };

  const showSuccess = (msg) => {
    toast({
      description: msg,
      status: "success",
      duration: 2500,
      position: "bottom-right",
    });
  };

  const showError = (msg) => {
    toast({
      description: msg,
      status: "error",
      duration: 2500,
      position: "bottom-right",
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCant,
        cartTotal,
        addItem,
        removeItem,
        clearCart,
        showInfo,
        showSuccess,
        showError,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
