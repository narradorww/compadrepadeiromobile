import React, {useState} from 'react';
import {View, Image} from 'react-native';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import {Alert} from '../../components/Alert';
import {register} from '../../services/firebaseReq';
import styles from './styles';
import logo from '../../assets/logo.png';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [statusError, setStatusError] = useState('');
  const [messageError, setMessageError] = useState('');

  async function handleRegister() {
    if (email === '') {
      setMessageError('O campo e-mail é obrigatório');
      setStatusError('email');
    } else if (password === '') {
      setMessageError('O campo senha é obrigatório');
      setStatusError('senha');
    } else if (confirmPassword === '') {
      setMessageError('O campo confirmar senha é obrigatório');
      setStatusError('confirmaSenha');
    } else if (password !== confirmPassword) {
      setMessageError('As senhas não conferem');
      setStatusError('confirmaSenha');
    } else {
      const result = await register(email, password);
      if (result === 'sucess') {
        setMessageError('Cadastro realizado com sucesso');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setStatusError('firebase');
        setMessageError(result);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
      <View style={styles.input}>
        <InputText
          label="E-mail"
          value={email}
          onChangeText={text => setEmail(text)}
          error={statusError === 'email'}
          messageError={messageError}
        />
        <InputText
          label="Senha"
          value={password}
          onChangeText={text => setPassword(text)}
          error={statusError === 'senha'}
          messageError={messageError}
          secureTextEntry={true}
        />

        <InputText
          label="Confirmar Senha"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          error={statusError === 'confirmaSenha'}
          messageError={messageError}
          secureTextEntry={true}
        />

        {/* <Alert
       message={messageError}
       error={statusError== 'confirmPassword'} />
       setError ={setStatusError}
       duracao={3000}
       /> */}
      </View>
      <Button onPress={() => handleRegister()}>CADASTRAR</Button>
    </View>
  );
}
