import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'; // Import Picker
import { Dropdown } from './Dropdown';
import RNPickerSelect from 'react-native-picker-select';


export default function GenderPicker() {
    const [gender, setGender] = useState('');

    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            // padding: 30
            // backgroundColor: 'brown',
            borderBottomColor: '#4E36DC',
            borderBottomWidth: StyleSheet.hairlineWidth,
            // height: 80,
            justifyContent: 'center',
        },
        input: {
            height: 30,
            marginBottom: 20,
            borderBottomColor: '#4E36DC',
            borderBottomWidth: StyleSheet.hairlineWidth,
            justifyContent: 'center'
        },
        genderPickerTitle: {
            marginBottom: 15
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.genderPickerTitle}>Jenis Kelamin</Text>
            <RNPickerSelect
                style={styles.genderPicker}
                onValueChange={(value) => setGender(value)}
                items={[
                    { label: 'Pria', value: 'pria' },
                    { label: 'Wanita', value: 'wanita' },
                ]}
            />
            {/* <Picker
                selectedValue={gender}
                style={styles.input}
                placeholder='Pilih'
                onValueChange={(itemValue) => setGender(itemValue)}
            >
                <Picker.Item label="Pria" value="pria" />
                <Picker.Item label="Wanita" value="wanita" />
            </Picker> */}
        </View>

    )
}
