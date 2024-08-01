import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function LoginButton() {
    const styles = StyleSheet.create({
        container: {
            flex: 0.1,
            backgroundColor: '#4E36DC',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
            marginBottom: 30
        },
        loginText: {
            color: '#F2F2F2',
            fontSize: 18
        }
    })
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.loginText}>Masuk</Text>
        </TouchableOpacity>
    )
}
