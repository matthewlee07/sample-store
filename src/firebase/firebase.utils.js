import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDdZyCse1W4Enr8PxxD0VypckgWzgNqHO4",
  authDomain: "react-sample-shop.firebaseapp.com",
  databaseURL: "https://react-sample-shop.firebaseio.com",
  projectId: "react-sample-shop",
  storageBucket: "",
  messagingSenderId: "590188846436",
  appId: "1:590188846436:web:90f7ddbe18cc43a227ae71",
  measurementId: "G-0CGY6GW5YG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
