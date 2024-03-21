import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./screens/mainScreen/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AdminScreen from "./screens/mainScreen/AdminScreen";

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
            } else if (route.name === "TabB") {
              iconName = focused ? "ios-list-outline" : "ios-list";
            } else if (route.name === "Admin") {
              iconName = focused ? "man-outline" : "person-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Admin" component={AdminScreen} />
        <Tab.Screen name="NotHome" component={MainScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
