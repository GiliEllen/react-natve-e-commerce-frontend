import { View, Text, Pressable } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons or any other icon library you prefer
import { getSpecificProduct } from '../api/productsApi'; // Assuming you have an api folder in the same directory

const ProductCard = ({ navigation, productId }) => {
    const [isFavorite, setIsFavorite] = useState(false); // State to track if the product is in favorites
    const [product, setProduct] = useState(); // State to hold product data
    const [sizePressed, setSizePressed] = useState(false); // State to track if size is pressed
    const [colorPressed, setColorPressed] = useState(false); // State to track if color is pressed

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getSpecificProduct("65faf26b8dec99b4cd38a768"); // This is the product ID for testing, real id will be passed from the products screen
                // const productData = await getSpecificProduct(productId); // This is the product ID
                if (!productData) {
                    console.error("Product not found");
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
        setIsFavorite(!isFavorite); // Toggle the favorite state
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" size={24} color="black" style={{ marginLeft: 15 }} />
                </Pressable>
            ),
            title: product?.name || 'Product',
            headerRight: () => (
                <Pressable onPress={() => console.log("Share pressed")}>
                    <Ionicons name="share-social" size={24} color="black" style={{ marginRight: 15 }} />
                </Pressable>
            ),
        });
    }, [navigation, product]);

    // Rendering the ProductCard UI
    return (
        <View style={styles.container}>
            <ScrollView vertical={false} horizontal={true} style={styles.imageContainer} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}  >
                {/* no images in DB so replaced with local for testing */}
                <Image source={require('../assets/shirt1.png')} style={styles.image} /> 
                <Image source={require('../assets/shirt2.png')} style={styles.image} />
                {/* {product && product.images.map((image, index) => (
                    <Image key={index} source={{ uri: image }} style={styles.image} />
                ))} */}
            </ScrollView>
            <View style={styles.contentContainer}>
                <View style={styles.userChoice}>
                    <Pressable
                        style={[styles.choosing, sizePressed && styles.choosingPressed]}
                        onPress={() => setSizePressed(!sizePressed)}
                    >
                        <Text>Size</Text>
                        <Ionicons name="chevron-down-outline" size={20} color="black" />
                    </Pressable>
                    <Pressable
                        style={[styles.choosing, colorPressed && styles.choosingPressed]}
                        onPress={() => setColorPressed(!colorPressed)}
                    >
                        <Text>Color</Text>
                        <Ionicons name="chevron-down-outline" size={20} color="black" />
                    </Pressable>
                    <Pressable style={{ alignItems: "center", top: 5 }} onPress={toggleFavorite}>
                        <View style={[styles.heartContainer, isFavorite && styles.favorite]}>
                            <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={20} color={isFavorite ? "red" : "#9B9B9B"} />
                        </View>
                    </Pressable>
                </View>
                {product && (
                    <View style={styles.content}>
                        <View>
                            <Text style={{ fontSize: 24 }}>H&M</Text>
                            <Text style={{ color: "#9B9B9B", fontSize: 11 }}>{product.description}</Text>
                            <View style={styles.ratingContainer}>
                                {[...Array(5)].map((_, index) => (
                                    <Ionicons key={index} name={index < product.rating ? "star" : "star"} size={20} color="gold" />
                                ))}
                                <Text>({12})</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 24 }}>${product.price}</Text>
                        </View>
                    </View>
                )}
                {product && (
                    <View style={styles.content}>
                        <Text style={{ color: "#222222", fontSize: 14 }}>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                    </View>
                )}
            </View>
            {/* Add to Cart button */}
            {product && (
                <Pressable style={styles.addToCart}>
                    <Text style={{ color: "white", textAlign: "center" }}>ADD TO CART</Text>
                </Pressable>
            )}
        </View>
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
        justifyContent: "space-between",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 5,
    },
    addToCart: {
        backgroundColor: "#DB3022",
        padding: 15,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
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
});

export default ProductCard;
