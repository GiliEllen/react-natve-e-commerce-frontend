import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import MainScreen from "../screens/mainScreen/MainScreen";
import AdminScreen from "./../screens/mainScreen/AdminScreen";
import ProductScreen from "./../screens/productScreen/ProductScreen";
import UserProfileScreen from "./../screens/stackNavigation/StackNavigation";
import ProductStackNavigator from "./../components/ProductStackNavigator";
import UserCart from "../screens/userCart/UserCart";
const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Cart") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Bag") {
              iconName = focused ? "bag-handle" : "bag-handle-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Admin") {
              iconName = focused
                ? "person-circle-sharp"
                : "person-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#DB3022",
          tabBarInactiveTintColor: "#9B9B9B",
        })}
      >
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Admin" component={AdminScreen} />
        <Tab.Screen name="Profile" component={UserProfileScreen} />
        <Tab.Screen name="shop" component={ProductStackNavigator} />
        <Tab.Screen name="Bag" component={UserCart} />
      </Tab.Navigator>
    </>
  );
}
