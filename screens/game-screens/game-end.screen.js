import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/button';
import { useContext, useEffect } from 'react';
import { SettingsContext } from '../../contexts/settings-context';
import { GameContext } from '../../contexts/game-context';
import TutorialModal from '../../components/tutorial-modal';

export default function GameEndScreen({ navigation }) {
  const { theme, language } = useContext(SettingsContext);
  const {
    completedLevels,
    getCompletedLevels,
    saveCompletedLevels,
    setCompletedLevels,
    selectedLevel,
    setSelectedLevel,
  } = useContext(GameContext);

  const onBadaboomClick = () => {
    const completedLevelsUpdated = completedLevels.map((completedLevel) => ({
      ...completedLevel,
      completed: completedLevel.level <= selectedLevel + 1 ? true : false,
    }));
    setCompletedLevels(completedLevelsUpdated);
    console.log('completedLevelsUpdated:', completedLevelsUpdated);
    saveCompletedLevels(completedLevelsUpdated);
    navigation.navigate('Levels');
  };

  return (
    <View style={styles.container(theme)}>
      <Text style={styles.text(theme)}>
        {' '}
        {language === 'En' ? 'The End!' : 'Vége'}
      </Text>
      <View style={styles.board(theme)}>
        <Text style={styles.score1(theme)}>12</Text>
        <Text style={styles.score2(theme)}>16</Text>
        <Text style={styles.score3(theme)}>8</Text>
        <Text style={styles.score4(theme)}>19</Text>
        <View style={styles.decorBorderHorizontal}>
          <Text>lol</Text>
        </View>
        <View style={styles.decorBorderVertical}></View>
      </View>
      <Button style={styles.button} onPress={onBadaboomClick}>
        BADABOOM
      </Button>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Level')}
      >
        {language === 'En' ? 'Replace Mines' : 'Aknák Újratelepítése'}
      </Button>
      <TutorialModal info="Now do the math and check who is the winner!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: (theme) => {
    const bgColor = theme == 'Light' ? '#fff' : '#222';
    return {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: bgColor,
    };
  },
  board: (theme) => {
    const borderColor = theme === 'Light' ? '#000' : '#fff';
    return {
      width: 300,
      height: 300,
      borderWidth: 3,
      borderColor: borderColor,
      alignSelf: 'center',
      marginBottom: 40,
    };
  },
  score1: (theme) => {
    const textColor = theme === 'Light' ? '#000' : '#fff';
    return {
      fontSize: 50,
      position: 'absolute',
      top: 40,
      left: 40,
      color: textColor,
    };
  },
  score2: (theme) => {
    const textColor = theme === 'Light' ? '#000' : '#fff';
    return {
      fontSize: 50,
      position: 'absolute',
      top: 40,
      right: 40,
      color: textColor,
    };
  },
  score3: (theme) => {
    const textColor = theme === 'Light' ? '#000' : '#fff';
    return {
      fontSize: 50,
      position: 'absolute',
      bottom: 40,
      right: 40,
      color: textColor,
    };
  },
  score4: (theme) => {
    const textColor = theme === 'Light' ? '#000' : '#fff';
    return {
      fontSize: 50,
      position: 'absolute',
      bottom: 40,
      left: 40,
      color: textColor,
    };
  },
  decorBorderHorizontal: {
    width: 295,
    height: 4,
    backgroundColor: 'red',
    position: 'absolute',
    top: 149,
    left: 0,
    // transform: 'translateY(-50%)',
  },
  decorBorderVertical: {
    width: 4,
    height: 295,
    backgroundColor: 'red',
    position: 'absolute',
    left: 149,
    top: 0,
    // transform: 'translateX(-50%)',
  },
  text: (theme) => {
    const textColor = theme == 'Light' ? '#000' : '#fff';
    return {
      textAlign: 'center',
      alignSelf: 'center',
      marginBottom: 80,
      fontSize: 28,
      color: textColor,
    };
  },
  button: {
    alignSelf: 'center',
    position: 'relative',
    top: 40,
  },
});
