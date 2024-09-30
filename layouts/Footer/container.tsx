import { Box } from "native-base"
import { StyleSheet } from "react-native"
import { Contact } from "./Contact"
import { ShowRow } from "./ShowRoom"

export const Footer = () => {
    return (
        <Box>
            <Contact />
            <ShowRow />
        </Box>
    )
}