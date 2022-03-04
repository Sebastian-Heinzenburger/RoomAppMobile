import { useState } from "react";
import { View, StyleSheet, Text, TextInput, GestureResponderEvent } from "react-native";
import { colors } from "./Colors";

export const Button = (props: { name?: string, enabled?: boolean, style?: any, onPress: (event: GestureResponderEvent) => void, children?: any }) => {
    const [value, setValue] = useState("");

    return (
        <View style={[styles.buttonView, props.style]}>
            <Text onPress={props.onPress} style={[styles.button]}>
            {props.children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.accent,
        borderRadius: 8,
        fontSize: 18,
        padding: 10,
        margin: 2,
        textAlign:"center",
        color: colors.white
    },
    buttonView: {
        height: "auto",
        width: "70%",
    }
});