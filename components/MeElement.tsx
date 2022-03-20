import { useState } from "react";
import { View, StyleSheet, Text, TextInput, GestureResponderEvent } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "./Colors";
import { LocationPin } from "./LocationPin";
import { getColorForRoom } from "./RoomElement";
import { Share } from "./Share";


export const MeElement = (props: { me: { Vorname: string, Nachname: string, Standort: string, FCode: string }, style?: any }) => {


    return (
        <View style={[styles.myProfile, props.style]}>
            <Text style={[styles.text, styles.nameText]} selectable={true}>{props.me.Vorname} {props.me.Nachname}</Text>
            <Text style={[styles.text]} selectable={true} onPress={() => {}}>
                [ {props.me.FCode} ]
            </Text>
            {(props.me.Standort != "-") &&
                <View style={[styles.roomView, { backgroundColor: getColorForRoom(props.me.Standort) }]}>
                    <Icon type="material" name="location-pin" tvParallaxProperties={true} color={colors.white} />
                    <Text style={styles.locationText}>
                        {props.me.Standort}
                    </Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    myProfile: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "76%",
        marginBottom: 10,
        backgroundColor: colors.accent,
        borderRadius: 8,
        padding: 10,
    },
    text: {
        fontSize: 16,
        color: colors.white,
        textAlign: "left",
    },
    nameText: {
        //backgroundColor: colors.yellow,
        width: "43%",
    },
    roomView: {
        backgroundColor: colors.green,
        borderRadius: 8,
        padding: 2,
        width: 65,
        color: colors.white,
        flexDirection: "row",
        height: 32,
    },
    locationText: {
        fontSize: 16,
        textAlignVertical: "center",
        color: colors.white,
        height: "100%",
        lineHeight: 20,
        marginLeft: 2,
    }
})