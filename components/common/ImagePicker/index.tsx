import { useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Avatar, HStack, Center, NativeBaseProvider, Text, Box, Button } from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';
export const CAvatar = ({ uri }: { uri: string | null }) => {
    return (
        <HStack style={{ width: "100%", marginTop: 12 }} justifyContent="flex-start" space={2}>
            <Button style={{ backgroundColor: "transparent", paddingLeft: 0 }}>
                <Avatar size="md" source={require("../../../assets/images/avatar_default.jpg")} />
                <AntDesign style={{ position: "absolute", bottom: -2, right: 13 }} name="pluscircle" size={20} color="black" />
            </Button>
        </HStack>
    )
};
function CImagePicker() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <CAvatar uri={image} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
});
export default CImagePicker
