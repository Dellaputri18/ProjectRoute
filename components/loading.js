import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const LoadingPage = () => {
    const route = useRoute(); // Ambil parameter dari navigasi
    const navigation = useNavigation(); // Untuk navigasi ke layar berikutnya
    const { nextScreen } = route.params; // Ambil nextScreen dari parameter route

    const [loadingText, setLoadingText] = useState('Loading...');
    const [loadingImage, setLoadingImage] = useState('https://via.placeholder.com/250'); // URL placeholder
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRandomData = async () => {
            try {
              const response = await fetch('http://10.0.2.2:3000/loading/random');
              const data = await response.json();
          
              if (data.error) {
                throw new Error(data.error);
              }
          
              setLoadingText(data.loadingPage); // Tampilkan teks loading
              setLoadingImage(data.gambar); // Tampilkan gambar loading
            } catch (error) {
              console.error('Error fetching random data:', error);
            } finally {
              setIsLoading(false);
            }
          };          
          fetchRandomData();
        const timer = setTimeout(() => {
            navigation.navigate(nextScreen);
        }, 7000);
    
        return () => clearTimeout(timer);
    }, [navigation, nextScreen]);    

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#2C7364" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: loadingImage || 'https://via.placeholder.com/250' }}
                style={styles.image}
            />
            <Text style={styles.text}>{loadingText || 'Default Loading Text'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F7F1',
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        color: '#333',
        paddingHorizontal: 20,
    },
});

export default LoadingPage;