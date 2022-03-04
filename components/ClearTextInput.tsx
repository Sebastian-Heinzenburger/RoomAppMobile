import { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export const ClearTextInput = (props: {name?: string, secureTextEntry?: boolean, style?: any}) => {
    const [value, setValue] = useState("");
    
    return (
        <View style={[styles.textView, props.style]}>
            <Text style={styles.textInputDescr}>{props.name}</Text>
            <TextInput style={[styles.textInput]} placeholder="" value={value} onChangeText={(t) => {setValue(t)}} secureTextEntry={props.secureTextEntry}/>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: "#277DA1",
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 2,
        fontSize: 18,
        padding: 10,
        backgroundColor: "#e6e5e5",
    },
    textView: {
        height: "auto",
        width: "70%",
        // backgroundColor: "green",
    },
    textInputDescr: {
        fontSize: 12,
        paddingLeft: 5,
        marginBottom: 2,
        paddingTop: 5,
        marginTop: 50,
        color: "#277DA1",
    }
});