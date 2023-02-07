import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/routes/routes';
import HelloWorld from './src/screens/HelloWorld';
import Recipes from './src/screens/Recipes';
import Login from './src/screens/Login/index';
import Register from './src/screens/Register';

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Recipes />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 190,
    height: 200,
  },
});
