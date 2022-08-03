import { View, StyleSheet } from 'react-native';
import Button from '../../components/button';
import { useContext } from 'react';
import { SettingsContext } from '../../contexts/settings-context';
import { GameContext } from '../../contexts/game-context';
import Board from '../../components/board';
import TypeWriter from 'react-native-typewriter/components/typewriter';
import { levelsData } from '../../levels-data/levels-data';

export default function BoardSetupScreen({ navigation }) {
  const { theme, language } = useContext(SettingsContext);
  const { selectedLevel } = useContext(GameContext);
  return (
    <View style={styles.container(theme)}>
      <Board bombs={levelsData[`level${selectedLevel}`].bombs} />
      <TypeWriter
        typing={1}
        minDelay={0}
        maxDelay={8}
        style={styles.text(theme)}
      >
        {language === 'En'
          ? 'Place the enemy mines like you see above, thanks.'
          : 'Helyezd el az aknákat a fent látottak szerint'}
      </TypeWriter>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Level')}
      >
        {language === 'En' ? 'Ready' : 'Kész'}
      </Button>
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
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 320,
    alignSelf: 'center',
    marginBottom: 40,
    resizeMode: 'contain',
  },
  bomb: {
    width: 44,
    height: 22,
    backgroundColor: 'red',
    position: 'absolute',
    top: 42,
    left: 70,
  },
  bomb2: {
    width: 22,
    height: 44,
    backgroundColor: 'red',
    position: 'absolute',
    top: 42,
    left: 70,
  },
  bomb3: {
    width: 22,
    height: 44,
    backgroundColor: 'red',
    position: 'absolute',
    top: 150,
    left: 224,
  },
  bomb4: {
    width: 44,
    height: 22,
    backgroundColor: 'red',
    position: 'absolute',
    top: 128,
    left: 202,
  },
  text: (theme) => {
    const textColor = theme == 'Light' ? '#000' : '#fff';
    return {
      textAlign: 'center',
      alignSelf: 'center',
      marginBottom: 80,
      color: textColor,
      width: '70%',
    };
  },
  button: {
    alignSelf: 'center',
    position: 'relative',
    top: 40,
  },
});
