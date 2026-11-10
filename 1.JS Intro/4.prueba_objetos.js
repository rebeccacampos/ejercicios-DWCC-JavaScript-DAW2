// array de objetos, en javascript no es necesario definir una clase antes de definir un objeto
const productos = [
  { id: 1, nombre: "Mapa", precio: 12 }, // id, nombre y precio son atributos 
  { id: 2, nombre: "Poción", precio: 5 },
  { id: 3, nombre: "Llave", precio: 8 },
  { id: 4, nombre: "Trolear", precio: 5 }
];
const nombres = productos.map(p => p.nombre); // genera un nuevo array con los nombres
console.log(nombres)


const baratos = productos.filter(p => p.precio < 10); // o que fariamos con un for e un if (recibe una funcion como argumento como a funcion map y el cuerpo de esta funcion es un predicado logico)
console.log(baratos) // devuelve array con los unicos objetos que cumplen o predicado logico

const elegido = productos.find(p => p.precio === 5);
console.log(elegido) // busca el primer elemento que cumple el predicado logico que esta dentro de la funcion flecha que le paso como argumento
// Pocion

const hayOferta = productos.some(p => p.precio < 6); // devuelve true or false si existe alguno que cumpla el predicado logico ¿

const preciosValidos = productos.every(p => p.precio >= 0); // devuelve true si todos y cada uno de los elementos el array cumplen el predicado logico

const total = productos.reduce((suma, p) => suma + p.precio, 0); // le gusta a fernando, el cero funciona como valor inicial (inicialValue)
console.log(total) //suma es como un contador

console.log(nombres, baratos.length, elegido.nombre, hayOferta, preciosValidos, total);
// ["Mapa", "Poción", "Llave"] 2 Poción true true 25

// set para segurarte que tienes valores unicos -> crear un array especial en el que no existen duplicados
// map para pocer crear clave valor -> no lo vamos a usar porque casi siempre estaremos trabajando con objetos

// importante operador de propagacion: 
const name = ['a', 'b'];
const newname = ['aa', ...name,'bb']; // spread operator  -> nos simplifica el meter 'name' en 'newname'
console.log(newname);

// Ver apuntes: https://fernandoalvarezfp.github.io/DWCC/DOM.html
// https://fernandoalvarezfp.github.io/DWCC/Spread-Destructuring.html?h=spread


// Operador spread - operador propagacion 
// ejemplo con arrays
const numeros = [2, 3, 4];
const masNumeros = [1, ...numeros, 5, 6];

console.log(masNumeros); // [1, 2, 3, 4, 5, 6]

//con objetos -> Sobrescribir propiedades

const config = { tema: "claro", idioma: "es", notificaciones: true };
const nuevaConfig = { ...config, tema: "oscuro" };

console.log(nuevaConfig);


// Operador destructuring - operador de desectructuracion

// ejemplo con array
const colores = ["rojo", "verde", "azul"];
const [primero, segundo, tercero] = colores;

console.log(primero); // "rojo"
console.log(segundo); // "verde"
console.log(tercero); // "azul"

//en un array no es muy util pero lo utilizaremos con objetos

const persona = {
  nombre: "Laura",
  edad: 28,
  ciudad: "Madrid",
};

const { nombre, edad, ciudad } = persona; // asignando nuevas variables

console.log(nombre); // "Laura"
console.log(edad); // 28
console.log(ciudad); // "Madrid"

// valores por defecto

const config = { tema: "oscuro" };
const { tema, idioma = "es", tamaño = "mediano" } = config; //engadindo estas dos propiedades por defecto

console.log(tema); // "oscuro"
console.log(idioma); // "es"
console.log(tamaño); // "mediano"

// usando propagacion y desestructuracion


const usuario = {
  id: 1,
  nombre: "Ana",
  edad: 30,
  email: "ana@example.com",
  telefono: "123456789",
};

/* para extraer una unica propiedad se puede hacer asi. pero para varias es mejor la desestructuracion */

let id = usuario.id 
console.log(id)

const { id, nombre, ...restoInfo } = usuario; // resto info es otro objeto

console.log(id); // 1
console.log(nombre); // "Ana"
console.log(restoInfo); // { edad: 30, email: "ana@example.com", telefono: "123456789" }


