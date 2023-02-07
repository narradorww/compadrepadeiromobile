import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import logo from '../../assets/logo.png';
import styles from './styles';

interface HeaderProps {
  left?: string | '';
  right?: string | '';
  pressLeft?: () => void;
  pressRight?: () => void;
  style?: object;
}

export default function Header({
  left,
  right,
  pressLeft,
  pressRight,
  style,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      {left ? (
        <TouchableOpacity onPress={pressLeft}>
          <Text style={styles.textButton}>{left}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.textVoid}>Void</Text>
      )}
      <Image style={styles.image} source={logo} />
      {right ? (
        <TouchableOpacity onPress={pressRight}>
          <Text style={styles.textButton}>{right}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.textVoid}>Void</Text>
      )}
    </View>
  );
}
