import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const CompleteOrder = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/bags.png")} style={styles.image} />
      <Text style={styles.title}>Success!</Text>
      <Text style={styles.content}>
        Your order will be delivered soon. Thank you for choosing our app!
      </Text>
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>CONTINUE SHOPPING</Text>
        </View>
      </TouchableOpacity>
      <Image
        source={require("../assets/home-indicator.png")}
        style={styles.homeImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    marginBottom: 15,
    fontWeight: "700",
    fontSize: 34,
    lineHeight: 39.84,
  },
  image: {
    marginBottom: 30,
    marginTop: 30,
    width: 208,
    height: 213,
  },
  content: {
    width: 240,
    height: 45,
    marginBottom: 115,
    lineHeight: 20,
    textAlign: "center",
    fontSize: 14,
  },
  button: {
    width: 343,
    height: 48,
    marginBottom: 12,
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
  homeImage: {},
});

export default CompleteOrder;
