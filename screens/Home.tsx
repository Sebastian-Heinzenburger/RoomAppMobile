import { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native"

import { Button } from "../components/Button";
import { ClearTextInput } from "../components/ClearTextInput";
import { colors } from "../components/Colors";
import { isLoggedIn, signOut } from "../components/Credentials";

export const Home = ({ navigation }: any) => {
    const [loggedIn, setLoggedIn] = useState(false);

    function open(screen: string) {
        navigation.replace(screen);
    }

    useEffect(() => {
        //this is fucking javascript in a nutshell. because we cant call an asyncronous function in this context,
        //we have to declare and directly invoke an an anonymous asyncronous function that invokes the original function 
        (async () => {
            const loggedin = await isLoggedIn();
            loggedin ? setLoggedIn(true) : navigation.replace("Welcome")
        })(); //this cost me my sanity

    }, [])

    if (!loggedIn)
        return (<></>);

    return (
        <View style={{ justifyContent: "space-evenly", alignItems: "center", height: Dimensions.get("window").height, backgroundColor: colors.background }}>
            <Text style={styles.welcome}>Home</Text>

            <Text> TOKEN: {
                //@ts-ignore
                global.token
            } </Text>

            <Text onPress={() => { navigation.replace("Welcome"); signOut() }}>
                sign out
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 34,
    },
});