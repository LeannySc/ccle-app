// src/screens/ProfileScreen.tsx
import React from "react";
import { SafeAreaView, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppScreenProps } from "../navigation/types";
import styles from "./ProfileScreen.styles";
import { colors } from "../styles/colors";

// ¡Importante! Tipar correctamente el hook de navegación
type ProfileScreenNavigationProp = AppScreenProps<"MainApp">["navigation"];

export const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>
      <Pressable
        onPress={() => navigation.navigate("MyOrders")}
        style={{
          backgroundColor: colors.primary,
          padding: 15,
          borderRadius: 8,
          width: "80%",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{ color: colors.textLight, fontSize: 18, fontWeight: "bold" }}
        >
          Ver Mis Pedidos
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};
