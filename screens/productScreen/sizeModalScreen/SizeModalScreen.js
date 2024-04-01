import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SizeModalScreen = ({
  sizes,
  setSelectedSize,
  selectedSize,
  sizePressed,
  setSizePressed,
}) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  // const [selectedSize, setSelectedSize] = useState("Size");
  // const [sizePressed, setSizePressed] = useState(false);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    setModalVisibility(false); // Close the modal when a size is selected
  };

  return (
    <View style={styles.centeredView}>
      <Pressable
        style={[styles.choosing, sizePressed && styles.choosingPressed]}
        onPress={() => {
          setSizePressed(!sizePressed);
          setModalVisibility(true);
        }}
      >
        <Text>{selectedSize}</Text>
        <Ionicons name="chevron-down-outline" size={20} color="black" />
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibility}
        onRequestClose={() => {
          setModalVisibility(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>Select size</Text>
              <Pressable onPress={() => setModalVisibility(false)}>
                <Text style={styles.closeButton}>X</Text>
              </Pressable>
            </View>
            <View style={styles.optionBox}>
              {sizes !== undefined
                ? sizes.map((size) => (
                    <View style={styles.option} key={size}>
                      <Pressable onPress={() => handleSizeSelection(size)}>
                        <Text>{size}</Text>
                      </Pressable>
                    </View>
                  ))
                : null}
            </View>
            <Pressable
              style={styles.sizeInfo}
              onPress={() => alert("Size info under construction!")}
            >
              <Text>Size info</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="black"
              />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SizeModalScreen;

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#F9F9F9",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "35%",
    width: "100%",
    top: "12%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  modalText: {
    fontWeight: "600",
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    fontSize: 18,
  },
  optionBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 10,
    gap: 10,
    flex: 1,
    paddingTop: 20,
  },
  option: {
    width: 100,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
    marginBottom: 10,
  },
  choosing: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    height: 40,
    width: 138,
    borderColor: "#9B9B9B",
    borderWidth: 1,
  },
  choosingPressed: {
    borderColor: "red",
    borderWidth: 1,
  },
  sizeInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
    borderBlockColor: "black",
    bottom: 0,
  },
  lines: {
    height: 1,
    width: 375,
    backgroundColor: "#9B9B9B",
    marginTop: 20,
    marginBottom: 10,
  },
  colors: {
    width: 20,
    height: 20,
  },
});
