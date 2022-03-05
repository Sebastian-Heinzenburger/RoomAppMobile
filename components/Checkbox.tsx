import { View, StyleSheet, Text, TextInput } from "react-native";
import { colors } from "./Colors";
import { Dispatch, SetStateAction, useState } from "react";
import { CheckBox, Icon } from "react-native-elements";

export const Checkbox = (props: { valuePair: [boolean, Dispatch<SetStateAction<boolean>>], error?: boolean, style?: any, children?: any }) => {

    return (
        <View style={[styles.checkView, props.style]}>

            <CheckBox
                checked={props.valuePair[0]}
                onPress={() => { let f = props.valuePair[1]; f(!props.valuePair[0]) }}
                containerStyle={{
                    backgroundColor: colors.background,
                }}
                textStyle={{
                    color: "black",
                    fontWeight: "normal",
                }}
                checkedIcon={
                    <Icon
                        type="font-awesome-5"
                        name="check-square"
                        tvParallaxProperties={undefined}
                        color={colors.accent}
                        iconStyle={{
                            width: 30
                        }}
                    />
                }
                uncheckedIcon= {
                    <Icon
                        type="font-awesome-5"
                        name="square"
                        tvParallaxProperties={undefined}
                        color={props.error ? colors.redorange : colors.accent}
                        iconStyle={{
                            width: 30
                        }}
                    />
                }

            />
            <Text style={{width: "75%"}}>{props.children}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    checkView: {
        width: "75%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        //justifyContent: "space-between",
        height: 60,
    },
});