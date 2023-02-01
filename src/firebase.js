// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9YDFGVK0egxu5Uu_thq7zd5taZCQnsJw",
  authDomain: "react-auth-f5baa.firebaseapp.com",
  projectId: "react-auth-f5baa",
  storageBucket: "react-auth-f5baa.appspot.com",
  messagingSenderId: "202660636956",
  appId: "1:202660636956:web:999637f3302cdf6b2e32d9",
  measurementId: "G-2FS58L4S56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);