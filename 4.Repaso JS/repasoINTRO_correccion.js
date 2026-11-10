const productos = [
  {
    id: 1,
    nombre: "Portátil",
    categorias: ["informática"],
    precio: 450.75,
    stock: 10,
  },
  //4507,5
  {
    id: 2,
    nombre: "Air Fryer",
    categorias: ["electrodomésticos", "cocina"],
    precio: 300.25,
    stock: 0,
  },
  {
    id: 3,
    nombre: "Switch 2",
    categorias: ["videojuegos", "Nintendo"],
    precio: 500,
    stock: 20,
  },
  //10000
  {
    id: 4,
    nombre: "GTA VI",
    categorias: ["videojuegos"],
    precio: 100,
    stock: 0,
  },
  {
    id: 5,
    nombre: "Narciso",
    categorias: ["perfume"],
    precio: 100,
    stock: 3,
  },
  //300
];

const productosConIva = productos.map((p) => ({
  ...p,
  precio: p.precio * 1.21,
}));

//const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

const precioTienda = productos.reduce((acc, p) => acc + p.precio * p.stock, 0);
console.log(precioTienda);
//console.log(productosConIva);

const mostrarProductosPorCategoria = (categoria) => {
  const productosFiltrados = productos.filter(
    (p) => p.categorias.includes(categoria) && p.stock > 0,
  );
  productosFiltrados.length
    ? productosFiltrados.forEach(({ nombre, precio }) =>
        console.log(`Producto: ${nombre} - Precio: ${precio}`),
      )
    : console.log(`No hay productos de la categoría ${categoria}`);
};

mostrarProductosPorCategoria("videojuegos");

const totalConDescuento = productos
  .filter((p) => p.stock > 0)
  .map((p) => p.precio * 0.9)
  .reduce((acc, precio) => acc + precio, 0);
const pasoUno = productos.filter((p) => p.stock > 0);
console.log(`Paso Uno: ${pasoUno}`);
const pasoDos = pasoUno.map((p) => p.precio * 0.9);
console.log(`Paso Dos: ${pasoDos}`);
const pasoTres = pasoDos.reduce((acc, precio) => acc + precio, 0);
console.log(`Paso Tres: ${pasoTres}`);
console.log(totalConDescuento);
//PASO 1: fitramos los productos que tengan stock -> filter
//PASO 2: le aplicamos un 10% a los productos -> map
//PASO 3: calculamos cuanto costaría comprar 1 unidad de estos productos -> reduce


const totalConDescuentoDesestructurado = productos
  .filter(({ stock }) => stock > 0)
  .map(({ precio }) => precio * 0.9)
  .reduce((acc, precio) => acc + precio, 0);