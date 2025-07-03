import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Untuk navigasi
import { createStackNavigator } from '@react-navigation/stack';
import { LevelProvider } from './LevelContext.js';  // Import LevelProvider
import RegisterPage from './components/register';
import LoginPage from './components/login.js'; // Pastikan path sesuai lokasi file
import HomePage from './components/home.js'; // Import HomePage
import LevelScreen from './components/level.js';
import Materi1 from './components/materi1.js';
import Kuis1 from './components/kuis1.js';
import Materi2 from './components/materi2.js';
import Kuis2 from './components/kuis2.js';
import Materi3 from './components/materi3.js';
import Kuis3 from './components/kuis3.js';
import Materi4 from './components/materi4.js';
import Kuis4 from './components/kuis4.js';
import AssessmentScreen from './components/asesmen.js'; // Tambahkan import untuk asesmen.js
import ResultScreen from './components/resultAsesmen.js'; 
import HasilPage from './components/hasil.js';
import HasilNilai from './components/hasilNilai.js';
import LoadingPage from './components/loading.js';
import ProfilPage from './components/profil.js';
import AboutApp from './components/about.js';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return (
    <LevelProvider>
    <NavigationContainer>
      <Stack.Navigator>
        {/* Layar Login */}
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }} // Hilangkan header bawaan
        />
        {/* Layar Home */}
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }} // Hilangkan header bawaan
        />
        {/* Layar Loading */}
        <Stack.Screen
          name="LoadingPage"
          component={LoadingPage}
          options={{ headerShown: false }}
        />
        {/* Layar Level */}
        <Stack.Screen
          name="LevelScreen"
          component={LevelScreen}
          options={{ headerShown: false }}
        />
        {/* Layar Materi1 */}
        <Stack.Screen
          name="Materi1"
          component={Materi1}
          options={{ headerShown: false }}
        />
        {/* Layar Kuis1 */}
        <Stack.Screen
          name="Kuis1"
          component={Kuis1}
          options={{ headerShown: false }} // Hilangkan header bawaan
        />
        {/* Layar Materi2 */}
        <Stack.Screen
          name="Materi2"
          component={Materi2}
          options={{ headerShown: false }}
        />
        {/* Layar Kuis2 */}
        <Stack.Screen
          name="Kuis2"
          component={Kuis2}
          options={{ headerShown: false }} // Hilangkan header bawaan
        />
        {/* Layar Materi3 */}
        <Stack.Screen
          name="Materi3"
          component={Materi3}
          options={{ headerShown: false }}
        />
        {/* Layar Kuis3 */}
        <Stack.Screen
          name="Kuis3"
          component={Kuis3}
          options={{ headerShown: false }} // Hilangkan header bawaan
        />
        {/* Layar Materi4 */}
        <Stack.Screen
          name="Materi4"
          component={Materi4}
          options={{ headerShown: false }}
        />
        {/* Layar Kuis4 */}
        <Stack.Screen
          name="Kuis4"
          component={Kuis4}
          options={{ headerShown: false }} // Hilangkan header bawaan
        />
        {/* Layar Asesmen */}
        <Stack.Screen
          name="Assessment"
          component={AssessmentScreen} // Menghubungkan ke asesmen.js
          options={{ headerShown: false }} // Hilangkan header bawaan
        />
          <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ headerShown: false }} // Hilangkan header bawaan
        />
        {/* Layar Hasil */}
        <Stack.Screen
          name="Hasil"
          component={HasilPage}
          options={{ headerShown: false }}
        />
        {/* Layar Hasil Nilai */}
        <Stack.Screen
          name="HasilNilai"
          component={HasilNilai}
          options={{ headerShown: false }}
        />
        {/* Layar profil*/}
        <Stack.Screen
          name="Profil"
          component={ProfilPage}
          options={{ headerShown: false }}
        />
        {/* Layar about*/}
        <Stack.Screen
          name="AboutApp"
          component={AboutApp}
          options={{ headerShown: false }}
        />
        {/* Layar Register */}
          <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{ headerShown: false }}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
    </LevelProvider>
  );
};

export default App;