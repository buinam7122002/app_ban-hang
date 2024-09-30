import React, { useState } from 'react';
import { Box, Input, Icon, Popover, Button, Image, Text, HStack, Heading } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export function SearchBar() {
    const [inputValue, setInputValue] = useState('');
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);

    const handleInputChange = (value: string) => {
        setInputValue(value);
        setIsPopoverVisible(value.trim() !== '');
    };

    const handleSubmit = () => {
        alert('onSubmitEditing');
    };

    return (
        <Box style={{ marginLeft: 12 }} w="80%" alignSelf="center">
            <Box w="100%">
                <Popover
                    isOpen={isPopoverVisible}
                    onClose={() => setIsPopoverVisible(false)}
                    trigger={triggerProps => (
                        <Input
                            {...triggerProps}
                            placeholder="Nhập tên sản phẩm..."
                            width="100%"
                            borderRadius="4"
                            px="3"
                            fontSize="12"
                            onChangeText={handleInputChange}
                            onSubmitEditing={handleSubmit}
                            height="32px"
                            InputRightElement={
                                <Icon
                                    m="2"
                                    ml="2"
                                    size="5"
                                    color="gray.400"
                                    as={<MaterialIcons name="search" />}
                                />
                            }
                        />
                    )}
                >
                    <Popover.Content left={"16.3359px"} accessibilityLabel="Product Suggestions" w="258px">
                        <Popover.Arrow />
                        <Popover.Header>Tổng sản phẩm tìm thấy(100)</Popover.Header>
                        <Popover.Body pt={0}>
                            <Box style={styles.bodyPopover}  >
                                <Image
                                    width={"70px"}
                                    height={"100%"}
                                    source={{
                                        uri: "data:image/jpeg;base64,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"
                                    }}
                                    resizeMode='contain'
                                    alt="Ảnh sản phẩm" />
                                <Box w={"68%"} ml={4}>
                                    <Heading numberOfLines={2} fontWeight={500} style={{ fontSize: 16 }} ml="-1">
                                        Túi Xách Nhỏ
                                    </Heading>
                                    <HStack mt={3} flex={1} space={2}>
                                        <Text style={{ color: "red" }} fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                                            674,000₫
                                        </Text>
                                        <Text fontSize="xs" style={{ color: "black", textDecorationLine: "line-through" }} fontWeight="500" ml="-0.5" mt="-1">
                                            749,000₫
                                        </Text>
                                    </HStack>
                                </Box>
                            </Box>
                            <Box style={styles.bodyPopover}  >
                                <Image
                                    width={"70px"}
                                    height={"100%"}
                                    source={{
                                        uri: "https://file.hstatic.net/200000584505/file/web-mobile_2.jpg"
                                    }}
                                    resizeMode='contain'
                                    alt="Ảnh sản phẩm" />
                                <Box w={"68%"} ml={4}>
                                    <Heading numberOfLines={2} fontWeight={500} style={{ fontSize: 16 }} ml="-1">
                                        Túi Xách Nhỏ
                                    </Heading>
                                    <HStack mt={3} flex={1} space={2}>
                                        <Text style={{ color: "red" }} fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                                            674,000₫
                                        </Text>
                                        <Text fontSize="xs" style={{ color: "black", textDecorationLine: "line-through" }} fontWeight="500" ml="-0.5" mt="-1">
                                            749,000₫
                                        </Text>
                                    </HStack>
                                </Box>
                            </Box>
                        </Popover.Body>
                        <Popover.Footer justifyContent="flex-end">
                            <Button.Group space={2}>
                                <Button colorScheme="coolGray" variant="ghost" onPress={() => setIsPopoverVisible(false)}>
                                    Đóng
                                </Button>
                                <Button colorScheme="primary" onPress={() => console.log('Xem tất cả')}>
                                    Xem Tất Cả
                                </Button>
                            </Button.Group>
                        </Popover.Footer>
                    </Popover.Content>
                </Popover>
            </Box>
        </Box>
    );
}
const styles = StyleSheet.create({
    bodyPopover: {
        display: "flex",
        flexDirection: "row",
        borderBottomColor: "#dfe0e1",
        borderBottomWidth: 1,
        height: 72,
    }
})