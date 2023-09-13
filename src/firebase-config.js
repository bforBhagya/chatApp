// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2921dUDJFbWq4nVZbKJhqbqQbQiPFl1c",
  authDomain: "chatapp-85fe0.firebaseapp.com",
  projectId: "chatapp-85fe0",
  storageBucket: "chatapp-85fe0.appspot.com",
  messagingSenderId: "23382796978",
  appId: "1:23382796978:web:eae11de958fa8a5e7cf7ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
