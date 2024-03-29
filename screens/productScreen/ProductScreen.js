import { View, StyleSheet } from 'react-native';
import React from 'react';
import ProductCard from '../../components/ProductCard';

const ProductScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ProductCard navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default ProductScreen;
