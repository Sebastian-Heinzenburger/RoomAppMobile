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

export const Home = ({ navigation }: any) => {
    const [loggedIn, setLoggedIn] = useState(false);

    function open(screen: string) {
        navigation.replace(screen);
    }


    useEffect(() => {
        //this is fucking javascript in a nutshell. because we cant call an asyncronous function in this context,
        //we have to declare and directly invoke an an anonymous asyncronous function that invokes the original function 
        (async () => {
            const isloggedin = await isLoggedIn();
            isloggedin ? setLoggedIn(true) : navigation.replace("Welcome")
        })(); //this cost me my sanity

    }, [])

    if (!loggedIn)
        return (<></>);

    return (
        <View style={{ alignItems: "center", height: Dimensions.get("window").height}}>
            <Bar navigation={navigation} />
            <ScrollView style={styles.cardView } contentContainerStyle={{ alignItems: "center" }}>
                <Card
                    onPress={() => { navigation.push("Rooms"); }}
                    imageSource={require("../assets/humans/5.png")}
                    name="Finde Räume"
                    description="Zu Jeder Stunde stehen in der Schule viele Räume leer. Finde und nutze sie!"
                />
                <Card
                    onPress={() => { navigation.push("Friends"); }}
                    imageSource={require("../assets/humans/8.png")}
                    name="Finde Freunde"
                    description={"Du hast keine Ahnung wo deine Freunde gerade sind?\nDu bist komplett allein?\nDu willst nicht alle Räume in der Schule durchsuchen müssen?"}
                />
                <Card
                    onPress={() => { navigation.push("Home"); }}
                    imageSource={require("../assets/humans/7.png")}
                    name="Finde Lerngruppen"
                    description="Du brauchst Hilfe bei deinem Lieblingsfach?"
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 34,
    },
    cardView: {
        flex: 1,
        width: "100%",
        paddingTop: 10,
        //marginTop: 20,
    }
});