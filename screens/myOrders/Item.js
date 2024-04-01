import { Image, StyleSheet, Text, View } from "react-native";

const Item = ({ orderInfo }) => {
  if (orderInfo)
    return (
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri: item.productId.image,
          }}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.productId.name}</Text>
          <Text style={styles.gray}>{item.productId.description}</Text>
          <View style={styles.rightRow}>
            <View style={styles.row}>
              <Text style={styles.gray}>Color:</Text>
              <Text>{item.color}</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.gray, styles.paddingL]}>size:</Text>
              <Text>{item.size}</Text>
            </View>
          </View>
          <View>
            <View style={styles.row}>
              <View style={styles.row}>
                <Text style={[styles.gray, styles.row]}>Units:</Text>
                <Text>{item.amount}</Text>
              </View>
              <Text style={styles.bold}>{`${item.productId.price}$`}</Text>
            </View>
          </View>
        </View>
      </View>
    );

  return null;
};

export default Item;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    margin: 10,
    marginHorizontal: 15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: { width: "30%", height: "100%" },
  itemInfo: {
    padding: 10,
    width: "70%",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3,
    alignItems: "center",
  },
  rightRow: {
    flexDirection: "row",
  },
  paddingL: { paddingLeft: 15 },
  bold: {
    fontWeight: "bold",
    fontSize: 15,
    padding: 8,
  },
  gray: {
    color: "#9B9B9B",
  },
});
