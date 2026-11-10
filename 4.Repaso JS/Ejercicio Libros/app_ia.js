"use strict";

/*
 * CATÁLOGO DE LIBROS — 32 TODOs, sin soluciones ocultas ni dependencias.
 * Lee en orden: teoría → objetivo → pista → comprobación.
 * Los return provisionales solo permiten cargar el archivo sin errores.
 * Sustitúyelos al resolver cada función: NO son implementaciones correctas.
 *
 * Bloque 1: datos y strings (01–10).
 * Bloque 2: objetos y arrays (11–20), practicables en consola.
 * Bloque 3: DOM y eventos (21–32).
 * Abre index.html y las herramientas de desarrollo del navegador.
 */

const librosIniciales = [
  {
    id: "1",
    titulo: "  JavaScript desde cero  ",
    autor: "Ana López",
    precio: 20,
    disponible: true,
    etiquetas: "javascript, fundamentos, web",
    detalles: { idioma: "español" },
  },
  {
    id: "2",
    titulo: "CSS moderno",
    autor: "Luis Pérez",
    precio: 25,
    disponible: false,
    etiquetas: "css, diseño, web",
  },
  {
    id: "3",
    titulo: "DOM en acción",
    autor: "Marta Ruiz",
    precio: 15,
    disponible: true,
    etiquetas: "javascript, dom, web",
  },
  {
    id: "4",
    titulo: "JavaScript avanzado",
    autor: "Ana López",
    precio: 30,
    disponible: true,
    etiquetas: "javascript, avanzado",
  },
];

// Bloque 1: Datos y Strings (TODO 01 al 10)

// TODO 01 — Copiar un array con spread.
// TEORÍA: asignar un array a otra variable comparte su referencia. [...array]
// crea otro array, pero conserva las referencias de los objetos que contiene.
// OBJETIVO: sustituye [] por una copia superficial de librosIniciales.
// COMPRUEBA: libros !== librosIniciales, pero libros[0] === librosIniciales[0].
let libros = [...librosIniciales];

if (libros !== librosIniciales && libros[0] === librosIniciales[0]) {
  console.log(`TODO 01 CORRECTO`);
  console.log(`LIBROS INICIALES:`);
  console.log(librosIniciales);
  console.log(`LIBROS INICIALES: `);
  console.log(libros);
}

function leerCampo(libro, campo) {
  // TODO 02 — Acceso a propiedades.
  // TEORÍA: objeto.precio usa una clave fija; objeto[variable] evalúa la variable.
  // OBJETIVO: devuelve la propiedad indicada por campo sin usar condicionales.
  // COMPRUEBA: leerCampo(librosIniciales[0], "precio") devuelve 20.

  return libro[campo];
}

console.log(`TODO 02: ${leerCampo(libros[0], "etiquetas")}`);
console.log(`TODO 02: ${leerCampo(libros[0], "precio")}`);

function normalizarLibro(libro) {
  // TODO 03 — Desestructurar con alias y valores por defecto; trim.
  // TEORÍA: { propiedad: alias = valor } extrae y renombra una propiedad.
  // El valor por defecto se aplica a undefined, no a null ni a "".
  // OBJETIVO: extrae titulo como tituloOriginal, autor y etiquetas; extrae
  // editorial con "Desconocida" por defecto. Limpia título y autor con trim().
  // Los datos de entrada tienen etiquetas como string; esta función recibe
  // siempre datos sin normalizar, también cuando vienen del formulario.

  //libro.titulo = libro.tituloOriginal;
  let {
    autor,
    detalles,
    disponible,
    etiquetas,
    id,
    precio,
    titulo: tituloOriginal, // con los dos puntos estamos extrayendo la propiedad original titulo en la variable de nombre tituloOriginal
    editorial = "Desconocida",
  } = libro;

  console.log(`TODO 03`);
  console.log(`Titulo y autor SIN LIMPIAR: ${autor} | ${tituloOriginal}`);

  tituloOriginal = tituloOriginal.trim();
  autor = autor.trim();

  console.log(
    `Titulo y autor LIMPIOS: ${autor} | ${tituloOriginal} | Editorial: ${editorial}`,
  );

  // TODO 04 — Crear un slug con métodos de string.
  // TEORÍA: los strings son inmutables; los métodos devuelven nuevos strings.
  // OBJETIVO: título limpio → minúsculas → espacios sustituidos por guiones.
  // PISTA: encadena toLowerCase() y replaceAll(" ", "-"). No hace falta quitar
  // tildes ni tratar espacios interiores repetidos en este ejercicio.
  // COMPRUEBA: el primer libro produce "javascript-desde-cero".

  let slug = tituloOriginal.toLowerCase().replaceAll(" ", "-");
  console.log(`TODO 04 ${slug}`);

  // TODO 05 — Convertir un string en un array de etiquetas.
  // TEORÍA: split separa; map transforma; filter conserva o descarta elementos.
  // OBJETIVO: separa por comas, aplica trim y minúsculas a cada etiqueta,
  // y descarta etiquetas vacías. Conserva duplicadas si las hay.
  // COMPRUEBA: " JS, , DOM " se convierte en ["js", "dom"].

  let arrayEtiquetas = etiquetas
    .split(",")
    .map((etiqueta) => etiqueta.trim().toLowerCase()) // Limpiamos y ponemos en minúsculas cada elemento
    .filter((etiqueta) => etiqueta !== ""); // Descartamos los vacíos

  // TODO 06 — Construir un objeto sin modificar el original.
  // TEORÍA: en { ...objeto, propiedad: nuevoValor }, la última propiedad gana.
  // OBJETIVO: devuelve una copia con titulo y autor limpios, etiquetas como
  // array, slug y editorial. Conserva id, precio, disponible y detalles.
  // COMPRUEBA: normalizarLibro(librosIniciales[0]) !== librosIniciales[0].

  libro = {
    ...libro,
    titulo: tituloOriginal,
    autor,
    etiquetas: arrayEtiquetas,
    slug,
    editorial,
  };

  return libro;
}

console.log(normalizarLibro(libros[0]));

function prepararLibros(datos) {
  // TODO 07 — Transformar una colección con map.
  // TEORÍA: map devuelve un array nuevo, con un resultado por elemento.
  // OBJETIVO: aplica normalizarLibro a cada libro y devuelve el nuevo array.
  // COMPRUEBA: prepararLibros(librosIniciales)[0].etiquetas es un array.
  datos = datos.map(
    (libro) => normalizarLibro(libro)
  )

  return datos;
}

console.log(prepararLibros(librosIniciales)[0].etiquetas);
console.log(prepararLibros(librosIniciales));


function resumirTitulo(titulo, limite = 24) {
  // TODO 08 — length y slice.
  // TEORÍA: length es una propiedad (sin paréntesis); slice(inicio, fin)
  // extrae hasta fin sin incluirlo. Para estos títulos no necesitamos tratar emojis.
  // OBJETIVO: si supera limite, devuelve los primeros limite caracteres + "…";
  // en caso contrario, devuelve el título completo. No alteres el string original.
  // COMPRUEBA: resumirTitulo("JavaScript", 4) devuelve "Java…".

  if (titulo.length > limite) {
    titulo = titulo.slice(0, limite) + "...";
  }

  return titulo;
}

console.log(resumirTitulo("JavaScript", 4))


function obtenerIniciales(autor) {
  // TODO 09 — Encadenar split, filter, map, at, toUpperCase y join.
  // TEORÍA: at(0) obtiene el primer elemento; join es de ARRAYS, no de strings.
  // OBJETIVO: "  ana   lópez  " → "AL". Para "" devuelve "".
  // PISTA: limpia, separa por espacios, elimina partes vacías, transforma
  // cada palabra en su inicial mayúscula y une sin separador.

  /*console.log(autor + " - antes de trim()")

  // limpiamos espacios
  autor = autor.trim();
  console.log(autor + " - despues de trim()")

  // Separamos por espacios
  autor = autor.split(" ")
  console.log(autor)

  // Usamos filter para quitar los elementos vacíos (por si hay espacios dobles)
  autor = autor.filter(
    (elemento) => elemento != "")
  console.log(autor)

  autor = autor.map(
    (palabra) => palabra.at(0).toUpperCase() 
  ).join("")
  console.log(autor)*/
  
  if (!autor || autor.trim() =="") {
    return ""
  } else {
    //limpiamos espacios
    autor = autor.trim();

    // Separamos por espacios
    autor = autor
    .split(" ")
    .filter((elemento) => elemento != "")
    .map((palabra) => palabra.at(0).toUpperCase())
    .join("")
    return autor;
  }
}

console.log(obtenerIniciales("  ana   lópez  "));
console.log(obtenerIniciales(""));


function analizarTexto(texto) {
  // TODO 10 — startsWith, endsWith e indexOf.
  // TEORÍA: includes responde sí/no; indexOf devuelve la posición o -1.
  // startsWith/endsWith comprueban prefijos/sufijos. Distinguen mayúsculas.
  // OBJETIVO: devuelve { empiezaPorJS, terminaEnPDF, posicionDOM } usando
  // una copia del texto sin espacios exteriores y en minúsculas. Comprueba
  // el prefijo "javascript", el sufijo ".pdf" y la posición de "dom".
  // COMPRUEBA: " JavaScript DOM.pdf " produce true, true y 11 respectivamente.

  let limpio = texto.trim().toLowerCase();

  return {
    empiezaPorJS: limpio.startsWith("javascript"),
    terminaEnPDF: limpio.endsWith(".pdf"),
    posicionDOM: limpio.indexOf("dom"),
  };

}

console.log(analizarTexto(" JavaScript DOM.pdf "))

function quitarId(libro) {
  // TODO 11 — Rest en objetos.
  let { id, ...resto } = libro;
  return resto;
}

function inspeccionarObjeto(libro) {
  // TODO 12 — Object.keys, Object.values, Object.entries y Object.hasOwn.
  return {
    claves: Object.keys(libro),
    valores: Object.values(libro),
    entradas: Object.entries(libro),
    tienePrecio: Object.hasOwn(libro, "precio"),
  };
}

function obtenerIdioma(libro) {
  // TODO 13 — Acceso opcional ?. y valor alternativo ??.
  return libro.detalles?.idioma ?? "Sin especificar";
}

function explorarCopia(libro) {
  // TODO 14 — Referencias y copia superficial.
  let copia = { ...libro };
  return {
    copia,
    esOtroObjeto: copia !== libro,
    comparteDetalles: copia.detalles === libro.detalles,
  };
}

function cambiarPrecio(datos, id, nuevoPrecio) {
  // TODO 15 — Actualización inmutable con map y spread.
  if (!Number.isFinite(nuevoPrecio) || nuevoPrecio < 0) return datos;
  return datos.map((libro) =>
    libro.id === id ? { ...libro, precio: nuevoPrecio } : libro
  );
}

function buscarPorId(datos, id) {
  // TODO 16 — find frente a filter.
  return datos.find((libro) => libro.id === id);
}

function comprobarDisponibilidad(datos) {
  // TODO 17 — some y every.
  return {
    hayDisponibles: datos.some((libro) => libro.disponible),
    todosDisponibles: datos.every((libro) => libro.disponible),
  };
}

function ordenarLibros(datos, orden) {
  // TODO 18 — Ordenación sin mutar.
  if (orden === "precio-asc") {
    return datos.toSorted((a, b) => a.precio - b.precio);
  }
  if (orden === "titulo-asc") {
    return datos.toSorted((a, b) => a.titulo.localeCompare(b.titulo));
  }
  return [...datos];
}

function filtrarLibros(datos, filtros) {
  // TODO 19 — filter, includes y condiciones combinadas.
  let { busqueda = "", soloDisponibles = false, precioMaximo = "" } = filtros;
  let query = busqueda.trim().toLowerCase();
  
  let maxPrecio = precioMaximo === "" ? null : Number(precioMaximo);
  if (maxPrecio !== null && (!Number.isFinite(maxPrecio) || maxPrecio < 0)) {
    return [];
  }

  return datos.filter((libro) => {
    let cumpleBusqueda =
      query === "" ||
      libro.titulo.toLowerCase().includes(query) ||
      libro.autor.toLowerCase().includes(query);

    let cumpleDisponibilidad = !soloDisponibles || libro.disponible;

    let cumplePrecio = maxPrecio === null || libro.precio <= maxPrecio;

    return cumpleBusqueda && cumpleDisponibilidad && cumplePrecio;
  });
}

function calcularResumen(datos) {
  // TODO 20 — reduce y acumuladores.
  let cantidad = datos.length;
  if (cantidad === 0) return { cantidad: 0, total: 0, media: 0 };
  let total = datos.reduce((acc, libro) => acc + libro.precio, 0);
  let media = total / cantidad;
  return { cantidad, total, media };
}

function conectarDOM() {
  // TODO 21 — querySelector y referencias al DOM.
  elementos.busqueda = document.querySelector("#busqueda");
  elementos.precioMaximo = document.querySelector("#precio-maximo");
  elementos.soloDisponibles = document.querySelector("#solo-disponibles");
  elementos.orden = document.querySelector("#orden");
  elementos.catalogo = document.querySelector("#catalogo");
  elementos.resumen = document.querySelector("#resumen");
  elementos.sinResultados = document.querySelector("#sin-resultados");
  elementos.mensaje = document.querySelector("#mensaje-formulario");
}

function crearTarjeta(libro) {
  // TODO 22 & 23 — Crear elementos, rellenar nodos y propiedades.
  let { id, titulo, autor, precio, editorial, idioma, disponible, etiquetas, slug } = libro;

  let li = document.createElement("li");
  li.classList.add("tarjeta");

  let h3 = document.createElement("h3");
  h3.textContent = resumirTitulo(titulo);

  let pAutor = document.createElement("p");
  pAutor.textContent = `Autor: ${autor} (${obtenerIniciales(autor)})`;

  let pPrecio = document.createElement("p");
  pPrecio.textContent = `Precio: ${precio.toFixed(2)} €`;

  let pEditorial = document.createElement("p");
  pEditorial.textContent = `Editorial: ${editorial}`;

  let pIdioma = document.createElement("p");
  pIdioma.textContent = `Idioma: ${obtenerIdioma(libro)}`;

  let pDisp = document.createElement("p");
  pDisp.textContent = `Estado: ${disponible ? "Disponible" : "No disponible"}`;

  let pEtiquetas = document.createElement("p");
  pEtiquetas.textContent = `Etiquetas: ${Array.isArray(etiquetas) ? etiquetas.join(" · ") : etiquetas}`;

  let boton = document.createElement("button");
  boton.type = "button";
  boton.textContent = "Eliminar";
  boton.dataset.id = id;

  li.append(h3, pAutor, pPrecio, pEditorial, pIdioma, pDisp, pEtiquetas, boton);
  return li;
}

function renderizarLibros(datos) {
  // TODO 24 — Vaciar y reconstruir el listado.
  let tarjetas = datos.map((libro) => crearTarjeta(libro));
  elementos.catalogo.replaceChildren(...tarjetas);
  
  let sinResultados = datos.length === 0;
  elementos.sinResultados.hidden = !sinResultados;
  elementos.catalogo.classList.toggle("sin-libros", sinResultados);
}

function renderizarResumen(datos) {
  // TODO 25 — Desestructuración y template literals en el DOM.
  let { cantidad, total, media } = calcularResumen(datos);
  elementos.resumen.textContent = `Libros: ${cantidad} | Total: ${total.toFixed(2)} € | Media: ${media.toFixed(2)} €`;
}

let librosTrabajo = [];

function actualizarVista() {
  // TODO 26 — Conectar el flujo completo.
  let filtros = {
    busqueda: elementos.busqueda.value,
    soloDisponibles: elementos.soloDisponibles.checked,
    precioMaximo: elementos.precioMaximo.value,
  };

  let filtrados = filtrarLibros(librosTrabajo, filtros);
  let ordenados = ordenarLibros(filtrados, elementos.orden.value);

  renderizarLibros(ordenados);
  renderizarResumen(ordenados);
}

function leerFormulario(formulario) {
  // TODO 27 — Leer campos de un formulario.
  let elems = formulario.elements;
  return {
    titulo: elems.namedItem("titulo").value,
    autor: elems.namedItem("autor").value,
    precio: elems.namedItem("precio").value,
    etiquetas: elems.namedItem("etiquetas").value,
    disponible: elems.namedItem("disponible").checked,
  };
}

function validarLibro(datos) {
  // TODO 28 — Validar antes de guardar.
  if (!datos.titulo.trim() || !datos.autor.trim()) {
    return "El título y el autor son obligatorios.";
  }
  if (datos.precio.trim() === "") {
    return "El precio es obligatorio.";
  }
  let precioNum = Number(datos.precio);
  if (!Number.isFinite(precioNum) || precioNum < 0) {
    return "El precio debe ser un número válido mayor o igual a 0.";
  }
  return "";
}

function registrarEventos() {
  // TODO 29 — input, change y click.
  elementos.busqueda.addEventListener("input", actualizarVista);
  elementos.precioMaximo.addEventListener("input", actualizarVista);
  elementos.soloDisponibles.addEventListener("change", actualizarVista);
  elementos.orden.addEventListener("change", actualizarVista);
  elementos.catalogo.addEventListener("click", manejarClickCatalogo);
}

function manejarEnvio(evento) {
  // TODO 30 — Añadir un libro sin mutar y comunicar el resultado.
  let formulario = evento.currentTarget;
  let datosForm = leerFormulario(formulario);
  let error = validarLibro(datosForm);

  if (error) {
    elementos.mensaje.textContent = error;
    return;
  }

  elementos.mensaje.textContent = "";
  
  let nuevoLibro = normalizarLibro({
    ...datosForm,
    id: crypto.randomUUID(),
    precio: Number(datosForm.precio),
  });

  librosTrabajo = [...librosTrabajo, nuevoLibro];
  formulario.reset();
  elementos.mensaje.textContent = "¡Libro añadido con éxito!";
  actualizarVista();
}

function manejarClickCatalogo(evento) {
  // TODO 31 — Delegación de eventos, closest y filter.
  let boton = evento.target.closest("button[data-id]");
  if (!boton || !elementos.catalogo.contains(boton)) return;

  let idAEliminar = boton.dataset.id;
  librosTrabajo = librosTrabajo.filter((libro) => libro.id !== idAEliminar);
  actualizarVista();
}

function iniciar() {
  // TODO 32 — Arrancar, en orden.
  conectarDOM();
  librosTrabajo = prepararLibros(librosIniciales);
  registrarEventos();
  actualizarVista();
}