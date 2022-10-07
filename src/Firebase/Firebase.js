// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5AHxToTsDiZzdU6G4N8JH2EcdYJ5T4FM",
  authDomain: "ecommerce-adminpanel-8936f.firebaseapp.com",
  projectId: "ecommerce-adminpanel-8936f",
  storageBucket: "ecommerce-adminpanel-8936f.appspot.com",
  messagingSenderId: "162957396873",
  appId: "1:162957396873:web:548a5ce4574ca533606f58",
  measurementId: "G-RXRPPETWX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
