import { Pressable, StyleSheet, Text, View } from "react-native";
import { BackIcon, SearchIcon } from "./Svgs/icons";
import ListItems from "./ListItems";

const OrderPage = ({ navigation }) => {
  const route = useRoute();
  const { order } = route.params;
  const orderId = order.order._id;

  orderHardCoded = {
    trackingNumber: "IJ39482490",
    status: "Delivered",
  };

  return (
    <View>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.navigate(`MyOrders`, {
              name: `MyOrders`,
            });
          }}
        >
          <BackIcon />
        </Pressable>
        <Text style={styles.headerName}>Order Details</Text>
        <SearchIcon />
      </View>
      <View>
        <View style={styles.orderName}>
          <Text style={styles.orderNameBold}> Order {orderId} </Text>
          <Text style={styles.gray}>
            {order.order.completedAt
              ? order.order.completedAt
              : order.order.createdAt}
          </Text>
        </View>
        <View style={styles.orderName}>
          <View style={styles.row}>
            <Text style={styles.gray}>Tracking Number: </Text>
            <Text style={styles.bold}> {orderHardCoded.trackingNumber} </Text>
          </View>
          <Text style={styles[order.status]}>{orderHardCoded.status}</Text>
        </View>
        <Text style={styles.amountItem}>{order.cartItems.length}</Text>
      </View>
      <ListItems cartItems={order.cartItems} />
      <OrderInfo order={order} />
    </View>
  );
};

export default OrderPage;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
  },
  headerName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  orderNameBold: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 5,
    paddingTop: 20,
  },
  gray: {
    color: "#9B9B9B",
    fontSize: 14,
    padding: 5,
  },
  orderName: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  row: {
    flexDirection: "row",
    margin: 3,
    alignItems: "center",
  },

  detailsBtn: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  Delivered: {
    color: "green",
  },
  Processing: {
    color: "yellow",
  },
  Cancelled: {
    color: "red",
  },
  bold: {
    fontWeight: "600",
  },
  amountItem: {
    fontWeight: "600",
    fontSize: 14,
    paddingHorizontal: 10,
  },
});
