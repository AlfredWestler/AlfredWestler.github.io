import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAsl_wF89EpRrIYJ1-nxn70zPk_Jt2SpuQ",
    authDomain: "weddingweb-9a4de.firebaseapp.com",
    projectId: "weddingweb-9a4de",
    storageBucket: "weddingweb-9a4de.appspot.com",
    messagingSenderId: "807432626652",
    appId: "1:807432626652:web:e43e775e74983ee6216f19"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);