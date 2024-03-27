import { View, StyleSheet } from 'react-native';
import React from 'react';
import ProductCard from '../../components/ProductCard';

const ProductScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ProductCard navigation={navigation} productId={"65faf26b8dec99b4cd38a768"}/>
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
