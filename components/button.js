import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
const Button = ({ onPress, children, style }) => {
  return (
    <Pressable style={{ ...styles.button, ...style }} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 250,
    padding: 20,
    marginVertical: 20,
    backgroundColor: '#338a3e',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 1,
  },
});
export default Button;

//#338a3e
