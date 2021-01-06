import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../../../utils';

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
    color: colors.text.secondary,
  },
  inputForm: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
    borderRadius: 10,
    marginBottom: 6,
  },
});
