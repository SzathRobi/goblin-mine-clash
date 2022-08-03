import { View, StyleSheet, Image } from 'react-native';
import React from 'react';
import BombThree from './bombs/bomb-three';
import BombFour from './bombs/bomb-four';
import board from '../assets/board-min.jpg';

const Board = ({ stage, bombs }) => {
  const setVisible = (condition) => {
    setTimeout(() => {
      return false;
    }, 3000);
    return true;
  };

  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={board} />
      {bombs &&
        bombs.map((bomb, index) => {
          return bomb.type === 3 ? (
            <BombThree
              key={index}
              values={bomb.values}
              coordinates={bomb.coordinates}
              rotation={bomb.rotation}
              isValuesVisible={stage == index + 1}
            />
          ) : (
            <BombFour
              key={index}
              values={bomb.values}
              coordinates={bomb.coordinates}
              rotation={bomb.rotation}
              isValuesVisible={stage === 4}
            />
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 320,
    alignSelf: 'center',
    marginBottom: 40,
    resizeMode: 'contain',
  },
});

export default Board;
