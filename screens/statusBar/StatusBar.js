import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const MyStatusBar = () => {
  return (
    <View
      style={{
        height: 20,
        width: 360,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }}
    >
      <Text style={{ fontSize: 16 }}>10:00 AM</Text>

      <View style={{ flexDirection: "row" }}>
        <Icon
          name="signal"
          size={19}
          color="black"
          style={{ marginRight: 7 }}
        />

        <Icon name="wifi" size={20} color="black" style={{ marginRight: 7 }} />
        <Icon name="battery-full" size={20} color="black" />
      </View>
    </View>
  );
};

export default MyStatusBar;
