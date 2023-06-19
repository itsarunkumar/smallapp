// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwND8__eDdRcXCEv-gPkYjDQvlM2CVgOk",
  authDomain: "next-community-e1012.firebaseapp.com",
  databaseURL: "https://next-community-e1012-default-rtdb.firebaseio.com",
  projectId: "next-community-e1012",
  storageBucket: "next-community-e1012.appspot.com",
  messagingSenderId: "83359403964",
  appId: "1:83359403964:web:63b663fdeac5c41ddf25b9",
  measurementId: "G-BTMQR4WJC5",
};

// Initialize Firebase and required services
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
