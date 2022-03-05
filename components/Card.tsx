import { useState } from "react";
import { View, StyleSheet, Image, Text, TextInput, GestureResponderEvent, ImageSourcePropType } from "react-native";
import { GestureDetector, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { colors } from "./Colors";

export const Card = (props: { name?: string, description?: string, imageSource?: ImageSourcePropType, style?: any, onPress?: () => void, children?: any }) => {
    const [value, setValue] = useState("");

    return (
            <View style={styles.cardView}>
                {
                    (() => {
                        if (props.imageSource)
                            return <Image source={props.imageSource} style={{ aspectRatio: 1, height: 100 }} />
                    })()
                }
                <Text>
                    {props.name}
                </Text>
                <Text>
                    {props.description}
                </Text>
                {props.children}
            </View>
    );
}

const styles = StyleSheet.create({
    cardView: {
        width: "70%",
        backgroundColor: colors.accent,
        marginVertical: 10,
    }
})