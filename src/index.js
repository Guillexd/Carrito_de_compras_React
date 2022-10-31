import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDvtFJuvo0pBt2wfVeZxdv2bVlPbZ_uEE",
  authDomain: "productos-firestore.firebaseapp.com",
  projectId: "productos-firestore",
  storageBucket: "productos-firestore.appspot.com",
  messagingSenderId: "596618103106",
  appId: "1:596618103106:web:8ad0ca474d889e7251a0db"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);