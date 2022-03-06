import { useEffect, useState } from "react";
import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import DatePicker from "react-native-datepicker";
import { Button } from "./Button";
import { ClearTextInput } from "./ClearTextInput";

import { colors } from "./Colors";
import { getRooms } from "./Requests";

export const RoomSearch = (props: { onSearch: any }) => {

    const [lesson, setLesson] = useState("1");
    const [date, setDate] = useState(new Date());

    console.warn = (e) => { };

    useEffect(() => {
        (async () => { props.onSearch(await getRooms(Number.parseInt(lesson), date)) })()
    }, [])


    return (
        <View style={[styles.roomSearchView]}>
            <View style={styles.row}>
                <ClearTextInput name="Stunde" maxLenght={2} type="number-pad" valuePair={[lesson, setLesson]} style={{ width: 60 }} />
                <View style={[styles.dateView]}>
                    <View style={styles.dateDescrView}>
                        <Text style={[styles.dateDescr]}> Datum </Text>
                    </View>
                    <DatePicker showIcon={false} date={date} onDateChange={(s, d) => { setDate(d) }} style={styles.datePicker} customStyles={{ dateInput: { borderWidth: 0, }, }} />
                </View>
            </View>
            <View style={styles.row}>
                <Button style={{ width: "100%" }} onPress={async () => { props.onSearch(await getRooms(Number.parseInt(lesson), date)) }}>
                    Suche starten
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    roomSearchView: {
        width: "102%",
        alignItems: "center",
        //transform: [{ translateY: -6 }],
        paddingTop: 6,
        paddingBottom: 8,

        shadowColor: colors.shadow,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 4,
        borderRadius: 5,
        marginVertical: -4,
        marginTop: -6,
        overflow: "hidden",

    },
    datePicker: {
        borderColor: colors.accent,
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 2,
        fontSize: 18,
        padding: 10,
        backgroundColor: colors.white,
        height: 55,
        justifyContent: "center"
    },
    dateView: {
        height: "auto",
    },
    dateDescr: {
        fontSize: 12,
        paddingLeft: 5,
        marginBottom: 2,
        paddingTop: 5,
        // marginTop: 50,
        color: colors.accent,
    },
    dateDescrView: {
        display: "flex",
        flexDirection: "row",
    },
    row: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "68%",
        marginBottom: 5,
    },
})