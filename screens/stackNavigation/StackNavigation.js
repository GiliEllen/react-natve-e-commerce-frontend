import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfilePage from "../profilePage/ProfilePage";
import MainScreen from "../mainScreen/MainScreen";
import MyOrders from "../myOrders/MyOrders";
import OrderPage from "../myOrders/OrderPage";
import SettingPage from "../Setting/SettingPage";
import CompleteOrder from "../completeOrderScrn/CompleteOrder";

const Stack = createNativeStackNavigator();

const UserProfileScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyOrders"
        component={MyOrders}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderPage"
        component={OrderPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingPage"
        component={SettingPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default UserProfileScreen;
