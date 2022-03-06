import { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, GestureResponderEvent, ImageSourcePropType, TouchableWithoutFeedbackBase, TouchableWithoutFeedback } from "react-native";
import { colors } from "./Colors";

const imgSize = 180;

export const Card = (props: { name?: string, description?: string, imageSource?: ImageSourcePropType, style?: any, onPress?: () => void, children?: any }) => {
    const [value, setValue] = useState("");

    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={styles.cardView}>
                {
                    (() => {
                        if (props.imageSource)
                            return (<View style={styles.imageView}>
                                <Image source={props.imageSource} style={{ aspectRatio: 1, height: "85%" }} /> 
                                </View>
                            );

                    })()
                }
                <Text style={styles.cardHeader}>
                    {props.name}
                </Text>
                <Text style={styles.description}>
                    {props.description}
                    {props.children}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    cardView: {
        width: "82%",
        height: imgSize+30,
        backgroundColor: colors.card,
        marginVertical: 10,
        shadowColor: colors.shadow,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 4,
        borderRadius: 5,
        padding: Math.min(imgSize*0.1, 10),
    },
    imageView: {
        position: "absolute",
        width: "105%",
        height: "100%",
        alignSelf: "flex-start",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        //marginVertical: imgSize*0.1,
        marginVertical: 10,
        zIndex: 3,
    },
    cardHeader: {
        fontSize: 18,
        borderBottomColor: colors.accent,
        borderBottomWidth: 2,
        zIndex: 2,
    },
    description: {
        width: "60%",
        marginTop: 5,
    }
})