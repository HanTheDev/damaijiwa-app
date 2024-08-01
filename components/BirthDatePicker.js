import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function BirthDatePicker() {
    const [birthDate, setBirthDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const styles = StyleSheet.create ({
        container: {
            // flex: 1,
            // padding: 30
            // backgroundColor: 'green',
            marginBottom: 20
        },
        inputContainer: {
            marginTop: 20
        },
        input: {
            height: 30,
            // backgroundColor: 'black',
            borderBottomColor: '#4E36DC',
            borderBottomWidth: StyleSheet.hairlineWidth,
        },
        birthDateTitle: {
            marginBottom: 10
        }
    })

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || birthDate;
        setShowDatePicker(false);
        setBirthDate(currentDate);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.birthDateTitle}>Tanggal Lahir</Text>
            <TouchableOpacity
                style={styles.input}
                onPress={() => setShowDatePicker(true)}
            >
                <Text>{birthDate.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={birthDate}
                    mode="date"
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    )
}
