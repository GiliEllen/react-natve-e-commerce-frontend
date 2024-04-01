import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ItemCounter from "./ItemCounter";

const BagItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/bagItemIMG.jpg")}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Pullover</Text>
        <View style={styles.prodDetails}>
          <Text style={styles.text}>
            <Text style={styles.prodLabel}>Color:</Text>{" "}
            <Text style={styles.prodValue}>Black</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.prodLabel}>Size:</Text>{" "}
            <Text style={styles.prodValue}>L</Text>
          </Text>
        </View>
        <View style={styles.bottomRow}>
          <View style={styles.counterContainer}>
            <ItemCounter />
          </View>
          <Text style={styles.price}>51$</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 104,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.24,
    elevation: 2,
  },
  prodDetails: {
    flexDirection: "row",
    marginBottom: 5,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 104,
    height: 104,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  text: {
    marginRight: 10,
    color: "gray",
  },
  title: {
    marginTop: 7,
    fontSize: 17,
    fontWeight: "bold",
  },
  price: {
    margin: 10,
    marginLeft: "auto",
    fontWeight: "bold",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  prodLabel: {
    fontWeight: "bold",
    marginRight: 5,
  },
  prodValue: {
    fontWeight: "bold",
    color: "black",
  },
});

export default BagItem;
