// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByjtwv1su0jsjViIX40lITfWHko0AQ7vQ",
  authDomain: "web-peliculas-react.firebaseapp.com",
  projectId: "web-peliculas-react",
  storageBucket: "web-peliculas-react.firebasestorage.app",
  messagingSenderId: "571840446408",
  appId: "1:571840446408:web:fb0575a6b47085f4fb0afd",
  measurementId: "G-2DXH5JXJH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)