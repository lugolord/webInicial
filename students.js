// "BASE DE DATOS"
const users = [
  {name: 'pepito', mail: 'pepito@gmail.com', password: 'pepito123'},
  {name: 'jon', mail: 'jon@gmail.com', password: 'jon123'},
  {name: 'gabriel', mail: 'gabriel@gmail.com', password: 'gabriel123'},
  {name: 'jorge', mail: 'jorge@gmail.com', password: 'jorge123'},
]

// PEDIR AL USUARIO EMAIL Y CONTRASENA

let userMail = prompt('ingrese correo').toLowerCase();

let userPassword = prompt('ingrese clave').toLowerCase(); 

// BUSCAR EN NUESTRA "BASE DE DATOS"

const userFounded = users.find(user => user.mail === userMail && user.password === userPassword);  

// find no encuentra nada -> undefined

// find encuentra algo -> ese algo


// MOSTRAR MENSAJE DEPENDIENDO DEL CASO

if (userFounded) {

  alert(`Bievenido ${userFounded.name}!`);

}
else {

  alert('Usuario o clave incorrecto/a');
  
}