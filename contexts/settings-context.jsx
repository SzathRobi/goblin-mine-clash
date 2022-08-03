import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SettingsContext = createContext(null);

function SettingsWrapper({ children }) {
  const [username, setUsername] = useState('Miner');
  const updateUsername = (value) => {
    setUsername(value);
    saveData('username', value);
  };

  const [theme, setTheme] = useState('Light');
  const updateTheme = () => {
    setTheme(theme == 'Light' ? 'Dark' : 'Light');
    saveData('theme', theme === 'Light' ? 'Dark' : 'Light');
  };

  const [difficulty, setDifficulty] = useState('Easy');
  const updateDifficulty = () => {
    if (difficulty == 'Easy') {
      setDifficulty('Medium');
      saveData('difficulty', 'Medium');
    } else if (difficulty == 'Medium') {
      setDifficulty('Hard');
      saveData('difficulty', 'Hard');
    } else {
      /* (difficulty == 'Hard')*/
      setDifficulty('Easy');
      saveData('difficulty', 'Easy');
    }
  };

  const [insults, setInsults] = useState('On');
  const toggleInsults = () => {
    setInsults(insults === 'On' ? 'Off' : 'On');
    saveData('insults', insults === 'On' ? 'Off' : 'On');
  };

  const [language, setLanguage] = useState('En');
  const toggleLanguage = () => {
    setLanguage(language === 'En' ? 'Hu' : 'En');
    saveData('language', language === 'En' ? 'Hu' : 'En');
  };

  //const [settings, setSettings] = useState({
  let settingsFunctions = {
    setUsername,
    updateDifficulty,
    toggleInsults,
    toggleLanguage,
    updateTheme,
  };
  let settings = {
    username,
    difficulty,
    insults,
    language,
    theme,
  };

  const saveData = async (name, value) => {
    try {
      await AsyncStorage.setItem(name, value.toString());
    } catch (error) {
      console.log(error);
      // saving error
    }
  };

  const [settingsValues, setSettingsValues] = useState(settings);

  const getAllData = async () => {
    try {
      const usernameData = (await AsyncStorage.getItem('username')) || 'Miner';
      const difficultyData =
        (await AsyncStorage.getItem('difficulty')) || 'Medium';
      const themeData = (await AsyncStorage.getItem('theme')) || 'light';
      const insultsData = (await AsyncStorage.getItem('insults')) || 'On';
      const languageData = (await AsyncStorage.getItem('language')) || 'En';

      setUsername(usernameData);
      setDifficulty(difficultyData);
      setTheme(themeData);
      setInsults(insultsData);
      setLanguage(languageData);
    } catch (error) {
      console.log(error);
      // error reading data
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        settingsFunctions,
        settingsValues,
        username,
        difficulty,
        insults,
        language,
        theme,
        updateUsername,
        updateTheme,
        updateDifficulty,
        toggleInsults,
        toggleLanguage,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsWrapper;
