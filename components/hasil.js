import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SideMenu from './navigasiSiswa'; // Import navigasi siswa

const HasilPage = ({ route }) => {
  const navigation = useNavigation();

  const [menuVisible, setMenuVisible] = useState(false);
  const [user, setUser] = useState(null); // State untuk menyimpan data user
  const slideAnim = useRef(new Animated.Value(-Dimensions.get('window').width)).current; // Awal di luar layar

  // Simulasi pengambilan data dari backend
  useEffect(() => {
    // Contoh pengambilan data dari database
    const fetchUserData = async () => {
      const response = await fetch('https://api.example.com/user'); // Ganti dengan URL API backend Anda
      const data = await response.json();
      setUser(data); // Simpan data user
    };
    fetchUserData();
  }, []);

  const openMenu = () => {
    setMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -Dimensions.get('window').width,
      duration: 500,
      useNativeDriver: false,
    }).start(() => setMenuVisible(false));
  };

  // Data hasil belajar
  const levels = [
    { id: 1, title: 'Level 1 (Konsep Dasar Tree)', completed: true },
    { id: 2, title: 'Level 2 (Binary Tree)', completed: true },
    { id: 3, title: 'Level 3 (Tree Traversal)', completed: true },
    { id: 4, title: 'Level 4 (Implements)', completed: true },
  ];

  // Total hasil asesmen
  const totalAsesmen = levels.filter(level => level.completed).length;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
          <Text style={styles.menuIcon}>⋮</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Hasil Belajar {user ? user.nama : ''} {/* User dari backend */}
        </Text>
      </View>

      {/* Modal Menu */}
      <Modal transparent={true} visible={menuVisible} animationType="none" onRequestClose={closeMenu}>
        <TouchableOpacity style={styles.modalOverlay} onPress={closeMenu}>
          <Animated.View style={[styles.sideMenuContainer, { transform: [{ translateX: slideAnim }] }]}>
            <SideMenu onClose={closeMenu} />
          </Animated.View>
        </TouchableOpacity>
      </Modal>

      {/* Level List */}
      <View style={styles.levelContainer}>
        {levels.map(level => (
          <TouchableOpacity
            key={level.id}
            style={styles.levelRow}
            onPress={() => navigation.navigate('HasilNilai', { level })}
          >
            <Text style={styles.levelText}>{level.title}</Text>
            <Text style={level.completed ? styles.checkIcon : styles.crossIcon}>
              {level.completed ? '✔' : '✘'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Hasil Asesmen */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Hasil Asesmen: 100</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 0, // Hapus padding horizontal agar full-width
  },
  header: {
    backgroundColor: '#2C7364',
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  levelContainer: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20, // Beri margin kiri-kanan
  },
  levelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 2, // Border tebal
    borderColor: '#2C7364', // Warna hijau
    borderRadius: 8,
  },
  levelText: {
    fontSize: 16,
    color: '#333333',
  },
  checkIcon: {
    fontSize: 18,
    color: '#27AE60',
  },
  crossIcon: {
    fontSize: 18,
    color: '#E74C3C',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2, // Border tebal untuk hasil
    borderColor: '#2C7364', // Warna hijau
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20, // Beri margin kiri-kanan
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default HasilPage;
