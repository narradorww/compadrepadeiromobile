import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import logo from '../../assets/logo.png';
import styles from './styles';

interface HeaderProps {
  back?: boolean;
  logout?: boolean;
  style?: object;
}

export default function Header({back, logout, style}: HeaderProps) {
  return (
    <View style={styles.container}>
      {back ? (
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.textButton}>Back</Text>
        </TouchableOpacity>
      ) : null}
      <Image style={styles.image} source={logo} />
      {logout ? (
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.textButton}>Logout</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
