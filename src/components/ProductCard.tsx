// src/components/ProductCard.tsx
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./ProductCard.styles";
import { useCart, Product } from "../context/CartContext";

interface Props {
  product: Product;
  currentGoal: number;
  totalGoal: number;
}

export const ProductCard = ({ product, currentGoal, totalGoal }: Props) => {
  const { addProductToCart } = useCart();

  const handleParticipate = () => {
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

        {/*El botón ahora llama a nuestra nueva función handleParticipate */}
        <Pressable style={styles.participateButton} onPress={handleParticipate}>
          <Text style={styles.buttonText}>PARTICIPAR</Text>
        </Pressable>
      </View>
    </View>
  );
};
