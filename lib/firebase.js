

// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config (replace with your own from step 1)
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-P4xKOlGyyPbsQNhazw29Hc7ozrI9O4g",
  authDomain: "cuisinely-70d98.firebaseapp.com",
  projectId: "cuisinely-70d98",
  storageBucket: "cuisinely-70d98.firebasestorage.app",
  messagingSenderId: "577733618277",
  appId: "1:577733618277:web:e0ccfc4102c734ba3b748c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth object
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();