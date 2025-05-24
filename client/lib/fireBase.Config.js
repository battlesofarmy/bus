import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZukvEBXva7-7dIpywBmp27S2o2XUmzdQ",
  authDomain: "multivendor-10c24.firebaseapp.com",
  projectId: "multivendor-10c24",
  storageBucket: "multivendor-10c24.firebasestorage.app",
  messagingSenderId: "260987338612",
  appId: "1:260987338612:web:3346dffc5b4b2d52c63621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
export const db = getFirestore(app);