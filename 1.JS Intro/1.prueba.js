console.log("Hola");

// operaciones aritmeticas -> para poner valores por defecto

const monedasGuardadas = 0;
const nombreInvitado = null;

console.log(monedasGuardadas || 10);
console.log(monedasGuardadas ?? 10);
console.log(monedasGuardadas ?? "invitado");

// recorrer colores y que la salida por pantalla sea
// Color 1: rojo
// Color 2 azul
const colores =  ["rojo", "azul"];
for (let i = 0; i < colores.length; i++) {
    const color = colores[i]; 
    console.log(`Color ${i+1}: ${color}`);
}

