import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 5,
    marginVertical: 10,
    color: colors.text,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    color: colors.gray,
  },
});
