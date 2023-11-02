// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCZPZmVCHSslEuniifoc5qINSd3tTslFSk',
  authDomain: 'fir-auth-f4bfb.firebaseapp.com',
  projectId: 'fir-auth-f4bfb',
  storageBucket: 'fir-auth-f4bfb.appspot.com',
  messagingSenderId: '454361463142',
  appId: '1:454361463142:web:d69f46cad4d6be57af70a7',
  measurementId: 'G-7KXKK3R4ZX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
