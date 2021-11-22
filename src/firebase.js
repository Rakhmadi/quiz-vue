// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcs9q2_KpYp2qYtAPA9hKWHrMmteFda3U",
  authDomain: "quizz-app-d9208.firebaseapp.com",
  projectId: "quizz-app-d9208",
  storageBucket: "quizz-app-d9208.appspot.com",
  messagingSenderId: "810809027984",
  appId: "1:810809027984:web:0ac0e4c53403a9ae6e5715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app