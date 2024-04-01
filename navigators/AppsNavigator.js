import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";

import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigtor";
import { selectUserState } from "../reducers/user/userSlice";
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const user = useSelector(selectUserState);
  return (
    <NavigationContainer>
      {user._id ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
