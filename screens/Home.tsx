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
        <View style={{ justifyContent: "space-evenly", alignItems: "center", height: Dimensions.get("window").height, backgroundColor: colors.background }}>
            <Bar navigation={navigation} />

                <Text> TOKEN: {
                    //@ts-ignore
                    global.token
                } </Text>
                <ScrollView style={styles.cardView} contentContainerStyle={{ alignItems: "center" }}>
                    <Card
                        onPress={() => { navigation.push("Home"); }}
                        imageSource={require("../assets/humans/1.png")}
                        name="Finde Räume"
                        description="Zu Jeder Stunde stehen in der Schule viele Räume leer. Finde und nutze sie!"
                    />
                    <Card
                        onPress={() => { navigation.push("Home"); }}
                        imageSource={require("../assets/humans/1.png")}
                        name="Finde Freunde"
                        description="Du hast keine Ahnung wo deine Freunde gerade sind? Du bist komplett allein? Du willst nicht alle Räume in der Schule durchsuchen müssen?"
                    />
                    <Card
                        onPress={() => { navigation.push("Home"); }}
                        imageSource={require("../assets/humans/1.png")}
                        name="Finde Lerngruppen"
                        description="Du brauchst Hilfe bei deinem Lieblingsfach?"
                    />
                </ScrollView>


                <Button onPress={() => { signOut(); navigation.replace("Welcome"); }}>
                    sign out
                </Button>

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
        backgroundColor: colors.green,
    }
});