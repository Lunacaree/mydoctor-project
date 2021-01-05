import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({type, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#0BCAD4',
    borderRadius: 10,
    paddingVertical: 10,
  },
});
