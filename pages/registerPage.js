import React from 'react'
import AppLogo from '../components/AppLogo'
import { View, StyleSheet } from 'react-native'
import RegisterField from '../components/RegisterField'

export default function RegisterPage({ navigation }) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 30,
        },
    })
    return (
        <View style={styles.container}>
            <AppLogo />
            <RegisterField navigation={ navigation }/>
        </View>

    )
}
