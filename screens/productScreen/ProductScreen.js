import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { getAllProducts } from '../../api/productsApi'; 

const ProductScreen = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const data = await getAllProducts();
            setProducts(data);
        } catch (error) {
            console.error(error);
            setError('Failed to fetch products');
        }
    };

    const renderProduct = ({ item }) => (
        <TouchableOpacity style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text>{item.description}</Text>
            
        </TouchableOpacity>
    );

    if (error) {
        return <View style={styles.center}><Text>{error}</Text></View>;
    }

    return (
        <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={item => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    productContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    productTitle: {
        fontWeight: 'bold',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ProductScreen;