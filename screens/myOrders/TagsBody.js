import { StyleSheet, Text, View } from "react-native";

export default function TagBody() {
  return (
    <View style={styles.nav}>
      <View style={styles.navItem}>
        <Text style={styles.navTextActive}>Delivered</Text>
      </View>
      <View>
        <Text style={styles.navText}>Processing</Text>
      </View>
      <View>
        <Text style={styles.navText}>Cancelled</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
    margin: 20,
  },
  navItem: {
    backgroundColor: "black",
    borderRadius: "50%",
  },

  navTextActive: {
    color: "white",
    paddingHorizontal: 16,
    paddingVertical: 6,
    color: "white",
    fontWeight: "600",
  },
  navText: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    fontWeight: "600",
  },
});
