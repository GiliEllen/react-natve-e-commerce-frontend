import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  const shareProduct = async () => {
    try {
      await Share.share({
        message: `Check out this product: ${product.name} - ${product.description} for $${product.price}.`,
      });
    } catch (error) {
      console.error('Error sharing', error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: product.name,
      headerRight: () => (
        <TouchableOpacity onPress={shareProduct} style={{ marginRight: 10 }}>
          <Icon name="share-social" size={25} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, product.name, shareProduct]);

  return (
    <ScrollView contentContainerStyle={styles.fullScreen}>
      <View style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.image} />

        <View style={styles.selectionRow}>
          
          <TouchableOpacity onPress={() => {}} style={styles.selector}>
            <Text style={styles.selectorText}>Size: {selectedSize}</Text>
            <Icon name="caret-down" size={16} color="black" />
          </TouchableOpacity>

         
          <TouchableOpacity onPress={() => {}} style={styles.selector}>
            <Text style={styles.selectorText}>Color: {selectedColor}</Text>
            <Icon name="caret-down" size={16} color="black" />
          </TouchableOpacity>

         
          <TouchableOpacity onPress={toggleFavorite}>
            <Icon name={isFavorite ? "heart" : "heart-outline"} size={24} color="red" />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsRow}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
        </View>

       
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  image: {
    flexGrow: 1,
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  selectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 12,
    paddingLeft:35,
    paddingRight:35,
    borderRadius: 5,
  },
  selectorText: {
    fontSize: 16,
    marginRight: 5,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkred',
  },
  addToCartButton: {
    backgroundColor: '#DB3022',
    width: '100%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;