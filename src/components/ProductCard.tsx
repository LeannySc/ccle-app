// src/components/ProductCard.tsx
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./ProductCard.styles";
import { useCart, Product } from "../context/CartContext"; // <-- 1. Importamos el "hook" y el tipo "Product" desde el cerebro

// 2. Cambiamos las Props para que reciba el objeto "product" completo. Es más limpio.
interface Props {
  product: Product; // En lugar de productName, price, etc.
  currentGoal: number;
  totalGoal: number;
}

export const ProductCard = ({ product, currentGoal, totalGoal }: Props) => {
  // 3. ¡Aquí está la magia! Usamos el hook para obtener acceso a las funciones del cerebro
  const { addProductToCart } = useCart();

  const handleParticipate = () => {
    // 4. Cuando se llama, esta función ejecuta la función del cerebro,
    // pasándole el producto específico de esta tarjeta.
    addProductToCart(product);
  };

  return (
    <View style={styles.cardContainer}>
      {/* Ahora usamos las propiedades del objeto product */}
      <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>
          ${product.price.toLocaleString("es-CO")}
        </Text>
        <Text style={styles.goalText}>
          Meta: {currentGoal}/{totalGoal}
        </Text>

        {/* 5. El botón ahora llama a nuestra nueva función handleParticipate */}
        <Pressable style={styles.participateButton} onPress={handleParticipate}>
          <Text style={styles.buttonText}>PARTICIPAR</Text>
        </Pressable>
      </View>
    </View>
  );
};
