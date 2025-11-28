// src/navigation/TabNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { HomeScreen } from "../screens/HomeScreen";
import { CartScreen } from "../screens/CartScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { colors } from "../styles/colors";
import { useCart } from "../context/CartContext";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { cartItemCount } = useCart();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 1,
          borderTopColor: colors.border,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: React.ComponentProps<typeof Ionicons>["name"];

          if (route.name === "Inicio") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Carrito") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          } else {
            iconName = "help-circle";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />

      {/**/}
      <Tab.Screen
        name="Carrito"
        component={CartScreen}
        options={{
          tabBarBadge: cartItemCount > 0 ? cartItemCount : undefined,
        }}
      />

      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
