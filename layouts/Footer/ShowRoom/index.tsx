import { Box, Text } from "native-base"
import { StyleSheet, View } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
export const ShowRow = () => {
    return (
        <Box>
            <Text style={{ fontSize: 13, marginBottom: 12 }}>HỆ THỐNG SHOWROOM</Text>
            <Box style={{
                marginTop: 12,
            }}>
                <Text style={{
                    color: "red", fontWeight: "bold", borderBottomWidth: 2,
                    borderBottomColor: "red",
                    paddingBottom: 12,
                }}>THẾ GIỚI ĐỒ THỜI TRANG 01</Text>
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: 12 }}>
                    <FontAwesome name="map-marker" size={16} color="black" />
                    <Text style={{ marginLeft: 12, fontSize: 16 }}>Địa chỉ:122 Trần Hưng Đạo,TP.Thái Bình</Text>
                </View>
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: 12 }}>
                    <Feather name="phone-call" size={16} color="black" />
                    <Text style={{ marginLeft: 12, fontSize: 16, color: "blue" }}>Hotline: 034 444 55 66</Text>
                </View>
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: 12 }}>
                    <Entypo name="old-phone" size={16} color="black" />
                    <Text style={{ marginLeft: 12, fontSize: 16, color: "green" }}>Điện thoại: (028) 625.66.777</Text>
                </View>
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: 12 }}>
                    <Fontisto name="email" size={16} color="black" />
                    <Text style={{ marginLeft: 12, fontSize: 16, color: "#164e63" }}>buinam7122002@gmail.com</Text>
                </View>
            </Box>

            <Box style={{
                marginTop: 12,
            }}>
                <Text style={{
                    color: "red", fontWeight: "bold", borderBottomWidth: 2,
                    borderBottomColor: "red",
                    paddingBottom: 12,
                }}>THẾ GIỚI ĐỒ THỜI TRANG 02</Text>
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: 12 }}>
                    <FontAwesome name="map-marker" size={16} color="black" />
                    <Text style={{ marginLeft: 12, fontSize: 16 }}>Địa chỉ:236 Quang Trung,TP.Hà Nội</Text>
                </View>
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: 12 }}>
                    <Feather name="phone-call" size={16} color="black" />
                    <Text style={{ marginLeft: 12, fontSize: 16, color: "blue" }}>Hotline: 1800 1160</Text>
                </View>
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: 12 }}>
                    <Entypo name="old-phone" size={16} color="black" />
                    <Text style={{ marginLeft: 12, fontSize: 16, color: "green" }}>Điện thoại: (028) 625.66.888</Text>
                </View>
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: 12 }}>
                    <Fontisto name="email" size={16} color="black" />
                    <Text style={{ marginLeft: 12, fontSize: 16, color: "#164e63" }}>buinam7122002@gmail.com</Text>
                </View>
            </Box>

            <Box style={{
                marginTop: 12,
            }}>
                <Text style={{
                    color: "red", fontWeight: "bold", borderBottomWidth: 2,
                    borderBottomColor: "red",
                    paddingBottom: 12,
                }}>THẾ GIỚI ĐỒ THỜI TRANG 03</Text>
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: 12 }}>
                    <FontAwesome name="map-marker" size={16} color="black" />
                    <Text style={{ marginLeft: 12, fontSize: 16 }}>Địa chỉ:162Q-162R Trường Chinh,TP.Hồ Chí Minh</Text>
                </View>
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: 12 }}>
                    <Feather name="phone-call" size={16} color="black" />
                    <Text style={{ marginLeft: 12, fontSize: 16, color: "blue" }}>Hotline: 1800 1160</Text>
                </View>
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: 12 }}>
                    <Entypo name="old-phone" size={16} color="black" />
                    <Text style={{ marginLeft: 12, fontSize: 16, color: "green" }}>Điện thoại: (028) 625.66.999</Text>
                </View>
                <View style={{ flexDirection: "row", flex: 1, alignItems: "center", marginTop: 12 }}>
                    <Fontisto name="email" size={16} color="black" />
                    <Text style={{ marginLeft: 12, fontSize: 16, color: "#164e63" }}>buinam7122002@gmail.com</Text>
                </View>
            </Box>
        </Box>
    )
}
const styles = StyleSheet.create({
    container: {

    }
})