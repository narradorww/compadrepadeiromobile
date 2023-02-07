import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Recipes from './src/screens/Recipes';
import Login from './src/screens/Login/index';
import Register from './src/screens/Register';
import ListOfRecipes from './src/screens/ListOfRecipes';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ListOfRecipes"
          component={ListOfRecipes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Recipes"
          component={Recipes}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
