import { StyleSheet } from "react-native";
import { colors } from "./Colors";

export const prestyled = StyleSheet.create({
    header: {
        marginTop: 12,
        fontSize: 23,
        borderBottomColor: colors.accent,
        borderBottomWidth: 4,
        marginBottom: 44,
    },
    buttonView: {
        width: "100%",
        alignItems: "center",
        bottom: "5%",
        position: "absolute"
    },
});