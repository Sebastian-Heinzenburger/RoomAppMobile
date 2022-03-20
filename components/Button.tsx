import { useState } from "react";
import { View, StyleSheet, Text, TextInput, GestureResponderEvent } from "react-native";
import { colors } from "./Colors";

export const Button = (props: { name?: string, greyed?: boolean, style?: any, onPress: (event: GestureResponderEvent) => void, children?: any }) => {
    const [value, setValue] = useState("");

    return (
        <View style={[styles.buttonView, props.style, props.greyed ? styles.disabled : null ]}>
            <Text onPress={props.onPress} style={[styles.button, props.greyed ? null : styles.shaddow]}>
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
        color: colors.white,
    },
    shaddow: {
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4.65,

        elevation: 4,
    },
    buttonView: {
        width: "75%",
        // marginVertical: 50,
    },
    disabled: {
        opacity: 0.7,
    }
});