import firebase from 'firebase/app';
import 'firebase/firestore';
const { API_KEY } = process.env;
const { AUTH_DOMAIN } = process.env;
const { DATABASE_URL } = process.env;
const { PROJECT_ID } = process.env;
const { STORAGE_BUCKET } = process.env;
const { MESSAGING_SENDER_ID } = process.env;
const { APP_ID } = process.env;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
export default database;
