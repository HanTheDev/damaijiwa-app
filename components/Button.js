import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Button() {
    return (
        <View style={styles.button}>
            <Text>Button</Text>
            <Text>Selanjutnya</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        flex: 1,
        alignItems: 'center'
    },
});
