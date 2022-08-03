import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function RequiredItem({ imageUrl, name, amount, theme }) {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={imageUrl} />
      <Text style={styles.text(theme)}>
        {name} {amount}X
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    backgroundColor: 'red',
  },
  text: (theme) => {
    const textColor = theme == 'Light' ? '#000' : '#fff';
    return {
      marginTop: 6,
      marginBottom: 18,
      color: textColor,
    };
  },
});
