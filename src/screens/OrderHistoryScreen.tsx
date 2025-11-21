// src/screens/OrderHistoryScreen.tsx
import React from "react";
import { View, Text } from "react-native";
import { colors } from "../styles/colors"; // Reutilizamos el estilo del carrito

export const OrderHistoryScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, color: colors.gray }}>
        No tienes pedidos en tu historial.
      </Text>
    </View>
  );
};
