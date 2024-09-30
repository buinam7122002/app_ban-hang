import React, { useState } from "react";
import CImagePicker from "@/components/common/ImagePicker";
import { Box, Button, FormControl, Heading, HStack, Input, Pressable, ScrollView, Text } from "native-base";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { useNavigation } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
type RootStackParamList = {
    Home: undefined
};

type FooterAppBarNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export const Accounts = () => {
    const navigation = useNavigation<FooterAppBarNavigationProp>();

    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        phoneNumber: "",
        oldPassword: "",
        newPassword: "",
        avatar: null,
    });

    const handleChange = (name: string, value: string) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('address', form.address);
        formData.append('phoneNumber', form.phoneNumber);
        formData.append('oldPassword', form.oldPassword);
        formData.append('newPassword', form.newPassword);
        // if (formData.avatar) {
        //     formData.append('avatar', {
        //         uri: formData.avatar.uri,
        //         type: formData.avatar.type,
        //         name: formData.avatar.fileName,
        //     });
        // }
        console.log(formData)
        // try {
        //     const response = await fetch('YOUR_SERVER_ENDPOINT', {
        //         method: 'POST',
        //         body: formData,
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     });

        //     const result = await response.json();
        //     console.log('Form submitted successfully:', result);
        // } catch (error) {
        //     console.error('Error submitting form:', error);
        // }
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
                                    Thông tin tài khoản
                                </Text>
                            </Box>
                        </Pressable>
                    </HStack>
                </Box>
                <Box style={styles.container}>
                    <Heading style={{ fontSize: 16, marginBottom: 24 }}>
                        THÔNG TIN TÀI KHOẢN
                    </Heading>
                    <Box style={{ marginTop: 12 }}>
                        <FormControl mb="5">
                            <FormControl.Label mb={4}>Tên</FormControl.Label>
                            <Input
                                variant="underlined"
                                placeholder="Tên"
                                value={form.name}
                                onChangeText={(value) => handleChange('name', value)}
                            />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label mb={4}>Email</FormControl.Label>
                            <Input
                                variant="underlined"
                                placeholder="Email"
                                value={form.email}
                                onChangeText={(value) => handleChange('email', value)}
                            />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label mb={4}>Địa chỉ</FormControl.Label>
                            <Input
                                variant="underlined"
                                placeholder="Địa chỉ"
                                value={form.address}
                                onChangeText={(value) => handleChange('address', value)}
                            />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label mb={4}>Số điện thoại</FormControl.Label>
                            <Input
                                variant="underlined"
                                placeholder="Số điện thoại"
                                value={form.phoneNumber}
                                onChangeText={(value) => handleChange('phoneNumber', value)}
                            />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label mb={4}>Mật khẩu cũ</FormControl.Label>
                            <Input
                                type="password"
                                variant="underlined"
                                placeholder="Mật khẩu cũ"
                                value={form.oldPassword}
                                onChangeText={(value) => handleChange('oldPassword', value)}
                            />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label mb={4}>Mật khẩu mới</FormControl.Label>
                            <Input
                                type="password"
                                variant="underlined"
                                placeholder="Mật khẩu mới"
                                value={form.newPassword}
                                onChangeText={(value) => handleChange('newPassword', value)}
                            />
                        </FormControl>
                        <FormControl mb="5">
                            <FormControl.Label mb={1}>Ảnh đại diện</FormControl.Label>
                            <CImagePicker
                            />
                        </FormControl>
                        <Box style={styles.buttonContainer}>
                            <Button style={styles.button} onPress={handleSubmit}>
                                Cập Nhật Thông Tin
                            </Button>
                            <Button
                                style={[styles.button, { width: "30%", marginLeft: 24 }]}
                                onPress={() => console.log("Form reset")}
                            >
                                Hủy
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </ScrollView>
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 32,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: "row",
    },
    button: {
        backgroundColor: "black",
        color: "white",
        fontSize: 18,
        width: "48%",
    },
});