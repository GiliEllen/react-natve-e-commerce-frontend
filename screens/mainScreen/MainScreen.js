import { View, Text, Pressable } from "react-native";
import React from "react";
import { getAllProducts } from "../../api/productsApi";

const MainScreen = () => {
  return (
    <View>
      <Text>MainScreen</Text>
      <Pressable onPress={() => getAllProducts()}>
        <Text>TEST</Text>
      </Pressable>
    </View>
  );
};

export default MainScreen;
