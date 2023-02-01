import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './styles';

interface IButonProps {
  onPress: () => void;
  label: string;
}

export default function Button({onPress, label}: IButonProps) {
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.text}>{label}</Text>
    </TouchableOpacity>
  );
}
