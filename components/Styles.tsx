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
    subheader: {
        marginTop: 6,
        fontSize: 18,
        borderBottomColor: colors.accent,
        borderBottomWidth: 3,
        marginBottom: 10,
    },
    buttonView: {
        width: "100%",
        alignItems: "center",
        bottom: "5%",
        position: "absolute"
    },
});