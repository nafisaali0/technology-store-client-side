import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZSNKe_avHEebY4RX94_QBz02VTdkSwVI",
  authDomain: "tech-store-today.firebaseapp.com",
  projectId: "tech-store-today",
  storageBucket: "tech-store-today.appspot.com",
  messagingSenderId: "408938883714",
  appId: "1:408938883714:web:0645135ac7e36d2c52a29b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
