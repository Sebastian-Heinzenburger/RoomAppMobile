import { useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native"
import { Button } from "../components/Button";

import { ClearTextInput } from "../components/ClearTextInput";
import { storeToken } from "../components/Credentials";
import { prestyled } from "../components/Styles";

export const Login = ({ navigation }: any) => {
    const [vorname, setVorname] = useState("");
    const [errVorname, setErrVorname] = useState(false);

    const [nachname, setNachname] = useState("");
    const [errNachname, setErrNachname] = useState(false);

    const [password, setPassword] = useState("");
    const [errPassword, setErrPassword] = useState(false);

    function login() {
        let allright = true;
        if (!vorname) {
            allright = false;
            setErrVorname(true);
        }
        if (!nachname) {
            allright = false;
            setErrNachname(true);
        }
        if (!password) {
            allright = false;
            setErrPassword(true);
        }

        if (!allright)
            return;

        //@ts-ignore
        var url = `http://${global.address}/api/generateToken`;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let response = JSON.parse(xhr.response);
                console.log(response.status);

                switch (response.status) {
                    case "ok":
                        storeToken(response.token);
                        if (navigation.getState().index > 0)
                            navigation.popToTop();
                        navigation.replace("Home");
                        break;

                    default:
                        console.error("could not log in");
                        break;
                }


            }
        };

        xhr.send(`firstname=${vorname}&lastname=${nachname}&password=${password}`);


    }

    return (
        <View style={{ alignItems: "center", height: Dimensions.get("window").height }}>
            <Text style={prestyled.header}>Anmelden</Text>

            <ClearTextInput error={errVorname} name="Vorname" valuePair={[vorname, (e) => { setErrVorname(false); setVorname(e) }]} />
            <ClearTextInput error={errNachname} name="Nachname" valuePair={[nachname, (e) => { setErrNachname(false); setNachname(e) }]} />
            <ClearTextInput error={errPassword} name="Passwort" valuePair={[password, (e) => { setErrPassword(false); setPassword(e) }]} secureTextEntry={true} />

            <View style={prestyled.buttonView}>
                <Button style={[{ marginBottom: 20, }]} onPress={login}>Login</Button>
                <Text>Du hast noch keinen Account?</Text>
                <Button greyed onPress={() => { navigation.replace("Register") }}>Registrieren</Button>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    buttonView: {
        width: "100%",
        alignItems: "center",
        bottom: "5%",
        position: "absolute"
    }
})