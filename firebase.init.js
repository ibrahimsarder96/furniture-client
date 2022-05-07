// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLNiLY9aT0NObB9sWdUA0Bx3SAv96aSaw",
  authDomain: "furniture-website-48465.firebaseapp.com",
  projectId: "furniture-website-48465",
  storageBucket: "furniture-website-48465.appspot.com",
  messagingSenderId: "51596988763",
  appId: "1:51596988763:web:b0abc8122f6968e2820a7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;