// Función que simula lavar los platos utilizando promesas
// las promesas se usan normalmente cuando hacemos llamadas al backend, parecido a un try catch pero aún por encima con código asíncrono
// apuntes -> https://fernandoalvarezfp.github.io/DWCC/Async.html?h=settime#settimeout -> sección async/await

function lavarPlatos() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Platos lavados!");
  }, 2000);
})  
}

// Función que simula secar los platos
function secarPlatos() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Platos secos!");
  }, 1500);
}) 
}

// Función que simula guardar los platos
function guardarPlatos() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Platos guardados!");
  }, 1000);
})  
}

// aqui dentro vamos a trabajar con llamadas asincronas (llamadas a promesas)
// la parte asíncrona la encapsulo y todas las llamadas a funciones asíncronas las ponemos a esperar (await)
async function recojerLosPlatos() {
    try {
        const platosLavados = await lavarPlatos();
        console.log(platosLavados);

        const platosSecos = await secarPlatos();
        console.log(platosSecos);

        const platosGuardados = await guardarPlatos();
        console.log(platosGuardados);
        return "Todas las tareas han sido realizadas";
    } catch (error) {} // no va a pasar porque no estamos trabajando con reject. Solo estamos trabajando con resolve.
}


// programa main
recojerLosPlatos()
    .then((resultado)=> console.log(resultado))
    .catch((error) => console.log(error)); 

// ver ejemplos de los apuntes 