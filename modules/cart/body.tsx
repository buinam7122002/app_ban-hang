import React, { useMemo, useCallback } from 'react';
import { View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, Checkbox, HStack, Text } from 'native-base';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from 'expo-router';
import { appStore } from '@/store';
import { formatCurrency } from '@/constants';
import { useUpdateCart } from './hook/updateCart';

type RootStackParamList = {
    Home: undefined;
};

type FooterAppBarNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const Cart = () => {
    const navigation = useNavigation<FooterAppBarNavigationProp>();
    const [groupValue, setGroupValue] = React.useState<string[]>([]);
    const [selectAll, setSelectAll] = React.useState(false);
    const { cart_info } = appStore()
    const dataCart = useMemo(() => {
        if (Array.isArray(cart_info)) return cart_info;
        if (cart_info && typeof cart_info === 'object') return [cart_info];
        return [];
    }, [cart_info])

    const handleSelectAll = () => {
        if (selectAll) {
            setGroupValue([]);
        } else {
            const allProductIds = dataCart.flatMap(item =>
                item.products ? item.products.map(product => product.product_id) : []
            );
            setGroupValue(allProductIds);
        }
        setSelectAll(!selectAll);
    };
    const totalProduct = useMemo(() => {
        return dataCart.reduce((total, item) => total + (item.products?.length || 0), 0);
    }, [dataCart])
    const { mutate: updateCart } = useUpdateCart();

    const handleQuantityChange = useCallback((productId: string, newQuantity: number) => {
        const updatedCart = dataCart.map(item => ({
            ...item,
            products: item.products.map(product =>
                product.product_id === productId
                    ? { ...product, quantity: Math.max(1, newQuantity) }
                    : product
            )
        }));

        const cartUpdate = {
            userId: updatedCart[0].user_id,
            products: updatedCart[0].products.map(product => ({
                productId: product.product_id,
                quantity: product.quantity,
                detail: product.detail
            }))
        };

        updateCart(cartUpdate);
    }, [dataCart, updateCart]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Ionicons name="arrow-back" size={24} color="#ee4d2d" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Giỏ hàng ({totalProduct})</Text>
                <TouchableOpacity>
                    <Text style={styles.headerAction}>Xong</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.cartItems}>
                <View style={styles.shopSection}>
                    <Checkbox.Group aria-label="Tick tất cả" accessibilityLabel="Tick" value={groupValue} onChange={setGroupValue}>
                        <HStack mb={4}>
                        </HStack>
                        {dataCart && dataCart.map((item) => (
                            <React.Fragment key={item.user_id}>
                                {item.products && item.products.map((product) => (
                                    <View key={product.product_id} style={styles.productItem}>
                                        <Box display="flex" alignItems="center">
                                            <Checkbox
                                                aria-label={`Select ${product.product_id}`}
                                                size="sm"
                                                colorScheme="orange"
                                                marginRight={4}
                                                value={product.product_id}
                                                accessibilityLabel={`Select ${product.product_id}`}
                                            />
                                        </Box>
                                        <Image source={{ uri: product.detail.preview.image }} style={styles.productImage} />
                                        <View style={styles.productDetails}>
                                            <Text style={styles.productName}>{product.detail.name}</Text>
                                            <Text style={styles.productVariant}>Màu sắc: {product.detail.preview.color}</Text>
                                            <Text style={styles.productVariant}>Kích cỡ: {product.detail.size}</Text>
                                            <HStack alignItems="center" justifyContent="space-between">
                                                <Text style={styles.productPrice}>{formatCurrency(product.detail.sale_price || product.detail.real_price)}</Text>
                                                <View style={styles.quantityControl}>
                                                    <TouchableOpacity
                                                        style={styles.quantityButton}
                                                        onPress={() => handleQuantityChange(product.product_id, product.quantity - 1)}
                                                    >
                                                        <Text>-</Text>
                                                    </TouchableOpacity>
                                                    <Text style={styles.quantity}>{product.quantity}</Text>
                                                    <TouchableOpacity
                                                        style={styles.quantityButton}
                                                        onPress={() => handleQuantityChange(product.product_id, product.quantity + 1)}
                                                    >
                                                        <Text>+</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </HStack>
                                        </View>
                                    </View>
                                ))}
                            </React.Fragment>
                        ))}
                    </Checkbox.Group>
                </View>
                <View style={styles.shippingDiscountInfo}>
                    <MaterialCommunityIcons name="truck-delivery-outline" size={24} color="#00bfa5" />
                    <Text style={styles.shippingDiscountText}>
                        Giảm ₫300.000 phí vận chuyển đơn tối thiểu ₫0, Giảm ₫500.000 phí vận chuyển đơn tối...
                    </Text>
                    <Ionicons name="chevron-forward" size={24} color="#888" />
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.selectAllButton} onPress={handleSelectAll}>
                    <Box display="flex" justifyContent="center" width="100%" alignItems="center">
                        <Text color="white">Chọn tất cả</Text>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton}>
                    <Box display="flex" justifyContent="center" width="100%" alignItems="center">
                        <Text color="white">Xóa</Text>
                    </Box>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerAction: {
        color: '#ee4d2d',
    },
    cartItems: {
        flex: 1,
    },
    shopSection: {
        backgroundColor: 'white',
        marginBottom: 8,
        padding: 16,
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    productItem: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: "center"
    },
    productImage: {
        width: 80,
        height: 80,
        marginRight: 16,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        marginBottom: 4,
    },
    productVariant: {
        color: '#888',
        marginBottom: 4,
    },
    productPrice: {
        color: '#ee4d2d',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    quantityControl: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 4,
        width: 24,
        alignItems: 'center',
    },
    quantity: {
        marginHorizontal: 8,
    },
    shippingDiscountInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 8,
    },
    shippingDiscountText: {
        flex: 1,
        color: '#00bfa5',
        marginLeft: 8,
        marginRight: 8,
        fontSize: 12,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    selectAllButton: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 8,
        borderRadius: 4,
        width: 100,
        backgroundColor: '#ee4d2d',
        color: "white"
    },
    deleteButton: {
        borderWidth: 1,
        borderColor: '#ee4d2d',
        padding: 8,
        borderRadius: 4,
        width: 100,
        backgroundColor: "#ee4d2d",
    },
});
