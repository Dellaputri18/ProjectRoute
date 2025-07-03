import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SideMenu from './navigasiSiswa'; // Import navigasi siswa

const HasilNilai = ({ route }) => {
  const { level } = route.params || {}; // Data level dikirim dari HasilPage.js
  const navigation = useNavigation();

  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-Dimensions.get('window').width)).current; // Awal di luar layar

  const openMenu = () => {
    setMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0, // Geser ke posisi 0 (tampak di layar)
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -Dimensions.get('window').width, // Kembali ke luar layar
      duration: 500,
      useNativeDriver: false,
    }).start(() => setMenuVisible(false));
  };

  // Contoh skor berdasarkan level (dapat diganti dengan data dari API atau state)
  const scores = {
    1: 100,
    2: 100,
    3: 100,
    4: 100,
  };

  const score = scores[level.id] || 0; // Ambil skor berdasarkan level id

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Tombol titik tiga */}
        <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
          <Text style={styles.menuIcon}>⋮</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Hasil Belajar</Text>
        <Text style={styles.levelText}>Level {level.id}</Text>
      </View>

      {/* Modal Menu */}
      <Modal transparent={true} visible={menuVisible} animationType="none" onRequestClose={closeMenu}>
        <TouchableOpacity style={styles.modalOverlay} onPress={closeMenu}>
          <Animated.View style={[styles.sideMenuContainer, { transform: [{ translateX: slideAnim }] }]}>
            <SideMenu onClose={closeMenu} />
          </Animated.View>
        </TouchableOpacity>
      </Modal>

      {/* Card Skor */}
      <View style={styles.scoreCard}>
        <Text style={styles.scoreTitle}>Skor yang diperoleh:</Text>
        <Text style={styles.scoreValue}>{score}</Text>
      </View>

      {/* Tombol Kembali */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()} // Navigasi kembali ke HasilPage.js
      >
        <Text style={styles.backButtonText}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C7364',
    padding: 20,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
    position: 'relative', // Untuk posisi menu
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  levelText: {
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 5,
  },
  scoreCard: {
    backgroundColor: '#E0F2F1',
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  scoreTitle: {
    fontSize: 16,
    color: '#4F4F4F',
    marginBottom: 10,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2C7364',
  },
  backButton: {
    marginTop: 40,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: '#2C7364',
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    zIndex: 10,
  },
  menuIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sideMenuContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default HasilNilai;