import { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native"

import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Share } from "../components/Share";
import { ClearTextInput } from "../components/ClearTextInput";
import { colors } from "../components/Colors";
import { isLoggedIn, signOut } from "../components/Credentials";
import { Bar } from "../components/Bar";
import { prestyled } from "../components/Styles";
import { RoomElement } from "../components/RoomElement";

export const Rooms = ({ navigation }: any) => {

    let rooms: string[] = [];
    for (let i = 0; i < 20; i++) {
        rooms.push(String(Math.round(Math.random() * 400 )).padStart(3, "0"));
        if (Math.random() < 0.2)
            rooms.push(Math.round((Math.random()*10)%5 + 1)+"/"+Math.round((Math.random()*10)%2 +1));
    }
    rooms.sort();

    return (
        <View style={{ alignItems: "center", height: Dimensions.get("window").height, backgroundColor: colors.background }}>
            <Bar navigation={navigation} />
            <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems: "center"}}>
                <Text>i love soffel</Text>
                {rooms.map((e) => { return <RoomElement key={Math.random()} name={e} /> })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        width: "100%",
    }
})