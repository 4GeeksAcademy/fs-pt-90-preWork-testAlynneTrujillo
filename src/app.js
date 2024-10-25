/* eslint-disable */

/*

<------------------------- INICIO SELECCION SIMPLE -------------------------->
Pregunta 1: 
¿Cuál es la etiqueta correcta para insertar una imagen en HTML?
a) <img src="ruta"> ✅
b) <image src="ruta">

Pregunta 2: 
¿Qué etiqueta HTML se utiliza para crear un enlace?
a) <a href="url">Texto</a> ✅
b) <link href="url">Texto</link>

Pregunta 3: 
¿Cuál de los siguientes selectores selecciona un elemento por su ID?
a) #elemento ✅
b) .elemento

Pregunta 4: 
¿Cuál es la propiedad CSS que se utiliza para cambiar el color del texto?
a) color ✅
b) text-color 

Pregunta 5: 
¿Cuál propiedad se utiliza para convertir un contenedor en un contenedor flex?
a) display: flex; ✅
b) flex: container

Pregunta 6: 
¿Qué valor de flex-direction coloca los elementos en una columna vertical?
a) column ✅
b) vertical

Pregunta 7: 
¿Qué diferencia hay entre los valores space-between y space-around para la propiedad justify-content en un contenedor flex?

a) space-between distribuye los elementos con espacios iguales entre ellos, dejando sin espacio los bordes del contenedor, 
   mientras que space-around agrega espacio igual entre los elementos y en los bordes del contenedor.

b) space-between coloca los elementos con espacio igual entre ellos, mientras que space-around distribuye el espacio uniformemente 
   tanto entre los elementos como en los bordes ✅


Pregunta 8: 
Dado los siguientes datos:
let numero = "45";✅
let numeroConvertido = parseInt(numero);

Cual es el resultado de ejecutar un typeof numeroConvertido

a) "string"
b) "number"✅
c) NaN
d) "boolean"

Pregunta 9: 
Dado el arreglo:
const frutas = ["manzana", "banana", "naranja"];
Que sucede si ejecutamos frutas.push("pera");


a) Se muestra un error porque el arreglo no puede modificarse.
b) Se agrega "pera" al inicio del arreglo. 
c) Se agrega "pera" al final del arreglo.✅
d) Se elimina "pera" del arreglo.

Pregunta 10: ✅
si tenemos:
const frutas = ["manzana", "banana", "naranja"];
Cual seria el resultado de hacer frutas.pop();

a) ["manzana", "banana"]✅
b) ["manzana", "naranja"]
c) ["banana", "naranja"]
d) ["manzana", "banana", "naranja"]


Pregunta 11: ✅
Si tenemos:
const saludo = "HOLA mundo";
Y ejecutamos saludo.toLowerCase()

Cual sera el resultado?
a) "HOLA mundo"
b) "Hola mundo"
c) "hola mundo"✅
d) undefined

Pregunta 12: ✅
Que hara el siguiente bloque de codigo?
const pepito = {
  edad: 23,
  nacionalidad: "Pepitolandia",
  pasaporte: false,
  visa: true
};

const quePuedeHacer = () => {
  if (david.pasaporte || david.visa) {
    return("Puedes viajar");
  } else {
    return("No puedes viajar");
  }
};
quePuedeHacer();

opciones:
a) Devolvera "No puedes viajar".
b) Devolvera "Puedes viajar". ✅
c) Devolvera un error de sintaxis.
d) No Devolvera nada.




<------------------------- FINAL SELECCION SIMPLE -------------------------->
*/

//----------------------- PARTE PRACTICA -----------------------------

// Pregunta 13:
/* Usando el siguiente arreglo:
  let frutas = ["manzana", "banana", "naranja", "piña"];
  Y con los conocimientos obtenidos en estas ultimas dos semanas.
  Imprime en consola el resultado de los siguientes pasos (debes por cada paso hacer un console.log para
  mostrar el resultado)
  a) Agrega "mango" al final del arreglo.
  b) Elimina el primer elemento.
  c) Reemplaza "naranja" con "kiwi". */

//write your code here
let frutas = ["manzana", "banana", "naranja", "piña"];
frutas.push("mango");
console.log(frutas);

let frutasNew = ["manzana", "banana", "naranja", "piña"];
let firstElement = frutasNew.shift();
console.log(firstElement);

let newNewFrutas = ["banana", "naranja", "piña"];
newNewFrutas.splice(1, 1, "kiwi");
console.log(newNewFrutas);

// Pregunta 14:
/*Escribe una función en JavaScript que ordene un arreglo de números de menor a mayor sin utilizar métodos de arreglo como sort. 
  Puedes usar bucles y condicionales básicos.*/

let numeros = [5, 3, 8, 4, 2];
function bubbleSort(arr) {
  let numbers = arr.length;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j > numbers; j++);
  }
}
console.log(bubbleSort(numeros)); // [2, 3, 4, 5, 8]
