import React from 'react';
import {Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, FormData, Gap, Link} from '../../components';
import {StyleSheet} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
      <FormData title="Email Address" />
      <Gap height={24} />
      <FormData title="Password" />
      <Link title="Forgot My Password" size={14} />
      <Gap height={40} />
      <Button title="Sign In" type="primary" />
      <Gap height={40} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
  },
  text: {
    fontFamily: 'Nunito-SemiBold',
    fontWeight: `600`,
    fontSize: 20,
    maxWidth: 153,
    marginTop: 40,
    marginBottom: 40,
  },
});
