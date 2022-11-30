// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcnojO71cJTlFvyEWM6ps3bSfbA331yuc",
  authDomain: "trip-pals.firebaseapp.com",
  projectId: "trip-pals",
  storageBucket: "trip-pals.appspot.com",
  messagingSenderId: "279328662755",
  appId: "1:279328662755:web:726e9760241e7909fe51d6",
  measurementId: "G-D7060XNCP1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
