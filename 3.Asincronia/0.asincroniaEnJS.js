
// Explicó la importancia de la asincronia en javascript
   // ver video: JavaScript Visualized - Event Loop, Web APIs, (Micro)task Queue
   // PREGUNTA DE EXAMEN: a que estructura auxiliar va el callback del setTimeout -> Task Queue

   // Ejemplo 1: Mensaje simple después de 2 segundos ver:  https://fernandoalvarezfp.github.io/DWCC/Async.html?h=settime#settimeout
console.log("Inicio");

setTimeout(() => {
  console.log("Han pasado 2 segundos");
}, 2000);

console.log("Fin");

// Salida:
// Inicio
// Fin
// Han pasado 2 segundos (después de 2 segundos)

// PILA LIFO (LAST IN, FIRST OUT)
// COLA FIFO (FIRST IN FIRST OUT)

// CALLBACK (lo que se va a ejecutar cuando haya pasado el tiempo (segundo argumento de la funcion settimeout-> () => {console.log("Han pasado 2 segundos")
// delay -> 2000 (tiempo que pasa en la web API hasta que pasa a la task Queue, si hay más cosas en la lista puede tardar más)

// pila de llamadas / cola de tareas / micro cola de tareas
// web APIs -> Task Queue -> Call stack
// el navegador es el que ejecuta y pasa 


// EJERCICIO EN CLASE 

// Función que simula lavar los platos
function lavarPlatos(callback) {
    console.log("Comenzando a lavar los platos...");
    setTimeout(() => {
        console.log("Platos lavados!");
        callback();
    }, 3000);
}

// Función que simula secar los platos
function secarPlatos(callback) {
    console.log("Comenzando a secar los platos...");
    setTimeout(() => {
        console.log("Platos secos!");
        callback();
    }, 2000);
}

// Función que simula guardar los platos
function guardarPlatos(callback) {
    console.log("Comenzando a guardar los platos...");
    setTimeout(() => {
        console.log("Platos guardados!");
        callback()
    }, 1000);
}
// imprime los console log iniciales en orden porque trabajan contra la pila principal
lavarPlatos();
secarPlatos();
guardarPlatos();

// Las web APIs están trabajando en paralelo por eso salen justo invertidos

// hasta el 2015 se hacia con el infierno de los callbaks -> NO SE DEBE USAR -> se lee fatal y es muy dificil de mantener

// aqui estamos pasando como argumento de la función, la siguente funcion
lavarPlatos(()=> {
    secarPlatos(()=>{
        guardarPlatos(() => {
            console.log("Platos lavados!");
        });
    });
});

//ejemplo
/*fetch("https://jsonplaceholder.typicode.com/").then(respuesta => console.log(respuesta)); // el fetch entra y obtiene la informacion que le da la url -> se muestra esto segundo ()
console.log("Ejemplo de fetch"); // se muestra esto primero (CALL STACK)
*/
// el fetch lanza una promesa como respuesta -> se cumple o no se cumple 

// lo que sí usamos: 
// las promesas: estructura auxiliar que tiene JS -> trabaja con el microtask queue
    // teoria -> https://fernandoalvarezfp.github.io/DWCC/Async.html
    // version usando promesas

function jugarLoteria() {
    return new Promise((resolve, reject) => {
        // simulamos que tenemos un 10% de probabilidades de exito
        setTimeout(() => {
            const exito = Math.random() > 0.9;
            if (exito) {
                resolve("me toco la loteria");
            } else {
                reject("no tuve suerte");
            }
        }, 1000);
    })
}

// fetch y .then
// jugarLoteria nos devuelve una promesa (puede ser que si o puede ser que no) por lo tanto podemos utilizarla en vez de un fetch
jugarLoteria()
    .then(resultado => console.log(resultado))
    .catch((error) => console.log(error)); // el .catch de una promesa me va a capturar la ejecucion de un reject
    //.finally()

// importante ver la correspondencia entre el resolve y el .then y el reject y el .catch

// hacemos la version sensible a errores

fetch("https://jsonplaceholder.typicode.com/")
    .then(respuesta => console.log(respuesta))
    .catch((error) => console.error(error));
console.log("Ejemplo de fetch"); 

fetch("https://jsonplaceholder.typicode.com/")
    .then(respuesta => console.log(respuesta))
    .catch((error) => console.error(error));

fetch("https://jsonplaceholder.typicode.com/")
    .then((res) => res.json()) // devuelve otra promesa
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.error(error));

// las promesas utilizan la cola de microtareas que tiene prioridad sobre la otra cola y la que mas prioridad tiene es la pila de llamadas
    // si quiero consumir el resolve utilizo -> .then 
    // si quiero consumir el reject utilizo -> .catch 

// UTILIZAMOS LAS PROMESAS PARA MEJORAR LA ESTRUCTURA DE LAS FUNCIONES
    // ejercicio -> pasar el ejemplo de callbacks a promesas