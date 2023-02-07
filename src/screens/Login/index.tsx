import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import LottieView from 'lottie-react-native';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import logo from '../../assets/logo.png';
import {Alert} from '../../components/Alert';
import {auth} from '../../config/firebase';
import styles from './styles';
import {login} from '../../services/firebaseReq';

export default function Login({navigation}) {
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });

  const changeData = (variable: any, value: any) => {
    setAuthData({
      ...authData,
      [variable]: value,
    });
  };

  const [messageError, setMessageError] = useState('');
  const [statusError, setStatusError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const estadoUsuario = auth.onAuthStateChanged(usuario => {
      if (usuario) {
        navigation.replace('Principal');
      }
      setLoading(false);
    });

    return () => {};
  }, [navigation]);

  async function realizarLogin() {
    if (authData.email === '') {
      setMessageError('O campo e-mail é obrigatório');
      setStatusError('email');
    } else if (authData.password === '') {
      setMessageError('O campo senha é obrigatório');
      setStatusError('senha');
    } else {
      const result = await login(authData.email, authData.password);
      if (result === 'E-mail inválido' || 'Senha inválida') {
        setStatusError('firebase');
        setMessageError('E-mail ou senha inválidos');
      } else {
        navigation.replace('Principal');
      }
    }
  }

  if (loading) {
    return (
      <View style={styles.containerAnimacao}>
        {/* <LottieView source={{uri: '../../assets/loader.gif'}} /> */}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imagem} source={logo} />

      <InputText
        label="Email"
        value={authData.email}
        onChangeText={value => changeData('email', value)}
        error={statusError === 'email'}
        messageError={messageError}
      />

      <InputText
        label="Senha"
        value={authData.password}
        onChangeText={value => changeData('password', value)}
        error={statusError === 'password'}
        messageError={messageError}
        secureTextEntry
      />

      <Alert
        message={messageError}
        error={statusError === 'firebase'}
        setError={setStatusError}
        duration={1800}
      />
      <Button onPress={() => realizarLogin()}>LOGAR</Button>
      <Button
        onPress={() => {
          navigation.navigate('Cadastro');
        }}>
        CADASTRAR USUÁRIO
      </Button>
    </SafeAreaView>
  );
}
