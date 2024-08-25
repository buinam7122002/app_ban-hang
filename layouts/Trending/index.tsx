import Product from "@/components/common/Product"
import { Box, Container, Heading } from "native-base"
import { StyleSheet, Text } from "react-native"

export const Trending = () => {
    return (
        <Box>
            <Heading style={{ fontSize: 20, textAlign: "center" }}>Top Sản Phẩm Mới Nhất</Heading>
            <Text style={{ textAlign: "center", marginTop: 8, fontSize: 14 }}>(126 sản phẩm)</Text>
            <Container style={styles.container}>
                <Product />
            </Container>
        </Box>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        maxWidth: "100%"
    }
})