// src/firebase.js
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBFNQ_ywHMVVpFTi-IAcFwdBKJzOaaCegw",
    authDomain: "food-app-c9e8b.firebaseapp.com",
    databaseURL: "https://food-app-c9e8b.firebaseio.com",
    projectId: "food-app-c9e8b",
    storageBucket: "food-app-c9e8b.appspot.com",
    messagingSenderId: "986869775086"
  };
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;