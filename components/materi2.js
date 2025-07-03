import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLevel } from '../LevelContext';

const Materi2 = () => {
  const { completeLevel } = useLevel();
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const navigation = useNavigation();

  const handleQuizCompletion = () => {
    setIsQuizCompleted(true);
    completeLevel(1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.levelTitle}>LEVEL 2</Text>
        <Text style={styles.topicTitle}>
          Binary <Text style={styles.topicHighlight}>Tree</Text>
        </Text>
      </View>
    
      {/* Content Section */}
      <View style={styles.content}>
        {/* Image Section */}
        <Text style={styles.paragraph}>
            Binary tree adalah jenis struktur data pohon di mana setiap node hanya memiliki paling banyak dua child (anak).
            Child tersebut sering disebut sebagai left child (anak kiri) dan right child (anak kanan). Binary tree digunakan
            secara luas dalam berbagai aplikasi komputasi, seperti pencarian, pengurutan, dan manajemen data.
        </Text>
        <Image
          source={require('../images/img1.jpg')} // Ganti dengan path file lokal Anda
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.paragraph}>
          Gambar diatas menunjukkan contoh binary tree sempurna, di mana setiap node memiliki paling banyak dua anak,
          dan semua leaf (node terminal) berada pada level yang sama.
        </Text>

        {/* Materi Penjelasan */}
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Root (Akar):</Text> Node 1 adalah root dari pohon. Ini adalah node tertinggi dan tidak memiliki parent.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Node (Simpul) Internal:</Text> Setiap node yang memiliki anak disebut node internal. Contoh node internal adalah:
        </Text>
        <Text style={styles.listItem}>
          - Node 1: Memiliki dua anak, yaitu node 2 (left child) dan node 3 (right child).
        </Text>
        <Text style={styles.listItem}>
          - Node 2: Memiliki dua anak, yaitu node 4 (left child) dan node 5 (right child).
        </Text>
        <Text style={styles.listItem}>
          - Node 3: Memiliki dua anak, yaitu node 6 (left child) dan node 7 (right child).
        </Text>
        <Text style={styles.listItem}>
          - Node 4, Node 5, Node 6, Node 7 juga memiliki anak-anak masing-masing.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Leaf (Daun):</Text> Node yang tidak memiliki anak disebut leaf. Dalam gambar, node 8, 9, 10, 11, 12, 13, 14, dan 15
          adalah leaf. Mereka berada di level terendah dari pohon dan tidak memiliki child.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Left Child dan Right Child:</Text> Setiap node internal memiliki anak kiri (left child) dan anak kanan (right child),
          seperti:
        </Text>
        <Text style={styles.listItem}>
          - Node 1 memiliki Node 2 (left child) dan Node 3 (right child).
        </Text>
        <Text style={styles.listItem}>
          - Node 2 memiliki Node 4 (left child) dan Node 5 (right child), dan seterusnya.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Subtree:</Text> Setiap node bersama anak-anaknya membentuk subtree. Misalnya, subtree dengan root node 2 terdiri dari
          node 2, 4, 5, dan semua anak-anak mereka (8, 9, 10, 11).
        </Text>
      </View>

      {/* Kuis Button Section */}
      {!isQuizCompleted ? (
        <TouchableOpacity
          style={styles.quizButton}
          onPress={() => navigation.navigate('Kuis2')}
        >
          <Text style={styles.quizButtonText}>Mulai Kuis</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.quizButtonText}>Kuis Selesai!</Text>
      )}

      {/* Status Update Section */}
      {isQuizCompleted && (
        <TouchableOpacity
          style={styles.quizButton}
          onPress={handleQuizCompletion}
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
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
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

export default Materi2;
