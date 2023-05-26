import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage' 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGtkP8Mecp4PCLoCEP6MqdixY3Pdck9ik",
    authDomain: "olxproject-6a03d.firebaseapp.com",
    projectId: "olxproject-6a03d",
    storageBucket: "olxproject-6a03d.appspot.com",
    messagingSenderId: "407851363940",
    appId: "1:407851363940:web:447849f44c6a574926b971",
    measurementId: "G-4B3L78LG00"
  };

 export default firebase.initializeApp(firebaseConfig)