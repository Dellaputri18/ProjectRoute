import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLevel } from '../LevelContext';

const Materi3 = () => {
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
        <Text style={styles.levelTitle}>LEVEL 3</Text>
        <Text style={styles.topicTitle}>
          Tree Traversal <Text style={styles.topicHighlight}>Binary Tree</Text>
        </Text>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Tree traversal adalah proses mengunjungi setiap node dalam pohon secara sistematis. Dalam binary tree, ada tiga metode traversal utama: Preorder, Inorder, dan Postorder.
        </Text>
        <Image
          source={require('../images/img1.jpg')} // Ganti dengan path file lokal Anda
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.sectionTitle}>Preorder Traversal (Root, Left, Right)</Text>
        <Text style={styles.paragraph}>
          Pada traversal preorder, kita mengunjungi node dalam urutan:
        </Text>
        <Text style={styles.listItem}>1. Root terlebih dahulu</Text>
        <Text style={styles.listItem}>2. Subtree kiri secara rekursif</Text>
        <Text style={styles.listItem}>3. Subtree kanan secara rekursif</Text>
        <Text style={styles.paragraph}>
          Hasil Preorder: **1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 13, 7, 14, 15**
        </Text>

        <Text style={styles.sectionTitle}>Inorder Traversal (Left, Root, Right)</Text>
        <Text style={styles.paragraph}>
          Pada traversal inorder, kita mengunjungi node dalam urutan:
        </Text>
        <Text style={styles.listItem}>1. Subtree kiri terlebih dahulu</Text>
        <Text style={styles.listItem}>2. Root</Text>
        <Text style={styles.listItem}>3. Subtree kanan</Text>
        <Text style={styles.paragraph}>
          Hasil Inorder: **8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7, 15**
        </Text>

        <Text style={styles.sectionTitle}>Postorder Traversal (Left, Right, Root)</Text>
        <Text style={styles.paragraph}>
          Pada traversal postorder, kita mengunjungi node dalam urutan:
        </Text>
        <Text style={styles.listItem}>1. Subtree kiri terlebih dahulu</Text>
        <Text style={styles.listItem}>2. Subtree kanan berikutnya</Text>
        <Text style={styles.listItem}>3. Root di akhir</Text>
        <Text style={styles.paragraph}>
          Hasil Postorder: **8, 9, 4, 10, 11, 5, 2, 12, 13, 6, 14, 15, 7, 3, 1**
        </Text>
      </View>

      {/* Kuis Button Section */}
      {!isQuizCompleted ? (
        <TouchableOpacity
          style={styles.quizButton}
          onPress={() => navigation.navigate('Kuis3')}
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
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C7364',
    marginBottom: 8,
  },
  listItem: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 8,
    textAlign: 'justify',
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

export default Materi3;
