// src/screens/CartScreen.tsx
import React from "react";
import { SafeAreaView, Text, FlatList, View, Image } from "react-native";
import styles from "./CartScreen.styles";
import { useCart } from "../context/CartContext"; // <-- 1. Importamos el hook del cerebro

export const CartScreen = () => {
  // 2. Usamos el hook para obtener el estado actual del carrito
  const { cart } = useCart();

  // 3. Si el carrito está vacío (su longitud es 0), mostramos un mensaje.
  if (cart.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Mi Carrito</Text>
        <Text style={{ marginTop: 20, fontSize: 18, color: "#888" }}>
          Tu carrito está vacío.
        </Text>
      </SafeAreaView>
    );
  }

  // 4. Si el carrito tiene productos, los mostramos en una lista.
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mi Carrito</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id + Math.random()} // Una key simple para items que podrían repetirse
        renderItem={({ item }) => (
          // Este es un mini componente para mostrar cada item del carrito
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#eee",
            }}
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 5,
                marginRight: 15,
              }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 14, color: "green" }}>
                ${item.price.toLocaleString("es-CO")}
              </Text>
            </View>
          </View>
        )}
        style={{ width: "100%" }} // La FlatList debe ocupar todo el ancho
      />
    </SafeAreaView>
  );
};
