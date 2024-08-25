import { Box, Image } from 'native-base';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
export const ItemCategory = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Box justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100%"}>
                    <Ionicons name="shirt" size={55} color="#fb923c" />
                    <Text style={{ fontSize: 12, position: "absolute", bottom: 2 }}>Quần áo</Text>
                </Box>
            </View>
            <View style={styles.item}>
                <Box justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100%"}>
                    <MaterialCommunityIcons name="shoe-sneaker" size={80} color="#94a3b8" />
                    <Text style={{ fontSize: 12, position: "absolute", bottom: 2 }}>Giày</Text>
                </Box>
            </View>
            <View style={styles.item}>
                <Box justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100%"}>
                    <Image
                        resizeMode='cover'
                        w={"70"}
                        h={"70"}
                        background={"white"}
                        source={
                            require("../../../assets/images/dress-54.jpg")
                        } />
                    <Text style={{ fontSize: 12, position: "absolute", bottom: 2 }}>Váy</Text>
                </Box>
            </View>
            <View style={styles.item}>
                <Box justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100%"}>
                    <Ionicons name="bag" size={60} color="#f472b6" />
                    <Text style={{ fontSize: 12, position: "absolute", bottom: 2 }}>Túi xách</Text>
                </Box>
            </View>
            <View style={styles.item}>
                <Box justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100%"}>
                    <Fontisto name="sunglasses-alt" size={50} color="#a1a1aa" />
                    <Text style={{ fontSize: 12, position: "absolute", bottom: 2 }}>Mắt kính</Text>
                </Box>
            </View>
            <View style={styles.item}>
                <Box justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100%"}>
                    <Image
                        resizeMode='cover'
                        w={"70"}
                        h={"70"}
                        background={"white"}
                        source={
                            require("../../../assets/images/lovepik-backpack-bag-icon-free-vector-illustration-png-image_401344462_wh1200.png")
                        } />
                    <Text style={{ fontSize: 12, position: "absolute", bottom: 2 }}>Balo</Text>
                </Box>
            </View>
            <View style={styles.item}>
                <Box justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100%"}>
                    <FontAwesome6 name="socks" size={50} color="black" />
                    <Text style={{ fontSize: 12, position: "absolute", bottom: 2 }}>Vớ</Text>
                </Box>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: 104,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: "#f4f4f5",
        // borderWidth: 1,
        // borderStyle: "solid"
    },
});
