import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, FormData, Gap, Header} from '../../components';

const Register = () => {
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" />
      <View style={styles.container}>
        <FormData title="Full Name" />
        <Gap height={24} />
        <FormData title="Pekerjaan" />
        <Gap height={24} />
        <FormData title="Email Address" />
        <Gap height={24} />
        <FormData title="Password" />
        <Gap height={40} />
        <Button title="Continue" type="primary" />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    padding: 40,
    paddingTop: 0,
  },
});
