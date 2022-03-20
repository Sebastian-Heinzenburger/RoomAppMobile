import { useState } from "react";
import { View, StyleSheet, Text, TextInput, GestureResponderEvent } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "./Colors";

export const FloatingButton = (props: { greyed?: boolean, type?: string, name: string, style?: any, onPress: (event: GestureResponderEvent) => void }) => {

    return (
        <View style={[styles.buttonView, props.style, props.greyed ? styles.disabled : null ]}>
            <Text onPress={props.onPress} style={[styles.button]}>
            <Icon type={props.type ? props.type : "material"} size={25} name={props.name} tvParallaxProperties={true} color={colors.white} />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.accent,
        borderRadius: 20,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18,
        padding: 10,
        margin: 2,
        textAlign:"center",
        color: colors.white,
    },
    buttonView: {
        position: "absolute",
        bottom: 30,
        right: 30,
    },
    disabled: {
        opacity: 0.7,
    }
});