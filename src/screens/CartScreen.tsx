// src/screens/CartScreen.tsx
import React from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import globalStyles from "./CartScreen.styles";
import { useCart } from "../context/CartContext";
import { colors } from "../styles/colors"; // Importamos nuestros colores

export const CartScreen = () => {
  const { cart, removeProductFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <Text style={globalStyles.title}>Mi Carrito</Text>
        <Text style={styles.emptyCartText}>Tu carrito está vacío.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.title}>Mi Carrito</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id + Math.random()}
        renderItem={({ item }) => (
          // Usamos un estilo local del StyleSheet de abajo
          <View style={styles.cartItemContainer}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.cartItemImage}
            />

            {/* Contenedor del texto, ocupará el espacio flexible */}
            <View style={styles.cartItemInfo}>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <Text style={styles.cartItemPrice}>
                ${item.price.toLocaleString("es-CO")}
              </Text>
            </View>

            {/* Contenedor del botón, con ancho fijo */}
            <Pressable
              onPress={() => removeProductFromCart(item.id)}
              style={styles.deleteButton}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </Pressable>
          </View>
        )}
        style={{ width: "100%" }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emptyCartText: {
    marginTop: 20,
    fontSize: 18,
    color: colors.gray,
  },
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20, // Más padding a los lados
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    backgroundColor: "white",
  },
  cartItemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
  cartItemPrice: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 4,
  },
  deleteButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEBEE",
    borderRadius: 20,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: "#D32F2F",
    fontSize: 18,
    fontWeight: "bold",
  },
});
