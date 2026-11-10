const inventario = ["mapa", "poción"];
inventario.push("llave"); // añade al final; devuelve la longitud
const ultimo = inventario.pop(); // retira y devuelve "llave"
inventario.unshift("brújula"); // añade al inicio
const primero = inventario.shift(); // retira y devuelve "brújula"

console.log(inventario[0], inventario.length, inventario[20], ultimo, primero);

// tengo necesidad -> busco en la documentación mdn por ejemplo: array.prototype.pop()

// diferencia entre slice() y splice() -> ir a la documentacion mdn

/* 

`slice(inicio, finExclusivo)` crea una parte sin mutar. 
`splice(inicio, cantidad, ...nuevos)` cambia el original.  --> polimorfismo -> una función puede ser llamada por un distinto numero de argumentos

Para vaciar un array compartido conservando su identidad usa `lista.length = 0`; `lista = []` solo cambia la variable actual. */


const months = ["Jan", "March", "April", "June"];
months.splice(1, 2, "May", "Pataca"); // primer argumento donde nos queremos colocar, segundo argumento que es lo que queremos eliminar y tercer argumento lo que queremos colocar en su lugar
console.log(months)

// importante diferencia entre for...of & array.forEach(callback)

const numeros = [1, 2, 3, 4];
const visitados = [];

// recorre el array numeros y si es === a 2 ejecuta el return y no se ejecuta la linea 5
numeros.forEach(numero => {
  if (numero === 2) return; // se está utilizando como un break
  visitados.push(numero); // metodo para añadir al array
});

console.log(visitados); // [1, 3, 4]

// equivale a lo mismo
// funcion map() -> creates a new array populated with the results of calling a provided function on every element in the callling array

const array = [1,4,9,16];

const mapped = array.map((x) => x * 2);

console.log(mapped)

