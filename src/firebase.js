// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDQsKZLsQPum5m9-hhtl7rCvRnrMcLy68",
  authDomain: "disneyplus-clone-63187.firebaseapp.com",
  projectId: "disneyplus-clone-63187",
  storageBucket: "disneyplus-clone-63187.appspot.com",
  messagingSenderId: "546148225238",
  appId: "1:546148225238:web:87aac651595edb31be3977",
  measurementId: "G-EHSJZRDSTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const storage = getStorage();
const analytics = getAnalytics(app);

export {app, db, auth, provider, storage, analytics}