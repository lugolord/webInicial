import { sendProduct, getProducts, deleteProduct } from "./firebase.js";

const productsContainer = document.querySelector('.productsContainer');

getProducts(productsContainer);