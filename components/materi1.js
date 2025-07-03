import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLevel } from '../LevelContext';  // Import useLevel

const Materi1 = () => {
  const { completeLevel } = useLevel();  // Ambil fungsi completeLevel dari context
  const [isQuizCompleted, setIsQuizCompleted] = useState(false); // Status untuk mengetahui apakah kuis sudah selesai
  const navigation = useNavigation(); // Gunakan navigation untuk navigasi ke Kuis.js

  const handleQuizCompletion = () => {
    setIsQuizCompleted(true); // Menandakan bahwa kuis telah selesai
    completeLevel(1);  // Update completed level ke level 1
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.levelTitle}>LEVEL 1</Text>
        <Text style={styles.topicTitle}>
          Konsep Dasar <Text style={styles.topicHighlight}>Tree</Text>
        </Text>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Struktur pohon menggambarkan sebuah hierarki. Ciri dari struktur pohon ialah bahwa
          “anak” (child) yang hirarkinya lebih rendah, hanya mempunyai satu “orang tua” (parent).
          Anak yang orang tuanya sama, sama levelnya, disebut “bersaudara”.
        </Text>

        <Image
          source={require('../images/img2.jpg')} // Ganti dengan path file lokal Anda
          style={styles.image}
          resizeMode="contain"
        />

        {/* Detail Penjelasan */}
        <Text style={styles.paragraph}>
          Pada konsep dasar pohon dalam ilmu komputer atau struktur data, ada beberapa elemen
          penting yang dapat diidentifikasi:
        </Text>

        <Text style={styles.listItem}>
          1. <Text style={styles.bold}>Root (Akar):</Text> Root adalah node tertinggi dalam struktur
          pohon yang tidak memiliki parent (induk). Dalam diagram organisasi di atas, “ketua” berperan sebagai root karena berada di puncak hierarki.
        </Text>

        <Text style={styles.listItem}>
          2. <Text style={styles.bold}>Node (Simpul):</Text> Node adalah setiap elemen di dalam pohon yang mungkin memiliki parent atau child. Contoh elemen dalam diagram tersebut adalah “Wakil Ketua”, “Bendahara”, “Koordinator bidang A”, “Koordinator bidang B”, dan masing-masing divisi.
        </Text>

        <Text style={styles.listItem}>
          3. <Text style={styles.bold}>Leaf (Daun):</Text> Leaf adalah node yang tidak memiliki child (anak); dengan kata lain, node tersebut berada di bagian bawah pohon. Dalam diagram ini, “Divisi 1”, “Divisi 2”, “Divisi 3”, “Divisi 4”, dan “Divisi 5” dianggap sebagai leaf karena mereka tidak memiliki elemen di bawahnya (tidak memiliki child).
        </Text>
      </View>

      {/* Kuis Button Section */}
      {!isQuizCompleted ? (
        <TouchableOpacity
          style={styles.quizButton}
          onPress={() => navigation.navigate('Kuis1')} // Navigasi ke halaman Kuis
        >
          <Text style={styles.quizButtonText}>Mulai Kuis</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.quizButtonText}>Kuis Selesai!</Text>  // Menampilkan jika kuis sudah selesai
      )}

      {/* Status Update Section */}
      {isQuizCompleted && (
        <TouchableOpacity
          style={styles.quizButton}
          onPress={handleQuizCompletion}  // Memperbarui status setelah kuis selesai
        >
          <Text style={styles.quizButtonText}>Level Selesai, Lanjutkan ke Level 2</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    backgroundColor: '#2C7364',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  levelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  topicTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 8,
  },
  topicHighlight: {
    fontStyle: 'italic',
    color: '#FAD02E',
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    elevation: 3,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 12,
    textAlign: 'justify',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  listItem: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 8,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
  },
  quizButton: {
    backgroundColor: '#2C7364',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  quizButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Materi1;
