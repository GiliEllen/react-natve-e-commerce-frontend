import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { getAllProducts } from "../../api/productsApi";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const productContainerWidth = screenWidth / 2 - 15;

const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts(searchQuery);
  }, [products, searchQuery]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const data = await getAllProducts();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  };

  const filterProducts = (query) => {
    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isSearchVisible
        ? () => (
            <TextInput
              autoFocus
              placeholder="Search..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
              style={{ width: "100%", padding: 10 }}
            />
          )
        : "Product Screen",
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 10 }}
        >
          <Icon name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setIsSearchVisible((prev) => !prev)}
          style={{ marginRight: 10 }}
        >
          <Icon
            name={isSearchVisible ? "close" : "search"}
            size={25}
            color="black"
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, isSearchVisible, searchQuery]);

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() =>
        navigation.navigate("ProductDetail", { productId: item._id })
      }
    >
      <View style={styles.imageContainer}>
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.productImage} />
        ) : (
          <View style={styles.placeholderImage} />
        )}
      </View>
      <Text style={styles.productTitle}>{item.name}</Text>
      <Text style={styles.productInfo}>{item.description}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  const keyExtractor = (item, index) =>
    item._id ? item._id.toString() : index.toString();

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No products found.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={filteredProducts}
      renderItem={renderProduct}
      keyExtractor={keyExtractor}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  productContainer: {
    margin: 5,
    width: productContainerWidth,
    alignItems: "flex-start",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  productImage: {
    width: productContainerWidth,
    height: productContainerWidth * 0.75,
    resizeMode: "cover",
    backgroundColor: "grey",
  },
  placeholderImage: {
    width: productContainerWidth,
    height: productContainerWidth * 0.75,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  productTitle: {
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "left",
    width: "100%",
  },
  productInfo: {
    textAlign: "left",
    width: "100%",
  },
  productPrice: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 16,
    color: "darkred",
    textAlign: "left",
    width: "100%",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductScreen;
