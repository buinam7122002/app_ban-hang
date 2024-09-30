import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "expo-router";
import { Box, Text, View } from "native-base"
import { StyleSheet, TouchableOpacity } from "react-native"
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
type RootStackParamList = {
    Home: undefined;
};

type FooterAppBarNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export const Order = () => {
    const navigation = useNavigation<FooterAppBarNavigationProp>();

    return (
        <Box style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Ionicons name="arrow-back" size={24} color="#ee4d2d" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Đơn hàng</Text>
            </View>
        </Box>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    headerTitle: {
        marginLeft: 12,
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerAction: {
        color: '#ee4d2d',
    },
});
