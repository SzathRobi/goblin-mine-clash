import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState, useContext } from 'react';
import RequiredItem from '../../components/required-item';
import Button from '../../components/button';
import { SettingsContext } from '../../contexts/settings-context';
import board from '../../assets/board-min.jpg';
import TutorialModal from '../../components/tutorial-modal';

export default function ItemsNeededScreen({ navigation }) {
  const { theme, language } = useContext(SettingsContext);
  const [items, setItems] = useState([
    { image: board, name: 'Frame', amount: 1 },
    { image: board, name: 'Bomb1', amount: 10 },
    { image: board, name: 'Bomb2', amount: 8 },
    { image: board, name: 'Bomb3', amount: 12 },
    { image: board, name: 'Bomb4', amount: 10 },
    { image: board, name: 'Bomb5', amount: 8 },
  ]);

  const info =
    language === 'En'
      ? 'Grab these items from your box! We will need those!'
      : 'Ezekre az elemekre lesz szükséged';

  return (
    <View style={styles.container(theme)}>
      <View style={styles.cardContainer}>
        {items.map((item, index) => (
          <RequiredItem
            key={index}
            imageUrl={item.image}
            name={item.name}
            amount={item.amount}
            theme={theme}
          />
        ))}
      </View>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('BoardSetup')}
      >
        {language === 'En' ? 'Next' : 'Következő'}
      </Button>
      <TutorialModal info={info} />
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
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 400,
    justifyContent: 'space-evenly',
    position: 'relative',
    top: 30,
  },
  button: {
    alignSelf: 'center',
    position: 'relative',
    top: 20,
  },
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
    minHeight: 70,
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
