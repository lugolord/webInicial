// SIN OBJETOS

// let userName = 'pepito';

// let userAge = 25;

// let userMail = 'pepito@gmail.com';

// CON OBJETOS

// const user = {name: 'pepito', age: 25, mail: 'pepito@gmail.com'} // Objeto literal

// console.log(user);



// ACCEDER A PROPIEDADES

// console.log(user.name);

// console.log(user.age);

// console.log(user.birth);



// ASIGNAR NUEVOS VALORES A PROPIEDADES

// user.name = 'maria';

// console.log(user.name);

// user.age = 30;

// console.log(user.age);



// CLASES

// class User {

//   constructor(name, age, mail) {

//     this.name = name;

//     this.age = age;

//     this.mail = mail;

//   }

// }

// const newUser = new User('homero', 40, 'homero@gmail.com');

// console.log(newUser);

/* 

  Importante acerca de las clases❗

    🔹 Se escriben con PascalCase.
    🔹 Sus nombres suelen estar en singular.

*/



// METODOS

// class Product {

//   constructor(name, price, stock) {

//     this.name = name;

//     this.price = price;

//     this.stock = stock;

//   }

//   handleStock() {

//     this.stock--;

//   }

// }

// const iphone = new Product('iphone', 1000, 10);

// console.log(iphone.stock);


// Un usuario realizo una compra

// iphone.handleStock();

// console.log(iphone.stock);


// ERROR COMUN

// handleStock(); // No podemos usar un metodo sin primero hacer referencia a un objeto que lo pueda utilizar❌


/* 

  Importante de los metodos❗

    🔹No son exactamente lo mismo que una funcion.
    🔹Se escriben con camelCase.
    🔹Tienen que ser utiles para el contexto de la clase.

*/



// METODOS UTILES PARA ARRAYS


// find

// const products = [
//   {name: 'iphone', price: 1000},
//   {name: 'xiaomi', price: 500},
//   {name: 'motorola', price: 600},
//   {name: 'samsung', price: 800}
// ]

// const iphone = products.find(product => product.name === 'iphone');

// console.log(iphone);

// const xiaomi = products.find(product => product.price === 500);

// console.log(xiaomi);


// filter

// const motorola = products.filter(product => product.name === 'motorola');

// console.log(motorola);

// const menosDeMil = products.filter(product => product.price < 1000);

// console.log(menosDeMil);


// map

// const prices = products.map(product => product.price);

// console.log(prices);

// const names = products.map(product => product.name);

// console.log(names);

// const newPrices = products.map(product => {

//   return {name: product.name, price: product.price*1.50}

// });

// console.log(newPrices);