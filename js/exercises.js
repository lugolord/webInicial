// const products = [
//   {name: 'iphone', price: 1000},
//   {name: 'xiaomi', price: 500},
//   {name: 'motorola', price: 600},
//   {name: 'samsung', price: 800}
// ]


// let menu = 'Estos son nuestros productos, ingresa el nombre del que quieras comprar' + '\n';

// for (const product of products) {

//   menu += `${product.name}: ${product.price} \n`;

// }

// let userElection = prompt(menu);

// let desiredProduct = products.find(product => product.name === userElection);

// if (desiredProduct) {

//   let confirmation = prompt(`Deseas finalizar la compra de ${desiredProduct.name}? si/no`);

//   if (confirmation.toLowerCase() === 'si') {

//     alert('Compra finalizada! Que lo disfrutes');

//   }
//   else {

//     alert('Lo esperamos en una proxima ocasion!');

//   }

// }
// else {

//   alert('Ingreso un articulo inexistente');

// }


// Ejercicio II: crear un nuevo array eliminando los pokemon cuyo nivel sea menor a 50.

// const pokemons = [
//   {name: 'pikachu', level: 100},
//   {name: 'charizard', level: 80},
//   {name: 'greninja', level: 45},
//   {name: 'squirtle', level: 20}
// ]

// Primera forma

// const strongers = []

// for (const pokemon of pokemons) {
  
//   if (pokemon.level > 50) {

//     strongers.push(pokemon);

//   }
  
// }

// console.log(strongers);

// Segunda forma

// const strongers = pokemons.filter(pokemon => pokemon.level > 50);

// console.log(strongers);



//lo que sea

// const persona ={
//   padres: {papa: 'Mario', mama: 'Maria'},
//   comidasFav: {desayuno: 'Arepas', almuerzo: 'Pasta', cena: 'Pizza'},
// }

// console.log(persona.padres.papa);