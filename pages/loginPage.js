import React from 'react'
import AppLogo from '../components/AppLogo'
import LoginField from '../components/LoginField'
import Button from '../components/OnboardingButton'
import { View, StyleSheet } from 'react-native'
import LoginButton from '../components/LoginButton'
import CheckLoginButton from '../components/CheckLoginButton'

export default function LoginPage({ navigation }) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 30,
        },
    })
    return (
        <View style={styles.container}>
            <AppLogo />
            <LoginField navigation={ navigation }/>
            <LoginButton />
            <CheckLoginButton />
        </View>

    )
}
