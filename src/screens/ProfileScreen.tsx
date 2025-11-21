// src/screens/ProfileScreen.tsx
import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./ProfileScreen.styles";

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>
    </SafeAreaView>
  );
};
