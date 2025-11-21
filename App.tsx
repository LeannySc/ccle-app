// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "./src/screens/LoginScreen";
import { TabNavigator } from "./src/navigation/TabNavigator"; // <-- IMPORTA TU TABNAVIGATOR
import { RootStackParamList } from "./src/navigation/types";
import { MyOrdersNavigator } from "./src/navigation/MyOrdersNavigator";
import { colors } from "./src/styles/colors";


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
        {/* Añadimos el MyOrdersNavigator */}
        <Stack.Screen
          name="MyOrders"
          component={MyOrdersNavigator}
          options={{
            headerShown: true,
            title: "Mis Pedidos",
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: colors.textLight,
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
