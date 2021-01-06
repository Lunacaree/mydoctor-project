import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const FormData = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <TextInput style={styles.inputForm} />
    </View>
  );
};

export default FormData;

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: 'Nunito-SemiBold',
    color: '#7D8797',
  },
  inputForm: {
    borderWidth: 1,
    borderColor: '#E9E9E9',
    padding: 12,
    borderRadius: 10,
    marginBottom: 6,
  },
});
