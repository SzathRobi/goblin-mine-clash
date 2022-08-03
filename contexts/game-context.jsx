import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GameContext = createContext(null);

function GameWrapper({ children }) {
  const levelsData = [
    { level: 1, completed: true },
    { level: 2, completed: false },
    { level: 3, completed: false },
    { level: 4, completed: false },
    { level: 5, completed: false },
    { level: 6, completed: false },
    { level: 7, completed: false },
    { level: 8, completed: false },
    { level: 9, completed: false },
    { level: 10, completed: false },
    { level: 11, completed: false },
    { level: 12, completed: false },
    { level: 13, completed: false },
    { level: 14, completed: false },
    { level: 15, completed: false },
    { level: 16, completed: false },
    { level: 17, completed: false },
    { level: 18, completed: false },
    { level: 19, completed: false },
    { level: 20, completed: false },
    { level: 21, completed: false },
    { level: 22, completed: false },
    { level: 23, completed: false },
    { level: 24, completed: false },
    { level: 25, completed: false },
    { level: 26, completed: false },
    { level: 27, completed: false },
    { level: 28, completed: false },
    { level: 29, completed: false },
    { level: 30, completed: false },
  ];

  const [completedLevels, setCompletedLevels] = useState(levelsData);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const getCompletedLevels = async () => {
    try {
      const completedLevelsData =
        (await AsyncStorage.getItem('completedLevels')) || levelsData;
      const completedLevel = await JSON.parse(completedLevelsData);
      setCompletedLevels(completedLevel);
    } catch (error) {
      console.log(error);
      // error reading data
    }
  };

  const saveCompletedLevels = async (completedLevels) => {
    try {
      await AsyncStorage.setItem(
        'completedLevels',
        JSON.stringify(completedLevels),
      );
    } catch (error) {
      console.log(error);
      // saving error
    }
  };

  useEffect(() => {
    getCompletedLevels();
  }, []);

  return (
    <GameContext.Provider
      value={{
        completedLevels,
        getCompletedLevels,
        saveCompletedLevels,
        setCompletedLevels,
        selectedLevel,
        setSelectedLevel,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameWrapper;
