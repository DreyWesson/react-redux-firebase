import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD_aeUFrKTTIzL9Vxce28QOyi49YfHpkpk",
  authDomain: "mario-plan-3d89f.firebaseapp.com",
  databaseURL: "https://mario-plan-3d89f.firebaseio.com",
  projectId: "mario-plan-3d89f",
  storageBucket: "mario-plan-3d89f.appspot.com",
  messagingSenderId: "94050902502",
  appId: "1:94050902502:web:f8ea94ba716315c4aa3627",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
