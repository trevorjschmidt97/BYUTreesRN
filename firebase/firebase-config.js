// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKB-e7GlTdXHkQJwvA8hFn0azyEHHmWXU",
  authDomain: "byu-3dc52.firebaseapp.com",
  databaseURL: "https://byu-3dc52-default-rtdb.firebaseio.com",
  projectId: "byu-3dc52",
  storageBucket: "byu-3dc52.appspot.com",
  messagingSenderId: "470271075036",
  appId: "1:470271075036:web:1ea2eb7cf029f8d2a18a19",
  measurementId: "G-TCNMKY2SX3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
