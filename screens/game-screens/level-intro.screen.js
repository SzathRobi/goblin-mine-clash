import { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Button from '../../components/button';
import { SettingsContext } from '../../contexts/settings-context';
import pokemon from '../../assets/pokemon.png';
import TypeWriter from 'react-native-typewriter';

export default function LevelIntroScreen({ navigation }) {
  const { theme, language } = useContext(SettingsContext);
  return (
    <View style={styles.container(theme)}>
      <TypeWriter
        typing={1}
        minDelay={0}
        maxDelay={8}
        style={styles.villainIntro(theme)}
      >
        {language === 'En'
          ? 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer!'
          : ' a színes epce kozott szerentes túrók nyúzott statára, de nem talank az ifil málnomos magalok gernájára borcos öldögöt sebelet vedéknek. - Ezenfelül, a színes epce rező dalvázt nem izál arra vonatkozóan!'}
      </TypeWriter>
      <Image source={pokemon} style={styles.image} />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('ItemsNeeded')}
      >
        {language === 'En' ? 'Next' : 'Következő'}
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
  villainIntro: (theme) => {
    const textColor = theme == 'Light' ? '#000' : '#fff';
    return {
      textAlign: 'center',
      paddingHorizontal: 40,
      marginBottom: 40,
      color: textColor,
    };
  },
  image: {
    alignSelf: 'center',
    marginBottom: 80,
  },
  button: {
    alignSelf: 'center',
    position: 'relative',
    top: 40,
  },
});
