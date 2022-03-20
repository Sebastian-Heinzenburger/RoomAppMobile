import { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native"

import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Share } from "../components/Share";
import { ClearTextInput } from "../components/ClearTextInput";
import { colors } from "../components/Colors";
import { isLoggedIn, signOut } from "../components/Credentials";
import { Bar } from "../components/Bar";
import { prestyled } from "../components/Styles";
import { getGroups } from "../components/Requests";
import { getColorForRoom, RoomElement } from "../components/RoomElement";
import { Icon } from "react-native-elements";

export const Lerngruppen = ({ navigation }: any) => {
    const [groups, setGroups] = useState([]);

    const days = ["Mo", "Di", "Mi", "Do", "Fr"];
    async function fetchGroups() {
        let g = await getGroups();

        if (!g)
            return;

        ///@ts-ignore
        setGroups(g.groups)
    }

    useEffect(() => {

        (async () => {
            await fetchGroups();
        })();

    }, [])

    return (
        <View style={{ alignItems: "center", height: Dimensions.get("window").height }}>
            <Bar navigation={navigation} />
            <ScrollView style={styles.cardView} contentContainerStyle={{ alignItems: "center" }}>
                {groups.map(
                    (g) => {
                        return <Card
                            name={g[0] + " - " + g[2] + " " + g[3]}
                            description={g[1]}
                            key={g[0] + Math.random()}
                        >
                            <View style={{ width: "101%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingRight: 5, marginVertical: 5, }}>
                                <Text style={styles.details}>{days[g[5]]}, {Number.parseInt(g[6]) + 1}.Stunde   </Text>
                                <View style={[{ backgroundColor: getColorForRoom(g[4]), padding: 5, borderRadius: 5, alignItems: "center", flexDirection: "row", width: 65 }]}>
                                    <Icon type="material" name="location-pin" tvParallaxProperties={true} color={colors.white} />
                                    <Text style={{ color: colors.white }}>
                                        {g[4]}
                                    </Text>
                                </View>
                            </View>
                        </Card>
                    }
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 34,
    },
    cardView: {
        flex: 1,
        width: "100%",
        paddingTop: 10,
        //marginTop: 20,
    },
    details: {
        // fontStyle: "italic",
        // marginLeft: 60,
        borderRadius: 8,
        backgroundColor: colors.accent,
        height: 35,
        textAlignVertical: "center",
        paddingLeft: 10,
        color: colors.white
    }
});