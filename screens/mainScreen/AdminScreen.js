import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { deleteUser, getAllUsers, updateUser } from "../../api/adminApi";
import AddNewProdModal from "../addNewProdModal/addNewProdModal";

const AdminScreen = () => {
  const [users, setUsers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [productModalVisible, setProductModalVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productColor, setProductColor] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await getAllUsers();
      setUsers(data);
    }
    fetchData();
  }, []);

  const handleUpdateUser = async () => {
    try {
      const updateData = await updateUser(userId, userName, email);
      if (updateData) {
        const data = await getAllUsers();
        setUsers(data);
        setModalVisible(!modalVisible);
      } else {
        Alert.alert("UPDATE FAILED");
        setModalVisible(!modalVisible);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const ok = await deleteUser(userId);
      if (ok) {
        const data = await getAllUsers();
        setUsers(data);
      } else {
        Alert.alert("DELETE FAILED");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const addedProduct = await addProduct({
        name: productName,
        description: productDescription,
        brand: productBrand,
        size: productSize,
        price: productPrice,
        color: productColor,
      });
      if (addedProduct) {
        setProductName("");
        setProductDescription("");
        setProductBrand("");
        setProductSize("");
        setProductPrice("");
        setProductColor("");
        setProductModalVisible(false);
      } else {
        Alert.alert("Failed to add product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <View style={styles.centeredView}>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>

              <View style={styles.sideBySideView}>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => {
                    setEmail(item.email);
                    setUserName(item.name);
                    setUserId(item._id);
                    setModalVisible(true);
                  }}
                >
                  <Text style={styles.textStyle}>Update user here</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => {
                    setUserId(item._id);
                    Alert.alert("Delete this user?", undefined, [
                      { text: "cancel", style: "cancel" },
                      { text: "OK", onPress: () => handleDeleteUser() },
                    ]);
                  }}
                >
                  <Text style={styles.textStyle}>Delete user</Text>
                </Pressable>
              </View>
            </View>
          );
        }}
      />

      <View style={styles.addButtonContainer}>
        <Pressable
          style={[styles.button, styles.addProdButton]}
          onPress={() => setProductModalVisible(true)}
        >
          <Text style={styles.addProdText}>+</Text>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={productModalVisible}
        onRequestClose={() => setProductModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AddNewProdModal
              productName={productName}
              setProductName={setProductName}
              productDescription={productDescription}
              setProductDescription={setProductDescription}
              productBrand={productBrand}
              setProductBrand={setProductBrand}
              productSize={productSize}
              setProductSize={setProductSize}
              productPrice={productPrice}
              setProductPrice={setProductPrice}
              productColor={productColor}
              setProductColor={setProductColor}
              handleAddProduct={handleAddProduct}
              closeModal={() => setProductModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.buttonX]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>

            <TextInput
              value={userName}
              onChangeText={setUserName}
              style={styles.input}
              placeholder="update name here..."
              keyboardType="default"
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholder="update email here..."
              keyboardType="default"
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleUpdateUser}
            >
              <Text style={styles.textStyle}>UPDATE NOW</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 2,
    justifyContent: "center",
  },
  buttonOpen: {
    backgroundColor: "#DB3022",
  },
  buttonClose: {
    backgroundColor: "#DB3022",
  },
  addProdButton: {
    marginTop: 400,
    borderRadius: 100,
    width: 50,
    height: 50,
    backgroundColor: "#DB3022",
  },
  addProdText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  buttonX: {
    alignItems: "left",
    backgroundColor: "#DB3022",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  sideBySideView: {
    flexDirection: "row",
  },
  addButtonContainer: {
    alignItems: "flex-end",
    marginRight: 20,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#DB3022",
    borderRadius: 50,
    padding: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AdminScreen;
