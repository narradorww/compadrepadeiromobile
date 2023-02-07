import React from 'react';
import {Snackbar} from 'react-native-paper';
import {IAlert} from '../../Interfaces/interfaces';

export function Alert({
  message,
  error = false,
  setError,
  duration = 1000,
}: IAlert) {
  return (
    <Snackbar
      visible={error}
      onDismiss={setError}
      duration={duration}
      action={{
        label: 'Ok',
        onPress: setError,
      }}>
      {message}
    </Snackbar>
  );
}
