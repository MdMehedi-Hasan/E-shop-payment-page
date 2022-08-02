// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFkdfmIJGZA_pV1MpNABOqOs45SqqM1h0",
  authDomain: "e-shop-1a57c.firebaseapp.com",
  projectId: "e-shop-1a57c",
  storageBucket: "e-shop-1a57c.appspot.com",
  messagingSenderId: "788280719456",
  appId: "1:788280719456:web:8d342082cae729321aeb05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;