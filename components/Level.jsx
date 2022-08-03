import { View, StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';

export default function Level({ level, navigation, setSelectedLevel }) {
  const startLevel = () => {
    setSelectedLevel(level.level);
    navigation.navigate('LevelIntro');
  };

  return (
    <Pressable
      onPress={startLevel}
      style={styles.level(level.completed, level.level)}
      disabled={!level.completed}
    >
      <Text style={styles.levelText(level.completed, level.level)}>
        {level.level}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  level: (completed, level) => {
    const bgColor = completed || level === 1 ? '#338a3e' : '#ddd';
    return {
      width: 65,
      height: 65,
      margin: 5,
      backgroundColor: bgColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  },
  levelText: (completed, level) => {
    const textColor = completed || level === 1 ? '#fff' : '#000';
    return {
      color: textColor,
    };
  },
});
