import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import SideMenu from './navigasiSiswa'; // Import SideMenu
import { Animated } from 'react-native';

const HomePage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params || {};

  const [menuVisible, setMenuVisible] = useState(false);

  const slideAnim = useRef(new Animated.Value(-Dimensions.get('window').width)).current; // Awal di luar layar
  const openMenu = () => {
    setMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0, // Geser ke posisi 0 (tampak di layar)
      duration: 500, // Durasi animasi 300ms
      useNativeDriver: false, // Gunakan animasi JS
    }).start();
  };
  
  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -Dimensions.get('window').width, // Kembali ke luar layar
      duration: 500,
      useNativeDriver: false,
    }).start(() => setMenuVisible(false)); // Sembunyikan modal setelah animasi selesai
  };
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Tombol titik tiga */}
        <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
          <Text style={styles.menuIcon}>⋮</Text>
        </TouchableOpacity>
        {user ? (
          <Text style={styles.headerText}>
            Hi <Text style={styles.userName}>{user.nama}</Text>, {'\n'} Siap untuk belajar hari ini?
          </Text>
        ) : (
          <Text style={styles.headerText}>Loading...</Text>
        )}
      </View>
      {/* Modal Menu */}
      
      <Modal
  transparent={true}
  visible={menuVisible}
  animationType="none" // Kita kendalikan animasi sendiri
  onRequestClose={closeMenu}
>
  <TouchableOpacity
    style={styles.modalOverlay}
    onPress={closeMenu}
  >
    <Animated.View style={[styles.sideMenuContainer, { transform: [{ translateX: slideAnim }] }]}>
      <SideMenu onClose={closeMenu} />
    </Animated.View>
  </TouchableOpacity>
</Modal>

      {/* Content */}
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.circleContainer}
          onPress={() => navigation.navigate('LevelScreen')}
        >
          <View style={styles.gradientCircle}>
            <Text style={styles.playIcon}>▶</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          Setiap langkah kecil menuju keahlian besar.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingVertical: 100, // Ruang vertikal untuk header
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Header berada di tengah
    position: 'relative', // Tetapkan posisi relatif untuk anchor menu
  },
  menuButton: {
    position: 'absolute', // Membuat tombol titik tiga bebas bergerak
    top: 10, // Jarak dari atas
    left: 10, // Jarak dari kiri
    padding: 10,
  },
  menuIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C7364', // Warna tombol
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  userName: {
    fontWeight: 'bold', // Membuat nama user lebih menonjol
    color: '#2C7364', // Warna teks nama
  },
  content: {
    flex: 1,
    backgroundColor: '#2C7364',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    width: 270,
    height: 270,
    borderRadius: 135,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientCircle: {
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: '#2C7364',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: 100,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Latar belakang semi-transparan
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  sideMenuContainer: {
    width: Dimensions.get('window').width * 1,
    height: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },  
});

export default HomePage;