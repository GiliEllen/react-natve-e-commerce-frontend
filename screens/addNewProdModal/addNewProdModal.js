import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Modal,
} from "react-native";

const AddNewProdModal = ({ modalVisible, setModalVisible }) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productColor, setProductColor] = useState("");

  const handleAddProduct = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContent}>
        <Pressable
          style={styles.closeButton}
          onPress={() => setModalVisible(false)}
        >
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
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
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
    width: 220,
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
