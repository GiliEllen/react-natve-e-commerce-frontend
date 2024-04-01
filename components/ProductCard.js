import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getSpecificProduct } from "../api/productsApi";
import { useNavigation } from "@react-navigation/core";
import SizeModalScreen from "../screens/productScreen/sizeModalScreen/SizeModalScreen";
import ColorModalScreen from "../screens/productScreen/ChooseColorModal/ChooseColorModal";
import { useDispatch, useSelector } from "react-redux";
import { handleAddItemToCart } from "../reducers/cart/userCartApi";
import {
  activeOrderSelector,
  setActiveOrder,
} from "../reducers/cart/userCartSlice";

const ProductCard = ({ route }) => {
  const { productId } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [product, setProduct] = useState();
  const [sizePressed, setSizePressed] = useState(false);
  const [colorPressed, setColorPressed] = useState(false);
  const navigation = useNavigation();
  const order = useSelector(activeOrderSelector);
  const [selectedSize, setSelectedSize] = useState("Size");
  const [selectedColor, setSelectedColor] = useState("Color");

  const handleAdd = async () => {
    try {
      console.log("test");
      const data = await handleAddItemToCart({
        productId: productId,
        orderId: order._id,
        amount: 1,
        color: selectedColor,
        size: selectedSize,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getSpecificProduct(productId);
        if (!productData) {
          console.error("Product not found");
          alert("Product not found");
          return;
        }
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, []);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color="black"
            style={{ marginLeft: 15 }}
          />
        </Pressable>
      ),
      title: product?.name || "Product",
      headerRight: () => (
        <Pressable onPress={() => alert("Share pressed")}>
          <Ionicons
            name="share-social"
            size={24}
            color="black"
            style={{ marginRight: 15 }}
          />
        </Pressable>
      ),
    });
  }, [navigation, product]);

  return product && product !== undefined ? (
    <View style={styles.container}>
      <ScrollView
        vertical={false}
        horizontal={true}
        style={styles.imageContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {product &&
          product.images &&
          product.images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
      </ScrollView>
      <View style={styles.contentContainer}>
        <View style={styles.userChoice}>
          {product && product.sizes && (
            <SizeModalScreen
              setSelectedSize={setSelectedSize}
              selectedSize={selectedSize}
              sizePressed={sizePressed}
              setSizePressed={setSizePressed}
              style={[styles.choosing, sizePressed && styles.choosingPressed]}
              sizes={product.sizes}
            />
          )}
          {product && product.colors && (
            <ColorModalScreen
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              colorPressed={colorPressed}
              setColorPressed={setColorPressed}
              style={[styles.choosing, colorPressed && styles.choosingPressed]}
              colors={product.colors}
            />
          )}
          <Pressable
            style={{ alignItems: "center", top: 5 }}
            onPress={toggleFavorite}
          >
            <View
              style={[styles.heartContainer, isFavorite && styles.favorite]}
            >
              <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={20}
                color={isFavorite ? "red" : "#9B9B9B"}
              />
            </View>
          </Pressable>
        </View>
        {product && (
          <View style={styles.content}>
            <View>
              <Text style={styles.contnetTitle}>H&M</Text>
              <Text style={styles.contnetName}>{product.name}</Text>
              <View style={styles.ratingContainer}>
                {[...Array(5)].map((_, index) => (
                  <Ionicons
                    key={index}
                    name={index < product.rating ? "star" : "star"}
                    size={20}
                    color="gold"
                  />
                ))}
                <Text>({12})</Text>
              </View>
            </View>
            <View>
              <Text style={styles.contnetTitle}>${product.price}</Text>
            </View>
          </View>
        )}
        {product && (
          <View style={styles.content}>
            <Text style={styles.contnetDescription}>{product.description}</Text>
          </View>
        )}
      </View>
      {/* Add to Cart button */}
      {product && (
        <View style={styles.addToCart}>
          <Pressable style={styles.addToCartButton} onPress={handleAdd}>
            <Text style={styles.buttonText}>ADD TO CART</Text>
          </Pressable>
        </View>
      )}
    </View>
  ) : (
    <Text>Product not found</Text>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 275,
    height: 413,
    marginRight: 5,
  },
  imageContainer: {
    height: 413,
    padding: 2,
  },
  container: {
    flex: 1,
    backgroundColor: "#ccc5",
  },
  userChoice: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    padding: 5,
    top: 5,
    gap: 10,
  },
  heartContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  content: {
    paddingLeft: 20,
    paddingTop: 10,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "600",
  },
  contentContainer: {
    justifyContent: "space-around",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
  },
  addToCart: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 112,
    backgroundColor: "#fff",
    top: 0,
  },
  addToCartButton: {
    backgroundColor: "#DB3022",
    padding: 15,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: "90%",
    height: 48,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  choosing: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    height: 40,
    width: 138,
    borderColor: "#9B9B9B",
    borderWidth: 1,
  },
  choosingPressed: {
    borderColor: "red",
    borderWidth: 1,
  },
  contnetTitle: {
    fontWeight: "600",
    fontSize: 24,
  },
  contnetName: {
    fontWeight: "400",
    fontSize: 11,
    color: "#9B9B9B",
  },
  contnetDescription: {
    fontWeight: "400",
    fontSize: 14,
  },
});

export default ProductCard;
