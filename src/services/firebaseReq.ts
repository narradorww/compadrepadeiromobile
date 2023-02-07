import {auth} from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  signInWithEmailAndPassword,
} from 'firebase/auth';

function errorsFirebase(error: any) {
  switch (error.code) {
    case AuthErrorCodes.INVALID_EMAIL:
      return 'E-mail inválido';
    case AuthErrorCodes.EMAIL_EXISTS:
      return 'E-mail já cadastrado';
    case AuthErrorCodes.WEAK_PASSWORD:
      return 'Senha fraca';
    case AuthErrorCodes.WRONG_PASSWORD:
      return 'Senha incorreta';
    default:
      return 'Erro desconhecido';
  }
}

export const register = async (email: string, password: string) => {
  const result = await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log('userCredential', userCredential);
      return 'sucess';
    })
    .catch(error => {
      console.log('errorRegister', error);
      return errorsFirebase(error);
    });
  return result;
};

export const login = async (email: string, password: string) => {
  const result = await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log('userCredential', userCredential);
      return userCredential;
    })
    .catch(error => {
      console.log('errorRegister', error);
      return errorsFirebase(error);
    });
  return result;
};
