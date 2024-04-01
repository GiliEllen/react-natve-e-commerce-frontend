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
      <AuthNavigator />
    </Provider>
  );
}
