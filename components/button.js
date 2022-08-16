import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPress}>
      <LinearGradient
        colors={['#84cc16', '#5c9c02']}
        style={styles.linearGradient}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 250,
    marginVertical: 20,
    backgroundColor: '#338a3e',
    borderRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  linearGradient: {
    width: 250,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 1,
  },
});
export default Button;

//#338a3e

/**
 *          
         .btn-grad {
            background-image: linear-gradient(to right, #1D976C 0%, #93F9B9  51%, #1D976C  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          
          */
