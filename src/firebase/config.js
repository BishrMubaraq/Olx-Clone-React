import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB71P7-hzoJHOoJKboOxIjicofx2_B8BxE",
    authDomain: "olx-clone-56ab6.firebaseapp.com",
    projectId: "olx-clone-56ab6",
    storageBucket: "olx-clone-56ab6.appspot.com",
    messagingSenderId: "156038973153",
    appId: "1:156038973153:web:d90d8dbce3b8ec8e3819a0",
    measurementId: "G-LDZV7GM0R1"
  };

  export default firebase.initializeApp(firebaseConfig)