import { View, Text, FlatList, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/adminApi";

const AdminScreen = () => {
  const [users, setUsers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  useEffect(() => {
    async function fetchData() {
      const data = await getAllUsers();
      setUsers(data);
    }
    fetchData();
  }, []);

  const handleUpdateUser = () => {


    setModalVisible(!modalVisible)
  }

  return (
    <View>
      <Text>Admin Screen</Text>
      <FlatList
        data={users}
        renderItem={({ user }) => {
          return (
            <View style={styles.centeredView}>
              <Text>{user.name}</Text>
              <Text>{user.email}</Text>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <TextInput onChangeText={text => } style={styles.input} placeholder="update name here..." keyboardType="string"/>
                    <TextInput style={styles.input} placeholder="update email here..." keyboardType="string"/>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={handleUpdateUser()}
                    >
                      <Text style={styles.textStyle}>Update Now</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.textStyle}>update user here</Text>
              </Pressable>
            </View>
          );
        }}
      />
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
});

export default AdminScreen;
