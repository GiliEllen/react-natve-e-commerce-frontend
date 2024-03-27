import { ScrollView, StyleSheet, Text, View } from "react-native";
import OrderItem from "./OrderItem";
import { BackIcon, SearchIcon } from "./Svgs/icons";
import TagBody from "./TagsBody";

const MyOrders = () => {
  return (
    <View style={styles.myOrderPage}>
      <View style={styles.topBtn}>
        <BackIcon />
        <SearchIcon />
      </View>
      <Text style={styles.headerMyOrder}>My Orders</Text>
      <TagBody />
      <ScrollView>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </ScrollView>
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  topBtn: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  myOrderPage: {
    backgroundColor: "#F9F9F9",
    height: "100%",
  },
  headerMyOrder: {
    marginLeft: 16,
    fontWeight: "bold",
    fontSize: 34,
  },
});
