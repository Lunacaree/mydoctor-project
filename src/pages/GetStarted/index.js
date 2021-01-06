import React from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.container}>
      <View>
        <ILLogo />
        <Text style={styles.text}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          type="primary"
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} width={0} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 28,
    fontFamily: 'Nunito-SemiBold',
    color: 'white',
    marginTop: 91,
  },
});
