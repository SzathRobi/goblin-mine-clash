import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useContext } from 'react';
import { GameContext } from '../contexts/game-context';
import Level from '../components/Level';
import { SettingsContext } from '../contexts/settings-context';

export default function LevelsScreen({ navigation }) {
  const { completedLevels, selectedLevel, setSelectedLevel } =
    useContext(GameContext);
  const { theme, language } = useContext(SettingsContext);

  return (
    <View style={styles.container(theme)}>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText(theme)}>{`<-- ${
          language === 'En' ? 'Back' : 'Vissza'
        }`}</Text>
      </Pressable>
      <View style={styles.grid}>
        {completedLevels.map((level) => (
          <Level
            key={level.level}
            level={level}
            navigation={navigation}
            setSelectedLevel={setSelectedLevel}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (theme) => {
    const bgColor = theme == 'Light' ? '#fff' : '#222';
    return {
      flex: 1,
      backgroundColor: bgColor,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    };
  },
  backButton: {
    position: 'absolute',
    top: 45,
    left: 40,
  },
  backButtonText: (theme) => {
    const textColor = theme == 'Light' ? '#000' : '#fff';
    return {
      color: textColor,
      fontSize: 18,
    };
  },
  grid: {
    maxWidth: 320,
    margin: 'auto',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'center',
    flexWrap: 'wrap',
    position: 'relative',
    top: 40,
  },
});
