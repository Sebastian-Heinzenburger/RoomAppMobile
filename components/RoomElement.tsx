import { useState } from "react";
import { View, StyleSheet, Text, TextInput, GestureResponderEvent } from "react-native";
import { colors } from "./Colors";
import { Share } from "./Share";


export const RoomElement = (props: { name: any, style?: any }) => {

    let roomColor = colors.greyblue;

    if (!isNaN(props.name)) {
        roomColor = colors.green;
        if (100 < props.name && props.name)
            roomColor = colors.red;
        if (200 < props.name && props.name)
            roomColor = colors.yellow;
        if (300 < props.name && props.name)
            roomColor = colors.accent;
    }


    return (
        <View style={[styles.roomElementView, props.style, { backgroundColor: roomColor }]}>
            <Text style={[styles.roomText]}>
                Raum: {props.name}
            </Text>
            <Share message={"Komm doch mal im Raum " + props.name + " vorbei! 😃"} />
        </View>
    );
}

const styles = StyleSheet.create({
    roomElementView: {
        width: "78%",
        height: 50,
        borderRadius: 8,
        fontSize: 18,
        padding: 10,
        margin: 2,
        textAlign: "center",
        color: colors.white,
    },
    roomText: {

    }
})