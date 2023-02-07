import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import nativeStyle from './styles';

interface IButtonProps {
  onPress: () => void;
  children?: any;
  style?: any;
}

export default function Button({onPress, children, style}: IButtonProps) {
  return (
    <TouchableOpacity style={[nativeStyle.button, style]} onPress={onPress}>
      <Text style={nativeStyle.text}>{children}</Text>
    </TouchableOpacity>
  );
}
