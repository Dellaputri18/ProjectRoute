import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutApp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfilPage')} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>About App</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://drive.google.com/uc?export=view&id=1izYfR-hgnE5rBwO2CVUWKFPv0Y_b5Ubq', // Ganti dengan URL logo aplikasi Anda
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>ROUTE</Text>
        <Text style={styles.description}>
          Aplikasi ini dirancang untuk membantu pengguna belajar dengan lebih efektif dan efisien.
          Dengan fitur yang inovatif, kami berusaha memberikan pengalaman belajar yang menyenangkan.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Warna latar belakang utama
  },
  header: {
    backgroundColor: '#2C7364', // Warna hijau untuk header
    paddingVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  backText: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#EEEEEE', // Warna latar sementara jika logo tidak tersedia
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default AboutApp;