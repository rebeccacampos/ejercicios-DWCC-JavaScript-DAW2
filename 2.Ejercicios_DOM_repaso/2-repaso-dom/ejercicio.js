/* =========================================================================
   REPASO DE MANIPULACIÓN DEL DOM  —  ejercicio.js
   Rellena cada apartado. La solución está en solucion.js.
   Abre la página y usa la Consola para comprobar cada resultado.
   ========================================================================= */

/* -------------------------------------------------------------------------
   BLOQUE 1 · Selección de elementos
   1.1  getElementById("titulo")
   1.2  getElementsByClassName("item")   -> length
   1.3  getElementsByTagName("li")       -> recorre con for...of y muestra textContent
   1.4  querySelector(".item") y querySelector("a[href]")
   1.5  querySelectorAll(".item")        -> recorre con forEach
   ------------------------------------------------------------------------- */

// TODO 1.1: guarda el <h1> en una constante y muestra su textContent por consola.

let titulo = document.getElementById("titulo");
console.log(`1.1 - ${titulo.textContent}`);

// TODO 1.2: obtén la colección de elementos con clase "item" y su número de items clase que hay.

let items = document.getElementsByClassName("item");
console.log(`1.2 - El numero de items es: ${items.length}`);

// TODO 1.3: obtén todos los <li> y muestra el texto de cada uno con for...of.

let elementosLi = document.getElementsByTagName("li");
console.log("1.3");
for (const li of elementosLi) {
  console.log(li.textContent);
}

// TODO 1.4: selecciona el primer ".item" y el enlace con href; muestra sus datos.

console.log("1.4");

let primerItem = document.querySelector(".item");
let enlace = document.querySelector("a[href]");
console.log(enlace.href); // console.log(enlace.getAttribute("href"));
console.log(primerItem);

// TODO 1.5: obtén una NodeList de ".item" y recórrela con forEach mostrando el índice.
console.log("1.5 - mi version");

let itemsNodeList = document.querySelectorAll(".item");
console.log(itemsNodeList);

let indice = 0;
itemsNodeList.forEach((node) => {
  console.log(
    `Indice: ${indice} - Contenido: ${node.textContent} - Nodo: ${node}`,
  );
  indice++;
});

/*
Parámetros del forEach()
Función a ejecutar por cada elemento, que recibe tres argumentos:

currentValue
El elemento actual siendo procesado en el array.

index Opcional
El índice del elemento actual siendo procesado en el array.

array Opcional
El vector en el que forEach() esta siendo aplicado.
*/

console.log("1.5 - version en clase");

itemsNodeList.forEach((node, i) => {
  console.log(
    `Indice: ${i + 1} | Contenido: ${node.textContent} | Nodo: ${node}`,
  );
  indice++;
});

/* -------------------------------------------------------------------------
   BLOQUE 2 · Modificación de contenido
   2.1  textContent (leer y escribir) sobre #resumen
   2.2  innerHTML sobre #contenedor (con aviso XSS)
   2.3  Comparar textContent e innerText sobre #parrafo-mixto
   ------------------------------------------------------------------------- */

// TODO 2.1: escribe en #resumen un texto seguro (textContent) con el número de objetos iniciales.

let resumen = document.getElementById("resumen");
resumen.textContent = `2.1 - El número de objetos iniciales es: ${itemsNodeList.length}`;
console.log(resumen);

// TODO 2.2: inserta HTML en #contenedor con innerHTML.

let contenedor = document.getElementById("contenedor");
contenedor.innerHTML = `<strong>CUIDADOOOOOOO CON EL XSS</strong>`;

// TODO 2.3: muestra por consola `textContent` e `innerText` de #parrafo-mixto y explica la diferencia.

let parrafoMixto = document.getElementById("parrafo-mixto");
console.log(`2.3 -> textContent -> ${parrafoMixto.textContent}`); // salida por consola: Visible INVISIBLE fin -> más tonto no respeta el css
console.log(`2.3 -> innerText ->${parrafoMixto.innerText}`); // salida por consola: Visible fin -> mas listo, respeta al señor CSS
// INVISIBLE no se muestra con innerText-> tiene class oculto

/* -------------------------------------------------------------------------
   BLOQUE 3 · Manipulación de atributos
   3.1  getAttribute("data-peso") del primer item
   3.2  setAttribute("src"/"alt"/"data-peso") en #logo
   3.3  removeAttribute("disabled") en #fragil
   3.4  hasAttribute para comprobar el resultado
   ------------------------------------------------------------------------- */

// TODO 3.1: lee y muestra el atributo data-peso del primer item.

let datoPesoPrimerItem = primerItem.getAttribute("data-peso");
console.log(`3.1 | El peso del primer item es: ${datoPesoPrimerItem}`);

// TODO 3.2: asígnale a #logo un src válido y un alt descriptivo.

let logo = document.getElementById("logo");
logo.setAttribute("src", "./logo_gatito.png");
logo.setAttribute("alt", "El logo es un gatito muy nice");

// TODO 3.3: habilita la casilla #fragil quitándole el atributo disabled.

let habilitarFragil = document.getElementById("fragil");
habilitarFragil.removeAttribute("disabled");

// TODO 3.4: comprueba con hasAttribute que ya no está deshabilitada.

let estaHabilitado = habilitarFragil.hasAttribute("disabled");
console.log(`3.4 - El atributo disabled está? -> ${estaHabilitado}`);

/* -------------------------------------------------------------------------
   BLOQUE 4 · Manipulación de clases CSS
   4.1  classList.add    4.2 classList.remove
   4.3  classList.toggle 4.4 classList.contains
   4.5  classList.replace
   ------------------------------------------------------------------------- */

// TODO 4.1: añade las clases "activo" y "destacado" al primer item.

primerItem.classList.add("activo", "destacado");

// TODO 4.2: elimina la clase "destacado" de ese mismo item.

primerItem.classList.remove("destacado");

// TODO 4.3: alterna ("toggle") la clase "activo" en el primer item.

primerItem.classList.toggle("activo"); // si tiene la clase se la quita y si no la tiene se la pone

// TODO 4.4: comprueba con contains si queda "activo".

let tieneActivo = primerItem.classList.contains("activo");
console.log(`4.4 - tiene la clase activo? ${tieneActivo}`);

// TODO 4.5: reemplaza temporalmente "item" por "item-especial" y vuelve a dejarlo como estaba.

// element.classList.replace(oldClass, newClass);
primerItem.classList.replace("item", "item-especial"); // reemplaza la clase "item" por "item-especial"
primerItem.classList.replace("item-especial", "item");

/* -------------------------------------------------------------------------
   BLOQUE 5 · Creación y eliminación de elementos
   5.1 createElement + appendChild
   5.2 insertBefore (al principio de #objetos)
   5.3 removeChild
   5.4 remove()
   5.5 cloneNode(true)
   ------------------------------------------------------------------------- */

// TODO 5.1: crea un <li class="item"> con texto "Cuerda" y añádelo al final de #objetos.

const ulObjetos = document.getElementById("objetos");
const nuevoLiCuerda = document.createElement("li");

nuevoLiCuerda.classList.add("item");
nuevoLiCuerda.innerText = "Cuerda";
ulObjetos.appendChild(nuevoLiCuerda);

// Opcion 2 -> usando innerHTML
// ulObjetos.innerHTML += ("<li class='item'>Cuerda</li>")


// TODO 5.2: crea otro <li> con texto "Antorcha" e insértalo antes del primer hijo.
   // apuntes fernando https://fernandoalvarezfp.github.io/DWCC/DOM.html?h=insert#insertbefore

const nuevoLiAntorcha = document.createElement("li");
nuevoLiAntorcha.classList.add("item");
nuevoLiAntorcha.innerText = "Antorcha";

ulObjetos.insertBefore(nuevoLiAntorcha, primerItem) // let insertedNode = parentNode.insertBefore(newNode, referenceNode);


// TODO 5.3: elimina "Cuerda" usando removeChild desde su padre.

ulObjetos.removeChild(nuevoLiCuerda)


// TODO 5.4: añade un <li> temporal y elimínalo con su propio método remove().

let nuevoLiTemp = document.createElement("li");
ulObjetos.appendChild(nuevoLiTemp);
nuevoLiTemp.remove();


// TODO 5.5: clona el primer item (con hijos) y añade la copia a #contenedor.

let clon = primerItem.cloneNode(true);
contenedor.appendChild(clon);


/* -------------------------------------------------------------------------
   BLOQUE 6 · Navegación por el DOM
   6.1 parentElement     6.2 children        6.3 childNodes
   6.4 firstElementChild / lastElementChild
   6.5 nextElementSibling / previousElementSibling
   ------------------------------------------------------------------------- */

// TODO 6.1: muestra el id del padre del primer item.

console.log("6.1 | ", primerItem.parentElement.id)


// TODO 6.2: muestra cuántos elementos hijos tiene #objetos.

console.log("6.2 | ", ulObjetos.children.length)


// TODO 6.3: muestra cuántos nodos hijos tiene (incluye nodos de texto) y explica la diferencia.

console.log("6.2 | ", ulObjetos.childNodes.length)


// TODO 6.4: muestra el texto del primer y del último elemento hijo.

console.log("6.4.1 | ", ulObjetos.firstElementChild.textContent)
console.log("6.4.2 | ", ulObjetos.lastElementChild.textContent)


// TODO 6.5: partiendo del segundo hijo, muestra su hermano siguiente y el anterior.

// nextElementSibling / previousElementSibling

// let nextNode = elementNodeReference.nextElementSibling;

let segundoElemento = primerItem.nextSibling;
let hermanoSiguiente = segundoElemento.nextSibling;
let hermanoAnterior = segundoElemento.previousSibling;

console.log("6.5 | ", hermanoSiguiente, hermanoAnterior)


/* -------------------------------------------------------------------------
   BLOQUE 7 · Eventos
   7.1 addEventListener   7.2 removeEventListener   7.3 objeto event
   7.4 preventDefault     7.5 stopPropagation      7.6 eventos comunes
   ------------------------------------------------------------------------- */

// TODO 7.0: define la función actualizarResumen() que escriba en #resumen el número
//           actual de ".item" de la lista.

function actualizarResumen() {
   resumen.textContent = `El numero de elementos de la lista es: ${itemsNodeList.length}`
}


// TODO 7.1: al enviar #formulario, evita el envío por defecto, crea un <li> con el valor
//           del input, lo añade a la lista, limpia el input y actualiza el resumen.

// TODO 7.2: crea una función NOMBRADA que alterne la clase "destacado" en todos los
//           items y conéctala al botón #alternar. Luego quítala con removeEventListener
//           desde #quitar-manejador (misma referencia).

// TODO 7.3: conecta #vaciar para dejar la lista sin hijos usando removeChild y actualiza el resumen.

// TODO 7.4: en el botón #btn-burbuja usa stopPropagation para que solo se ejecute su manejador
//           y no el de #caja-evento.

// TODO 7.5: muestra en consola información del objeto event (target, clientX, clientY) en algún clic.

// TODO 7.6: añade a #nombre los eventos input, focus, blur y keydown (Escape limpia el campo).

