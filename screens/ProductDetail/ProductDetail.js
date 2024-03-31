import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
     
      <View style={styles.sizeSelector}>
        {product.sizes.map((size) => (
          <TouchableOpacity key={size} onPress={() => setSelectedSize(size)}>
            <Text style={styles.sizeText}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Color Selector */}
      <View style={styles.colorSelector}>
        {product.colors.map((color) => (
          <TouchableOpacity key={color} onPress={() => setSelectedColor(color)}>
            <View style={[styles.colorCircle, { backgroundColor: color }]} />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.productName}>{product.name}</Text>
      <Button title="Add to Cart" onPress={() => console.log('Add to cart')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: '100%',
    height: '50%',
  },
  sizeSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  sizeText: {
    margin: 10,
    // Additional styling
  },
  colorSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 10,
    // Additional styling
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    // Additional styling
  },
  // Additional styles
});

export default ProductDetailScreen;