import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainScreen from "./screens/mainScreen/MainScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Shop") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Bag") {
              iconName = focused ? "bag-handle" : "bag-handle-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            if (route.name === "Admin") {
              iconName = focused ? "shield" : "shield-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#DB3022",
          tabBarInactiveTintColor: "#9B9B9B",
        })}
      >
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Shop" component={MainScreen} />
        <Tab.Screen name="Bag" component={MainScreen} />
        <Tab.Screen name="Profile" component={MainScreen} />
        <Tab.Screen name="Admin" component={MainScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
