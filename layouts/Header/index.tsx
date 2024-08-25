import { ImageBackground, StyleSheet } from "react-native";
const Header = () => {
    return (
        <ImageBackground
            source={{ uri: "https://file.hstatic.net/1000003969/file/mb_700x70_2765802b3ec2481e95eeb0aae1a45f43.jpg" }}
            style={styles.container}
        >
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 43,
    },
});

export default Header;
