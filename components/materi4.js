import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLevel } from '../LevelContext';  // Import useLevel

const Materi4 = () => {
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
        <Text style={styles.levelTitle}>LEVEL 4</Text>
        <Text style={styles.topicTitle}>
        Implementasi pada Persoalan <Text style={styles.topicHighlight}>kompleks</Text>
        </Text>
      </View>

      {/* Content Section */}
       {/* Content Section */}
       <View style={styles.content}>
        <Text style={styles.paragraph}>
          Tree traversal memiliki banyak aplikasi di berbagai bidang, khususnya dalam penyelesaian persoalan kompleks seperti hierarki organisasi dan pohon keputusan. Berikut adalah beberapa contoh implementasi traversal pohon pada masalah yang lebih kompleks:
        </Text>

        {/* Hierarki Organisasi */}
        <Text style={styles.bold}>Hierarki Organisasi</Text>
        <Text style={styles.paragraph}>
          Dalam struktur hierarki organisasi, setiap node mewakili seseorang dalam organisasi (misalnya, CEO, manajer, staf), dan hubungan antar node mencerminkan hubungan hirarki (atasan-bawahan).
        </Text>
        <Text style={styles.listItem}>
          - <Text style={styles.bold}>Preorder Traversal:</Text> Berguna untuk menghasilkan urutan kunjungan seseorang ke seluruh anggota organisasi dari atas ke bawah, dimulai dari CEO atau pimpinan tertinggi dan turun ke bawahan mereka. Traversal ini bisa digunakan saat kita ingin mendapatkan laporan lengkap atau data dari semua anggota dalam hierarki tertentu.
        </Text>
        <Text style={styles.listItem}>
          - <Text style={styles.bold}>Inorder Traversal:</Text> Jarang digunakan dalam konteks organisasi, tetapi dapat membantu mengatur urutan visitasi secara lebih terstruktur.
        </Text>
        <Text style={styles.listItem}>
          - <Text style={styles.bold}>Postorder Traversal:</Text> Digunakan saat kita ingin mendapatkan laporan dari bawahan terlebih dahulu, lalu disampaikan ke atasan. Contohnya, saat mengumpulkan laporan kerja dari bawahan sebelum menyusun laporan akhir.
        </Text>

        {/* Pohon Keputusan */}
        <Text style={styles.bold}>Pohon Keputusan (Decision Tree)</Text>
        <Text style={styles.paragraph}>
          Pohon keputusan sering digunakan dalam pembelajaran mesin untuk klasifikasi atau regresi. Setiap node di pohon keputusan mewakili suatu keputusan berdasarkan atribut tertentu, dan daun (leaf) menyatakan hasil atau klasifikasi akhir.
        </Text>
        <Text style={styles.listItem}>
          - <Text style={styles.bold}>Preorder Traversal:</Text> Digunakan untuk menyusun pohon keputusan, memulai dari root dan melanjutkan ke cabang relevan hingga mencapai hasil akhir. Traversal ini memungkinkan klasifikasi cepat.
        </Text>
        <Text style={styles.listItem}>
          - <Text style={styles.bold}>Postorder Traversal:</Text> Digunakan dalam membangun atau melatih pohon keputusan, memastikan bahwa sub-pohon selesai sebelum memutuskan di node induk.
        </Text>
      </View>

      {/* Kuis Button Section */}
      {!isQuizCompleted ? (
        <TouchableOpacity
          style={styles.quizButton}
          onPress={() => navigation.navigate('Kuis4')} // Navigasi ke halaman Kuis
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

export default Materi4;
