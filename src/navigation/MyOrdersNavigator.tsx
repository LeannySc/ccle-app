// src/navigation/MyOrdersNavigator.tsx
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ActiveOrdersScreen } from "../screens/ActiveOrdersScreen";
import { OrderHistoryScreen } from "../screens/OrderHistoryScreen";
import { colors } from "../styles/colors";

const TopTab = createMaterialTopTabNavigator();

export const MyOrdersNavigator = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <TopTab.Screen name="Activos" component={ActiveOrdersScreen} />
      <TopTab.Screen name="Historial" component={OrderHistoryScreen} />
    </TopTab.Navigator>
  );
};
