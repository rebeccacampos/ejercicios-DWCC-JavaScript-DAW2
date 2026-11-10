// Función que simula lavar los platos
function lavarPlatos(callback) {
  console.log("Comenzando a lavar los platos...");
  setTimeout(() => {
    console.log("Platos lavados!");
    callback();
  }, 2000);
}

// Función que simula secar los platos
function secarPlatos(callback) {
  console.log("Comenzando a secar los platos...");
  setTimeout(() => {
    console.log("Platos secos!");
    callback();
  }, 1500);
}

// Función que simula guardar los platos
function guardarPlatos(callback) {
  console.log("Guardando los platos...");
  setTimeout(() => {
    console.log("Platos guardados!");
    callback();
  }, 1000);
}

// Uso con callbacks - Callback Hell
lavarPlatos(() => {
  secarPlatos(() => {
    guardarPlatos(() => {
      console.log("¡Todos los platos están listos!");
    });
  });
});