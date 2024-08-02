import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function CheckLoginButton( {navigation} ) {
    const styles = StyleSheet.create({
        container: {
            flex: 0.1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
            marginBottom: 20
        },
        checkLoginText: {
            color: '#4E36DC',
            fontSize: 18
        }
    })
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.checkLoginText}>Belum ada akun? Daftar sekarang!</Text>
        </TouchableOpacity>
    )
}
