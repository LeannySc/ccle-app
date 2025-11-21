// src/navigation/types.ts
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// Aquí defines todas las pantallas y los parámetros que podrían recibir
export type RootStackParamList = {
  LoginScreen: undefined; // undefined significa que no recibe parámetros
  HomeScreen: undefined;
};

// Este es el tipo que usaremos en nuestras pantallas
export type AppScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
