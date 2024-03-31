import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { getAllProducts } from '../../api/productsApi';

const ProductScreen = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            const data = await getAllProducts();
            setProducts(data);
        } catch (error) {
            console.error(error);
            setError('Failed to fetch products');
        } finally {
            setIsLoading(false);
        }
    };

    const renderProduct = ({ item }) => (
        <TouchableOpacity style={styles.productContainer}>
            {item.imageUrl && (
                <Image
                    source={{ uri: item.imageUrl }}
                    style={styles.productImage}
                />
            )}
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text>{item.description}</Text>
        </TouchableOpacity>
    );

    if (isLoading) {
        return <View style={styles.center}><ActivityIndicator size="large" color="#0000ff" /></View>;
    }

    if (error) {
        return <View style={styles.center}><Text>{error}</Text></View>;
    }

    if (!isLoading && products.length === 0) {
        return <View style={styles.center}><Text>No products found.</Text></View>;
    }

    return (
        <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={item => item.id ? item.id.toString() : Math.random().toString()}
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
    productImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ProductScreen;