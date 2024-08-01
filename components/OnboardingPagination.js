import React from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');

export default function Pagination({ data, scrollX }) {
    return (
        <View style={styles.pagination}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp',
                });
                return (
                    <Animated.View
                        key={i.toString()}
                        style={[styles.dot, { width: dotWidth, opacity }]}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    pagination: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        height: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#595959',
        marginHorizontal: 8,
    },
});
