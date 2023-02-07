import {initializeApp} from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore} from 'firebase/firestore';
// // import {
//   API_KEY,
//   AUTH_DOMAIN,
//   PROJECT_ID,
//   STORAGE_BUCKET,
//   MESSAGING_SENDER_ID,
//   APP_ID,
//   MEASUREMENT_ID,
// } from '@env';

const firebaseENV = {
  API_KEY: 'AIzaSyB5YrwpaN3rzKbW9icnxfoi1CF67_nldSI',
  AUTH_DOMAIN: 'compadre-padeiro-23.firebaseapp.com',
  PROJECT_ID: 'compadre-padeiro-23',
  STORAGE_BUCKET: 'compadre-padeiro-23.appspot.com',
  MESSAGING_SENDER_ID: '549855745108',
  APP_ID: '1:549855745108:web:40f62268d56e3585a889c1',
  MEASUREMENT_ID: 'G-KVXYYYLBHV',
};

const firebaseConfig = {
  apiKey: 'API_KEY',
  authDomain: 'AUTH_DOMAIN',
  projectId: 'PROJECT_ID',
  storageBucket: 'STORAGE_BUCKET',
  messagingSenderId: 'MESSAGING_SENDER_ID',
  appId: 'APP_ID',
  measurementId: 'MEASUREMENT_ID',
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export {auth, db};
