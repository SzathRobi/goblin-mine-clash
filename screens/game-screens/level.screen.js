import { View, Image, Text, StyleSheet } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import Button from '../../components/button';
import board from '../../assets/board-min.jpg';
import { SettingsContext } from '../../contexts/settings-context';
import pokemon from '../../assets/pokemon.png';
import Board from '../../components/board';
import TutorialModal from '../../components/tutorial-modal';
import TypeWriter from 'react-native-typewriter/components/typewriter';
import { levelsData } from '../../levels-data/levels-data';

export default function LevelScreen({ navigation }) {
  const [stage, setStage] = useState(1);
  const { theme, language } = useContext(SettingsContext);

  const [currentLevel, setCurrentLevel] = useState('level1');
  const [currentLevelData, setCurrentLevelData] = useState(
    levelsData[`${currentLevel}`],
  );

  const navToNextScreen = () => {
    navigation.navigate('GameEnd');
    setTimeout(() => {
      setStage(1);
    }, 300);
  };

  const updateStage = () => {
    if (stage == currentLevelData.stages) {
      return;
    }
    setStage(stage + 1);
  };

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100),
  );
  const [shouldInsult, setShouldInsult] = useState(false);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100));
    randomNumber < 30 ? setShouldInsult(true) : setShouldInsult(false);
  }, [stage]);

  const [randomPunchLine, setRandomPunchLine] = useState(
    language === 'En'
      ? currentLevelData.enemy.punchLines_EN[0]
      : currentLevelData.enemy.punchLines_HU[0],
  );
  const randomPunchLinePicker = () => {
    setRandomPunchLine(
      language === 'En'
        ? currentLevelData.enemy.punchLines_EN[Math.floor(Math.random() * 3)]
        : currentLevelData.enemy.punchLines_HU[Math.floor(Math.random() * 3)],
    );
  };

  useEffect(() => {
    randomPunchLinePicker();
  }, [shouldInsult]);

  const info =
    language === 'En'
      ? "In Every round, one of the bomb's values will be shown for exatly 4 seconds. Try not to blink until that my friend!"
      : 'Minden kör elején, az egyik bomba értéke 4mp-re felvillan. Próbálj nem pislogni!';

  return (
    <View style={styles.container(theme)}>
      <Text style={styles.rounds(theme)}>
        {language === 'En' ? 'Stage' : 'Kör'}: {stage} /{' '}
        {currentLevelData.stages}
      </Text>
      <Board stage={stage} bombs={currentLevelData.bombs} />
      {shouldInsult && (
        <View style={styles.goblinContainer}>
          <TypeWriter
            typing={1}
            minDelay={0}
            maxDelay={8}
            style={styles.goblinText(theme)}
          >
            {randomPunchLine}
          </TypeWriter>
          <Image style={styles.goblinImage} source={pokemon} />
        </View>
      )}

      {stage < currentLevelData.stages && (
        <Button style={styles.button} onPress={() => updateStage()}>
          {language === 'En' ? 'Next Round' : 'Következő Kör'}
        </Button>
      )}
      {stage == currentLevelData.stages && (
        <Button style={styles.button} onPress={() => navToNextScreen()}>
          BOOM
        </Button>
      )}
      {currentLevel === 'level1' && <TutorialModal info={info} />}
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
  rounds: (theme) => {
    const textColor = theme == 'Light' ? '#000' : '#fff';
    return {
      alignSelf: 'center',
      marginBottom: 10,
      fontSize: 22,
      color: textColor,
    };
  },
  image: {
    width: 300,
    alignSelf: 'center',
    marginBottom: 40,
  },
  goblinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  goblinText: (theme) => {
    const textColor = theme == 'Light' ? '#000' : '#fff';
    return {
      color: textColor,
      width: '70%',
    };
  },
  goblinImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 80,
  },
  button: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
  },
});
