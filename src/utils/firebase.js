// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAElVwJ58qg6egKCo4I05Yz1Sylm9LPJJo",
  authDomain: "netflix-clone-54191.firebaseapp.com",
  projectId: "netflix-clone-54191",
  storageBucket: "netflix-clone-54191.firebasestorage.app",
  messagingSenderId: "710455442528",
  appId: "1:710455442528:web:94307dfb0f29bada04d705",
  measurementId: "G-RZE429809V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();