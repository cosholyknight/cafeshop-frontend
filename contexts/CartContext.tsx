import React, { createContext, useState, ReactNode } from "react";
import { CartContextType, CartItem } from "../types/CartItem";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const checkOutCart = () => {
    setCart((prevCart) => []);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, checkOutCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
