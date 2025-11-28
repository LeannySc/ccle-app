// src/screens/LoginScreen.tsx
import React from "react";
import { Text, TextInput, Pressable, SafeAreaView, View } from "react-native";
import { AppScreenProps } from "../navigation/types"; // <-- IMPORTA LOS TIPOS
import styles from "./LoginScreen.styles"; // <-- IMPORTA ESTILOS
import { colors } from "../styles/colors";

// Usa el tipo para que sepa qué es 'navigation'
export const LoginScreen = ({ navigation }: AppScreenProps<"LoginScreen">) => {
  const onLogin = () => {
    navigation.navigate("MainApp"); // Antes era "HomeScreen"
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CCLE</Text>
      <Text style={styles.subtitle}></Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        placeholderTextColor={colors.gray}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor={colors.gray}
        secureTextEntry
      />
      <Pressable style={styles.loginButton} onPress={onLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>
    </SafeAreaView>
  );
};
