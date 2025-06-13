// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyD80GYkjPKfIbVW747zb3s7jXSuVfBJTe4",
  authDomain: "tours-81516-acfbc.firebaseapp.com",
  projectId: "tours-81516-acfbc",
  storageBucket: "tours-81516-acfbc.appspot.com",
  messagingSenderId: "742946187892",
  appId: "1:742946187892:web:2b0d2bcb974d4564327f21",
  measurementId: "G-36FC6SS4WD"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();