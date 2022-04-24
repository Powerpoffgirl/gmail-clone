import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCx6b0_xW1Fd35WD8IuUJPfK4hLimiwnJA",
    authDomain: "clone-e9b3b.firebaseapp.com",
    projectId: "clone-e9b3b",
    storageBucket: "clone-e9b3b.appspot.com",
    messagingSenderId: "152474120228",
    appId: "1:152474120228:web:70d15e9909aff8b334a8b1",
    measurementId: "G-Y00XVY18PV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};