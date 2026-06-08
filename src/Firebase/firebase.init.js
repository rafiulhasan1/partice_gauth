// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdcwCG96nQbAXsFDvzvToqu2vH-pbMnWM",
  authDomain: "partice-gauth.firebaseapp.com",
  projectId: "partice-gauth",
  storageBucket: "partice-gauth.firebasestorage.app",
  messagingSenderId: "1060728362132",
  appId: "1:1060728362132:web:093c6fdbe550373a1ad081"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;