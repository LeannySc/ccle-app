// src/components/ProductCard.styles.ts
import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,
    elevation: 4,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
  productPrice: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "600",
  },
  goalText: {
    fontSize: 14,
    color: colors.gray,
  },
  participateButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: colors.textLight,
    fontWeight: "bold",
  },
});
