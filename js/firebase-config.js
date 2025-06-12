// js/firebase-config.js (versão real com seus dados)

const firebaseConfig = {
  apiKey: "SUA_API_KEY", // Substitua pela chave exibida no painel
  authDomain: "tours-81516.firebaseapp.com",
  projectId: "tours-81516",
  storageBucket: "tours-81516.appspot.com",
  messagingSenderId: "609906018450",
  appId: "SEU_APP_ID" // Substitua pelo valor real
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
