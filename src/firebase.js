// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhdn-0jdFhhb3_xi1noHvmfN4ywRhLVvw",
  authDomain: "react-disney-plus-app-4e33d.firebaseapp.com",
  projectId: "react-disney-plus-app-4e33d",
  storageBucket: "react-disney-plus-app-4e33d.appspot.com",
  messagingSenderId: "706330715573",
  appId: "1:706330715573:web:1ab330d93d4d46658025fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;