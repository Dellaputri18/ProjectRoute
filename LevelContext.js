// LevelContext.js
import React, { createContext, useState, useContext } from 'react';

// Membuat Context untuk level yang sudah selesai
const LevelContext = createContext();

// Hook untuk menggunakan context
export const useLevel = () => useContext(LevelContext);

// Provider untuk membungkus aplikasi dengan status level
export const LevelProvider = ({ children }) => {
  const [completedLevels, setCompletedLevels] = useState(0); // Menyimpan level yang sudah selesai

  // Fungsi untuk mengupdate level yang telah selesai
  const completeLevel = (level) => {
    setCompletedLevels((prev) => Math.max(prev, level)); // Set level maksimal yang selesai
  };

  return (
    <LevelContext.Provider value={{ completedLevels, completeLevel }}>
      {children}
    </LevelContext.Provider>
  );
};
