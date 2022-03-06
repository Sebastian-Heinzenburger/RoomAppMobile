import { useState } from "react";
import { View, StyleSheet, Text, TextInput, GestureResponderEvent, Image, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "./Button";
import { colors } from "./Colors";
import { signOut } from "./Credentials";
import { Share } from "./Share";

export const Bar = (props: { style?: StyleSheet, navigation?: any }) => {

    const [showMenu, setShowMenu] = useState(false);

    function popBack() {
        if (props.navigation && props.navigation.getState().index > 0)
            props.navigation.pop();
    }

    return (
        <>
            <View style={styles.barView}>
                <View style={styles.left}>
                    {(() => {
                        if (props.navigation && props.navigation.getState().index > 0)
                            return <Text style={styles.arrow} onPress={popBack}><Icon color={colors.white} tvParallaxProperties={true} type="font-awesome-5" name="arrow-left" /></Text>
                    })()}
                    <Image source={require("../assets/icon.png")} style={styles.image} />
                    <Text style={styles.title}> RoomFinder </Text>
                </View>
                <View style={styles.right}>
                    <Share message="Schau dir mal die RoomApp an: https://roomapp.de/" />
                    <Text style={styles.menuToggle} onPress={() => { setShowMenu(!showMenu) }}>
                        {showMenu ?
                            <Icon type="font-awesome-5" color={colors.white} name="window-close" tvParallaxProperties={true} />
                            :
                            <Icon type="font-awesome-5" color={colors.white} name="ellipsis-v" tvParallaxProperties={true} />
                        }
                    </Text>
                </View>
            </View>
            {showMenu &&
                <View style={styles.menu}>
                    <Text> Diese App wurde von Sebastian mit viel Liebe in einem einzigen langen Code-Sprint geschaffen</Text>
                    <Button onPress={() => { signOut(); props.navigation.replace("Welcome"); }} style={{width: "100%",}}>
                        sign out
                    </Button>
                </View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    barView: {
        backgroundColor: colors.accent,
        width: Dimensions.get("window").width,
        top: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 55,
    },
    title: {
        color: colors.white,
        fontWeight: "800",
        fontSize: 18,
        marginLeft: 10,
    },
    image: {
        marginVertical: 5,
        aspectRatio: 1,
        height: 40,
        width: 40
    },
    left: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    arrow: {
        marginRight: 10,
        marginLeft: 5,
        paddingHorizontal: 5,
    },
    right: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    menu: {
        position: "absolute",
        top: 35,
        right: 40,
        width: 120,
        backgroundColor: colors.white,
        paddingHorizontal: 5,
        zIndex: 98,
    },
    menuToggle: {
        width: 40,
        textAlign: "center",
        zIndex: 99,
    }
});