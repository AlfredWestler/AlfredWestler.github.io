import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

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

const guestsCollection = collection(db, 'Guest');

// Función para cargar y mostrar los invitados
async function loadGuests() {
    try {
        const querySnapshot = await getDocs(guestsCollection);
        const guestList = document.getElementById('guestList');
        guestList.innerHTML = '';  // Limpiar la lista antes de recargarla
        querySnapshot.forEach((doc) => {
            const li = document.createElement('li');
            li.textContent = `${doc.data().name} - ${doc.data().puzzle} - ${doc.data().table}`;
            guestList.appendChild(li);
        });
    } catch (error) {
        console.error("Error obteniendo documentos: ", error);
    }
}

async function addNewGuest() {
    try {
        await addDoc(collection(db, "Guest"), {
            confirm: false,
            name: "Rafael Jimeno Osornio\nRebeca Berenice Granciano Hernández\nGabriela Sarahi Pedraza Granciano",
            puzzle: "C5, C6, C7",
            table: "Fenix"
          });
        console.log("Document written");
    } catch (error) {
        console.error("Error guardando el documento: ", error);
    }
}

// Función para obtener un documento específico por ID
async function getGuest() {
    const docId = id;

    try {
        const docRef = doc(db, 'Guest', docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const guestDetail = document.getElementById('guestDetail');
            const guestName = document.getElementById('guestName');
            guestName.innerText = `${docSnap.data().name}`
            guestDetail.innerHTML = `Nombre: ${docSnap.data().name} <br> Pieza: ${docSnap.data().puzzle} <br> Mesa: ${docSnap.data().table}`;
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error obteniendo el documento: ", error);
    }
}

document.getElementById('confirm_yes').onclick = async function() {
    console.log("Se presiono el boton");

    const docId = id;

    try {
        const docRef = doc(db, 'Guest', docId);
        
        await updateDoc(docRef, {
            confirm: true
        });

        console.log("Document updated");
    } catch (error) {
        console.error("Error obteniendo el documento: ", error);
    }
}

document.getElementById('confirm_no').onclick = async function() {
    console.log("Se presiono el boton");

    const docId = id;

    try {
        const docRef = doc(db, 'Guest', docId);
        
        await updateDoc(docRef, {
            confirm: false
        });

        console.log("Document updated");
    } catch (error) {
        console.error("Error obteniendo el documento: ", error);
    }
}

document.getElementById('add_document').onclick = addNewGuest;

// Cargar los usuarios al cargar la página
window.onload = getGuest;