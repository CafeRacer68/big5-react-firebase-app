
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCbA3GXi_UmXxXrTmm0pUQPYxClidFLZQ0",
  authDomain: "big-5-app.firebaseapp.com",
  projectId: "big-5-app",
  storageBucket: "big-5-app.firebasestorage.app",
  messagingSenderId: "635963022624",
  appId: "1:635963022624:web:c24c6a2a5d061e4916cb45",
  measurementId: "G-F3B0MF3Y8J"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
