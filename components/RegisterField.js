import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker'; // Import Picker
import BirthDatePicker from './BirthDatePicker';
import GenderPicker from './GenderPicker';
import { Dropdown } from './Dropdown';

export default function RegisterField({ navigation }) {
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [gender, setGender] = useState('');

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        backButtonContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: 'green',
            marginBottom: 30
        },
        backButton: {
            marginRight: 10,
            width: 40,
            height: 30,
            // backgroundColor: 'yellow',
            justifyContent: 'center'
        },
        backButtonImg: {
            width: 30,
            height: 20
        },
        pageTitle: {
            fontSize: 35,
            fontWeight: 'bold'
        },
        loginFieldInfo: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10
        },
        loginFieldDesc: {
            fontSize: 14,
            color: 'gray',
            marginBottom: 10
        },
        inputContainer: {
            marginTop: 20
        },
        input: {
            height: 30,
            marginBottom: 15,
            // backgroundColor: 'yellow',
            borderBottomColor: '#4E36DC',
            borderBottomWidth: StyleSheet.hairlineWidth,
            justifyContent: 'center'
        },
    });

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || birthDate;
        setShowDatePicker(false);
        setBirthDate(currentDate);
    };

    return (
        <View style={styles.container}>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={require('C:/ILHAN/Coding/React Native/DamaiJiwa/assets/Vector-arrow-back.png')} style={styles.backButtonImg} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Daftar</Text>
            </View>
            <Text style={styles.loginFieldInfo}>Masukkan informasi pribadi Anda</Text>
            <Text style={styles.loginFieldDesc}>Data ini diperlukan untuk kebutuhan pendaftaran</Text>
            <View style={styles.inputContainer}>
                <Text>Nama</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan nama Anda"
                    value={name}
                    onChangeText={setName}
                />
                {/* <Text>Tanggal Lahir</Text>
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
                )} */}
                <BirthDatePicker />
                <GenderPicker />
                {/* <Dropdown /> */}
                
                {/* <Text>Jenis Kelamin</Text>
                <Picker
                    selectedValue={gender}
                    style={styles.input}
                    placeholder='Pilih'
                    onValueChange={(itemValue) => setGender(itemValue)}
                >
                    <Picker.Item label="Pria" value="pria" />
                    <Picker.Item label="Wanita" value="wanita" />
                </Picker> */}
            </View>
        </View>
    );
}


// import React, { useState } from 'react'
// import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'

// export default function RegisterField({ navigation }) {
//     const [date, setDate] = useState(new Date())
//     const [showPicker, setShowPicker] = useState(false)

//     const [name, setName] = useState('');
//     const [birthDate, setBirthDate] = useState('');
//     const [gender, setGender] = useState('');

    // const styles = StyleSheet.create({
    //     container: {
    //         flex: 1
    //     },
    //     backButtonContainer: {
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         // backgroundColor: 'green',
    //         marginBottom: 30
    //     },
    //     backButton: {
    //         marginRight: 10,
    //         width: 40,
    //         height: 30,
    //         // backgroundColor: 'yellow',
    //         justifyContent: 'center'
    //     },
    //     backButtonImg: {
    //         width: 30,
    //         height: 20
    //     },
    //     pageTitle: {
    //         fontSize: 35,
    //         fontWeight: 'bold'
    //     },
    //     loginFieldInfo: {
    //         fontSize: 18,
    //         fontWeight: 'bold',
    //         marginBottom: 10
    //     },
    //     loginFieldDesc: {
    //         fontSize: 14,
    //         color: 'gray',
    //         marginBottom: 10
    //     },
    //     inputContainer: {
    //         marginTop: 20
    //     },
    //     input: {
    //         height: 30,
    //         marginBottom: 20,
    //         borderBottomColor: '#4E36DC',
    //         borderBottomWidth: StyleSheet.hairlineWidth
    //     },
//     })
//     return (
//         <View style={styles.container}>
//             <View style={styles.backButtonContainer}>
//                 <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//                     <Image source={require('C:/ILHAN/Coding/React Native/DamaiJiwa/assets/Vector-arrow-back.png')} style={styles.backButtonImg} />
//                 </TouchableOpacity>
//                 <Text style={styles.pageTitle}>Daftar</Text>
//             </View>
//             <Text style={styles.loginFieldInfo}>Masukkan informasi pribadi Anda</Text>
//             <Text style={styles.loginFieldDesc}>Data ini diperlukan untuk kebutuhan pendaftaran</Text>
//             <View style={styles.inputContainer}>
//                 <Text>Nama</Text>
//                 <TextInput style={styles.input} placeholder="Masukkan nama Anda" />
//                 <Text>Tanggal Lahir</Text>
//                 <TextInput style={styles.input} placeholder="Masukkan tanggal lahir Anda" />
//                 <Text>Jenis Kelamin</Text>
//                 <TextInput style={styles.input} placeholder="Masukkan jenis kelamin Anda" />
                
//             </View>
//         </View>
//     )
// }
