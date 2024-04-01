import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import "react-native-gesture-handler";

import { Provider } from "react-redux";
import store from "./app/store";
import AppNavigator from "./navigators/AppsNavigator";
import AuthNavigator from "./navigators/AuthNavigator";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
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
          <Tab.Screen name="shop" component={ProductScreen} />
          <Tab.Screen name="Bag" component={MainScreen} />
        </Tab.Navigator>
      </NavigationContainer> */}
      {/* <AppNavigator /> */}
      <AuthNavigator />
    </Provider>
  );
}
