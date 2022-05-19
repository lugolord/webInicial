/* 

  FUNCIONES

  Las funciones son bloques de codigo reutilizables, pueden ser llamadas todas las veces que se necesiten a lo largo de
  todo el codigo.

  En que nos ayudan?

  - Hacen el codigo escalable.
  - Reducir lineas de codigo.

  Principios de programacion:

  - DRY (Don't repeat yourself).
  - KISS (Keep it simple, stupid).
  - YAGNI (You ain't gonna need it).

*/



// COMO SE ESCRIBEN❔

// function nombreDescriptivo() {

//   let userName = prompt('ingrese su nombre, por favor');

//   alert('Hola, ' + userName);
  
// }

/* 

  Puntos importantes❗

  - La convencion de naming para ellas es camelCase, al igual que para las variables.
  - Como todo, tienen que tener un nombre descriptivo.
  - No pueden tener el mismo nombre de una variable.

*/



// LLAMAR A UNA FUNCION

// nombreDescriptivo(); // Los parentesis son obligatorios, sin ellos, no va a funcionar.



// PARAMETROS

// let iva = 1.21;

// function mostrarIva(precio, iva) { 

//   alert(precio*iva);

// }

// mostrarIva(100, 1.21);

/* 

  Importante❗

  - Los parametros no son variables, las variables se declaran, los parametros no.
  - Pueden recibir cualquier valor de cualquier tipo (strings, numbers, booleanos, etc).
  - Mucho mejor si tienen nombres distintos a las variables.

*/


// RETURN

// function sumar(a, b) {

//   a + b;

// }

// function sumar(a, b) {

//   let resultado = a + b;

//   return resultado;

// }

// let suma = sumar(5, 5); //10

// console.log(suma);

// console.log(sumar(2, 3));



// EJERCICIO 1

// let base = parseInt(prompt('ingrese la base'));

// let height = parseInt(prompt('ingrese la altura'));

// function calculateArea(b, h) {

//   let triangleArea = (b*h)/2;
  
//   return triangleArea;

// }

// let result = calculateArea(base, height);

// alert('El area del triangulo ingresado es: ' + result);



// SCOPE O ALCANCE DE UNA VARIABLE

// function haceLoQueSea() {
  
//   let someVariable = 16;

//   return someVariable;

// }

// console.log(haceLoQueSea());

/* 

  Importante❗

  - Esto del scope aplica para cualquier bloque de codigo, if, ciclos, etc.
  - No debemos abusar con la cantidad de variables globales.

*/



/* 

  CUANDO TENEMOS QUE USAR FUNCIONES❔

  - Cuando estamos repitiendo varias veces el mismo codigo, en ese momento se nos tiene tiene que venir automaticamente
  a la cabeza: voy a hacer una funcion, asi solo lo escribo una sola vez!💡

  - Para hacer procesos u operaciones.

  ACLARACIONES IMPORTANTES❗

  - Las funciones deben ser lo mas simples y sencillas posible. Deben hacer, en la medida de lo posible, una unica tarea. Si vemos que estamos haciendo una funcion que hace muchas cosas al mismo tiempo, lo mejor seria dividirla en varias! Divide y venceras!

  - A pesar de que podemos usarlas antes de declararlas, la buena practica es declarar primero y luego usarlas.

*/



// EJERCICO 2

// function requestData() {

//   let userBirth = parseInt(prompt('ingrese su año de nacimiento'));

//   return userBirth;

// }

// function calculateAge(year) {

//   let birthYear = 2022 - year;

//   return birthYear;

// }

// function showAge(age) {

//   alert('tienes ' + age + ' años');

// }

// showAge( calculateAge( requestData() ) );



// OTRAS FORMAS DE ESCRIBIR FUNCIONES😮



// FUNCIONES ANONIMAS🐱‍👤


// const mostrarAlerta = function(msg) { 

//   alert(msg);

//   return 3;

// }

// mostrarAlerta('hola futuros desarrolladores!');


// FUNCIONES FLECHA O ARROW FUNCTIONS🏹

// const restar = (a, b) => a - b;

// console.log(restar(4, 3));


// const sumarIva = (price) => {

//   let priceWithIva = price*1.21;

//   return priceWithIva;

// } 

// console.log(sumarIva(100));

/* 

  Importante❗

  - Ninguna forma es realmente mejor que otra, es un tema de preferencia y comodidad.
  - Las funciones anonimas y las arrow, no pueden utilizarse antes de declararse!

*/