// src/context/CartContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

// 1. Define la estructura de un Producto para usar en toda la app
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

// 2. Define la forma que tendrá nuestro Contexto (qué información compartirá)
interface CartContextType {
  cart: Product[]; // Una lista de productos
  addProductToCart: (product: Product) => void; // Una función para añadir productos
}

// 3. Crea el Contexto usando la forma que definimos
const CartContext = createContext<CartContextType | undefined>(undefined);

// 4. Crea el "Proveedor" del Contexto. Este es el componente que envuelve
// a los demás para darles acceso al cerebro.
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]); // El estado donde se guardan los productos

  // La lógica para añadir un producto al estado
  const addProductToCart = (product: Product) => {
    // Añadimos el nuevo producto a la lista existente
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} ha sido añadido al carrito!`); // Un aviso para el usuario
  };

  // Aquí exponemos el estado 'cart' y la función 'addProductToCart' al resto de la app
  return (
    <CartContext.Provider value={{ cart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 5. Crea un "Hook" personalizado para que sea más fácil usar el Contexto.
// Esto es una buena práctica para no repetir código.
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
