// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRX4fW4M-AY0pJW175P0CJg1xKzZXeADc",
  authDomain: "myecom-cb236.firebaseapp.com",
  projectId: "myecom-cb236",
  storageBucket: "myecom-cb236.firebasestorage.app",
  messagingSenderId: "900220465021",
  appId: "1:900220465021:web:284d3daebea911fe34e614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {auth,fireDB}