// src/navigation/types.ts
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  MainApp: undefined;
  MyOrders: undefined;
};
export type AppScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

  