// ver apuntes: https://fernandoalvarezfp.github.io/DWCC/DOM.html?h=getelement#getelementsbytagname

// usando .getElementById("id")

const parrafo = document.getElementById("resumen");
console.log(parrafo);

// usando .getElementsbyclassname("class")

const objetos = document.getElementsByClassName("objeto");
console.log(objetos.length);
console.log(objetos);


// mostrar por pantalla el nombre de los objetos que tenemos en el inventario usando getElementsByTagName()
// 1 ver que tag comparten todos los objetos del inventario (usan la misma etiqueta), recorremos la lista y mostramos cada uno de los textos 

const lis = document.getElementsByTagName("li");
for (const li of lis) {
    console.log(li.textContent);
}

// usando los selectores de CSS -> .querySelector() -> solo coge el primer elemento
// usando los selectores de CSS -> .querySelectorAll() -> coge todos los elementos


// para sobreescribir el h1 (no se puede tocar el html) -> Modificar el h1 si o si usamos getelementsbytagname()

const titulos = document.getElementsByTagName("h1"); // devuelve una lista
console.log(titulos.length) // para ver que me devuelve titulo
titulos[0].textContent = "Fernando"; //es un array de un solo elemento por esto llamamos a titulo[0]

// lo mismo con el queryselector()
const titulo = document.querySelector("h1")
titulo.textContent = "Rebecca"

// usamos innerHTML cuando queremos añadir muchas etiquetas nuevas a una etiqueta específica
// usamos textContent cuando queremos cambiar el contenido de una etiqueta 


// Ejercicio: en vez de definir los elementos de la lista desde el html lo vamos a hacer desde el javascript

//let lista = document.getElementById("inventario")
//lista.innerHTML = '<li class="objeto">Espada2</li><li class="objeto">Escudo2</li>'


// vamos a crear un boton y le vamos a añadir un tipo de comportamiento al hacer clic -> ver apuntes escuchadores deeventos -> https://fernandoalvarezfp.github.io/DWCC/Events.html?h=

//selectores
const boton = document.querySelector("#miBoton");
let lista = document.getElementById("inventario")

// listener
boton.addEventListener("click", function (event) {
  console.log("¡Botón clickeado!");
  console.log("Elemento:", event.target);
  lista.innerHTML = '<li class="objeto">Espada2</li><li class="objeto">Escudo2</li>'
});

/* 

Proceso mental:
1. modificar el html para añadir la etiqueta botón
2. Hago todas las selecciones que necesite
3. Creo el listener
4. Creo la funcion como segundo parámetro que es lo que se va a ejecutar cuando se haga click
*/


// manipulacion de los atributos de las etiquetas -> ver apuntes https://fernandoalvarezfp.github.io/DWCC/DOM.html?h=getattr#getattribute

/*Seleccionar el elemento que queremos modificar los atributos

Usamos:

getAttribute()
setAttribute()
removeAttribute()
hasAttribute()
*/

// ejercicio hacer un tag img descargar dos imagenes que nos gusten usar un boton para hacer click y que la imagen cambie de la imagen A a la imagen B
