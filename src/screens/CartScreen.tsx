// src/screens/CartScreen.tsx
import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./CartScreen.styles";

export const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mi Carrito</Text>
    </SafeAreaView>
  );
};
