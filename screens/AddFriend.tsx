import { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView, ActivityIndicator } from "react-native"

import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Share } from "../components/Share";
import { ClearTextInput } from "../components/ClearTextInput";
import { colors } from "../components/Colors";
import { isLoggedIn, signOut } from "../components/Credentials";
import { Bar } from "../components/Bar";
import { prestyled } from "../components/Styles";
import { RoomElement } from "../components/RoomElement";
import { RoomSearch } from "../components/RoomSearch";
import { FriendElement } from "../components/FriendElement";
import { MeElement } from "../components/MeElement";
import { addFriend, getFriendRequests, getFriends } from "../components/Requests";
import { FloatingButton } from "../components/FloatingButton";
import { TextInput } from "react-native-gesture-handler";
import { FriendRequestElement } from "../components/FriendRequestElement";

export const AddFriends = ({ navigation }: any) => {
    const [fcode, setFcode] = useState("");
    const [fcodeError, setFcodeError]: [undefined|boolean, any] = useState(undefined);

    return (
        <View style={[{ alignItems: "center", height: Dimensions.get("window").height }]}>
            <Bar navigation={navigation} />
            <View style={styles.main}>
                <ClearTextInput name="Freundschafts Code" error={fcodeError} type="numeric" valuePair={[fcode, (v) => { setFcodeError(false); setFcode(v) }]} />
                <Button onPress={() => { addFriend(fcode, (succ: boolean) => {succ ? navigation.pop() : setFcodeError(true)}) }}> Freund hinzufügen </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        width: "100%",
        paddingVertical: 10,
    },
    headerView: {
        width: "78%",
    },
    main: {
        width: "100%",
        height: "50%",
        alignItems: "center",
        justifyContent: "space-evenly",
    }
})