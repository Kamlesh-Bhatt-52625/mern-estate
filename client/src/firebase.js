// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-181c5.firebaseapp.com",
  projectId: "mern-estate-181c5",
  storageBucket: "mern-estate-181c5.appspot.com",
  messagingSenderId: "186266062985",
  appId: "1:186266062985:web:bb958281a9bc6c4fddf658",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
