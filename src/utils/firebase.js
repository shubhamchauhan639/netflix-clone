// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNQ3NiehMdpSD3DcPKP1EFkTQFscoGQxY",
  authDomain: "netflix-clone-e891d.firebaseapp.com",
  projectId: "netflix-clone-e891d",
  storageBucket: "netflix-clone-e891d.firebasestorage.app",
  messagingSenderId: "781345283595",
  appId: "1:781345283595:web:65020ee219739f25c1f10e",
  measurementId: "G-Y4BY2M8Y1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);