/* =========================================================================
   CONTADOR DE ETIQUETAS  —  ejercicio.js
   Solo se usan SELECTORES y MODIFICACIÓN DE CONTENIDO (nada de eventos ni
   de crear/eliminar elementos).
   Rellena cada TODO y comprueba el panel de "Estadísticas" en la página.
   ========================================================================= */

/* -------------------------------------------------------------------------
   BLOQUE A · Seleccionar y contar
   ------------------------------------------------------------------------- */

// apuntes https://fernandoalvarezfp.github.io/DWCC/DOM.html?h=getelement#getelementsbytagname%20--%3E

// TODO A1: guarda el <h1> con getElementById("titulo") y muestra su textContent por consola.
let titulo = document.getElementById("titulo");
console.log("A1 -> " + titulo.textContent)

// TODO A2: cuenta los <p> de la página con getElementsByTagName("p")
//          y escribe el número en #num-p.
let parrafos = document.getElementsByTagName("p");
console.log(parrafos);

console.log(parrafos.length)
let estadisticaNumParrafos = document.getElementById("num-p");
estadisticaNumParrafos.textContent = parrafos.length

// TODO A3: cuenta los <li> con getElementsByTagName("li") y escríbelo en #num-li.
let numLis = document.getElementsByTagName("li");
let estadisticaNumLi = document.getElementById("num-li");
estadisticaNumLi.textContent = numLis.length

// TODO A4: cuenta los elementos con clase "card" usando getElementsByClassName
//          y escríbelo en #num-cards.
let nCards = document.getElementsByClassName("card");
let estadisticaNumCard = document.getElementById("num-cards");
estadisticaNumCard.textContent = nCards.length

// TODO A5: cuenta todos los enlaces con querySelectorAll("a") -> #num-a,
//          y los que abren en pestaña nueva, querySelectorAll('a[target="_blank"]') -> #num-externos.

let nEnlaces = document.querySelectorAll("a");
let estadisticaEnlaces = document.getElementById("num-a");
estadisticaEnlaces.textContent = nEnlaces.length;

let nEnlacesNuevaPestaña = document.querySelectorAll('a[target="_blank"]');
let estadisticaEnlacesNP = document.getElementById("num-externos");
estadisticaEnlacesNP.textContent = nEnlaces.length;

// TODO A6: cuenta los elementos que hay dentro de <main> con querySelectorAll("main *")
//          y escríbelo en #num-total.
let elementosMain = document.querySelectorAll("main *")
let estadisticaElementosMain = document.getElementById("num-total");
estadisticaElementosMain.textContent = elementosMain.length;

// TODO A7: con querySelectorAll("main > h2") recorre los títulos de sección con forEach
//          y muestra cada textContent por consola.
let titulosDeSeccion = document.querySelectorAll("main > h2");
console.log("TITULOS H2:")

titulosDeSeccion.forEach(element => {
   console.log(element.textContent)
});

titulosDeSeccion.forEach((h2, i) => {
   console.log(`N -> ${i+1} | Contenido: ${h2.textContent}`)
});

/* -------------------------------------------------------------------------
   BLOQUE B · Modificar el contenido
   ------------------------------------------------------------------------- */

// TODO B1: cambia el texto del título (#titulo) por "Estadísticas de la página" con textContent.
titulo.textContent = "Estadísticas de la página";

// TODO B2: escribe en #resumen, con innerHTML, algo como:
//          "Hay <strong>N</strong> elementos dentro de main", usando el número de A6.
let resumen = document.getElementById("resumen");
resumen.innerHTML = `Hay <strong>${elementosMain.innerText}</strong> elementos dentro de main`;


// TODO B3: rellena #detalle con una lista de los títulos de sección, uno por línea,
//          usando innerHTML y el texto obtenido en A7.


// TODO B4: compara por consola textContent e innerText de #pie y explica la diferencia.
