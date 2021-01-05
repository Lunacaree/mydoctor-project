import React from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button} from '../../components';

const index = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.container}>
      <View>
        <ILLogo />
        <Text style={styles.text}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button type="primary" title="Get Started" />
        <View style={{height: 16}} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
  },
});
