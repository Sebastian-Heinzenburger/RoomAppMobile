import { useState } from "react";
import { View, StyleSheet, Text, TextInput, GestureResponderEvent } from "react-native";
import { colors } from "./Colors";
import { LocationPin } from "./LocationPin";
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
                {props.name}
            </Text>
            <View style={styles.right}>
                <Share message={"Komm doch mal im Raum " + props.name + " vorbei! 😃"} />
                <LocationPin location={props.name} />
            </View>
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: colors.white,
    },
    roomText: {
        fontSize: 23,
        width: "74%",
        textAlign: "center",
        textAlignVertical: "center",
        color: colors.white,
        height: "100%",
        lineHeight: 27,
    },
    right: {
        display: "flex",
        flexDirection: "row",
        width: "25%",
        justifyContent: "space-evenly",
    }
})