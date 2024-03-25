import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const CompleteOrder = () => {
  const navigation = useNavigation();

  const handleContinueShopping = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.statusImg} />
      <Image source={require("../../assets/bags.png")} style={styles.bagsimg} />
      <Text style={styles.title}>Success!</Text>
      <Text style={styles.content}>
        Your order will be delivered soon. Thank you for choosing our app!
      </Text>
      <Pressable style={styles.button} onPress={handleContinueShopping}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>CONTINUE SHOPPING</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
    backgroundColor: "#FFFFFF",
  },
  title: {
    marginBottom: 15,
    fontWeight: "700",
    fontSize: 34,
    lineHeight: 39.84,
  },
  bagsimg: {
    marginBottom: 30,
    marginTop: 30,
    width: 208,
    height: 213,
  },
  content: {
    width: 240,
    height: 45,
    marginBottom: 90,
    lineHeight: 20,
    textAlign: "center",
    fontSize: 14,
  },
  button: {
    width: 343,
    height: 48,
    marginBottom: 5,
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
});

export default CompleteOrder;
