// src/components/OrderCard.tsx
import React from "react";
import { View, Text } from "react-native";
import styles from "./OrderCard.styles";

// Definimos los posibles estados como un tipo para mayor seguridad
export type OrderStatus = "CONSOLIDANDO" | "CONFIRMADO" | "EN REPARTO";

interface Props {
  productName: string;
  order_details: string;
  status: OrderStatus;
}

// Un objeto que mapea el estado a su estilo
const statusStyles = {
  CONSOLIDANDO: styles.consolidando,
  CONFIRMADO: styles.confirmado,
  "EN REPARTO": styles.enReparto,
};

export const OrderCard = ({ productName, order_details, status }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.details}>{order_details}</Text>
      <View style={[styles.badgeContainer, statusStyles[status]]}>
        <Text style={styles.badgeText}>{status}</Text>
      </View>
    </View>
  );
};
