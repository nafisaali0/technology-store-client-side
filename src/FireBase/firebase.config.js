import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCJ0C6DsA0rojP3K0DqTssCSVAgp_p-kI",
  authDomain: "tech-store-react-auth.firebaseapp.com",
  projectId: "tech-store-react-auth",
  storageBucket: "tech-store-react-auth.appspot.com",
  messagingSenderId: "494131456069",
  appId: "1:494131456069:web:756428d660571a0d031b2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
