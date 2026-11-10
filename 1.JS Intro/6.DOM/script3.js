// EJERCICIO 1
// cambiar la imagen del perro por la del gato al pulsar un boton

    // PARTE 1: selectores
        // selecciono el img
    /*let imagen = document.querySelector("img"); // selecciona las etiquetas img (solo hay una) con selector css
    console.log(imagen)

        // selecciono el boton
    const boton_cambio_img = document.getElementById("botonIMG")
    console.log(boton_cambio_img)

        // PARTE 2: listener (tipo clic) del boton
        boton_cambio_img.addEventListener("click", function () {
    // PARTE 3: dentro del listener, modificar el atributo src de la etiqueta img del apartado 1
        imagen.setAttribute("src", "./imagen_gato.png"); 
    });*/


    // EJERCICIO 2
// ahora queremos que cuando esté un perro aparezca un gato y cuando aparezca un gato aparezca un perro


// PARTE 1: selectores
        // selecciono el img
    let imagen = document.querySelector("img"); // selecciona las etiquetas img (solo hay una) con selector css
    console.log(imagen)

        // selecciono el boton
    const boton_cambio_img = document.getElementById("botonIMG")
    console.log(boton_cambio_img)

        // PARTE 2: listener (tipo clic) del boton
        boton_cambio_img.addEventListener("click", function () {
    // PARTE 3: dentro del listener, modificar el atributo src de la etiqueta img del apartado 1
        let source = imagen.getAttribute("src");
        console.log(source); // devuelve un string

        if (source.includes("perro")) {
            imagen.setAttribute("src", "./imagen_gato.png")
        } else {
            imagen.setAttribute("src", "./imagen_perro.png")
        }
    });

    // Con estos ejercicios hemos repasado:
        // Vamos a tener que usar los selectores
        // obtener atributos
        // modificar atributos
        // listener de tipo click