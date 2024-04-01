import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AdminScreen from "./screens/mainScreen/AdminScreen";
import MainScreen from "./screens/mainScreen/MainScreen";
import LoginScreen from "./screens/loginRegister/LoginScreen";
import RegisterScreen from "./screens/loginRegister/RegisterScreen";

import { Ionicons } from "@expo/vector-icons";
import CompleteOrder from "./screens/completeOrderScrn/CompleteOrder";

import UserProfileScreen from "./screens/stackNavigation/StackNavigation";
import UserCart from "./screens/userCart/UserCart";
import { Provider } from "react-redux";
import store from "./app/store";
import ProductScreen from "./screens/productScreen/ProductScreen";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
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
              } else if (route.name === "Login") {
                iconName = focused ? "person" : "person-circle-outline";
              } else if (route.name === "Register") {
                iconName = focused ? "person" : "person-circle-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#DB3022",
            tabBarInactiveTintColor: "#9B9B9B",
          })}
        >
          <Tab.Screen name="Register" component={RegisterScreen} />
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Home" component={MainScreen} />
          <Tab.Screen name="Admin" component={AdminScreen} />
          <Tab.Screen name="Profile" component={UserProfileScreen} />
          <Tab.Screen name="Cart" component={UserCart} />
          <Tab.Screen name="Bag" component={MainScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
