import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpYYRQ1WvUQVIvhEzsh3yR_SsMJ3HIbZA",
    authDomain: "moviesapp-f0996.firebaseapp.com",
    projectId: "moviesapp-f0996",
    storageBucket: "moviesapp-f0996.appspot.com",
    messagingSenderId: "97789016613",
    appId: "1:97789016613:web:cca1a60836b70ebff6ddcc",
    measurementId: "G-5F8DWTH5YB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
