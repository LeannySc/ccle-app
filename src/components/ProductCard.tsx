// src/components/ProductCard.tsx
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./ProductCard.styles";

interface Props {
  productName: string;
  price: number;
  imageUrl: string;
  currentGoal: number;
  totalGoal: number;
  onParticipate: () => void;
}

export const ProductCard = ({
  productName,
  price,
  imageUrl,
  currentGoal,
  totalGoal,
  onParticipate,
}: Props) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageUrl }} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.productPrice}>
          ${price.toLocaleString("es-CO")}
        </Text>
        <Text style={styles.goalText}>
          Meta: {currentGoal}/{totalGoal}
        </Text>
        {/* Aquí puedes añadir una barra de progreso en el futuro */}
        <Pressable style={styles.participateButton} onPress={onParticipate}>
          <Text style={styles.buttonText}>PARTICIPAR</Text>
        </Pressable>
      </View>
    </View>
  );
};
