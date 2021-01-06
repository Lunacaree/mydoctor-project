import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    borderRadius: 10,
    height: 45,
    marginBottom: 8,
    backgroundColor:
      type === 'primary'
        ? colors.button.primary.background
        : colors.button.secondary.background,
  }),
  text: (type) => ({
    textAlign: 'center',
    paddingVertical: 10,
    color:
      type == 'primary'
        ? colors.button.primary.text
        : colors.button.secondary.text,
    fontFamily: 'Nunito-Bold',
  }),
});
