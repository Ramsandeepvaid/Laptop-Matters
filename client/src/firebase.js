// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "laptop-matters.firebaseapp.com",
  projectId: "laptop-matters",
  storageBucket: "laptop-matters.appspot.com",
  messagingSenderId: "634930648072",
  appId: "1:634930648072:web:b16d07029d8209565aedbd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);