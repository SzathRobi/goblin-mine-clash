import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from '../components/button';
import { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../contexts/settings-context';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen({ navigation, route }) {
  //  const { someprop } = route.params;
  const {
    settings,
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
  } = useContext(SettingsContext);

  const getDifficulty = () => {
    if (language === 'En') {
      return difficulty;
    } else {
      if (difficulty === 'Easy') return 'Könnyű';
      if (difficulty === 'Medium') return 'Közepes';
      if (difficulty === 'Hard') return 'Nehéz';
    }
  };
  const getInsults = () => {
    if (language === 'En') {
      return insults;
    } else {
      if (insults === 'On') return 'Be';
      if (insults === 'Off') return 'Ki';
    }
  };
  const getTheme = () => {
    if (language === 'En') {
      return theme;
    } else {
      if (theme === 'Light') return 'Világos';
      if (theme === 'Dark') return 'Sötét';
    }
  };

  useEffect(() => {
    getDifficulty();
    getInsults();
    getTheme();
  }, [language]);

  return (
    <View style={styles.container(theme)}>
      <View style={styles.label}>
        <LinearGradient
          colors={['#84cc16', '#5c9c02']}
          style={styles.linearGradient}
        >
          <Text style={styles.labelText}>
            {language === 'En' ? 'Name: ' : 'Név'}
          </Text>
          <TextInput
            onChangeText={updateUsername}
            value={username}
            maxLength={10}
            style={styles.input}
          />
        </LinearGradient>
      </View>
      <Button onPress={() => updateDifficulty()}>
        {language === 'En' ? 'Difficulty' : 'Nehézség'}:{getDifficulty()}
      </Button>
      <Button onPress={() => updateTheme()}>
        {language === 'En' ? 'Theme' : 'Téma'}:{getTheme()}
      </Button>
      <Button onPress={() => toggleInsults()}>
        {language === 'En' ? 'Punchlines' : 'Beszólások'}:{getInsults()}
      </Button>
      <Button onPress={() => toggleLanguage()}>
        {language === 'En' ? 'Language' : 'Nyelv'}:{language.toUpperCase()}
      </Button>
      <Button onPress={() => navigation.navigate('Home')}>
        {language === 'En' ? 'Menu' : 'Menü'}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  title: (theme) => {
    const textColor = theme == 'Light' ? '#111' : '#fff';
    return {
      color: textColor,
      fontSize: 24,
    };
  },
  container: (theme) => {
    const bgColor = theme == 'Light' ? '#d8f7cc' : '#013220';
    return {
      flex: 1,
      backgroundColor: bgColor,
      alignItems: 'center',
      justifyContent: 'center',
    };
  },
  label: {
    position: 'relative',
    width: 250,
    marginVertical: 20,
    backgroundColor: '#338a3e',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 5,
  },
  linearGradient: {
    width: 250,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    color: '#fff',
    fontSize: 18,
    position: 'relative',
    right: 35,
  },
  input: {
    textAlign: 'left',
    paddingLeft: 105,
    color: '#fff',
    fontSize: 18,
    position: 'absolute',
    top: 20,
    width: '100%',
    height: '100%',
  },
});
