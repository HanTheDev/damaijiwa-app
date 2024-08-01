import React, { useRef, useState } from 'react';
import { View, Image, Text, StyleSheet, FlatList, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OnboardingItem from 'C:/ILHAN/Coding/React Native/DamaiJiwa/components/OnboardingItem.js';
import Pagination from 'C:/ILHAN/Coding/React Native/DamaiJiwa/components/Pagination';

const { width } = Dimensions.get('window');

export default function OnboardingPage() {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 30,
        },
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
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
        },
        button: {
            backgroundColor: '#4E36DC',
            padding: 15,
            borderRadius: 30,
            alignItems: 'center',
            flex: 1,
            marginHorizontal: 5,
        },
        buttonText: {
            color: '#F2F2F2',
            fontWeight: 'bold',
        }
    });

    const onboardingItems = [
        {
            image: require('C:/ILHAN/Coding/React Native/DamaiJiwa/assets/Hydratation-bro.png'),
            title: 'Mulai Hari Lebih Teratur',
            description: 'Dengan mulai hari lebih teratur, efisiensi dan produktivitas akan meningkat',
        },
        {
            image: require('C:/ILHAN/Coding/React Native/DamaiJiwa/assets/Task-bro.png'),
            title: 'Prioritaskan Tugas-mu',
            description: 'Pentingnya memprioritaskan tugas dengan matriks prioritas: mendesak, penting, dan dampak besar',
        },
        {
            image: require('C:/ILHAN/Coding/React Native/DamaiJiwa/assets/Coffee break-pana.png'),
            title: 'Mental Tetap Terjaga dengan Istirahat yang Teratur',
            description: 'Mental tetap terjaga dengan istirahat teratur, menjaga keseimbangan dalam kehidupan sehari-hari',
        },
    ];

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
            <View style={styles.appLogo}>
                <Image style={styles.logo} source={require('C:/ILHAN/Coding/React Native/DamaiJiwa/assets/Purple.png')} />
                <Text style={styles.logoText}>DamaiJiwa</Text>
            </View>
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
                        <TouchableOpacity style={[styles.button, {backgroundColor: '#EDEBFB'}]}>
                            <Text style={[styles.buttonText, {color: '#4E36DC'}]}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <TouchableOpacity style={styles.button} onPress={handleNext}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}