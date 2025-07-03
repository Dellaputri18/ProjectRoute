import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterPage = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name, // Data yang dikirim ke server
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Jika registrasi berhasil, tampilkan pop-up dan arahkan ke halaman login
        Alert.alert(
          'Registrasi Berhasil',
          data.message || 'Anda berhasil terdaftar!',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Login'), // Navigasi ke Login setelah menekan OK
            },
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert('Registrasi Gagal', data.message || 'Terjadi kesalahan saat registrasi');
      }
    } catch (error) {
      console.error('Error during register:', error);
      Alert.alert('Error', 'Tidak dapat terhubung ke server');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoBackground}>
          <Image
            source={{
              uri: 'https://drive.google.com/uc?export=view&id=1izYfR-hgnE5rBwO2CVUWKFPv0Y_b5Ubq',
            }}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Route</Text>
        <Text style={styles.subtitle}>Learning Management System</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Nama Lengkap"
            placeholderTextColor="#FFFFFF70"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Surel"
            placeholderTextColor="#FFFFFF70"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Kata Sandi"
            placeholderTextColor="#FFFFFF70"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B5F56',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoBackground: {
    width: 150,
    height: 150,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF70',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  inputWrapper: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 30,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  input: {
    color: '#FFFFFF',
    fontSize: 16,
    height: 50,
  },
  button: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#2B5F56',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterPage;