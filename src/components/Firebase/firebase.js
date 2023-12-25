// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVsQ3lOa6GgrRb8rs-HH5ocD_1QK_dKZ0",
  authDomain: "invoicer-4fa3f.firebaseapp.com",
  projectId: "invoicer-4fa3f",
  storageBucket: "invoicer-4fa3f.appspot.com",
  messagingSenderId: "47671260505",
  appId: "1:47671260505:web:e4aaa8b26c83d5507e8848",
  measurementId: "G-H8YWC4WMRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);