import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({type, title}) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    borderRadius: 10,
    height: 45,
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    marginBottom: 7,
  }),
  text: (type) => ({
    textAlign: 'center',
    paddingVertical: 10,
    color: type == 'primary' ? 'white' : '#112340',
    fontFamily: 'Nunito-Bold',
  }),
});
