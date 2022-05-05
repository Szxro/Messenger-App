import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  /*
    YOUR FIREBASE KEYS
    */
});

const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
