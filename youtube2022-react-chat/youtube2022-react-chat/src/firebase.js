import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fusion-launcher.firebaseapp.com",
  projectId: "fusion-launcher",
  storageBucket: "fusion-launcher.appspot.com",
  messagingSenderId: "219669492477",
  appId: "1:219669492477:web:4d2aa27e16984403448494",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
