// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 1. IMPORTA EL PROVEEDOR
import { CartProvider } from "./src/context/CartContext";

import { LoginScreen } from "./src/screens/LoginScreen";
import { TabNavigator } from "./src/navigation/TabNavigator";
import { MyOrdersNavigator } from "./src/navigation/MyOrdersNavigator";
import { RootStackParamList } from "./src/navigation/types";
import { colors } from "./src/styles/colors"; // Es buena idea importar los colores por si los necesitas aquí

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // 2. EL CARTPROVIDER ENVUELVE A TODOS. ¡ESTA ES LA CLAVE!
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="MainApp" component={TabNavigator} />
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
    </CartProvider>
  );
}
