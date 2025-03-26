// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXjVFWI-Quqi7xGCkhvexGHzJt_l0xNk8",
  authDomain: "ebuddy-backend-repo-e872d.firebaseapp.com",
  projectId: "ebuddy-backend-repo-e872d",
  storageBucket: "ebuddy-backend-repo-e872d.firebasestorage.app",
  messagingSenderId: "910853796357",
  appId: "1:910853796357:web:efc2e6b8de36666279226c",
  measurementId: "G-P8N69GD9HT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);