import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHzkfhlA7nSCJiv2ZxXw3ymkKyQr6rcFU",
  authDomain: "flaneur-react-6c463.firebaseapp.com",
  projectId: "flaneur-react-6c463",
  storageBucket: "flaneur-react-6c463.appspot.com",
  messagingSenderId: "157980038309",
  appId: "1:157980038309:web:ff48793d6099f7a9b1294c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
    <App />
// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
