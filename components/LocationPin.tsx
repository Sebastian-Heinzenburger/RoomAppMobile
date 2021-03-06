import { useState } from "react";
import { View, Share as s, StyleSheet, Text, TextInput, GestureResponderEvent, ActivityIndicator } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "./Colors";
import { setLocationReq } from "./Requests";


export const LocationPin = (props: { location: string, style?: any, onPress?: (event: GestureResponderEvent) => void, children?: any }) => {
    const [loading, setLoading] = useState(false);

    async function setLocation() {
        setLoading(true);
        setLocationReq(props.location, () => {setLoading(false);});
    }

    return (
        <View style={[styles.shareView, props.style]}>
            <Text onPress={setLocation}>
                {
                    loading ?
                        <ActivityIndicator color={colors.white} size={30} /> :
                        <Icon type="material" name="location-pin" tvParallaxProperties={true} color={colors.white} />
                }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    shareView: {
        height: 25,
        width: 25,
    },
})