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
import React, { useEffect, useState } from "react";
import { deleteUser, getAllUsers, updateUser } from "../../api/adminApi";

const AdminScreen = () => {
  const [users, setUsers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");

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

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={item => item._id}
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
  },
  buttonOpen: {
    backgroundColor: "red",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  buttonX: {
    alignItems: "left",
    backgroundColor: "red",
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
});

export default AdminScreen;
