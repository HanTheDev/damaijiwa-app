import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import Button from './OnboardingButton'

export default function LoginField({ navigation }) {
    const styles = StyleSheet.create({
        container: {
            flex: 1
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
            fontWeight: 'bold'
        },
        inputContainer: {
            marginTop: 20
        },
        input: {
            height: 30,
            marginBottom: 20,
            borderBottomColor: '#4E36DC',
            borderBottomWidth: StyleSheet.hairlineWidth
        },
    })
    return (
        <View style={styles.container}>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={require('C:/ILHAN/Coding/React Native/DamaiJiwa/assets/Vector-arrow-back.png')} style={styles.backButtonImg} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Masuk</Text>
            </View>
            <Text style={styles.loginFieldInfo}>Masukkan informasi akun Anda.</Text>
            <View style={styles.inputContainer}>
                <Text>Username</Text>
                <TextInput style={styles.input} placeholder="Masukkan username Anda" />
                <Text>Password</Text>
                <TextInput style={styles.input} placeholder="Masukkan password Anda" secureTextEntry />
            </View>
        </View>
    )
}
