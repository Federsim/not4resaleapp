
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB-1RI5MjJWX30-m0B3fs-z7-GBqjPuZSQ",
  authDomain: "not4resale-83ebe.firebaseapp.com",
  projectId: "not4resale-83ebe",
  storageBucket: "not4resale-83ebe.appspot.com",
  messagingSenderId: "290744878362",
  appId: "1:290744878362:web:3f3cdf7acf0f4f5e2e18a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)