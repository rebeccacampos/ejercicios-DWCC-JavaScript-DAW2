class Producto {
  constructor(nombre, precio = 0) {
    if (typeof nombre !== "string" || nombre.trim() === "") {
      throw new TypeError("El nombre es obligatorio");
    }
    if (!Number.isFinite(precio) || precio < 0) {
      throw new RangeError("El precio debe ser un número no negativo");
    }
    this.nombre = nombre.trim();
    this.precio = precio;
  }

  // el valor por defecto de precio es 0
  //

  etiqueta() {
    return `${this.nombre}: ${this.precio} €`;
  }
}

const mapa = new Producto("Mapa", 12); // chamamos ao señor constructor
console.log(mapa.etiqueta()); // Mapa: 12 € -> chamada ao método de instancia
console.log(mapa instanceof Producto); // true