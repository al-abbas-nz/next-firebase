import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storeage';

const firebaseConfig = {
  apiKey: 'AIzaSyAaqfpWM9ivZtjMVB0Hm7xIG9heCWaplAM',
  authDomain: 'next-firebase-26682.firebaseapp.com',
  projectId: 'next-firebase-26682',
  storageBucket: 'next-firebase-26682.appspot.com',
  messagingSenderId: '1088844967599',
  appId: '1:1088844967599:web:08b6aebc966de01e5aee5a',
  measurementId: 'G-3443HMY26X',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
