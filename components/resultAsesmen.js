import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient"; // Import LinearGradient
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const ResultScreen = () => {
  const navigation = useNavigation(); // Use useNavigation hook

  return (
    <LinearGradient
      colors={["#a9c7c3", "#FFFF"]} // Gradasi hijau ke putih
      style={styles.container}
    >
      <View style={styles.iconContainer}>
        {/* Ganti Icon dengan Image */}
        <Image
          source={require('../images/img3.png')} // Ganti dengan path gambar Anda
          style={styles.icon}
        />
      </View>
      <Text style={styles.message}>Kamu berhasil menyelesaikan materi Tree!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Hasil')}>
        <Text style={styles.buttonText}>MENU</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    width: 200, // Sesuaikan dengan ukuran gambar yang diinginkan
    height: 200, // Sesuaikan dengan ukuran gambar yang diinginkan
  },
  message: {
    fontSize: 20,
    color: "#2F5540",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#a9c7c3", // Warna tombol menu
    paddingVertical: 15, // Lebih panjang
    paddingHorizontal: 40, // Lebih panjang secara horizontal
    borderRadius: 30, // Sudut lebih bulat
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18, // Ukuran teks lebih besar
    fontWeight: "bold",
  },
});

export default ResultScreen;
