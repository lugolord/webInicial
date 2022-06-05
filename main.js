// EJERCICIO I

// LOGIN

// let userAuth = false;


// let userMail = prompt('Ingrese su mail');

// let userPassword = prompt('Ingrese su clave');


// while (userMail === '' || userPassword === '') {
  
//   alert('Ingrese todos los datos');

//   userMail = prompt('Ingrese su mail');

//   userPassword = prompt('Ingrese su clave');

// }


// if (userMail && userPassword) userAuth = true;


// // // MOSTRAR PRODUCTOS Y ESCOGER UNO

// const products = [
//   {name: 'html', price: 100},
//   {name: 'css', price: 200},
//   {name: 'javascript', price: 300},
//   {name: 'react', price: 400},
// ]


// if (userAuth) {

//   let menu = 'Cual curso te gustaria comprar? Para seleccionarlo escribe su nombre \n';

//   for (const product of products) {

//     menu += `${product.name} - ${product.price} \n`; // plantilla literal

//   }

//   let userCourse = prompt(menu);


//   let courseWanted = products.find(product => product.name === userCourse.toLowerCase());

//   while (!courseWanted) {

//     alert('El curso seleccionado no existe, reingrese');

//     userCourse = prompt(menu);

//     courseWanted = products.find(product => product.name === userCourse.toLowerCase());

//   }


//   let checkout = prompt(`Deseas finalizar la compra del curso ${courseWanted.name}? si/no`);

//   while (checkout.toLowerCase() !== 'si' && checkout.toLowerCase() !== 'no') {

//     checkout = prompt(`Deseas finalizar la compra del curso ${courseWanted.name}? si/no`);

//   }

//   if (checkout.toLowerCase() === 'si') alert('Compra finalizada! Esperamos que lo disfrutes!');
//   else if (checkout.toLowerCase() === 'no') alert('Te esperamos en una proxima ocasion!');

// }





// EJERCICIO II

// LOGIN CON "BASE DE DATOS"

// const users = [
//   {name: 'pepito', mail: 'pepito@gmail.com', password: 'pepito123'},
//   {name: 'leonardo', mail: 'leonardo@gmail.com', password: 'leo123'},
//   {name: 'marco', mail: 'marcopolo@gmail.com', password: 'marcopolo123'},
//   {name: 'juan', mail: 'juanga@gmail.com', password: 'juanga123'}
// ]

// let userMail = prompt('ingrese su correo');

// let userPassword = prompt('ingrese su clave');

// function findUser(email, password) {

//   let user = users.find(user => user.mail === email && user.password === password);

//   return user;

// }

// let userFounded = findUser(userMail, userPassword);

// if (userFounded) alert(`Bienvenido ${userFounded.name}`);
// else alert('Usuario o clave incorrecta');





// EJERCICIO III

// CLASE USUARIO Y METODOS

// class User {

//   constructor(user) {

//     this.name = user.name;

//     this.mail = user.mail;

//     this.password = user.password;

//     this.online = false;

//   }

//   changePassword(newPassword) {

//     this.password = newPassword;

//     alert('Clave cambiada exitosamente!');

//   }

//   connect() {

//     this.online = true;

//     alert('Ahora estas online!');

//   }

// }


// const users = [
//   {name: 'pepito', mail: 'pepito@gmail.com', password: 'pepito123'},
//   {name: 'leonardo', mail: 'leonardo@gmail.com', password: 'leo123'},
//   {name: 'marco', mail: 'marcopolo@gmail.com', password: 'marcopolo123'},
//   {name: 'juan', mail: 'juanga@gmail.com', password: 'juanga123'}
// ]


// const usersWithClass = users.map(user => new User(user));


// // USUARIO 'JUAN' QUIERE CAMBIAR SU CLAVE

// let confirmation = prompt('Desea cambiar su clave? si/no');

// if (confirmation.toLowerCase() === 'si') {

//   let updatePassword = prompt('Ingrese su nueva clave');

//   usersWithClass[3].changePassword(updatePassword);

//   alert(usersWithClass[3].password);

// }
// else {

//   alert('Perfecto, mantienes tu vieja clave');

// }


// // USUARIO 'PEPITO' CONECTADO

// let setStatus = prompt('Deseas cambiar tu estado a online? si/no');

// if (setStatus === 'si') {

//   usersWithClass[0].connect();

// }





// EJERCICIO IV

// class Pokemon {

//   constructor(pokemon) {

//     this.name = pokemon.name;

//     this.type = pokemon.type;

//     this.health = pokemon.health;

//     this.level = pokemon.level;

//     this.attackPoints = 40;

//     this.winner = false;

//   }

//   raiseAttack() { 

//     this.attackPoints += 10;

//   }

//   atack() {

//     return this.attackPoints;

//   }

//   setDamage(damage) {

//     this.health = this.health - damage;

//   }

//   setWinner() {

//     this.winner = true;

//   }

// }

// const strongerType = (firstPokemon, secondPokemon) => {              // a,b: strings
  
//   if (firstPokemon.type === 'electric' && secondPokemon.type === 'water') {

//     firstPokemon.raiseAttack();

//   }

// }

// const pokemons = [
//   {name: 'pikachu', type: 'electric', health: 200, level: 5},
//   {name: 'squirtle', type: 'water', health: 200, level: 5}
// ]

// const pokemonsWithClass = pokemons.map(pokemon => new Pokemon(pokemon));

// // COMENZAR PELEA

// alert('Pikachu vs Squirtle');

// const pikachu = pokemonsWithClass[0];

// const squirtle = pokemonsWithClass[1];

// // VER CUAL TIPO ES MAS FUERTE

// strongerType(pikachu, squirtle);

// // PELEA

// while (pikachu.health > 0 && squirtle.health > 0) {

//   // PIKACHU ATACA

//   alert('Pikachu ataca!');

//   squirtle.setDamage(pikachu.atack());

//   alert(`A squirtle le quedan ${squirtle.health} puntos de vida!`);

//   if (squirtle.health === 0) {

//     pikachu.setWinner();

//     break;
  
//   }

//   // SQUIRTLE ATACA

//   alert('Squirtle ataca!');

//   pikachu.setDamage(squirtle.atack());

//   alert(`A pikachu le quedan ${pikachu.health} puntos de vida!`);

//   if (pikachu.health === 0) {

//     squirtle.setWinner();
    
//     break;
  
//   }

// }

// // FINAL DE LA PELEA
// if (pikachu.winner) alert('Pikachu gano!');
// else if (squirtle.winner) alert('Squirtle gano!');