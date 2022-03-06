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

export const Rooms = ({ navigation }: any) => {
    const [rooms, setRooms] = useState([]);
    
    return (
        <View style={{ alignItems: "center", height: Dimensions.get("window").height}}>
            <Bar navigation={navigation} />
            <RoomSearch onSearch={setRooms}/>
            <ScrollView style={styles.scrollView} contentContainerStyle={{ alignItems: "center" }}>
                {rooms.map((e) => { return <RoomElement key={e} name={e} /> })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        width: "100%",
        paddingVertical: 10,
    }
})