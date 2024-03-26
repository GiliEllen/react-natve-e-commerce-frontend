// AddNewProdModal.js

import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const AddNewProdModal = ({
  productName,
  setProductName,
  productDescription,
  setProductDescription,
  productBrand,
  setProductBrand,
  productSize,
  setProductSize,
  productPrice,
  setProductPrice,
  productColor,
  setProductColor,
  handleAddProduct,
  closeModal,
}) => {
  return (
    <View style={styles.modalContent}>
      <Pressable style={styles.closeButton} onPress={closeModal}>
        <Text style={styles.closeButtonText}>X</Text>
      </Pressable>
      <TextInput
        value={productName}
        onChangeText={setProductName}
        style={styles.input}
        placeholder="Product Name"
      />
      <TextInput
        value={productDescription}
        onChangeText={setProductDescription}
        style={styles.input}
        placeholder="Product Description"
      />
      <TextInput
        value={productBrand}
        onChangeText={setProductBrand}
        style={styles.input}
        placeholder="Product Brand"
      />
      <TextInput
        value={productSize}
        onChangeText={setProductSize}
        style={styles.input}
        placeholder="Product Size"
      />
      <TextInput
        value={productPrice}
        onChangeText={setProductPrice}
        style={styles.input}
        placeholder="Product Price"
      />
      <TextInput
        value={productColor}
        onChangeText={setProductColor}
        style={styles.input}
        placeholder="Product Color"
      />
      <Pressable style={styles.addButton} onPress={handleAddProduct}>
        <Text style={styles.buttonText}>Add Product</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    width: 220,
    borderRadius: 12,
    borderColor: "lightgray",
  },
  addButton: {
    backgroundColor: "#DB3022",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },
  closeButtonText: {
    color: "#DB3022",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default AddNewProdModal;
