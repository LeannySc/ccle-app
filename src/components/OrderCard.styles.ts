// src/components/OrderCard.styles.ts
import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export default StyleSheet.create({
  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 16,
  },
  badgeContainer: {
    alignSelf: "flex-start",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  badgeText: {
    color: colors.textLight,
    fontWeight: "bold",
    fontSize: 14,
  },
  consolidando: {
    backgroundColor: "#FFA500", // Naranja
  },
  confirmado: {
    backgroundColor: colors.primary, // Verde
  },
  enReparto: {
    backgroundColor: "#1E90FF", // Azul
  },
});
