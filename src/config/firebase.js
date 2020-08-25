import * as firebase from "firebase/app";
import "firebase/auth";

import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUcdUbP4oi4jahcCqsqrllVtzMZe9XX1g",
  authDomain: "portfoliotracker-4e17a.firebaseapp.com",
  databaseURL: "https://portfoliotracker-4e17a.firebaseio.com",
  projectId: "portfoliotracker-4e17a",
  storageBucket: "portfoliotracker-4e17a.appspot.com",
  messagingSenderId: "700425761470",
  appId: "1:700425761470:web:76231cafd95f1b0abee4ef"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
