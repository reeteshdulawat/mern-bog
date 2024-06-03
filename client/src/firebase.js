// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mer-blog-786b8.firebaseapp.com",
  projectId: "mer-blog-786b8",
  storageBucket: "mer-blog-786b8.appspot.com",
  messagingSenderId: "22756650043",
  appId: "1:22756650043:web:23007be77d61c370ccc01e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
