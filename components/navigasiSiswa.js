import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LevelScreen from './level.js'; 

const SideMenu = ({ onClose }) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    onClose(); // Tutup menu
    navigation.replace('Login'); // Navigasi ke login
  };

  return (
    <View style={styles.menuContainer}>
      <Text style={styles.logoText}>Route</Text>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          onClose();
          navigation.navigate('Profil'); // Navigasi ke halaman Profil
        }}
      >
        <Text style={styles.menuText}>Profil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          onClose();
          navigation.navigate('Hasil'); // Navigasi ke halaman Hasil
        }}
      >
        <Text style={styles.menuText}>Hasil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          onClose();
          navigation.navigate('LevelScreen'); // Navigasi ke halaman Level
        }}
      >
        <Text style={styles.menuText}>Level</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
        <Text style={styles.menuText}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#2C7364',
    height: '100%',
    width: '70%',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  logoText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  },
  menuText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default SideMenu;
