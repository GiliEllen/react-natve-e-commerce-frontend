import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
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
      <Text style={styles.coupon}>Enter your promo code</Text>
      <Pressable style={styles.arrowBtn}>
        <View style={styles.arrowBtnContent}>
          <Text style={styles.arrowBtnText}> →</Text>
        </View>
      </Pressable>

      {/* Add the price variable after total amount */}
      <Text style={styles.total}>
        Total amount: <Text style={styles.price}>124$</Text>
      </Text>

      <Pressable style={styles.button}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>CHECK OUT</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default UserCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  button: {
    position: "absolute",
    width: 343,
    height: 48,
    bottom: 20,
  },
  buttonContent: {
    backgroundColor: "#DB3022",
    flex: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
  coupon: {
    position: "absolute",
    height: 40,
    width: 320,
    backgroundColor: "white",
    color: "#9B9B9B",
    padding: 8,
    borderRadius: 8,
    bottom: 140,

    // Box shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Box shadow for Android
    elevation: 3,
  },
  arrowBtn: {
    position: "absolute",
    right: 10,
    bottom: 140,
    width: 40,
    height: 40,
    backgroundColor: "black",
    borderRadius: 50,
  },
  arrowBtnContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  arrowBtnText: {
    color: "white",
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  total: {
    position: "absolute",
    bottom: 93,
    left: 20,
    color: "#9B9B9B",
  },
  price: {
    color: "black",
    fontWeight: "bold",
  },
});
