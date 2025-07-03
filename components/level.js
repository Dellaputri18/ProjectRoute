import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLevel } from '../LevelContext'; // Import useLevel

const LevelScreen = () => {
  const { completedLevels, completeLevel } = useLevel();  // Get completed levels from context
  const [showPopup, setShowPopup] = useState(false); // Popup visibility
  const [popupType, setPopupType] = useState(''); // 'level' or 'assessment'
  const [fromAssessment, setFromAssessment] = useState(false);  // Flag for assessment completion
  const navigation = useNavigation();

  // This effect will trigger when returning from Assessment screen
  useEffect(() => {
    if (fromAssessment) {
      setPopupType('level'); // Pop-up type is 'level'
      setShowPopup(true); // Show the pop-up
      setFromAssessment(false); // Reset the flag
    }
  }, [fromAssessment]);  // Only run when 'fromAssessment' is true

  // Handles the completion of a level
  const handleLevelPress = (level) => {
    const isAccessible = level <= completedLevels;
    if (isAccessible) {
      if (level === 4) {
        // Before navigating to Assessment, show the confirmation popup
        setPopupType('assessment');
        setShowPopup(true);
      } else {
        completeLevel(level + 1); // Mark next level as completed
        navigation.navigate(`Materi${level + 1}`); // Navigate directly to content based on level
      }
    } else {
      alert('Terkunci', 'Selesaikan level sebelumnya terlebih dahulu.');
    }
  };

  // Handles the confirmation for the assessment popup
  const handleAssessmentConfirm = () => {
    setShowPopup(false);  // Close the pop-up
    navigation.navigate('Assessment'); // Navigate to the Assessment screen
  };

  // Handles the level completion pop-up
  const handleLevelCompletion = () => {
    setShowPopup(false); // Close the pop-up
    // Optionally, navigate to the next level
    navigation.navigate('LevelScreen'); // Or wherever you want to navigate after level completion
  };

  // Render level button with dynamic accessibility based on completed levels
  const renderLevelButton = (title, level) => {
    const isAccessible = level <= completedLevels;
    return (
      <View style={styles.levelContainer}>
        <TouchableOpacity
          style={[styles.levelButton, { backgroundColor: isAccessible ? '#2C7364' : '#E0E0E0' }]}
          onPress={() => handleLevelPress(level)}
          disabled={!isAccessible}
        >
          <Text style={[styles.levelText, { color: isAccessible ? '#FFFFFF' : '#A9A9A9' }]}>{title}</Text>
        </TouchableOpacity>
        {level < 4 && (
          <View
            style={[
              styles.connectorLine,
              { backgroundColor: completedLevels > level ? '#2C7364' : '#E0E0E0' },
            ]}
          />
        )}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ayo, selesaikan levelnya!</Text>
      {renderLevelButton('LEVEL 1\nKONSEP DASAR TREE', 0)}
      {renderLevelButton('LEVEL 2\nBINARY TREE', 1)}
      {renderLevelButton('LEVEL 3\nTREE TRAVERSAL', 2)}
      {renderLevelButton('LEVEL 4\nIMPLEMENTASI', 3)}
      {renderLevelButton('ASESMEN', 4)}

      {/* Pop-Up Modal */}
      <Modal
        visible={showPopup}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowPopup(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.popupContainer}>
            {popupType === 'level' ? (
              <>
                <Text style={styles.popupText}>Yay! Kamu berhasil melewati level ini!</Text>
                <TouchableOpacity
                  style={styles.popupButton}
                  onPress={handleLevelCompletion}
                >
                  <Text style={styles.popupButtonText}>LANJUT</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.popupText}>Apakah Anda yakin akan memulai asesmen? {'\n\n'} Waktu: 15 menit</Text>
                <View style={styles.popupButtonRow}>
                  <TouchableOpacity
                    style={[styles.popupButton, { backgroundColor: '#A9A9A9' }]}
                    onPress={() => setShowPopup(false)}
                  >
                    <Text style={styles.popupButtonText}>BATAL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.popupButton}
                    onPress={handleAssessmentConfirm}
                  >
                    <Text style={styles.popupButtonText}>YA, MULAI</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    marginTop: 60,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2C7364',
  },
  levelContainer: {
    width: '110%',
    alignItems: 'center',
    marginBottom: 20,
  },
  levelButton: {
    width: '80%',
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  levelText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.8,
  },
  connectorLine: {
    width: 15,
    height: 40,
    marginBottom: -30,
    backgroundColor: '#E0E0E0',
  },
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
    width: '45%',
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
});

export default LevelScreen;
