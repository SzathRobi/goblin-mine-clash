import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import mineLayer from '../../assets/mine-layer.png';

const BombThree = ({
  values,
  coordinates,
  rotation,
  isValuesVisible = false,
}) => {
  const [isVisible, setIsVisible] = useState(isValuesVisible);
  useEffect(() => {
    setIsVisible(isValuesVisible);
    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  }, [isValuesVisible]);

  return (
    <View
      style={[
        styles.bombThree(coordinates),
        {
          transform: [{ rotate: `${rotation}deg` }],
        },
      ]}
    >
      <View
        style={[
          styles.firstSection,
          {
            transform: [{ rotate: `${-rotation}deg` }],
          },
        ]}
      >
        <Text style={styles.bombValue(isVisible)}>{values[0]}</Text>
        <Image style={styles.image} source={mineLayer} />
      </View>
      <View
        style={[
          styles.secondSection,
          {
            transform: [{ rotate: `${-rotation}deg` }],
          },
        ]}
      >
        <Text style={styles.bombValue(isVisible)}>{values[1]}</Text>
        <Image style={styles.image} source={mineLayer} />
      </View>
      <View
        style={[
          styles.thirdSection,
          {
            transform: [{ rotate: `${-rotation}deg` }],
          },
        ]}
      >
        <Text style={styles.bombValue(isVisible)}>{values[2]}</Text>
        <Image style={styles.image} source={mineLayer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bombThree: (coordinates) => ({
    width: 40,
    height: 40,
    position: 'absolute',
    top: coordinates.y,
    left: coordinates.x,
  }),
  image: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  firstSection: {
    width: 20,
    height: 20,
    backgroundColor: '#f37fa5',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondSection: {
    width: 20,
    height: 20,
    backgroundColor: '#f37fa5',
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thirdSection: {
    width: 20,
    height: 20,
    backgroundColor: '#f37fa5',
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bombValue: (isVisible) => ({
    opacity: isVisible ? 1 : 0,
    zIndex: 2,
  }),
});

export default BombThree;
