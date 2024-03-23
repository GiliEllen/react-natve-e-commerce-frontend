import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./screens/mainScreen/MainScreen";
import Shop from "./screens/shopScreen/ShopScreen";
import Bag from "./screens/bagScreen/BagScreen";
import Profile from "./screens/profileScreen/ProfileScreen";
import Admin from "./screens/adminScreen/AdminScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const checkAdmin = () => {
    setIsAdmin(true);
  };

  useEffect(() => {
    checkAdmin();
  }, []);

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
            } else if (route.name === "Profile" && !isAdmin) {
              iconName = focused ? "heart" : "heart";
            } else if (route.name === "Admin" && isAdmin) {
              iconName = focused ? "star" : "star";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#DB3022",
          tabBarInactiveTintColor: "#9B9B9B",
        })}
      >
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Bag" component={Bag} />
        {!isAdmin && <Tab.Screen name="Profile" component={Profile} />}
        {isAdmin && <Tab.Screen name="Admin" component={Admin} />}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
