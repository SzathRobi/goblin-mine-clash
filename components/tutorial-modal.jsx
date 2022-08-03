import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';
import TypeWriter from 'react-native-typewriter/components/typewriter';
import pokemon from '../assets/pokemon.png';
import { SettingsContext } from '../contexts/settings-context';

export default function TutorialModal({ info }) {
  const [tutorialVisible, setTutorialVisible] = useState(true);
  const { language } = useContext(SettingsContext);
  return (
    tutorialVisible && (
      <View style={styles.backDrop}>
        <Image source={pokemon} style={styles.pokemon} />
        <TypeWriter
          typing={1}
          minDelay={0}
          maxDelay={8}
          style={styles.tutorialText}
        >
          {info}
        </TypeWriter>
        <TouchableOpacity
          style={styles.okButton}
          onPress={() => setTutorialVisible(false)}
        >
          <Text style={styles.okButtonText}>
            {language === 'En' ? 'Got It!' : 'Rendben'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  backDrop: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000000aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemon: {},
  tutorialText: {
    marginTop: 16,
    minHeight: 90,
    padding: 20,
    backgroundColor: '#fff',
    width: '75%',
    textAlign: 'center',
    borderRadius: 8,
  },
  okButton: {
    backgroundColor: '#beeeef',
    borderRadius: 4,
    marginTop: 30,
    width: '55%',
    padding: 16,
    position: 'relative',
  },
  okButtonText: {
    width: '100%',
    textAlign: 'center',
  },
});
