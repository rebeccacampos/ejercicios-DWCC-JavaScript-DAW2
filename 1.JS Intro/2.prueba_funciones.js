// funciones pruebas en clase

function calcularTotal(precio, unidades = 1) {
  return precio * unidades;
}

let resultadoTotal = calcularTotal(6,2);
console.log(resultadoTotal) //12

// una variable constante asociada a la implementación de una función

const descontar = function (precio, descuento) {
  return precio - descuento;
};

let resultadoDescuento = descontar(100, 50);
console.log(resultadoDescuento) //50

// funciones flecha -> guardando la definicion de una funcion mediantes una variable constante

/*
const nombreFuncion = (argumeto1, argumento2, argumentoN...) => {
    // IMPLEMENTACION
}*/

// maneira reducida cando so ten una linea de implementación

// const nombreFuncion = argumetoX => // implementacion en una linea

const duplicar = numero => numero * 2; // se usa mas porque simplifica la escritura

let resultadoDuplicado = duplicar(2);
console.log(resultadoDuplicado) //4

// porque esto da 15

function aplicar(valor, operacion) {
    return operacion(valor);
}

console.log(aplicar(5, numero => numero *3));
//15

console.log(aplicar(5, numero => numero * 2));
//10

