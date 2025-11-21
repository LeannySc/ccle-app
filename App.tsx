// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "./src/screens/LoginScreen";
import { TabNavigator } from "./src/navigation/TabNavigator"; // <-- IMPORTA TU TABNAVIGATOR
import { RootStackParamList } from "./src/navigation/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Sigue teniendo el login como antes */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        {/* ¡NUEVO! Añadimos el TabNavigator como una sola pantalla */}
        <Stack.Screen name="MainApp" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
