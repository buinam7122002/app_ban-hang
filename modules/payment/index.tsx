import { StyleSheet } from "react-native"
import { Text, HStack, Pressable, Box, Image, Heading, ScrollView, Popover, FormControl, Input, Select } from 'native-base';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { useNavigation } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CButton from "@/components/common/Button";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
type RootStackParamList = {
    Home: undefined;
};
type FooterAppBarNavigationProp = NativeStackNavigationProp<RootStackParamList>;
interface City {
    name: string;
    code: number;
    districts?: District[];
}

interface District {
    name: string;
    code: number;
}

export const Payment = () => {
    const navigation = useNavigation<FooterAppBarNavigationProp>();
    const [methodPayment, setMethodPayment] = React.useState<string>("Chọn phương thức Thanh toán");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState<City | null>(null);

    const getCities = async () => {
        const res = await axios.get("https://provinces.open-api.vn/api?depth=1");
        return res.data;
    };

    const { data: cities, isLoading: loadingCities } = useQuery({
        queryKey: ["cities"],
        queryFn: getCities
    });

    const queryClient = useQueryClient();

    const getDistricts = async (cityCode: number) => {
        const res = await axios.get(`https://provinces.open-api.vn/api/p/${cityCode}?depth=2`);
        return res.data;
    };

    const { mutate: fetchDistricts, data: districtData, isPending: loadingDistrict } = useMutation({
        mutationFn: getDistricts,
        onSuccess: (data) => {
            queryClient.setQueryData(['districts', selectedCity?.code], data.districts);
        },
    });

    const handleCityChange = (cityName: string) => {
        const city = cities.find((c: City) => c.name === cityName);
        if (city) {
            setSelectedCity(city);
            fetchDistricts(city.code);
        }
    };
    return (
        <Box flex={1}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Box bg="white" safeAreaTop width="100%" alignSelf="center">
                    <HStack height={60} style={{ backgroundColor: "white" }} alignItems="center" safeAreaBottom shadow={6}>
                        <Pressable
                            py="3"
                            flex={1}
                            onPress={() => {
                                navigation.navigate('Home');
                            }}
                        >
                            <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }} paddingX={4}>
                                <AntDesign name="arrowleft" size={24} color="#ee4d2d" />
                                <Text pr={"20px"} flex={1} textAlign={"center"} color="black" fontWeight={"bold"} fontSize="20">
                                    Thanh toán
                                </Text>
                            </Box>
                        </Pressable>
                    </HStack>
                </Box>
                <Box>
                    <Box style={styles.container}  >
                        <Image
                            width={"100px"}
                            height={"100%"}
                            source={{
                                uri: "https://img.baoninhbinh.org.vn//DATA/ARTICLES/2021/5/17/cuoc-dua-lot-vao-top-100-anh-dep-di-san-van-hoa-va-thien-7edf3.jpg"
                            }}
                            resizeMode='cover'
                            alt="Ảnh sản phẩm" />
                        <Box w={"68%"} ml={8}>
                            <Heading numberOfLines={1} fontWeight={500} style={{ fontSize: 14 }} ml="-1">
                                Túi Xách Nhỏ
                            </Heading>
                            <HStack mt={1} flex={1} justifyContent={"space-between"} space={2}>
                                <Box display={"flex"} flexDirection={"row"}>
                                    <Text style={{ color: "red" }} fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                                        674,000₫
                                    </Text>
                                    <Text fontSize="xs" marginLeft={"10px"} style={{ color: "black", textDecorationLine: "line-through" }} fontWeight="500" ml="-0.5" mt="-1">
                                        749,000₫
                                    </Text>
                                </Box>
                                <Text marginRight={8} style={{ color: "red" }} fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                                    x1
                                </Text>
                            </HStack>
                        </Box>
                    </Box>
                    <Box style={styles.container}  >
                        <Image
                            width={"100px"}
                            height={"100%"}
                            source={{
                                uri: "https://img.baoninhbinh.org.vn//DATA/ARTICLES/2021/5/17/cuoc-dua-lot-vao-top-100-anh-dep-di-san-van-hoa-va-thien-7edf3.jpg"
                            }}
                            resizeMode='cover'
                            alt="Ảnh sản phẩm" />
                        <Box w={"68%"} ml={8}>
                            <Heading numberOfLines={1} fontWeight={500} style={{ fontSize: 14 }} ml="-1">
                                Túi Xách Nhỏ
                            </Heading>
                            <HStack mt={1} flex={1} justifyContent={"space-between"} space={2}>
                                <Box display={"flex"} flexDirection={"row"}>
                                    <Text style={{ color: "red" }} fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                                        674,000₫
                                    </Text>
                                    <Text fontSize="xs" marginLeft={"10px"} style={{ color: "black", textDecorationLine: "line-through" }} fontWeight="500" ml="-0.5" mt="-1">
                                        749,000₫
                                    </Text>
                                </Box>
                                <Text marginRight={8} style={{ color: "red" }} fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                                    x1
                                </Text>
                            </HStack>
                        </Box>
                    </Box>
                </Box>
                {/* Phuong thuc thanh toan va van chuyen */}
                <Box style={{ padding: 10, borderBottomColor: "#dfe0e1", borderBottomWidth: 1 }}>
                    <Text color="#06b6d4">
                        Phương thức vận chuyển(Vận chuyển nhanh)
                    </Text>
                </Box>
                <Box style={{ padding: 10, borderBottomColor: "#dfe0e1", borderBottomWidth: 1 }}>
                    <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
                        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                            <FontAwesome name="dollar" size={16} color="red" />
                            <Text marginLeft={2}>Phương thức Thanh toán</Text>
                        </Box>
                        <Popover onClose={() => setIsOpen(!isOpen)} isOpen={isOpen} trigger={triggerProps => {
                            return (
                                <Pressable {...triggerProps} onPress={() => setIsOpen(true)} display={"flex"} alignItems={"center"} flexDirection={"row"} marginRight={4} w={"120px"}>
                                    <Text>{methodPayment}</Text>
                                    <SimpleLineIcons marginLeft={2} name="arrow-down" size={16} color="black" />
                                </Pressable>
                            )
                        }}>
                            <Popover.Content w="56">
                                <Popover.Body p={0}>
                                    <Pressable onPress={() => {
                                        setMethodPayment("Thanh toán khi nhận hàng")
                                        setIsOpen(!isOpen)
                                    }} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} style={{ borderBottomColor: "#dfe0e1", borderBottomWidth: 1, padding: 10 }}>
                                        <Text>Thanh toán khi nhận hàng</Text>
                                        <FontAwesome name="money" size={24} color="black" />
                                    </Pressable>
                                    <Pressable onPress={() => {
                                        setMethodPayment("Chuyển khoản")
                                        setIsOpen(!isOpen)
                                    }} display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} style={{ padding: 10 }}>
                                        <Text>Chuyển khoản</Text>
                                        <MaterialIcons name="payment" size={24} color="black" />
                                    </Pressable>
                                </Popover.Body>
                            </Popover.Content>
                        </Popover>
                    </Box>
                </Box>
                {/* Phuong thuc thanh toan va van chuyen */}
                {/* Chi tiết thanh toán */}
                <Box style={{ padding: 10, borderBottomColor: "#dfe0e1", borderBottomWidth: 1 }}>
                    <Text fontWeight={"bold"} mb={4}>CHI TIẾT THANH TOÁN</Text>
                    <Box mb={4} flex={1} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Text>Tiền hàng</Text>
                        <Text fontWeight={"bold"}>639.000đ</Text>
                    </Box>
                    <Box mb={4} flex={1} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Text>Phí giao hàng</Text>
                        <Text fontWeight={"bold"}>639.000đ</Text>
                    </Box>
                    <Box mb={4} flex={1} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Text>Mã giảm giá</Text>
                        <Text fontWeight={"bold"}>639.000đ</Text>
                    </Box>
                    <Box flex={1} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Text fontWeight={"bold"}>Tổng thanh toán</Text>
                        <Text color="red.500" fontWeight={"bold"}>639.000đ</Text>
                    </Box>
                </Box>
                {/* Chi tiết thanh toán */}
                {/* Liên hệ */}
                <Box style={{ padding: 0 }}>
                    <Box flex={1} paddingY={2} display={"flex"} justifyContent={"center"} backgroundColor={"#d4d4d8"} paddingLeft={4} color={"#9ca3af"} fontWeight={"bold"}>
                        <Text fontWeight={"bold"}>Liên hệ</Text>
                    </Box>
                    <FormControl p={0}>
                        <Input
                            type="text"
                            style={{ fontSize: 16, paddingLeft: 12, height: 46 }}
                            variant="underlined"
                            placeholder="Tên"
                            focusOutlineColor="none"

                        />
                        <Input
                            type="text"
                            style={{ fontSize: 16, paddingLeft: 12, height: 46 }}
                            variant="underlined"
                            placeholder="Số điện thoại"
                            focusOutlineColor="none"
                        />
                    </FormControl>
                </Box>
                <Box style={{ padding: 0 }}>
                    <Box flex={1} paddingY={2} display={"flex"} justifyContent={"center"} backgroundColor={"#d4d4d8"} paddingLeft={4} color={"#9ca3af"}>
                        <Text fontWeight={"bold"}>Địa chỉ</Text>
                    </Box>
                    <FormControl p={0}>
                        <Select onValueChange={(value) => handleCityChange(value)} variant="underlined" style={{ paddingLeft: 12, height: 46 }} fontSize={"16px"} placeholder="Thành phố">
                            {loadingCities ? (
                                <Select.Item label="Loading..." value="" />
                            ) : (
                                cities.map((city: any) => (
                                    <Select.Item key={city.code} label={city.name} value={city.name} />
                                ))
                            )}
                        </Select>

                    </FormControl>
                    <FormControl p={0}>
                        <Select variant="underlined" style={{ paddingLeft: 12, height: 46 }} fontSize={"16px"} placeholder="Quận/Huyện">
                            {districtData ? (
                                districtData.districts.map((city: any) => (
                                    <Select.Item key={city.code} label={city.name} value={city.name} />
                                ))
                            ) : (
                                <Select.Item label="Loading..." value="" />
                            )}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Input
                            type="text"
                            style={{ fontSize: 16, paddingLeft: 12, height: 46 }}
                            variant="underlined"
                            placeholder="Tên đường, Tòa nhà, Số nhà"
                            focusOutlineColor="none"
                        />
                    </FormControl>
                </Box>
                {/* Liên hệ */}

                <Box padding={4}><CButton title="Đặt hàng" /></Box>
            </ScrollView >
        </Box >
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: "flex",
        flexDirection: "row",
        borderBottomColor: "#dfe0e1",
        borderBottomWidth: 1,
        height: 72,
        width: "100%"
    }
})