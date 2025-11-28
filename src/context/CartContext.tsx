// src/context/CartContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface CartContextType {
  cart: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: string) => void;
  cartItemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProductToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} ha sido añadido al carrito!`);
  };

  const removeProductFromCart = (productId: string) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const cartItemCount = cart.length;

  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, removeProductFromCart, cartItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
