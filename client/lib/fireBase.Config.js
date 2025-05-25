import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBZukvEBXva7-7dIpywBmp27S2o2XUmzdQ",
//   authDomain: "multivendor-10c24.firebaseapp.com",
//   projectId: "multivendor-10c24",
//   storageBucket: "multivendor-10c24.firebasestorage.app",
//   messagingSenderId: "260987338612",
//   appId: "1:260987338612:web:3346dffc5b4b2d52c63621"
// };
  const firebaseConfig = {
    apiKey: "AIzaSyAXpSubccR_iv4DjNwAOAU9cy8Jbd5kyQU",
    authDomain: "busserial-5296b.firebaseapp.com",
    projectId: "busserial-5296b",
    storageBucket: "busserial-5296b.firebasestorage.app",
    messagingSenderId: "109654102411",
    appId: "1:109654102411:web:3dc1f62508c0db8ceb1f8e",
    measurementId: "G-L6FL1M3B24"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
export const db = getFirestore(app);