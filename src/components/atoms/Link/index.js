import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Link = ({title, size, align}) => {
  return <Text style={styles.text(size, align)}>{title}</Text>;
};

export default Link;

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: '#7D8797',
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
