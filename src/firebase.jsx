// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWXhHTxQNEyNL7RjC4LiLkFHH0kE9i3As",
  authDomain: "chat-26330.firebaseapp.com",
  projectId: "chat-26330",
  storageBucket: "chat-26330.appspot.com",
  messagingSenderId: "573946268149",
  appId: "1:573946268149:web:f0a2f717f23a1679fe38bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);