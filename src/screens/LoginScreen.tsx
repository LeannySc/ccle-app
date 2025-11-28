// src/screens/LoginScreen.tsx
import React from "react";
import { Text, TextInput, Pressable, SafeAreaView, View } from "react-native";
import { AppScreenProps } from "../navigation/types";
import styles from "./LoginScreen.styles";
import { colors } from "../styles/colors";

export const LoginScreen = ({ navigation }: AppScreenProps<"LoginScreen">) => {
  const onLogin = () => {
    navigation.navigate("MainApp");
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
