import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function OnboardingItem({ image, title, description }) {
    return (
        <View style={styles.goalDescription}>
            <Image style={styles.hydratation} source={image} />
            <Text style={styles.goalTitle}>{title}</Text>
            <Text style={styles.goalText}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    goalDescription: {
        width: width - 60, // Subtract the padding from the width
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        // backgroundColor: 'brown'
    },
    hydratation: {
        width: 200,
        height: 200,
    },
    goalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center'
    },
    goalText: {
        fontSize: 15,
        textAlign: 'center',
    },
});
