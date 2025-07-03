import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const LoginPage = () => {
  const navigation = useNavigation();

  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailOrPhone,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        console.log('Login berhasil:', data.user);
        navigation.navigate('Home', { user: data.user });
      } else {
        Alert.alert('Login Gagal', data.message || 'Email atau Kata Sandi Salah');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Error', 'Tidak dapat terhubung ke server');
    }
  };

  return (
    <LinearGradient
      colors={['#4c8479', '#2b5f56']}
      style={styles.container}
    >
      {/* Bagian atas dengan latar belakang hijau */}
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 250, 0)']}
            style={styles.logoBackground}
          >
            <Image
              source={{
                uri: 'https://drive.google.com/uc?export=view&id=1izYfR-hgnE5rBwO2CVUWKFPv0Y_b5Ubq',
              }}
              style={styles.logo}
            />
          </LinearGradient>
          <Text style={styles.title}>Route</Text>
          <Text style={styles.subtitle}>Learning Management System</Text>
        </View>

        {/* Input di luar Rectangle putih */}
        <View style={styles.inputContainerOutside}>
          <View style={styles.inputContainer}>
            <Image
              source={{
                uri: 'https://drive.google.com/uc?id=1wBWyehEEiYMd1W1rhszI_OOV9yJi0oQN',
              }}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#FFFFFFA0"
              value={emailOrPhone}
              onChangeText={setEmailOrPhone}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={{
                uri: 'https://drive.google.com/uc?id=1oxE8Iug0VujDyp2CJeYAZmY0n2TP2a59',
              }}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Kata Sandi"
              placeholderTextColor="#FFFFFFA0"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>
      </View>

      {/* Rectangle putih di bawah */}
      <View style={styles.bottomSection}>
        {/* Tombol Masuk */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <LinearGradient
            colors={['#4c8479', '#2b5f56']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Masuk</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoBackground: {
    width: 250,
    height: 250,
    borderRadius: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 170,
    height: 170,
  },
  title: {
    marginTop: -40,
    fontSize: 55,
    color: '#e3fff9',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFFA0',
    marginTop: -10,
    marginBottom: 1,
  },
  inputContainerOutside: {
    width: '80%',
    marginTop: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 29,
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    height: 60,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
  },
  bottomSection: {
    marginTop: 50,
    flex: 0.7,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  button: {
    width: '90%',
    borderRadius: 25,
    paddingVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginPage;
