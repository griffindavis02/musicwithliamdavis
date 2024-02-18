// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKwMi32DlFl9-nS7Ip-lJHoBvrlO21CSQ",
  authDomain: "musicwithliamdavis-3532c.firebaseapp.com",
  projectId: "musicwithliamdavis-3532c",
  storageBucket: "musicwithliamdavis-3532c.appspot.com",
  messagingSenderId: "200682022718",
  appId: "1:200682022718:web:2036a9b6f825f8b0326e6f",
  measurementId: "G-295KT4GGG2"
};

// Initialize Firebase

export const initFirebase = () => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);
    //const auth = getAuth(app);
    //return { app, analytics, db, auth };
    // FIXME need auth to enter admin state, however it's causing errors.
    // likely due to permissions set up in Firebase
    return { app, analytics, db };
}
