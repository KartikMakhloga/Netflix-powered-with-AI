// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLHT6y0f17pcxZej79HPv4thUsUtf9WZ4",
  authDomain: "netflixgpt-9d107.firebaseapp.com",
  projectId: "netflixgpt-9d107",
  storageBucket: "netflixgpt-9d107.appspot.com",
  messagingSenderId: "204783813543",
  appId: "1:204783813543:web:1b104a7c440b9d41d4ac82",
  measurementId: "G-PHG4WGGHFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth();