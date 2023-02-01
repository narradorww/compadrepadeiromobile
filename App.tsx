import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Logo from './src/assets/logo.png';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Image source={Logo} style={styles.image} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 320,
  },
});
