import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function AppLogo() {

    const styles = StyleSheet.create({
        appLogo: {
            flexDirection: 'row',
            alignItems: 'center',
            height: hp(15),
        },
        logo: {
            width: 40,
            height: 40,
            padding: 10,
        },
        logoText: {
            paddingLeft: 10,
            fontSize: 20,
        },
    })
    return (
        <View style={styles.appLogo}>
            <Image style={styles.logo} source={require('C:/ILHAN/Coding/React Native/DamaiJiwa/assets/Purple.png')} />
            <Text style={styles.logoText}>DamaiJiwa</Text>
        </View>
    )
}