// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCxvBPG9uBcfREoOd98YR72nrSoETRtJxQ",
  authDomain: "reactnativeproject-e5cdc.firebaseapp.com",
  projectId: "reactnativeproject-e5cdc",
  storageBucket: "reactnativeproject-e5cdc.appspot.com",
  messagingSenderId: "644558941809",
  appId: "1:644558941809:web:fee52988e0ab1b6d6035d0"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };