import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

const BombFour = ({ values, coordinates, rotation, isValuesVisible }) => {
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
        styles.bombFour(coordinates),
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
      </View>
      <View
        style={[
          styles.fourthSection,
          {
            transform: [{ rotate: `${-rotation}deg` }],
          },
        ]}
      >
        <Text style={styles.bombValue(isVisible)}>{values[3]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bombFour: (coordinates) => ({
    width: 44,
    height: 44,
    position: 'absolute',
    top: coordinates.y,
    left: coordinates.x,
  }),
  firstSection: {
    width: 22,
    height: 22,
    backgroundColor: '#f37fa5',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondSection: {
    width: 22,
    height: 22,
    backgroundColor: '#f37fa5',
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thirdSection: {
    width: 22,
    height: 22,
    backgroundColor: '#f37fa5',
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fourthSection: {
    width: 22,
    height: 22,
    backgroundColor: '#f37fa5',
    position: 'absolute',
    top: -22,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bombValue: (isVisible) => ({
    opacity: isVisible ? 1 : 0,
  }),
});

export default BombFour;
