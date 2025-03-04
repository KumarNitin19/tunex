// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6qWMJ-cSR5O2FquItsosiSceIj9JsGAE",
  authDomain: "tunex-22c39.firebaseapp.com",
  projectId: "tunex-22c39",
  storageBucket: "tunex-22c39.firebasestorage.app",
  messagingSenderId: "185424347711",
  appId: "1:185424347711:web:7ecf5d365fe531a4dbae8a",
  measurementId: "G-PT6316ZJ2J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export default app;
