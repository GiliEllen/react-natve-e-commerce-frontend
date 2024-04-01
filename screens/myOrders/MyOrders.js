import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import OrderItem from "./OrderItem";
import { BackIcon, SearchIcon } from "./Svgs/icons";
import TagBody from "./TagsBody";
import { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import { selectUserState } from "../../reducers/user/userSlice";
import { API_URL } from "../../api/userPasswordApi";

const MyOrders = ({ navigation }) => {
  const [orders, setOrders] = useState(null);
  const user = useSelector(selectUserState);
  const userId = user._id;

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/api/orders/${userId}/all-orders/done`
      );
      if (data) setOrders(data.orders);
      else throw new Error("Couldn't find orders");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <View style={styles.myOrderPage}>
      <View style={styles.topBtn}>
        <Pressable
          onPress={() => {
            navigation.navigate(`ProfilePage`, { name: `ProfilePage` });
          }}
        >
          <BackIcon />
        </Pressable>
        <SearchIcon />
      </View>
      <Text style={styles.headerMyOrder}>My Orders</Text>
      <TagBody />
      <ScrollView>
        {orders ? (
          orders.forEach((orderInfo) => {
            <OrderItem
              key={orderInfo.order._id}
              navigation={navigation}
              order={orderInfo}
            />;
          })
        ) : (
          <Text style={styles.noInfo}>No information on orders received.</Text>
        )}
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
  noInfo: {
    color: "gray",
    fontSize: 14,
    textAlign: "center",
    padding: 30,
  },
});
