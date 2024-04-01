import { Image, Pressable, ScrollView, Text, View } from "react-native";

const OrderInfo = ({ order }) => {
  const orderInfo = {
    shippingAddress: "3 Newbridge Court ,Chino Hills, CA 91709, United States",
    paymentMethod: "**** **** **** 3947",
    masterCardImgUrl:
      "https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1587-tygju446.png",
    deliveryMethod: "FedEx, 3 days, 15$",
    discount: "10%, Personal promo code",
  };
  const calculateTotalAmount = () => {
    let sum = 0;
    order.cartItems.forEach((item) => {
      sum += item.productId.price;
    });
    return sum;
  };
  return (
    <ScrollView style={styles.padding15}>
      <Text style={styles.orderInfoHead}>Order information</Text>
      <View style={styles.rowLeft}>
        <Text style={styles.gray}>Shipping Address:</Text>
        <Text style={styles.text}>{orderInfo.shippingAddress}</Text>
      </View>
      <View style={styles.rowLeft}>
        <Text style={styles.gray}>Payment method:</Text>
        <Image
          style={{ width: 32, height: 25 }}
          source={orderInfo.masterCardImgUrl}
        />
        <Text style={styles.text}>{orderInfo.shippingAddress}</Text>
      </View>
      <View style={styles.rowLeft}>
        <Text style={styles.gray}>Delivery method:</Text>
        <Text style={styles.text}>{orderInfo.deliveryMethod}</Text>
      </View>
      <View style={styles.rowLeft}>
        <Text style={styles.gray}>Discount:</Text>
        <Text style={styles.text}>{orderInfo.discount}</Text>
      </View>
      <View style={styles.rowLeft}>
        <Text style={styles.gray}>Total Amount:</Text>
        <Text style={styles.text}>{calculateTotalAmount()}</Text>
      </View>

      <View style={styles.rowCenter}>
        <Pressable>
          <Text>Reorder</Text>
        </Pressable>
        <Pressable style={styles.redBtn}>
          <Text>Leave feedback</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  orderInfoHead: {
    fontSize: 14,
    fontWeight: "500",
  },
  rowLeft: {
    flexDirection: "row",
    justifyContent: left,
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "spaceBetween",
  },
  gray: {
    color: "#9B9B9B",
    fontSize: 14,
  },
  text: {
    color: "black",
    fontWeight: "500",
    fontSize: 14,
  },
  redBtn: {
    borderRadius: 25,
    width: 160,
    height: 36,
    left: 15,
    top: 908,
    elevation: 4,
    shadowColor: "#D32626",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  redBtnText: {
    fontWeight: "500",
    fontSize: 14,
    color: "white",
  },
  whiteBtn: {
    borderRadius: 25,
    width: 160,
    height: 36,
    left: 15,
    top: 908,
  },
  whiteBtnText: {
    fontWeight: "500",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "black",
  },
  padding15: { padding: 15 },
});

export default OrderInfo;
