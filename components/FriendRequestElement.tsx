import { useState } from "react";
import { View, StyleSheet, Text, TextInput, GestureResponderEvent } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "./Colors";
import { LocationPin } from "./LocationPin";
import { setFriendRequest } from "./Requests";
import { getColorForRoom } from "./RoomElement";
import { Share } from "./Share";


export const FriendRequestElement = (props: { id: any, firstname: string, lastname: string, location?: any, style?: any, onpress: () => {} }) => {

    const [sent, setSent] = useState(false);
    
    if (sent) return <></>;

    return (
        <View key={props.id} style={[styles.roomElementView, props.style]}>
            <Text style={[styles.roomText]}>
                {props.firstname} {props.lastname}
            </Text>
            {/*
                (props.location && props.location != "-") &&
                <View style={styles.right}>
                    <View style={[styles.roomView, {backgroundColor: getColorForRoom(props.location)}]}>
                    <Icon type="material" name="location-pin" tvParallaxProperties={true} color={colors.white} />
                        <Text style={styles.locationText}>
                            {props.location}
                        </Text>
                    </View>
                </View>
    */}
            <View style={styles.accept}><Icon onPress={() => { setFriendRequest(props.id, "accept"); setSent(true); props.onpress();} } type="font-awesome-5" name="check-circle" size={20} color={colors.white} tvParallaxProperties={undefined}/></View>
            <View style={styles.deny}><Icon onPress={() => { setFriendRequest(props.id, "deny"); setSent(true); props.onpress() } } type="font-awesome-5" name="times-circle" size={20} color={colors.white} tvParallaxProperties={undefined}/></View>
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
        alignItems: "center",
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
    },
    accept: {
        backgroundColor: colors.green,
        width: "13%",
        justifyContent: "center",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        height: "120%",
    },
    deny: {
        backgroundColor: colors.red,
        width: "13%",
        justifyContent: "center",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        height: "120%",
    }
})