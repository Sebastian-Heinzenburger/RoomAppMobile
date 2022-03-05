import { useState } from "react";
import { View, Text, Dimensions } from "react-native"
import { Button } from "../components/Button";

import { ClearTextInput } from "../components/ClearTextInput";

export const TOS = ({ navigation }: any) => {
    const [vorname, setVorname] = useState("");
    const [nachname, setNachname] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={{ alignItems: "center", height: Dimensions.get("window").height }}>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </View>
    );
}