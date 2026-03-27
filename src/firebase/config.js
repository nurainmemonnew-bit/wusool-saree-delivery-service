import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-bCN06t7io4lAFKXHrPnHMW_Hwny5uMg",
  authDomain: "delivery-service-ba435.firebaseapp.com",
  projectId: "delivery-service-ba435",
  storageBucket: "delivery-service-ba435.firebasestorage.app",
  messagingSenderId: "668185689060",
  appId: "1:668185689060:web:d2600ff97e88f8491a25f1",
  measurementId: "G-ZY0YZQ9RJG"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);