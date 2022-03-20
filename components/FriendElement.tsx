import { useState } from "react";
import { View, StyleSheet, Text, TextInput, GestureResponderEvent } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "./Colors";
import { LocationPin } from "./LocationPin";
import { getColorForRoom } from "./RoomElement";
import { Share } from "./Share";


export const FriendElement = (props: { id: any, firstname: string, lastname: string, location?: any, style?: any }) => {


    return (
        <View style={[styles.roomElementView, props.style]}>
            <Text style={[styles.roomText]}>
                {props.firstname} {props.lastname}
            </Text>
            {
                (props.location && props.location != "-") &&
                <View style={styles.right}>
                    <View style={[styles.roomView, {backgroundColor: getColorForRoom(props.location)}]}>
                    <Icon type="material" name="location-pin" tvParallaxProperties={true} color={colors.white} />
                        <Text style={styles.locationText}>
                            {props.location}
                        </Text>
                    </View>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    roomElementView: {
        width: "78%",
        height: 50,
        borderRadius: 8,
        fontSize: 12,
        padding: 10,
        margin: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.accent
    },
    roomText: {
        fontSize: 16,
        width: "74%",
        textAlignVertical: "center",
        color: colors.white,
        height: "100%",
        lineHeight: 27,
    },
    roomView: {
        backgroundColor: colors.green,
        borderRadius: 8,
        padding: 2,
        width: "100%",
        height: "100%",
        flexDirection: "row"
    },
    right: {
        display: "flex",
        flexDirection: "row",
        width: "25%",
        height: "100%",
        justifyContent: "space-evenly",
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