import React from 'react';
import {StyleSheet, Image} from 'react-native';
import Logo from './src/assets/logo.png';
import {SafeAreaView} from 'react-native-safe-area-context';
// import Button from './src/components/Button';
import Recipes from './src/screens/Recipes';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Logo} style={styles.image} />
      {/* <InputText label="Email" value="" onChangeText={() => {}} /> */}
      {/* <Button onPress={() => {}} label="Entrar" /> */}
      <Recipes />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 190,
    height: 200,
  },
});
