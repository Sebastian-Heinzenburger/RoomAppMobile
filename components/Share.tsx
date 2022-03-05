import { useState } from "react";
import { View, Share as s, StyleSheet, Text, TextInput, GestureResponderEvent } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "./Colors";


export const Share = (props: { message: string, style?: any, onPress?: (event: GestureResponderEvent) => void, children?: any }) => {
    async function share() {
        await s.share({
            title: "App link",
            message: props.message,
        });
    }

    return (
        <View style={[styles.shareView, props.style]}>
            <Text onPress={share}>
                <Icon type="material" name="share" tvParallaxProperties={true} color={colors.white} />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    shareView: {
        height: 25,
        width: 25,
        overflow: "hidden",
    },
})