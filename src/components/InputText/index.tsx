import React, {useState} from 'react';
import {TextInput, HelperText} from 'react-native-paper';
import style from './styles';

interface IInputProps {
  label: string;
  value: string;
  onChangeText: () => void;
  secureTextEntry?: boolean;
  error?: boolean;
  messageError?: string;
}

export default function InputText({
  label,
  value,
  onChangeText,
  secureTextEntry,
  error,
  messageError,
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
        activeOutlineColor="#583E23"
        right={
          secureTextEntry ? (
            <TextInput.Icon
              icon={secureMode ? 'eye-off' : 'eye'}
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
