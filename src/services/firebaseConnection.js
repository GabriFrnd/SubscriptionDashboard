// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiluEaw6eul7AhwA-dKiOkU2acBbvGiXw",
  authDomain: "subscription-dashboard-e8762.firebaseapp.com",
  projectId: "subscription-dashboard-e8762",
  storageBucket: "subscription-dashboard-e8762.firebasestorage.app",
  messagingSenderId: "659019619014",
  appId: "1:659019619014:web:7f72b9e23bcdea6d8715c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };