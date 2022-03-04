import { View, Text, Dimensions } from "react-native"

import { ClearTextInput } from "../components/ClearTextInput";

export const Login = () => {
    return (
        <View style={{ justifyContent: "space-evenly", alignItems: "center", height: 400}}>
            <ClearTextInput name="Vorname" />
            <ClearTextInput name="Nachname" />
            <ClearTextInput name="Passwort" secureTextEntry={true} />
        </View>
    );
}