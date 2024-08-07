// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAj8BNByVDAlUGT2QobXMGXBu6O0EH3yQ",
  authDomain: "form-ece73.firebaseapp.com",
  projectId: "form-ece73",
  storageBucket: "form-ece73.appspot.com",
  messagingSenderId: "837218003882",
  appId: "1:837218003882:web:331c7e796a1e1db3ac19d3",
  measurementId: "G-HTNE5YQGWW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

export const db = getFirestore(app);
