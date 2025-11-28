// src/screens/LoginScreen.styles.ts
import { StyleSheet } from "react-native";
import { colors } from "../styles/colors"; // Revisa que esta ruta sea correcta

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },
  subtitle: { fontSize: 18, color: colors.gray, marginBottom: 40 },
  input: {
    width: "100%",
    height: 50,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: { color: colors.textLight, fontSize: 18, fontWeight: "bold" },
});
