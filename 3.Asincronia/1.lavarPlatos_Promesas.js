// Función que simula lavar los platos

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


// consumidores del resolve (.then)

lavarPlatos().then((res) => {
    console.log(res);
    return secarPlatos() // si retorna una promesa
}).then((res) => {
    console.log(res);
    return guardarPlatos() 
}).then((res) => {
    console.log(res);
    console.log("Todas las tareas realizadas!");
});

// Una promesa nos lanza dos posibles soluciones el resolve lo capturamos con el .then y el reject lo capturamos con el .catch