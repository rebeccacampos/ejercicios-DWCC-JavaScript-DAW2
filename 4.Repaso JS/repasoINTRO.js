/*Array de 5 objetos */

const productos = [
  {
    id: 1,
    nombre: "Portátil",
    categoria: "informática",
    categorias: ["informática", "ordenadores"],
    precio: 450.75,
    stock: 10,
  },
  {
    id: 2,
    nombre: "Air Fryer",
    categoria: "electrodomésticos",
    categorias: ["electrodomésticos", "cocina"],
    precio: 300,
    stock: 0,
  },
  {
    id: 3,
    nombre: "Switch 2",
    categoria: "videojuegos",
    categorias: ["videojuegos", "software"],
    precio: 200.3,
    stock: 0,
  },
  {
    id: 4,
    nombre: "GTA VI",
    categoria: "videojuegos",
    categorias: ["videojuegos", "software"],
    precio: 450.75,
    stock: 2,
  },
  {
    id: 5,
    nombre: "Perfume Narciso",
    categoria: "perfumeria",
    categorias: ["videojuegos", "software"],
    precio: 100.5,
    stock: 3,
  },
];

/*Desestructuración de las claves que tiene el primer producto */
const { id, nombre, categoria, precio, stock } = productos[0];

console.log(
  `El producto ${nombre} tiene las 
    siguientes ${categoria} 
    y un precio de ${precio}. Stock: ${stock}`,
);

// ejemplo uso operador de propagacion
const bocadilloAburrido = ["jamon", "queso"];
const bocadilloCompleto = [
  "cebolla",
  "lechuga",
  "tomate",
  ...bocadilloAburrido,
];

/* 

EJERCICIO:

Funcion aplicar descuento

Necesitamos crear una funcion aplicarDescuento(producto, porcentaje) 
que va a retornar un nuevo objeto, sin modificar el original, con el precio actualizado 
y una nueva propiedad enOferta: true

nota: usar el operador de propagacion

*/

function aplicarDescuento(producto, porcentaje) {
  const { precio } = productoConDescuento;

  // el porcentaje se recibe en formato decimal
  const descuento = precio * porcentaje;
  const precioConDesc = precio - descuento;

  let productoConDescuento = {
    ...pro,
    precio: pro.precio * (1 - porcent / 100),
    enOferta: true,
  };
}

function aplicarDesc(pro, porcent) {
  let obj = {
    ...pro,
    precio: pro.precio * (1 - porcent / 100),
    enOferta: true,
  };

  return obj;
}

let Oferta = aplicarDesc(productos[4], 25);

console.log(Oferta);

// ver funciones .md

/* Utiliza foreach para mostrar toda a informacion dos productos mediante console.log */

const mostrarProductos = function (productosLista) {
  productosLista.forEach((producto) => {
    const { id, nombre, categoria, precio, stock } = producto;
    console.log(`INFORMACION DEL PRODUCTO ${nombre}
                        ${id}
                        ${categoria}
                        ${precio}
                        ${stock}
        `);
  });
};

mostrarProductos(productos);

const mostrarInfoProdcutos = function (productos) {
  productos.forEach(({ nombre, precio, stock }) => {
    console.log(
      nombre,
      precio,
      stock,
      `El producto ${nombre} tiene el precio ${precio}. Stock: ${stock}`,
    );
  });
};

mostrarInfoProdcutos(productos);

/* Usar forOf para encontrar el nombre del 
primer producto que está sin stock (stock === 0) */
// usar la sintaxis funcion flecha

const productosSinStock = (productos) => {
  for (pro of productos) {
    if (pro.stock === 0) {
      console.log(`El primer prodcuto con Stock = 0 es ${pro.nombre}`);
      break;
    }
  }
};

productosSinStock(productos);

// usa directamente la desestructuración
const detectarPrimerProductoSinStock = (productos) => {
  for (const { nombre, stock } of productos) {
    if (stock === 0) {
      console.log(`El primer prodcuto con Stock = 0 es ${nombre}`);
      break;
    }
  }
};

const detectarTodosLosProductosSinStock = (productos) => {
  console.log(`TODOS LOS Productos sin stok:`);
  for (const { nombre, stock } of productos) {
    if (stock === 0) {
      console.log(`El primer prodcuto con Stock = 0 es ${nombre}`);
    }
  }
};

detectarPrimerProductoSinStock(productos);
detectarTodosLosProductosSinStock(productos);

// EJERCICIO
// filtra por categoria y que además tenga stock
// haz una funcion que se llame busca productos por categoria
// que recibe como parametros los productos y la categoria a buscar
// solo muestra nombre y precio de los que se puedan comprar (que cuyo stock sea mayor que 0)

// VER POR QUE NO FUNCIONA
const mostrarProductosPorCat = (categoriaBuscar) => {
  productos.forEach((product) => {
    const { nombre, categoria, precio, stock } = product;
    if (categoria === categoriaBuscar && stock > 0) {
      console.log(`Nombre: ${nombre} | Precio: ${precio}`);
    } else {
      console.log(`No existen existencias del producto ${nombre}`);
    }
  });
};

console.log("MOSTRAR PRODUCTOS POR CATEGORIA MI FUNCION:");
mostrarProductosPorCat("perfumeria");

// EN CLASE
const mostrarProductosPorCategoria = (categoria) => {
  const productosFiltrados = productos.filter(
    (p) => p.categoria === categoria && p.stock > 0,
  );
  if (productosFiltrados.length > 0) {
    for (const { nombre, precio } of productosFiltrados) {
      console.log(`Producto: ${nombre} - Precio: ${precio}`);
    }
  } else {
    console.log(`No hay productos de la categoría ${categoria}`);
  }
};

console.log("MOSTRAR PRODUCTOS POR CATEGORIA:");
mostrarProductosPorCategoria("videojuegos");

// ahora usar
// EVALUACION PREDICADO LOGICO ? QUE PASA SI SE CUMPLE : QUE PASA SI NO SE CUMPLE;
// PREDICADO ? PREDICADO = TRUE : PREDICADO = FALSE;
// con foreach

const mostrarProPorCatConPredicadoTernario = (categoria) => {
  // filtrado de los productos
  const productosFiltrados = productos.filter(
    (p) => p.categoria === categoria && p.stock > 0,
  );

  productosFiltrados.length
    ? productosFiltrados.forEach(({ nombre, precio }) =>
        console.log(`Producto: ${nombre} - Precio: ${precio}`),
      )
    : console.log(`No hay productos de la categoría ${categoria}`);
};

console.log("FILTRADO CON OPERADOR TERNARIO");
mostrarProPorCatConPredicadoTernario("electrodomésticos");

// usando includes()
const mostrarProPorCatUsandoIncludes = (categoria) => {
  // filtrado de los productos
  const productosFiltrados = productos.filter(
    (p) => p.categorias.includes(categoria) && p.stock > 0, //tiene que haber en todos los productos sino el bucle devuelve undefined y nos da error
  );

  productosFiltrados.length
    ? productosFiltrados.forEach(({ nombre, precio }) =>
        console.log(`Producto: ${nombre} - Precio: ${precio}`),
      )
    : console.log(`No hay productos de la categoría ${categoria}`);
};

console.log("USANDO INCLUDES");
mostrarProPorCatUsandoIncludes("perfumeria");

// repaso map()
// -> Itera sobre una lista (como el foreach o tb el filter) y crea un array con lo que le metas
// sin modificar el array de objetos original!!!

const IdsDeProducto = productos.map((producto) => producto.id);
console.log(IdsDeProducto);

// utilizando la estructura anterior consigue: const productosConIva.
// Añade un campo que sea precioConIva.
const productosConIva = productos.map(
  (producto) =>
    (producto = {
      ...producto,
      precioConIva: pro.precio * 1.21,
    }),
);

console.log(productosConIva);

// en clase
const productosConIvaVersionClase = productos.map((p) => ({
  ...p,
  precio: p.precio * 1.21,
}));

console.log(productosConIvaVersionClase);

// repaso reduce()
// define una variable de acumulacion y pasarla en todas las acumulaciones del bucle interno que tiene

//EJERCICIO
// cuanto se gastaria una persona que compra una unidad de cada uno de los productos que tengo definidos
const totalUnProductoDeCada = productos.reduce(
  (variableAcumulacion, producto) => variableAcumulacion + producto.precio,
  0,
);
console.log(`Comprar un prodcuto de cada cuesta: ${totalUnProductoDeCada}`);

// cuanto se gastaria una persona que SE COMPRA TODA LA TIENDA (STOCK * PRECIO)
const totalInventario = productos.reduce(
  (variableAcumulacion, producto) =>
    variableAcumulacion + producto.precio * producto.stock,
  0,
);
console.log(`Toda la tienda cuesta ${totalInventario}`);

// en clase
const precioTienda = productos.reduce((acc, p) => acc + p.precio * p.stock);

// HACER UNA FUNCIÓN QUE USANDO
// FILTER()
// MAP()
// REDUCE()

// PASO 1: Filtramos los productos que tengan stock
// PASO 2: Le aplicamos un 10% a todos los productos filtrados
// PASO 3: Calculamos cuanto costaría comprar 1 unidad de estos productos después de hacer el paso 1 y el paso 2
//const totalConDescuento = productos.filter().map().reduce()

const totalConDescuento = productos
  .filter((p) => p.stock > 0) // p es cada objeto y lo demás es la condicion que deben de cumplir
  .map((producto) => producto.precio * 0.9)
  .reduce((acc, p) => acc + p, 0);

console.log(`NaN: ${totalConDescuento}`);

// en clase
//const totalConDescuento = productos.filter().map().reduce(); --> funciones que se usan con objetos y con arrays y los tres iteran de forma automatica sobre la entrada
const pasoUno = productos.filter((p) => p.stock > 0);
console.log(`PASO 1: ${pasoUno}`);
console.log(pasoUno);

const pasoDos = pasoUno.map((producto) => producto.precio * 0.9);
console.log(`PASO 2: ${pasoDos}`);
console.log(pasoDos);

const pasoTres = pasoDos.reduce((acc, precio) => acc + precio, 0); // el ,0 -> valor que tiene inicialmente la variable de acumulación
console.log(
  `PASO 3: ${pasoTres} -> sumatorio de 1 unidad de cada producto de los que hay stock con un 10% de descuento`,
);
//PASO 1: fitramos los productos que tengan stock -> filter
//PASO 2: le aplicamos un 10% a los productos -> map
//PASO 3: calculamos cuanto costaría comprar 1 unidad de estos productos -> reduce

// usando el operador de desestructuración

const totalConDescuentoDesestructurado = productos
  .filter(({ stock }) => stock > 0)
  .map(({ precio }) => precio * 0.9)
  .reduce((acc, precio) => acc + precio, 0);