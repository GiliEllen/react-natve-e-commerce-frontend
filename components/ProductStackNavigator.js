import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductScreen from "../screens/productScreen/ProductScreen";
import ProductDetailScreen from "../screens/ProductDetail/ProductDetail";

const Stack = createStackNavigator();

const ProductStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        component={ProductScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export default ProductStackNavigator;
