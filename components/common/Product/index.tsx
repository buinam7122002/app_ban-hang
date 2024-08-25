import React from "react";
import { Box, Heading, Image, Text, HStack, Stack } from "native-base";
import { StyleSheet } from "react-native";

const Product = () => {
    return (
        <HStack space={4} justifyContent="space-between" flexWrap="wrap">
            <Box width="48%" overflow="hidden">
                <Box>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{
                            uri: "https://file.hstatic.net/1000003969/file/1_59432034a91048dd87e7973dc187df36.jpg"
                        }} alt="image" />
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading style={{ fontSize: 16, textAlign: "center" }} ml="-1">
                            Túi Xách Nhỏ
                        </Heading>
                        <HStack flex={1} justifyContent="center" space={2}>
                            <Text style={{ color: "red" }} textAlign="center" fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                                674,000₫
                            </Text>
                            <Text textAlign="center" fontSize="xs" style={{ color: "black", textDecorationLine: "line-through" }} fontWeight="500" ml="-0.5" mt="-1">
                                749,000₫
                            </Text>
                        </HStack>
                    </Stack>
                </Stack>
            </Box>

            <Box width="48%" overflow="hidden">
                <Box>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{
                            uri: "https://file.hstatic.net/1000003969/file/1_59432034a91048dd87e7973dc187df36.jpg"
                        }} alt="image" />
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading style={{ fontSize: 16, textAlign: "center" }} ml="-1">
                            Túi Xách Nhỏ
                        </Heading>
                        <HStack flex={1} justifyContent="center" space={2}>
                            <Text style={{ color: "red" }} textAlign="center" fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                                674,000₫
                            </Text>
                            <Text textAlign="center" fontSize="xs" style={{ color: "black", textDecorationLine: "line-through" }} fontWeight="500" ml="-0.5" mt="-1">
                                749,000₫
                            </Text>
                        </HStack>
                    </Stack>
                </Stack>
            </Box>
        </HStack>
    );
};

export default Product;

const styles = StyleSheet.create({
    image: {
        height: 181,
        width: "100%"
    }
});
