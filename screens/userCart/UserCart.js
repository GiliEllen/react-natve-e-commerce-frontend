import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import useCart from "../../app/useCart";

const UserCart = () => {
  const { activeCartItems, loading, error } = useCart();

  return (
    <View style={styles.container}>
      <Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          activeCartItems.map((item) => <Text key={item.id}>{item.name}</Text>)
        )}
      </Text>
      <Text>{error && <Text>{error}</Text>}</Text>
      <Text>{activeCartItems.length === 0 && <Text> empty cart</Text>}</Text>
      <Text>
        {activeCartItems.length > 0 && (
          <Text> products: {activeCartItems.length}</Text>
        )}
      </Text>
    </View>
  );
};

export default UserCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
