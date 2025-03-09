// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ1v8PZDiqFO4t8vHemXW4kWn5ZoIJUi8",
  authDomain: "vite-contact-b6a5e.firebaseapp.com",
  projectId: "vite-contact-b6a5e",
  storageBucket: "vite-contact-b6a5e.firebasestorage.app",
  messagingSenderId: "120156042678",
  appId: "1:120156042678:web:b5663637f413b185413d17",
  measurementId: "G-0E0MHRFVKS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);