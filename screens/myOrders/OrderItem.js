import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

const OrderItem = () => {
  const orderInfo = {
    orderId: "№1947034",
    orderDate: "12-12-2015",
    trackingNumber: "IJ39482490",
    quantity: 4,
    totalAmount: 112,
    status: "Delivered",
  };
  const handlePressDetails = () => {
    useNavigation("orderDetails", { orderId: orderInfo.orderId });
  };
  return (
    <View style={styles.order}>
      <View style={styles.orderName}>
        <Text style={styles.orderNameBold}> Order {orderInfo.orderId} </Text>
        <Text style={styles.gray}> {orderInfo.orderDate} </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.gray}>Tracking Number: </Text>
        <Text style={styles.bold}> {orderInfo.trackingNumber} </Text>
      </View>
      <View style={styles.orderName}>
        <View style={styles.row}>
          <Text style={styles.gray}>Quantity: </Text>
          <Text style={styles.bold}>{orderInfo.quantity}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.gray}>Total Amount: </Text>
          <Text style={styles.bold}>{orderInfo.totalAmount}$</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <View onPress={handlePressDetails} style={styles.detailsBtn}>
          <Text style={styles.bold}>Details</Text>
        </View>
        <View>
          <Text style={styles[orderInfo.status]}>{orderInfo.status}</Text>
        </View>
      </View>
    </View>
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