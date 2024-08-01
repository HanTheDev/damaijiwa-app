import React, { useRef, useState } from 'react';
import { View, Image, Text, StyleSheet, FlatList, Dimensions, Animated, TouchableOpacity } from 'react-native';
import OnboardingItem from '../components/OnboardingItem';
import Pagination from '../components/OnboardingPagination';
import AppLogo from '../components/AppLogo';
import onboardingItems from '../data/onboardingItems';
import Button from '../components/OnboardingButton';

const { width } = Dimensions.get('window');

export default function OnboardingPage() {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 30,
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
        },
        loginButton: {
            backgroundColor: '#EDEBFB',
            color: '#4E36DC'
        }
    });


    const handleScroll = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
    };

    const handleNext = () => {
        if (currentIndex < onboardingItems.length - 1) {
            flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
        } else {
            // Handle navigation to Login/Register screen if needed
        }
    };

    const flatListRef = useRef();

    return (
        <View style={styles.container}>
            <AppLogo/>
            <Animated.FlatList
                ref={flatListRef}
                data={onboardingItems}
                renderItem={({ item }) => (
                    <OnboardingItem image={item.image} title={item.title} description={item.description} />
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false, listener: handleScroll }
                )}
            />
            <Pagination data={onboardingItems} scrollX={scrollX} />
            <View style={styles.buttonContainer}>
                {currentIndex === onboardingItems.length - 1 ? (
                    <>
                        <Button text="Register" onPress={() => { /* Handle Register action */ }} />
                        <Button style={styles.loginButton} text="Login" onPress={() => { /* Handle Login action */ }} />
                        
                        {/* <TouchableOpacity style={[styles.button, {backgroundColor: '#EDEBFB'}]}>
                            <Text style={[styles.buttonText, {color: '#4E36DC'}]}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity> */}
                    </>
                ) : (
                    <Button text="Next" onPress={handleNext} />
                    // <TouchableOpacity style={styles.button} onPress={handleNext}>
                    //     <Text style={styles.buttonText}>Next</Text>
                    // </TouchableOpacity>
                )}
            </View>
        </View>
    );
}