// src/screens/HomeScreen.tsx
import React from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import { ProductCard } from "../components/ProductCard";
import styles from "./HomeScreen.styles";

const collectiveOrders = [
  {
    id: "1",
    name: "Tomate chonto por caja",
    price: 50000,
    imageUrl: "https://i.imgur.com/uOFJt6a.png",
    current: 7,
    total: 10,
  },
  {
    id: "2",
    name: "Papa pastusa por bulto",
    price: 80000,
    imageUrl: "https://i.imgur.com/As7936a.png",
    current: 7,
    total: 10,
  },
  {
    id: "3",
    name: "Mango tommy por caja",
    price: 100000,
    imageUrl: "https://i.imgur.com/QhX3b2D.png",
    current: 7,
    total: 10,
  },
];

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>¡HOLA, LEANNY!</Text>
      <Text style={styles.subtitle}>Pedidos Colectivos Abiertos</Text>
      <FlatList
        data={collectiveOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            currentGoal={item.current}
            totalGoal={item.total}
          />
        )}
      />
    </SafeAreaView>
  );
};
