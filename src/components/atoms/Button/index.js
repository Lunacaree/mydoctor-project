import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

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
    backgroundColor: type === 'primary' ? '#0BCAD4' : '#FFFFFF',
  }),
  text: (type) => ({
    textAlign: 'center',
    paddingVertical: 10,
    color: type == 'primary' ? 'white' : '#112340',
    fontFamily: 'Nunito-Bold',
  }),
});
