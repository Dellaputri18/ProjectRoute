import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfilPage = () => {
  const navigation = useNavigation();

  const handleShareApp = () => {
    // Tautan untuk membagikan aplikasi
    const appLink = 'https://youtu.be/J21keFquCM8?si=9mS0GbpT5A3CMcn-';
    Alert.alert('Share This App', `\n${appLink}`);
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: 'https://drive.google.com/uc?id=1wBWyehEEiYMd1W1rhszI_OOV9yJi0oQN', // Placeholder untuk avatar
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Wicheriani Galuh</Text>
        <Text style={styles.email}>cece@gmail.com</Text>
      </View>

      {/* General Settings */}
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsHeader}>General Settings</Text>
        <TouchableOpacity
          style={styles.settingsItem}
          onPress={() => navigation.navigate('ChangePassword')}
        >
          <Text style={styles.settingsText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingsItem}
          onPress={() => navigation.navigate('AboutApp')}
        >
          <Text style={styles.settingsText}>About App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem} onPress={handleShareApp}>
          <Text style={styles.settingsText}>Share This App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem} onPress={handleLogout}>
          <Text style={styles.settingsText}>Logout</Text>
        </TouchableOpacity>
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
    backgroundColor: '#2C7364',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#EEEEEE',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  email: {
    fontSize: 14,
    color: '#888',
  },
  settingsContainer: {
    flex: 1,
    backgroundColor: '#2C7364',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  settingsHeader: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  settingsItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  },
  settingsText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default ProfilPage;