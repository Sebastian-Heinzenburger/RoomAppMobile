import { View, StyleSheet, Text, TextInput, KeyboardTypeOptions } from "react-native";
import { colors } from "./Colors";
import { Dispatch, SetStateAction, useState } from "react";

export const ClearTextInput = (props: { name?: string, maxLenght?: number, type?: KeyboardTypeOptions, error?: boolean, valuePair: [string, Dispatch<SetStateAction<string>>], secureTextEntry?: boolean, style?: any }) => {

    return (
        <View style={[styles.textView, props.style]}>

            <View style={styles.textInputDescrView}>
                <Text style={[styles.textInputDescr, props.error ? { color: colors.redorange } : null]}>{props.name}</Text>
            </View>

            <TextInput style={[styles.textInput, props.error ? { borderColor: colors.redorange } : null]}
                value={props.valuePair[0]}
                onChangeText={props.valuePair[1]}
                maxLength={props.maxLenght}
                keyboardType={props.type}
                secureTextEntry={props.secureTextEntry} />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: colors.accent,
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 2,
        fontSize: 18,
        padding: 10,
        backgroundColor: colors.white,
    },
    textView: {
        height: "auto",
        width: "75%",
    },
    textInputDescr: {
        fontSize: 12,
        paddingLeft: 5,
        marginBottom: 2,
        paddingTop: 5,
        // marginTop: 50,
        color: colors.accent,
    },
    textInputDescrView: {
        display: "flex",
        flexDirection: "row",
    },
    textInputError: {
        fontSize: 12,
        paddingLeft: 25,
        marginBottom: 2,
        paddingTop: 5,
        // marginTop: 50,
        color: colors.redorange,
    }
});