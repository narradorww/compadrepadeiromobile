import React, {useState} from 'react';
import {TextInput, HelperText} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './styles';
import {IInputProps} from '../../Interfaces/interfaces';

export default function InputText({
  label,
  value,
  onChangeText,
  error,
  messageError,
  secureTextEntry,
}: IInputProps) {
  const [secureMode, setSecureMode] = useState(secureTextEntry);

  return (
    <>
      <TextInput
        label={label}
        value={value}
        error={error}
        onChangeText={onChangeText}
        secureTextEntry={secureMode}
        style={style.input}
        mode="outlined"
        right={
          secureTextEntry ? (
            <Icon
              name={secureMode ? 'eye' : 'eye-slash'}
              onPress={() => setSecureMode(!secureMode)}
            />
          ) : null
        }
      />
      {error && (
        <HelperText type="error" visible={error}>
          {messageError}
        </HelperText>
      )}
    </>
  );
}
