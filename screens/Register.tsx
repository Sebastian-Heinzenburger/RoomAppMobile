import { useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native"

import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { ClearTextInput } from "../components/ClearTextInput";
import { colors } from "../components/Colors";
import { storeToken } from "../components/Credentials";
import { prestyled } from "../components/Styles";

export const Register = ({ navigation }: any) => {

    //Names
    const [vorname, setVorname] = useState("");
    const [errVorname, setErrVorname] = useState(false);

    const [nachname, setNachname] = useState("");
    const [errNachname, setErrNachname] = useState(false);


    //Passwords
    const [pass1, setPass1] = useState("");
    const [errPass1, seterrPass1] = useState(false);

    const [pass2, setPass2] = useState("");
    const [errPass2, setErrPass2] = useState(false);

    //Checkbox
    const [tos, setTos] = useState(false);
    const [errTos, setErrTos] = useState(false);


    async function registerUser() {
        let allright = true;
        if (pass1 != pass2) {
            allright = false;
            setErrPass2(true);
        }
        if (!pass1) {
            allright = false;
            seterrPass1(true);
        }
        if (!pass2) {
            allright = false;
            setErrPass2(true);
        }
        if (!nachname) {
            allright = false;
            setErrNachname(true);
        }
        if (!vorname) {
            allright = false;
            setErrVorname(true);
        }
        if (!tos) {
            allright = false;
            setErrTos(true);
        }

        if (!allright)
            return;
        
        //TODO: move to Requests.tsx
        //@ts-ignore
        var url = `http://${global.address}/api/createUser`;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = async function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let response = JSON.parse(xhr.response);

                switch (response.status) {
                    case "ok":
                        await storeToken(response.token);
                        if (navigation.getState().index > 0)
                            navigation.popToTop();
                        navigation.replace("Home");
                        break;

                    default:
                        setErrVorname(true);
                        setErrNachname(true);
                        break;
                }
            }
        };

        xhr.send(`firstname=${vorname}&lastname=${nachname}&password=${pass1}`);
    }

    return (
        <View style={{ alignItems: "center", height: Dimensions.get("window").height, backgroundColor: colors.background }}>
            <Text style={prestyled.header}> Registrieren </Text>

            <ClearTextInput name="Vorname" error={errVorname} valuePair={[vorname, (e) => { setErrVorname(false); setVorname(e) }]} />
            <ClearTextInput name="Nachname" error={errNachname} valuePair={[nachname, (e) => { setErrNachname(false); setNachname(e) }]} />
            <View style={{marginVertical: 30}}></View>
            <ClearTextInput name="Passwort" error={errPass1} valuePair={[pass1, (e) => { seterrPass1(false); setPass1(e) }]} secureTextEntry={true} />
            <ClearTextInput name="Passwort wiederholen" error={errPass2} valuePair={[pass2, (e) => { setErrPass2(false); setPass2(e) }]} secureTextEntry={true} />

            <Checkbox error={errTos} valuePair={[tos, setTos]}>
                <Text>
                    Ich akzeptiere die
                    <Text> </Text>
                    <Text style={styles.link} onPress={() => { navigation.push("TOS") }}>
                        Nutzungsbedingungen
                    </Text>
                </Text>
            </Checkbox>

            <View style={prestyled.buttonView}>
                <Button style={[{ marginBottom: 20, }]} onPress={registerUser}>Register</Button>
                <Text>Du hast schon einen Account?</Text>
                <Button greyed onPress={() => { navigation.replace("Login") }}>Login</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    link: {
        color: colors.accent,
    }
});