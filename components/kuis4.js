import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Kuis4 = () => {
  const navigation = useNavigation();

  const questions = [
    { id: 1, text: 'Preorder traversal sangat berguna dalam pengiriman perintah dari CEO ke seluruh anggota organisasi.', answer: true },
    { id: 2, text: 'Pohon keputusan digunakan untuk menyusun hierarki organisasi.', answer: false },
    { id: 3, text: 'Postorder traversal digunakan dalam penyusunan laporan dari bawahan ke atasan.', answer: true },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds
  const [modalVisible, setModalVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  const [showIncompleteModal, setShowIncompleteModal] = useState(false);

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

  const handleAnswer = (isTrue) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: isTrue });
    if (questions[currentQuestion].answer === isTrue) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleNext = () => {
    if (selectedAnswers[currentQuestion] === undefined) {
      setShowIncompleteModal(true); // Show incomplete modal if no answer is selected
    } else {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1); // Move to next question
      } else {
        setModalVisible(true); // Show modal when quiz finishes
      }
    }
  };

  const handleFinish = () => {
    setShowModal(true);
    setIsPassed(correctAnswers === questions.length);
    setModalVisible(false);
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setShowModal(false);
    setTimeLeft(5 * 60); // Reset timer
    setSelectedAnswers({});
  };

  const handleNavigation = () => {
    navigation.navigate('LevelScreen'); // Navigate to LevelScreen
  };

  const handleBackToMaterial = () => {
    navigation.navigate('MateriScreen'); // Navigate to MateriScreen
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>KUIS</Text>

      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${((currentQuestion + 1) / questions.length) * 100}%` }]} />
      </View>

      {/* Question Counter & Timer */}
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
        <Text style={styles.questionText}>{questions[currentQuestion].text}</Text>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedAnswers[currentQuestion] === true && styles.selectedOption,
          ]}
          onPress={() => handleAnswer(true)}
        >
          <Text style={styles.optionText}>BENAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedAnswers[currentQuestion] === false && styles.selectedOption,
          ]}
          onPress={() => handleAnswer(false)}
        >
          <Text style={styles.optionText}>SALAH</Text>
        </TouchableOpacity>
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
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Image source={{ uri: 'https://drive.google.com/uc?id=1K-ggji4a4zW-7PihokzHCSCgoc-tdERn' }} style={styles.navIcon} />
        </TouchableOpacity>
      </View>

      {/* Modal for Incomplete Answer */}
      <Modal
        transparent={true}
        visible={showIncompleteModal}
        animationType="fade"
        onRequestClose={() => setShowIncompleteModal(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.popupContainer}>
            <Text style={styles.popupText}>Ada soal yang belum terjawab, silakan kembali ke soal tersebut.</Text>
            <TouchableOpacity style={styles.popupButton} onPress={() => setShowIncompleteModal(false)}>
              <Text style={styles.popupButtonText}>KEMBALI KE SOAL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal for Finish Confirmation */}
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

      {/* Modal for Result */}
      <Modal
        transparent={true}
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.popupContainer}>
            {isPassed ? (
              <>
                <Text style={styles.popupText}>Yay! Kamu berhasil menjawab semua soal!</Text>
                <TouchableOpacity style={styles.popupButton} onPress={handleNavigation}>
                  <Text style={styles.popupButtonText}>KEMBALI</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.popupText}>Kamu belum berhasil menjawab semua soal, coba lagi ya!</Text>
                <View style={styles.popupButtonRow}>
                  <TouchableOpacity style={styles.popupButton} onPress={handleRetry}>
                    <Text style={styles.popupButtonText}>COBA LAGI</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.popupButton} onPress={handleBackToMaterial}>
                    <Text style={styles.popupButtonText}>KE MATERI</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
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
    letterSpacing: 1.4,
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
  navIcon: { width: 30, height: 30 },
  nextButton: { marginLeft: 'auto' },
  navButtonContainer: { flex: 1 },
  modalBackground: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  popupContainer: { width: 300, backgroundColor: '#fff', padding: 20, borderRadius: 10, alignItems: 'center' },
  popupText: { fontSize: 20, color: '#004d40', textAlign: 'center', marginBottom: 20 },
  popupButtonRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  popupButton: { flex: 1, backgroundColor: '#336b60', padding: 10, borderRadius: 5, marginHorizontal: 5, alignItems: 'center' },
  popupButtonText: { color: 'white', fontSize: 18 },
});

export default Kuis4;
