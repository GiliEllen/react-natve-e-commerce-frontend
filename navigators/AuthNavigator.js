import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import "react-native-gesture-handler";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigator from "./MainNavigtor";
import RegisterScreen from "./../screens/loginRegister/RegisterScreen";
import LoginScreen from "./../screens/loginRegister/LoginScreen";
import { useSelector } from "react-redux";
import {
  isLoggedInSelector,
  selectUserState,
} from "../reducers/user/userSlice";
const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="mainNav"
            component={MainNavigator}
          />
        ) : (
          <>
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
