import React, { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../sizeModalScreen/SizeModalScreen";

const ColorModalScreen = ({ colors, onColorSelect }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedColor, setSelectedColor] = useState("Color");
  const [colorPressed, setColorPressed] = useState(false);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    onColorSelect(color);
    setModalVisibility(false); // Close the modal when a color is selected
  };

  return (
    <View style={styles.centeredView}>
      <Pressable
        style={[styles.choosing, colorPressed && styles.choosingPressed]}
        onPress={() => {
          setColorPressed(!colorPressed);
          setModalVisibility(true);
        }}
      >
        {selectedColor !== "Color" ? (
          <View style={[ styles.colors, {backgroundColor: selectedColor} ] } />
        ) : (
          <Text>Color</Text>
        )}
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
              <Text style={styles.modalText}>Select color</Text>
              <Pressable onPress={() => setModalVisibility(false)}>
                <Text style={styles.closeButton}>X</Text>
              </Pressable>
            </View>
            <View style={styles.optionBox}>
              {colors !== undefined
                ? colors.map((color) => (
                    <View style={styles.option} key={color}>
                      <Pressable onPress={() => handleColorSelection(color)}>
                        <View
                          style={{
                            width: 20,
                            height: 20,
                            backgroundColor: color,
                          }}
                        />
                      </Pressable>
                    </View>
                  ))
                : null}
            </View>
            <Pressable
              style={styles.sizeInfo}
              onPress={() => alert("Color info under construction!")}
            >
              <Text>Color info</Text>
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

export default ColorModalScreen;
