import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBackDark} from '../../../assets';
import {colors} from '../../../utils';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: colors.text.primary,
    fontFamily: 'Nunito-SemiBold',
    flex: 1,
    textAlign: 'center',
  },
});
