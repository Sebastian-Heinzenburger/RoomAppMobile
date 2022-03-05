import { View, Text, Dimensions, StyleSheet, Image } from "react-native"
import { Icon } from "react-native-elements";

import { Button } from "../components/Button";
import { ClearTextInput } from "../components/ClearTextInput";
import { colors } from "../components/Colors";

export const Welcome = ({ navigation }: any) => {

    function open(screen: string) {
        navigation.replace(screen);
    }

    return (
        <View style={{ justifyContent: "space-evenly", alignItems: "center", height: Dimensions.get("window").height, backgroundColor: colors.background }}>
            <Image source={require("../assets/icon.png")} style={{height: "35%", aspectRatio: 1}}></Image>
            <Text style={styles.welcome}>Willkommen</Text>
            <Text> zum LGÖ RoomFinder</Text>
            <Button onPress={() => { open("Login") }}>
                Login
            </Button>
            <Button onPress={() => { open("Register") }}>
                Register
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 34,
    },
});