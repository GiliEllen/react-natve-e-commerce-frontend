import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
const Option = ({ label, span, nameRouter, navigation }) => {
  return (
    <View style={styles.option}>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.span}>{span}</Text>
      </View>
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate(`${nameRouter}`, { name: `${nameRouter}` })
          }
        >
          <Entypo name="chevron-right" size={20} color="gray" />
        </Pressable>
      </View>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  option: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 35,
  },
  label: {
    fontWeight: "bold",
    fontSize: 17,
  },
  span: {
    color: "gray",
    fontSize: 12,
  },
});
