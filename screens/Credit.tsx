import { View, Text, Dimensions, StyleSheet, Image } from "react-native"
import { Bar } from "../components/Bar";

import { Button } from "../components/Button";
import { colors } from "../components/Colors";

export const Credits = ({ navigation }: any) => {

    return (
        <View style={{ alignItems: "center", height: Dimensions.get("window").height, backgroundColor: colors.background }}>
            <Bar navigation={navigation} />
            <Text> Diese App wurde von Sebastian mit viel Liebe in einem einzigen langen Code-Sprint geschaffen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
})