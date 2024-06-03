// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6ebbe.firebaseapp.com",
  projectId: "mern-blog-6ebbe",
  storageBucket: "mern-blog-6ebbe.appspot.com",
  messagingSenderId: "932987014813",
  appId: "1:932987014813:web:e893d325a5852d7a4d4e74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);