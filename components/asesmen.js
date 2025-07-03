import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';

const AssessmentScreen = ({ navigation }) => {
  const questions = [
    {
      question: 'Dalam implementasi pohon keputusan, apa yang biasanya direpresentasikan oleh daun (leaf node)?',
      options: ['Keputusan akhir atau hasil', 'Node tertinggi dalam pohon', 'Node yang tidak memiliki anak', 'Jumlah anak maksimal dalam pohon'],
      correctAnswer: 'Keputusan akhir atau hasil',
    },
    {
      question: 'Dalam struktur data pohon, apakah yang disebut dengan “root” (akar)?',
      options: ['Node tertinggi dalam pohon yang tidak memiliki induk (parent)', 'Node yang tidak memiliki anak', 'Jumlah maksimal anak', 'Urutan kunjungan node'],
      correctAnswer: 'Node tertinggi dalam pohon yang tidak memiliki induk (parent)',
    },
    {
      question: 'Apakah yang dimaksud dengan “leaf” (daun) dalam struktur data pohon?',
      options: ['Node yang tidak memiliki anak', 'Node tertinggi dalam pohon', 'Keputusan akhir', 'Urutan traversal preorder'],
      correctAnswer: 'Node yang tidak memiliki anak',
    },
    {
      question: 'Pada pohon biner, berapa jumlah maksimal anak yang dapat dimiliki oleh sebuah node?',
      options: ['1', '2', '3', 'Tidak terbatas'],
      correctAnswer: '2',
    },
    {
      question: 'Manakah dari pernyataan berikut yang benar tentang pohon biner?',
      options: [
        'Pohon biner bisa tidak seimbang, dengan satu sisi yang lebih panjang dari sisi lain',
        'Jumlah anak tidak terbatas',
        'Node selalu memiliki anak',
        'Tidak ada traversal preorder',
      ],
      correctAnswer: 'Pohon biner bisa tidak seimbang, dengan satu sisi yang lebih panjang dari sisi lain',
    },
    {
      question: 'Dalam traversal preorder, urutan kunjungan node adalah?',
      options: [
        'Kunjungi root terlebih dahulu, kemudian subtree kiri, lalu subtree kanan',
        'Kunjungi subtree kiri dan kanan terlebih dahulu, lalu root',
        'Traversal secara horizontal',
        'Tidak ada aturan khusus',
      ],
      correctAnswer: 'Kunjungi root terlebih dahulu, kemudian subtree kiri, lalu subtree kanan',
    },
    {
      question: 'Dalam traversal postorder, urutan kunjungan node adalah?',
      options: [
        'Kunjungi subtree kiri dan kanan terlebih dahulu, lalu root',
        'Kunjungi root terlebih dahulu, kemudian subtree kiri, lalu subtree kanan',
        'Traversal secara horizontal',
        'Node tertinggi terlebih dahulu',
      ],
      correctAnswer: 'Kunjungi subtree kiri dan kanan terlebih dahulu, lalu root',
    },
    {
      question: 'Algoritma Huffman digunakan untuk?',
      options: ['Mengkompres data menggunakan kode berbasis frekuensi', 'Mengurutkan data', 'Mengelola memori', 'Menemukan jalur terpendek'],
      correctAnswer: 'Mengkompres data menggunakan kode berbasis frekuensi',
    },
    {
      question: 'Apa yang dimaksud dengan pohon biner seimbang?',
      options: [
        'Perbedaan kedalaman antara subtree kiri dan kanan tidak lebih dari satu',
        'Hanya memiliki satu anak pada setiap node',
        'Jumlah anak terbatas',
        'Kedalaman sama pada setiap level'
      ],
      correctAnswer: 'Perbedaan kedalaman antara subtree kiri dan kanan tidak lebih dari satu',
    },
    {
      question: 'Apa yang dimaksud dengan traversal inorder?',
      options: [
        'Subtree kiri, root, subtree kanan',
        'Root, subtree kiri, dan kanan',
        'Hanya mengunjungi subtree kanan',
        'Tidak melibatkan kunjungan ke subtree'
      ],
      correctAnswer: 'Subtree kiri, root, subtree kanan',
    }     
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 menit dalam detik
  const [modalVisible, setModalVisible] = useState(false);
  const [scoreModalVisible, setScoreModalVisible] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [incompleteModalVisible, setIncompleteModalVisible] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      handleFinish();
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleOptionPress = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: option });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Check if all questions are answered
      if (Object.keys(selectedAnswers).length < questions.length) {
        setIncompleteModalVisible(true); // Show modal if not all questions are answered
      } else {
        setModalVisible(true); // Show the custom modal for finishing
      }
    }
  };

  const handleFinish = () => {
    let calculatedScore = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        calculatedScore += 100 / questions.length;
      }
    });

    setFinalScore(calculatedScore); // Set the final score
    setModalVisible(false); // Close the finish modal
    setScoreModalVisible(true); // Show the score modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ASSESMEN</Text>

      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${((currentQuestion + 1) / questions.length) * 100}%` }]} />
      </View>

      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.questionCount}>
          <Text style={{ fontWeight: 'bold' }}>Soal {currentQuestion + 1} dari {questions.length}</Text>
        </Text>
        <View style={styles.timerContainer}>
          <Image source={{ uri: 'https://drive.google.com/uc?id=1hcz4c44jMXt0sJ_kHrT27nLHIyuGEEU0' }} style={styles.timerIcon} />
          <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
        </View>
      </View>

      {/* Question */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswers[currentQuestion] === option && styles.selectedOption,
            ]}
            onPress={() => handleOptionPress(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navigationRow}>
        <View style={styles.navButtonContainer}>
          {currentQuestion > 0 && (
            <TouchableOpacity onPress={() => setCurrentQuestion(currentQuestion - 1)}>
              <Image source={{ uri: 'https://drive.google.com/uc?id=1duFTS4ps0ZiJgTx_Y4nm8VyHb4h_0VdW' }} style={styles.navIcon} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity onPress={handleNext}>
          <Image source={{ uri: 'https://drive.google.com/uc?id=1K-ggji4a4zW-7PihokzHCSCgoc-tdERn' }} style={styles.navIcon} />
        </TouchableOpacity>
      </View>

      {/* Modal for Incomplete Answers */}
      <Modal
        transparent={true}
        visible={incompleteModalVisible}
        animationType="fade"
        onRequestClose={() => setIncompleteModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.popupContainer}>
            <Text style={styles.popupText}>Tolong jawab semua soal sebelum melanjutkan.</Text>
            <View style={styles.popupButtonRowCenter}>
              <TouchableOpacity style={styles.popupButton} onPress={() => setIncompleteModalVisible(false)}>
                <Text style={styles.popupButtonText}>Kembali</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal for Confirmation */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.popupContainer}>
            <Text style={styles.popupText}>Anda yakin selesai?</Text>
            <View style={styles.popupButtonRow}>
              <TouchableOpacity style={styles.popupButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.popupButtonText}>Tidak</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.popupButton} onPress={handleFinish}>
                <Text style={styles.popupButtonText}>Ya</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal for Score */}
      <Modal
        transparent={true}
        visible={scoreModalVisible}
        animationType="fade"
        onRequestClose={() => setScoreModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.popupContainer}>
            <Text style={styles.finalScore}>Skor Anda: 100</Text>
            <View style={styles.popupButtonRowCenter}>
              <TouchableOpacity style={styles.popupButton} onPress={() => navigation.navigate('Result')}>
                <Text style={styles.popupButtonText}>Kembali</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#336b60', padding: 20 },
  title: {
    fontSize: 40,
    marginTop: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  progressBar: { height: 15, backgroundColor: '#ccc', borderRadius: 10, overflow: 'hidden', marginVertical: 10 },
  progress: { height: '100%', backgroundColor: '#a5d6a7' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  questionCount: { color: '#fff', fontSize: 18 },
  timerContainer: { flexDirection: 'row', alignItems: 'center' },
  timerIcon: { width: 24, height: 24, marginRight: 5 },
  timerText: { fontSize: 18, color: 'white', fontWeight: 'bold' },
  questionContainer: { backgroundColor: '#bcdcdc', marginTop: 20, padding: 25, borderRadius: 10, marginBottom: 20 },
  questionText: { fontSize: 20, fontWeight: 'bold', color: '#004d40', textAlign: 'center' },
  optionsContainer: { marginBottom: 25 },
  optionButton: { backgroundColor: '#cfe8e8', padding: 18, borderRadius: 10, marginVertical: 10 },
  selectedOption: { backgroundColor: '#a5d6a7' },
  optionText: { fontSize: 18, fontWeight: 'semibold', color: '#004d40', textAlign: 'center' },
  navigationRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  navButtonContainer: { flex: 1, alignItems: 'flex-start' },
  navIcon: { width: 50, height: 50, marginLeft: 30, marginRight: 30 },

  // Modal Styles
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  popupText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2C7364',
  },
  popupButton: {
    width: '40%',
    backgroundColor: '#2C7364',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  popupButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  popupButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  popupButtonRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  finalScore: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C7364',
    marginBottom: 20,
  },
});

export default AssessmentScreen;
