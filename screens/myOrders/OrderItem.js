import { Pressable, StyleSheet, Text, View } from "react-native";

const OrderItem = ({ navigation, order }) => {
  const orderInfo = {
    trackingNumber: "IJ39482490",
    status: "Delivered",
  };
  const calculateTotalAmount = () => {
    let sum = 0;
    order.cartItems.forEach((item) => {
      sum += item.productId.price;
    });
    return sum;
  };
  return (
    <>
      {order ? (
        <View style={styles.order}>
          <View style={styles.order}>
            <Text style={styles.orderNameBold}> Order {order.order._id} </Text>
            <Text style={styles.gray}>
              {order.order.completedAt
                ? order.order.completedAt
                : order.order.createdAt}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.gray}>Tracking Number: </Text>
            <Text style={styles.bold}> {orderInfo.trackingNumber} </Text>
          </View>
          <View style={styles.orderName}>
            <View style={styles.row}>
              <Text style={styles.gray}>Quantity: </Text>
              <Text style={styles.bold}>{order.cartItems.length()}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.gray}>Total Amount: </Text>
              <Text style={styles.bold}>{calculateTotalAmount()}$</Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <Pressable
              onPress={() => {
                navigation.navigate(`OrderPage`, { order: order });
              }}
              style={styles.detailsBtn}
            >
              <Text style={styles.bold}>Details</Text>
            </Pressable>
            <View>
              <Text style={styles[orderInfo.status]}>{order.order.status}</Text>
            </View>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  order: {
    backgroundColor: "white",
    marginHorizontal: 10,
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  orderNameBold: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 5,
  },
  gray: {
    color: "#9B9B9B",
    fontSize: 14,
  },
  orderName: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    margin: 3,
    alignItems: "center",
  },
  bottom: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
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
});
