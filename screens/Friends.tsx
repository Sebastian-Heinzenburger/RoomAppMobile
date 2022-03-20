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
import { getFriendRequests, getFriends, sleep } from "../components/Requests";
import { FloatingButton } from "../components/FloatingButton";
import { FriendRequestElement } from "../components/FriendRequestElement";

export const Friends = ({ navigation }: any) => {
    const [requests, setRequests] = useState([]);
    const [friends, setFriends]: [string[][], any] = useState([]);
    const [me, setMe] = useState({ NID: 0, Nachname: "loading", Vorname: "loading", Standort: "0", FCode: "11111" });

    async function fetchFriends() {
        let g = await getFriends();

        if (!g)
            return;

        ///@ts-ignore
        setFriends(g.friends);
        ///@ts-ignore
        setMe(g.me);
    }

    async function fetchRequests() {
        let g = await getFriendRequests();

        if (!g)
            return;

        ///@ts-ignore
        setRequests(g.requests);
    }

    useEffect(() => {

        (async () => {
            await fetchFriends();
            await fetchRequests();
        })()

        const interval = setInterval(async () => {
            await fetchFriends();
            await fetchRequests();
            if (!me)
                clearInterval(this)
        }, 60 * 1000);

        return () => { clearInterval(interval) }
    }, [])

    return (
        <View style={{ alignItems: "center", height: Dimensions.get("window").height }}>
            <Bar navigation={navigation} />
            <ScrollView style={styles.scrollView} contentContainerStyle={{ alignItems: "center" }}>
                <View style={styles.headerView}>
                        <Text style={prestyled.subheader}> Mein Profil </Text>
                </View>
                <MeElement me={me} />
                <View style={styles.headerView}>
                        <Text style={prestyled.subheader}> Freunde </Text>
                </View>
                {requests.map((r) => {
                    ///@ts-ignore
                    return <FriendRequestElement onpress={ async () => {await sleep(100); await fetchFriends()}} key={r.NID} id={r.NID} firstname={r.Vorname} lastname={r.Nachname} location={r.Standort} />
                })}
                {friends.map((e) => {
                    return <FriendElement key={e[0]} id={e[0]} firstname={e[1]} lastname={e[2]} location={e[3]} />
                })}
            </ScrollView>
            <FloatingButton name="user-plus" type="font-awesome-5" onPress={() => {navigation.push("AddFriends")}}/>
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
    }
})