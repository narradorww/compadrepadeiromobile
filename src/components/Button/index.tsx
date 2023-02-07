import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './styles';

interface IButtonProps {
  onPress: () => void;
  children?: any;
}

export default function Button({onPress, children}: IButtonProps) {
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.text}>{children}</Text>
    </TouchableOpacity>
  );
}
