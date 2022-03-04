import { View, Text, Dimensions } from "react-native"

import { Button } from "../components/Button";

export const Welcome = ({navigation}: any) => {
    
    function open(screen:string) {
        navigation.replace(screen);
    }

    return (
        <View style={{ justifyContent: "space-evenly", alignItems: "center", height: 400 }}>
            <Text>Willkommen</Text>
            <Text> zum LGÖ RoomFinder</Text>
            <Button onPress={(e) => {open("Login")}}> a </Button>
        </View>
    );
}