import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";

import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs,
  doc,
  deleteDoc 
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

import { buildCard } from "./functions.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6TRF8tPiOUWYRl2ZguYZ-9gNs2y9EpmQ",
  authDomain: "clase-firebase-6f265.firebaseapp.com",
  projectId: "clase-firebase-6f265",
  storageBucket: "clase-firebase-6f265.appspot.com",
  messagingSenderId: "1020913498092",
  appId: "1:1020913498092:web:e78db706f0d7e36f76b2c9"
}

// Inicializamos fireba
const app = initializeApp(firebaseConfig);

// Inicializamos firestore
const database = getFirestore(app);

// Creando un nuevo documento
export async function sendProduct(name, price, stock, collectionWantIt) {

  try {
  
    const docRef = await addDoc(collection(database, collectionWantIt), {
      name: name,
      price: price,
      stock: stock
    });
  
    console.log("Document written with ID: ", docRef.id);
  
  } catch (error) {
  
    console.error("Error adding document: ", error);
  
  }

}

// Traer documentos

export const getProducts = async (node) => { // node: DOM node

  const querySnapshot = await getDocs(collection(database, "products"));
  
  querySnapshot.forEach((doc) => {

    buildCard(doc.data(), node);

  });

}

// Eliminar documento

export const deleteProduct = async (id) => await deleteDoc(doc(database, "products", id));